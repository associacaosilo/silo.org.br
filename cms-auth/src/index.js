// Login do Decap CMS via GitHub OAuth.
//
// Fluxo:
// 1. O CMS abre um popup em /auth.
// 2. /auth redireciona para o GitHub, com um `state` aleatório guardado em cookie.
// 3. O GitHub volta para /callback com um `code`.
// 4. /callback troca o `code` por um token e entrega o token ao CMS
//    via postMessage, só para origens em ALLOWED_ORIGINS.
//
// Variáveis: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET (secrets) e
// ALLOWED_ORIGINS (lista separada por vírgula; aceita "https://*.dominio").

const STATE_COOKIE = "cms_auth_state";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/auth") return startAuth(url, env);
    if (url.pathname === "/callback") return finishAuth(request, url, env);
    return new Response("Not found", { status: 404 });
  },
};

function startAuth(url, env) {
  const scope = url.searchParams.get("scope") === "repo" ? "repo" : "public_repo";
  const state = crypto.randomUUID();

  const github = new URL("https://github.com/login/oauth/authorize");
  github.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  github.searchParams.set("redirect_uri", `${url.origin}/callback`);
  github.searchParams.set("scope", scope);
  github.searchParams.set("state", state);

  return new Response(null, {
    status: 302,
    headers: {
      Location: github.toString(),
      "Set-Cookie": `${STATE_COOKIE}=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    },
  });
}

async function finishAuth(request, url, env) {
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code || !state || state !== readCookie(request, STATE_COOKIE)) {
    return reply(env, "error", { message: "Login inválido ou expirado. Tente de novo." });
  }

  const res = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/callback`,
    }),
  });
  const data = await res.json();

  if (!data.access_token) {
    return reply(env, "error", { message: data.error_description || "O GitHub recusou o login." });
  }
  return reply(env, "success", { token: data.access_token, provider: "github" });
}

// Página do popup: segue o protocolo de handshake do Decap CMS.
function reply(env, status, content) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`;
  const allowed = (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  const html = `<!doctype html><meta charset="utf-8"><body><script>
(() => {
  const allowed = ${JSON.stringify(allowed)};
  const message = ${JSON.stringify(message)};
  const isAllowed = (origin) => allowed.some((pattern) => {
    if (!pattern.includes("*")) return origin === pattern;
    const [scheme, host] = pattern.split("://*");
    return origin.startsWith(scheme + "://") && origin.endsWith(host);
  });
  const onMessage = (event) => {
    if (!isAllowed(event.origin)) return;
    window.removeEventListener("message", onMessage);
    window.opener.postMessage(message, event.origin);
  };
  window.addEventListener("message", onMessage);
  window.opener.postMessage("authorizing:github", "*");
})();
</script></body>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Set-Cookie": `${STATE_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`,
    },
  });
}

function readCookie(request, name) {
  const cookies = request.headers.get("Cookie") || "";
  const match = cookies.split(";").map((c) => c.trim()).find((c) => c.startsWith(`${name}=`));
  return match ? match.slice(name.length + 1) : null;
}
