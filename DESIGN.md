---
name: Fisio Acessível
description: Impresso funcional brasileiro — a peça de contato que a família guarda na porta da geladeira.
colors:
  background: "oklch(0.977 0.005 228.8)"
  foreground: "oklch(0.274 0.047 240.7)"
  card: "oklch(1 0 0)"
  primary: "oklch(0.494 0.119 242.9)"
  primary-foreground: "oklch(1 0 0)"
  deep: "oklch(0.392 0.087 241.9)"
  secondary: "oklch(0.943 0.013 228.9)"
  muted-foreground: "oklch(0.444 0.04 239.7)"
  border: "oklch(0.879 0.02 230.7)"
  highlight: "oklch(0.844 0.151 87.9)"
  highlight-foreground: "oklch(0.274 0.047 240.7)"
  leaf: "oklch(0.486 0.123 132.5)"
  destructive: "oklch(0.501 0.178 28.7)"
  logo-azul: "oklch(0.66 0.146 237.7)"
  logo-verde: "oklch(0.757 0.175 129.7)"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  numerais:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 5.4vw, 3.9rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tabular-nums"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  action:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.025em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  magnet: "10px"
  xl: "12px"
spacing:
  gutter: "20px"
  piece: "24px"
  piece-lg: "32px"
  section: "56px"
  section-lg: "72px"
  container: "1152px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.action}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.primary-foreground}"
  button-outline:
    backgroundColor: "{colors.card}"
    textColor: "{colors.deep}"
    typography: "{typography.action}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.deep}"
  magnet-contato:
    backgroundColor: "{colors.highlight}"
    textColor: "{colors.highlight-foreground}"
    rounded: "{rounded.magnet}"
    padding: "24px"
  plate:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-pendente:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "16px"
  chip-filtro:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    typography: "{typography.action}"
    rounded: "{rounded.lg}"
    padding: "10px 16px"
    height: "48px"
  chip-filtro-selecionado:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.primary-foreground}"
  nav-link:
    textColor: "{colors.foreground}"
    typography: "{typography.action}"
    padding: "4px 0"
  nav-link-active:
    textColor: "{colors.deep}"
---

# Design System: Fisio Acessível

## Overview

**Creative North Star: "A porta da geladeira"**

O site é uma peça de contato impressa, não uma vitrine. O mundo fica entre o ímã de geladeira de
disk-gás e a placa de sinalização hospitalar: cor chapada sem nenhum degradê, peças recortadas com
cantos definidos, pousadas sobre um campo azul-claro com uma sombra curta e deslocada — objeto
apoiado, nunca cartão flutuando. Quem chega está preocupado, muitas vezes no celular, depois de uma
queda em casa. Por isso o número de telefone é o maior elemento da página: ele pesa mais que o nome
do negócio.

A densidade é baixa e o texto é grande. O corpo do texto tem 18px em todo o site (nunca 16px em
parágrafo), as áreas de toque têm no mínimo 48px de altura e cada par de cor foi medido: branco
sobre `--primary` dá 6,1:1, a tinta `--foreground` sobre o amarelo `--highlight` dá 9,1:1 e a mesma
tinta sobre o fundo `--background` dá 13,9:1. A paleta inteira foi derivada do logo existente (as
duas mãos protegendo um coração com uma porta) e escurecida até passar no contraste — por isso as
cores claras do próprio logo são proibidas em texto e botão.

O que este mundo recusa, e a recusa é explícita: o arranjo padrão da categoria — degradê turquesa,
grade de seis cartões iguais, foto sorridente de banco de imagens, cartão de visita com caduceu.
Onde falta informação real (CREFITO, bairros, horários, preço, foto do profissional, depoimentos),
o site mostra um espaço de borda tracejada dizendo o que falta, em vez de preencher com invenção.

**Key Characteristics:**

- Cor chapada, sem degradê, sem sobreposição translúcida decorativa.
- Peças (`plate` e `magnet`) pousadas sobre o campo com sombra curta e deslocada.
- Numerais de telefone enormes e tabulares — o maior elemento da tela.
- Archivo em dois pesos, auto-hospedada; nenhuma outra família.
- Pictogramas autorais de traço único; nenhuma biblioteca de ícones.
- Um único momento de movimento, transform-only, uma vez só.
- Pendências aparecem como cartão tracejado, nunca como dado inventado.

## Colors

Paleta derivada do logo e escurecida até o contraste, sobre um campo azul-claro de papel.

### Primary

- **Azul de ação** (`{colors.primary}`): o azul dos botões de conversa e das faixas de informação
  em cor cheia. É a cor que significa "clique aqui e fale". Sempre com texto branco
  (`{colors.primary-foreground}`), medido em 6,1:1.
- **Azul de leitura** (`{colors.deep}`): o azul mais escuro. É a cor de texto azul sobre fundo
  claro (links, rótulos de campo, estado ativo do menu, texto dos botões de contorno) e o estado
  `hover` dos botões de ação. Nunca use o Azul de ação como cor de texto pequeno sobre fundo claro:
  o Azul de leitura existe exatamente para isso.

### Secondary

- **Amarelo de geladeira** (`{colors.highlight}`): o ímã. Só aparece na peça de contato — o bloco
  do WhatsApp e o cartão de impressão — e na seleção de texto. Sempre com a tinta escura
  (`{colors.highlight-foreground}`) por cima, medido em 9,1:1. É raro por definição: no máximo uma
  peça amarela por tela.

### Tertiary

- **Verde folha** (`{colors.leaf}`): marcador de item confirmado nas listas de serviços. Uso
  pontual, em ícone; não é cor de fundo nem de botão.
- **Vermelho de urgência** (`{colors.destructive}`): exclusivo do aviso "procure atendimento de
  urgência" nas Orientações, em borda e texto sobre fundo branco. Não é cor de erro de formulário
  decorativa — se aparecer, é porque há risco à saúde.

### Neutral

- **Campo azul-claro** (`{colors.background}`): o fundo de todo o site, a porta onde as peças são
  pousadas.
- **Papel branco** (`{colors.card}`): o fundo das peças `plate` e dos botões de contorno.
- **Faixa de seção** (`{colors.secondary}`): o cinza-azulado que separa uma seção da outra e serve
  de fundo aos estados `hover` claros e ao rodapé.
- **Tinta** (`{colors.foreground}`): a cor de todo o texto principal. 13,9:1 sobre o campo.
- **Tinta esmaecida** (`{colors.muted-foreground}`): texto secundário, legenda de imagem, links do
  rodapé. Ainda acima de 4,5:1.
- **Traço** (`{colors.border}`): borda das peças, divisórias de lista e a borda tracejada dos
  espaços pendentes.

### Named Rules

**A Regra do Logo Intocado.** `--logo-azul` e `--logo-verde` só existem dentro da imagem do logo.
São proibidos em texto, em botão, em fundo com texto por cima e em ícone: reprovam no contraste.
Quando precisar do azul do logo, use o Azul de ação; quando precisar do verde, use o Verde folha.

**A Regra do Amarelo Único.** O amarelo é o ímã. Uma peça amarela por tela, sempre a peça de
contato, sempre com a tinta escura em cima. Amarelo em texto, em ícone solto ou em faixa decorativa
quebra o mundo.

**A Regra do Par Medido.** Nenhum par texto/fundo entra no site sem contraste conferido (mínimo
4,5:1, e o corpo do texto é grande justamente para não depender do limite). Cor nova se declara em
`:root` e se registra em `@theme inline` como `--color-<nome>: var(--<nome>)`.

## Typography

**Família única:** Archivo, auto-hospedada em `public/fonts/archivo-latin.woff2` e
`public/fonts/archivo-latin-ext.woff2`, `font-display: swap`, faixa variável de peso 400 a 700.
Fallback: `ui-sans-serif, system-ui, sans-serif`.

**Character:** grotesca estreita e de origem industrial, o tipo de letra de placa e de formulário
impresso. Os dois pesos usados — 400 para ler e 700 para pesar — fazem toda a hierarquia; não há
itálico, não há uma segunda família e não há fonte de display do sistema.

### Hierarchy

- **Numerais** (700, `clamp(2.35rem, 5.4vw, 3.9rem)`, `line-height: 1`, `tabular-nums`,
  `letter-spacing: -0.02em`): o telefone. O maior texto de qualquer página, com o símbolo do
  WhatsApp colado à esquerda. A largura fixa dos algarismos impede que o número dance.
- **Display** (700, `2rem` no celular e `3rem` a partir de 640px, `line-height: 1.1`): o `h1` de
  cada página. Um por página.
- **Headline** (700, `1.875rem` → `2.25rem`, `text-wrap: balance`): título de seção.
- **Title** (700, `1.25rem` a `1.875rem`): título de peça (`plate`, `magnet`) e de item de lista.
- **Body** (400, `1.125rem` / 18px, `line-height: 1.625`): todo parágrafo. Largura controlada pelo
  contêiner (`max-w-2xl` / `max-w-3xl` para blocos de leitura).
- **Action** (600, `1rem` / 16px): texto de botão, link de menu e chip de filtro.
- **Label** (700, `0.875rem` / 14px, `letter-spacing: 0.025em`, caixa alta): rótulo de campo de
  dado — o "WHATSAPP" acima do número e os termos `dt` dos cartões de pendência. É o rótulo de um
  dado, como num cartão de visita impresso.
- **Legenda** (400, `0.875rem`, tinta esmaecida): legenda de imagem e linha de rodapé legal.

### Named Rules

**A Regra dos 18px.** Parágrafo nunca abaixo de `1.125rem`. Os 14px existem só para rótulo de
campo em caixa alta, legenda de imagem e linha legal do rodapé — nunca para texto corrido.

**A Regra do Rótulo de Dado.** O texto pequeno em caixa alta rotula um dado que vem logo abaixo
(WhatsApp, Formação, CREFITO). Ele não é chapéu editorial: nunca ponha uma linha em caixa alta
acima de um título como enfeite de categoria.

**A Regra dos Dois Pesos.** 400 e 700. Semibold (600) só em botão e link de ação. Nada de peso
300, nada de itálico, nada de versalete.

## Layout

Coluna única centralizada de no máximo `1152px` (`max-w-6xl`), com margem lateral fixa de `20px`
(`px-5`) em qualquer largura — inclusive no celular, onde a peça encosta quase na borda de
propósito, como um ímã grande. O ritmo vertical entre seções é `56px` no celular e `72px` a partir
de 640px; dentro das peças, o passo é `24px` (celular) e `32px` (desktop), e os espaçamentos
internos andam em `12px` / `16px` / `20px` / `32px`.

As quebras de layout são as do Tailwind e só três importam: `sm` (640px), onde a tipografia e os
paddings crescem e os botões passam a ficar lado a lado; `md` (768px), onde o menu hambúrguer é
substituído pela navegação horizontal; e `lg` (1024px), onde as páginas passam a duas colunas
assimétricas (`1.3fr 1fr` na primeira tela, `1fr 1.4fr` na apresentação do profissional). Não há
grade de colunas iguais: as proporções são sempre desiguais, porque a peça de contato pesa mais que
o que está ao lado dela.

O cabeçalho é fixo no topo (`sticky`) com uma borda inferior de 1px. No celular, o botão do
WhatsApp é uma barra fixa na base da tela, com `env(safe-area-inset-bottom)`, e o `main` carrega
`pb-24` para que a barra nunca cubra a última linha de texto; a partir de 640px essa barra vira um
botão solto no canto inferior direito. O site precisa continuar legível com zoom de 200%.

**A Regra da Placa Inteira.** Um conjunto de assuntos relacionados ocupa uma faixa única em cor
cheia, dividida por traços internos (`border-*/25`), como uma placa de sinalização — não uma grade
de cartões iguais com sombra cada um.

## Elevation & Depth

O sistema é chapado com uma única exceção deliberada: a sombra curta e deslocada que faz uma peça
parecer pousada sobre a porta, e não flutuando no ar. Não há escala de elevação, não há sombra em
`hover`, não há sombra em `focus` (o foco é um anel sólido) e não há sombra colorida ou difusa. A
profundidade restante vem do contraste entre o campo azul-claro e o papel branco, e das faixas
`{colors.secondary}` que alternam de seção em seção.

### Shadow Vocabulary

- **Peça de papel** (`--shadow-plate: 0 4px 6px -3px oklch(0.274 0.047 240.7 / 0.32)`): bilhete,
  cartão e painel brancos. A sombra é tingida de tinta, não de preto.
- **Peça de ímã** (`--shadow-magnet: 0 6px 8px -4px oklch(0.274 0.047 240.7 / 0.42)`): a peça de
  contato em cor chapada e o botão flutuante do WhatsApp. Um degrau mais pesada, porque o ímã é o
  objeto mais grosso da porta.

### Named Rules

**A Regra do Objeto Pousado.** A sombra é curta, deslocada para baixo e com dispersão negativa.
Nada de `0 20px 60px`, nada de sombra que cresça no `hover`, nada de sombra dura sem borrão
deslocada na diagonal.

## Shapes

Cantos definidos e pequenos: o raio base é `0.5rem` (`--radius`, 8px) e vale para peças, botões,
imagens, chips e campos. O ímã (`magnet`) usa `calc(var(--radius) + 2px)` = 10px, dois pixels a
mais que o papel, o que é o bastante para ele ler como um recorte diferente. Nada é circular além
dos pontos internos dos pictogramas; não há pílula, não há blob, não há máscara orgânica.

As bordas são o principal traço estrutural: 1px `{colors.border}` nas peças e divisórias, 2px nos
botões de contorno, nos chips e no botão do menu, e 2px tracejada nos espaços pendentes. O ícone
autoral é desenhado em grade de 24, traço de 2px, pontas e junções arredondadas, sempre
`currentColor` e sempre `fill: none` — exceto o símbolo do WhatsApp, que é sólido porque é uma
marca reconhecida e precisa manter a silhueta.

**A Regra do Tracejado Honesto.** Borda tracejada de 2px significa uma coisa só: este dado ainda
não foi confirmado pelo profissional. Nunca use tracejado como enfeite.

**A linha de recorte** (`.recorte`, em `src/styles.css`) é a única exceção decorativa: um tracejado
de 1px em `currentColor` a 30% de opacidade, recuado 10px para dentro da peça, com raio de 4px.
Ela marca a peça de contato como material impresso, do jeito que um ímã de gráfica traz o
"recorte aqui". Vale apenas nas peças de contato amarelas (`magnet` + `recorte`); a faixa de
sinalização e as peças de papel não a recebem, e ela nunca substitui o tracejado de dado pendente.

## Components

### Buttons

- **Shape:** cantos definidos (`{rounded.lg}`, 8px), altura mínima de 48px (`min-h-12`), padding
  `12px 24px`, texto 16px em 600.
- **Primary:** fundo Azul de ação, texto branco, símbolo do WhatsApp de 20px à esquerda do rótulo.
  É o botão de conversa; todo link que abre o WhatsApp carrega um texto oculto
  "(abre o WhatsApp em outra janela)" para o leitor de tela.
- **Outline:** papel branco, borda de 2px (Azul de ação nas ações de conversa, Azul de leitura no
  "Salvar o contato"), texto em Azul de leitura.
- **Hover / Active:** `primary` escurece para o Azul de leitura; `outline` ganha fundo
  `{colors.secondary}`. A transição é só de cor, `150ms ease-out`. O recuo tátil
  (`active:scale-[0.98]`) é aplicado sob `motion-safe`, ou seja, desaparece com "reduzir
  movimento".
- **Foco:** anel sólido de 3px na cor `--ring` com 3px de deslocamento, global para link, botão,
  `summary` e qualquer `[tabindex]`. Sobre fundo escuro, o contêiner `.on-ink` inverte o anel para
  branco.

### Chips (filtro das Orientações)

- **Style:** altura mínima de 48px, borda de 2px, raio de 8px, texto 16px em 500.
- **State:** não selecionado é papel branco com borda `{colors.border}` e `hover`
  `{colors.secondary}`; selecionado é preenchido em Azul de leitura com texto branco. O estado é
  anunciado por `aria-pressed`, não só pela cor.

### Cards / Containers

- **`plate` — a peça de papel:** borda de 1px `{colors.border}`, raio de 8px, fundo papel branco,
  sombra de peça de papel. Padding `24px` no celular e `28px`/`32px` acima. É o bilhete preso ao
  lado do ímã, o painel de canais de contato, o bloco de perguntas frequentes.
- **`magnet` — a peça de contato:** raio de 10px, sombra de peça de ímã, **sem borda**, e a cor de
  fundo vem sempre de uma classe chapada junto (`bg-highlight` para o contato, `bg-primary` para a
  faixa de tarefas). É a peça que carrega o telefone.
- **Cartão pendente:** papel ou campo, borda de 2px tracejada, raio de 8px, padding `16px`; rótulo
  em caixa alta no Azul de leitura, o dado em 18px e a linha "a confirmar" em tinta esmaecida.

### Navigation

- **Desktop (≥768px):** links de 16px em 500, tinta cheia, `hover` para Azul de leitura; o item
  ativo ganha peso 700, cor Azul de leitura e uma barra inferior de 2px no Azul de ação. O botão do
  WhatsApp fica à direita, sempre visível.
- **Celular:** botão quadrado de 48px com borda de 2px e o ícone de traço (três linhas / X). O
  painel aberto é uma lista de linhas de 48px separadas por borda de 1px, com o botão do WhatsApp
  em largura total no fim. Abre com `--animate-menu` (180ms, desliza 6px e esmaece) e, sob
  `prefers-reduced-motion`, com `--animate-menu-reduzido` (120ms, só esmaece). Fecha com `Esc`,
  devolvendo o foco ao botão.

### Ímã de contato (componente assinatura)

A peça que define o site. Fundo amarelo com tinta escura, padding `24px`/`32px`: título, uma linha
de explicação em 18px, o rótulo "WHATSAPP" em caixa alta, o número em numerais enormes ligado a
`tel:` e, embaixo, as duas ações lado a lado — "Falar no WhatsApp" (primary) e "Salvar o contato"
(outline, que baixa um `.vcf`). Na primeira tela da página inicial, esta peça é também o `h1` e
recebe o único movimento do site.

### Cartão de impressão

O mesmo ímã em versão reduzida, com a classe `.cartao-impressao`. Ao imprimir, todo o resto do site
fica invisível: só o cartão é impresso, ancorado no topo esquerdo, com `9.5cm` de largura, margem
de página de `1.5cm`, sem sombra, com borda tracejada de 1px em tinta e `print-color-adjust: exact`
para o amarelo sair no papel. É a peça pensada para ir para a geladeira de quem não usa celular com
facilidade.

### Pictogramas

Ícones autorais em `src/components/site/icons.tsx`: cama, cadeira, caminhar, degrau, banheiro,
casa, salvar contato, imprimir, seta, check e aviso. Grade de 24, `stroke-width: 2`, pontas e
junções arredondadas, `currentColor`, `aria-hidden`. Tamanhos usados: 20px dentro de botão, 24px em
aviso, 56px na faixa de placas.

## Do's and Don'ts

### Do:

- **Do** deixar o número de telefone ser o maior elemento da página, em `numerais` (tabular,
  `letter-spacing: -0.02em`), com o símbolo do WhatsApp colado.
- **Do** usar `plate` para papel branco e `magnet` para peça em cor chapada; são as duas únicas
  formas de peça do sistema.
- **Do** manter todo parágrafo em 18px e toda área de toque em 48px de altura mínima.
- **Do** dar a cada movimento um caminho para "reduzir movimento": `motion-safe` para o que é
  tátil, `--animate-menu-reduzido` para o menu, e conteúdo já visível quando a animação não roda.
- **Do** desenhar ícone novo em `icons.tsx`, na grade de 24 com traço de 2px e pontas
  arredondadas.
- **Do** marcar dado não confirmado com borda tracejada de 2px e a palavra "a confirmar".
- **Do** medir o contraste de qualquer par novo de texto/fundo antes de usá-lo (mínimo 4,5:1).

### Don't:

- **Don't** usar degradê, nem em fundo, nem em botão, nem em sobreposição de imagem. O mundo é de
  cor chapada.
- **Don't** usar `--logo-azul` ou `--logo-verde` em texto, botão ou fundo com texto por cima.
- **Don't** pintar mais de uma peça amarela por tela, nem usar o amarelo como cor de texto.
- **Don't** trocar a sombra curta e deslocada por sombra larga e difusa, nem fazer sombra aparecer
  ou crescer no `hover`.
- **Don't** trazer biblioteca de ícones (Lucide, Heroicons), fonte de ícone ou glifo Unicode
  (→, ✓, ★) no lugar de um pictograma autoral.
- **Don't** montar grade de cartões iguais para um conjunto de assuntos: use a faixa única em cor
  cheia dividida por traços.
- **Don't** pôr linha em caixa alta como chapéu acima de um título; caixa alta pequena só rotula um
  dado logo abaixo dela.
- **Don't** usar animação repetitiva, parallax, vídeo automático ou qualquer laço que chame
  atenção — o público tem sensibilidade a tontura.
- **Don't** preencher CREFITO, bairro, horário, preço, depoimento ou foto do profissional com
  conteúdo inventado para "fechar" o layout; o espaço tracejado é a solução de design.
