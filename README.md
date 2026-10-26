# Silo — silo.org.br

Site da associação Silo — Arte e Latitude Rural: <https://silo.org.br>.

O site usa [Jekyll](https://jekyllrb.com). O conteúdo fica em arquivos Markdown.
O Cloudflare Pages gera e publica o site a cada merge na branch `master`.

## Rodar o site localmente

| Ferramenta | Versão |
|---|---|
| Ruby | 3.4.4 (a versão que já vem instalada no build do Cloudflare Pages) |
| Jekyll | 3.10.0 (pelo gem `github-pages`) |

O arquivo `.ruby-version` define a versão do Ruby. Outra versão obriga o Cloudflare a compilar o Ruby a cada build, o que soma cerca de 3 minutos.

> **Atenção:** o Ruby que vem com o macOS (2.6) é antigo demais. Instale o Ruby 3.4.4 com o `rbenv`.

### macOS

1. Instale as ferramentas de linha de comando da Apple:

   ```bash
   xcode-select --install
   ```

2. Instale o [Homebrew](https://brew.sh), se ainda não tiver.

3. Instale o `rbenv` e o `ruby-build`:

   ```bash
   brew install rbenv ruby-build
   ```

4. Ative o `rbenv` no terminal. Esse passo é obrigatório:

   ```bash
   echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
   source ~/.zshrc
   ```

5. Clone o repositório:

   ```bash
   git clone https://github.com/associacaosilo/silo.org.br.git site_silo
   cd site_silo
   ```

6. Instale o Ruby 3.4.4:

   ```bash
   rbenv install 3.4.4
   ```

   O `rbenv` usa essa versão no projeto, porque o arquivo `.ruby-version` pede a 3.4.4.

7. Confirme a versão:

   ```bash
   ruby -v
   ```

   A resposta deve começar com `ruby 3.4.4`.

8. Instale o Bundler e as dependências do projeto:

   ```bash
   gem install bundler
   bundle install
   ```

9. Inicie o site:

   ```bash
   bundle exec jekyll serve --livereload
   ```

10. Abra <http://localhost:4666> no navegador.

A primeira geração do site demora mais. O site tem mais de 100 posts e 300 imagens.
Use `Ctrl+C` para parar o servidor.

### Linux (Ubuntu ou Debian)

1. Instale as dependências para compilar o Ruby:

   ```bash
   sudo apt update
   sudo apt install -y git curl build-essential libssl-dev libreadline-dev zlib1g-dev libyaml-dev libffi-dev
   ```

2. Instale o `rbenv` e o `ruby-build`:

   ```bash
   git clone https://github.com/rbenv/rbenv.git ~/.rbenv
   git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
   echo 'eval "$(~/.rbenv/bin/rbenv init - bash)"' >> ~/.bashrc
   source ~/.bashrc
   ```

3. Siga os passos 5 a 10 da seção do macOS.

### Windows

Use o [WSL 2](https://learn.microsoft.com/windows/wsl/install) com Ubuntu. Depois siga a seção do Linux dentro do WSL.

## Uso no dia a dia

| Tarefa | Comando |
|---|---|
| Iniciar o site com recarga automática | `bundle exec jekyll serve --livereload` |
| Gerar o site uma vez (saída em `_site/`) | `bundle exec jekyll build` |
| Usar outra porta | `bundle exec jekyll serve --port 4000` |

- O Jekyll regenera o site quando você salva um arquivo.
- Reinicie o servidor depois de mudar o `_config.yml`.
- A pasta `_site/` é gerada. O Git ignora essa pasta.

## Problemas comuns

**`ruby -v` mostra 2.6.10**
O `rbenv` não está ativo no terminal. Refaça o passo 4. Abra um terminal novo e rode `ruby -v` de novo.

**Erro `ffi-... requires ruby version >= 3.0`**
O `bundle install` rodou com o Ruby antigo. A causa é a mesma do item anterior.

**Avisos `GitHub Metadata: No GitHub API authentication` e `install faraday-retry gem`**
Os dois avisos são inofensivos. O site não usa os dados da API do GitHub. Ignore os avisos.

**`Address already in use` na porta 4666**
Outro processo usa a porta. Encontre o processo com `lsof -i :4666` ou use `--port` com outro número.

**A página `/admin/` pede login localmente**
Rode `npx decap-server` em outro terminal. Veja a seção [Painel de edição](#painel-de-edição-decap-cms).

## Estrutura do projeto

| Caminho | Conteúdo |
|---|---|
| `_posts/` | Notícias, nomeadas `AAAA-MM-DD-slug.md` |
| `_pages/` | Páginas do site, incluindo `projects/` e `people/` |
| `_library/` | Publicações da biblioteca |
| `_layouts/` | Modelos de página |
| `_includes/` | Trechos reutilizáveis: menu, rodapé, cabeçalho |
| `_data/` | Dados em YAML |
| `_sass/`, `css/` | Estilos |
| `js/` | Scripts |
| `media/` | Imagens e PDFs |
| `admin/` | Painel de edição Decap CMS |
| `cms-auth/` | Cloudflare Worker do login do painel |

Cada conteúdo tem versão em português (`lang: pt`) e em inglês (`lang: en`).
Os arquivos de uma mesma página usam o mesmo valor em `ref`.

## Publicação

O site usa só GitHub e Cloudflare, no plano gratuito:

| Serviço | Função |
|---|---|
| GitHub | Código, pull requests e revisão |
| Cloudflare Pages | Build, produção (`master`) e preview de cada branch |
| Cloudflare Worker (`cms-auth/`) | Login do painel de edição via GitHub |
| Cloudflare DNS | Domínio silo.org.br |

1. Crie uma branch a partir de `master`.
2. Abra um pull request. O Cloudflare Pages comenta no PR o link do preview.
3. Faça o merge. O Cloudflare Pages publica o site em poucos minutos.

Configuração do projeto no Cloudflare Pages:

| Campo | Valor |
|---|---|
| Comando de build | `bundle exec jekyll build` |
| Pasta de saída | `_site` |
| Branch de produção | `master` |

O projeto dispensa variáveis de ambiente. O `Gemfile` força UTF-8, porque a máquina de build do Cloudflare usa ASCII por padrão.

> **Atenção:** mantenha cada arquivo abaixo de 25 MiB. O Cloudflare Pages recusa arquivos maiores. Publique vídeos e PDFs grandes fora do repositório.

## Painel de edição (Decap CMS)

Cada conteúdo novo vira um pull request (PR) para `master`. O site só muda depois do merge desse PR.

### Como publicar um conteúdo novo

1. Acesse <https://silo.org.br/admin/>.
2. Clique em **Entrar com o GitHub** e autorize o app na janela do GitHub. O GitHub só pede a autorização no primeiro acesso.
   - Sem acesso de escrita no repositório: clique em **Fork the repo**. O painel cria uma cópia do repositório na sua conta.
3. Na coleção desejada (por exemplo, **Posts**), clique no botão **＋**.
4. Preencha os campos e clique em **Salvar**. O painel abre um PR no GitHub.
5. Mude o status para **Pronto** (sem acesso de escrita: **Em revisão**).
6. Confira o preview:
   1. Abra o PR em <https://github.com/associacaosilo/silo.org.br/pulls>.
   2. Espere o comentário do Cloudflare Pages, em cerca de 2 minutos.
   3. Abra o link de preview do comentário e acrescente o slug: `https://<link-do-preview>/<slug>/`.
7. Peça revisão à equipe.
8. Publique de uma das formas:
   - No painel, clique em **Publicar**.
   - No GitHub, faça o merge do PR.
9. Confira o conteúdo em `https://silo.org.br/<slug>/`, em poucos minutos.

O endereço da biblioteca é `https://silo.org.br/biblioteca/<slug>/`.

> **Atenção:** quem tem acesso de escrita pode clicar em **Publicar** sem revisão. Combine com a equipe quem publica.

Para mudar um conteúdo existente, abra o conteúdo na coleção, edite e siga a partir do passo 4.

### Login

O GitHub exige um servidor para trocar o código de login por um token. O Worker em `cms-auth/` faz essa troca. Ele guarda dois segredos, os dados de um OAuth App da organização no GitHub:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

A variável `ALLOWED_ORIGINS` em `cms-auth/wrangler.toml` lista os endereços exatos que podem receber o token. O login funciona só em silo.org.br e no endereço de produção do Pages, nunca nos previews de branch.

> **Atenção:** nunca adicione curingas ou previews de branch a essa lista. O token dá escrita em todos os repositórios públicos de quem faz login.

Para publicar o Worker:

```bash
cd cms-auth
npx wrangler deploy
npx wrangler secret put GITHUB_CLIENT_ID
npx wrangler secret put GITHUB_CLIENT_SECRET
```

### Usar o painel localmente

Há duas formas de usar o painel em <http://localhost:4666/admin/>:

**Sem login (edita os arquivos do seu computador):**

1. Inicie o site com `bundle exec jekyll serve`.
2. Em outro terminal, rode `npx decap-server`.

**Com login via GitHub (testa o Worker):**

1. Crie um OAuth App de teste no GitHub com callback `http://localhost:8787/callback`.
2. Copie `cms-auth/.dev.vars.example` para `cms-auth/.dev.vars` e preencha os dados.
3. Em `cms-auth/`, rode `npx wrangler dev`.
4. Inicie o site com `bundle exec jekyll serve`.

> **Atenção:** pare o `decap-server` antes deste teste. Com ele rodando, o painel ignora o login.
