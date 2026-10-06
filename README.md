# Silo — silo.org.br

Site da associação Silo — Arte e Latitude Rural: <https://silo.org.br>.

O site usa [Jekyll](https://jekyllrb.com). O conteúdo fica em arquivos Markdown.
O GitHub Pages gera e publica o site a cada merge na branch `master`.

## Rodar o site localmente

O site usa as mesmas versões do GitHub Pages:

| Ferramenta | Versão |
|---|---|
| Ruby | 3.3.4 |
| Jekyll | 3.10.0 (pelo gem `github-pages`) |

Confira as versões atuais em <https://pages.github.com/versions/>.

> **Atenção:** o Ruby que vem com o macOS (2.6) é antigo demais. Instale o Ruby 3.3.4 com o `rbenv`.

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

6. Instale o Ruby 3.3.4 e use essa versão no projeto:

   ```bash
   rbenv install 3.3.4
   rbenv local 3.3.4
   ```

   O comando `rbenv local` cria o arquivo `.ruby-version`. Não faça commit dele sem combinar com a equipe.

7. Confirme a versão:

   ```bash
   ruby -v
   ```

   A resposta deve começar com `ruby 3.3.4`.

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

**A página `/admin/` não funciona localmente**
O painel de edição (Decap CMS) depende do Netlify Identity e não roda em `localhost` com a configuração atual. Edite os arquivos Markdown direto no Git.

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

Cada conteúdo tem versão em português (`lang: pt`) e em inglês (`lang: en`).
Os arquivos de uma mesma página usam o mesmo valor em `ref`.

## Publicação

1. Faça as mudanças na branch `stage` ou em uma branch própria.
2. Abra um pull request para `master`.
3. Faça o merge. O GitHub Pages gera e publica o site em poucos minutos.
4. O Cloudflare guarda páginas em cache por até 10 minutos. A mudança pode demorar a aparecer.
