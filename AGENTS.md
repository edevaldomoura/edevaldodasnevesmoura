# Regras de Arquitetura e Desenvolvimento — Edevaldo das Neves Moura

Este projeto é o currículo oficial e portfólio profissional de **Edevaldo das Neves Moura** (`https://edevaldodasnevesmoura.com.br`), desenvolvido em **Angular** com **SSG (Prerendering)** e hospedado no **Cloudflare Pages**.

## 1. Identidade Visual (Tema Escuro / Tech)
- **Paleta de Cores:**
  - Fundo principal: `#0b0f19`
  - Fundo de cartões (`.card`): `#111827` (hover `#1a2333`)
  - Bordas: `#1f2937`
  - Texto principal: `#f3f4f6`
  - Texto secundário: `#9ca3af`
  - Cor de destaque (Accent): `#38bdf8`
- **Ícones e Ativos:** Utilize exclusivamente **SVGs inline leves** e o favicon oficial em `public/favicon.svg`. Nunca instale bibliotecas pesadas de ícones ou fontes externas que prejudiquem a nota **100/100 no Google PageSpeed Insights**.
- **Responsividade:** Todo componente novo deve funcionar perfeitamente em telas mobile (`<= 768px`) e desktop.

## 2. Regras Obrigatórias de SEO Extremo & Performance
- **Renderização Estática (SSG):** Todas as rotas devem permanecer pré-renderizadas (`RenderMode.Prerender` em `src/app/app.routes.server.ts`). Nunca introduza dependências exclusivas do objeto `window` ou `document` sem proteger com `isPlatformBrowser`.
- **HTML5 Semântico:** Cada página deve conter exatamente **uma** tag `<h1>` principal, subtítulos em `<h2>` e seções organizadas com `<section>`, `<article>`, `<header>`, `<nav>` e `<footer>`.
- **Metadados Dinâmicos:** Toda nova rota criada em `src/app/app.routes.ts` deve ter um `title` exclusivo e atualizar a tag `<meta name="description">` via serviço `Meta` no `ngOnInit()`.
- **Arquivos de Descoberta:** Sempre que uma nova página for adicionada ou removida, atualize obrigatoriamente:
  - `public/sitemap.xml`
  - `public/llms.txt`
  - `public/.well-known/ai-catalog.json`

## 3. Fluxo de Trabalho e Validação (SDD)
- Antes de concluir qualquer alteração estrutural, valide se o build estático (`npm run build`) executa sem erros e se os arquivos continuam sendo gerados corretamente em `dist/edevaldodasnevesmoura/browser`.
- Mantenha a consistência de dados profissionais: **20 anos de atuação em TI**, Analista de Sistemas, AI-First Developer, Full Stack, DevOps, Cloud, DBA, Data Analyst, Pentester e DPO.

## 4. Logos de Tecnologia na Navbar
- A linha de logos (substitui o antigo texto do logotipo) é o componente `app-logos-tecnologia` em `src/app/components/logos-tecnologia/`.
- Para adicionar uma plataforma, inclua **um item** em `logos-tecnologia.data.ts` (`id`, `nome`, `rotulo`, `url` https, `viewBox`, `caminho` do SVG e, opcionalmente, `corHover`). Não crie componente novo nem importe biblioteca de ícones.
- Use sempre ícones de **um único `<path>`** preenchidos com `currentColor`, e `rotulo` no formato "<Plataforma> de Edevaldo das Neves Moura" (texto acessível, lido também por rastreadores).
- Logos de **perfis** (GitHub, LinkedIn etc.) usam apenas URLs reais do proprietário, e esses mesmos perfis devem constar em `sameAs` do JSON-LD do `index.html`.
- Logos de **tecnologias** (C#, Angular, PostgreSQL etc.) apontam para o site oficial da tecnologia, usam o `rotulo` "<Tecnologia>, tecnologia usada por Edevaldo das Neves Moura" e o `caminho` SEMPRE extraído do pacote Simple Icons (CC0), nunca desenhado à mão.

