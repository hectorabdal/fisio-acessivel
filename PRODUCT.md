# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Principal:** filhos e familiares adultos (cerca de 35 a 60 anos) que procuram fisioterapia para o pai ou a mãe idosos em Campinas, muitas vezes pelo celular e em um momento de preocupação (depois de uma queda, perda de força, dificuldade para caminhar ou alta hospitalar). São eles que decidem e mandam a primeira mensagem.
- **Secundário:** a própria pessoa idosa, que também visita o site, às vezes com baixa visão, pouca familiaridade com tecnologia e sensibilidade a movimento ou tontura.

## Product Purpose

Site da Fisio Acessível, serviço de fisioterapia domiciliar do fisioterapeuta Alan Oliveira Costa em Campinas (SP). O site deve transmitir confiança, explicar o serviço em linguagem simples e levar o visitante a pedir uma avaliação inicial pelo WhatsApp. Sucesso: a família entende o serviço e manda a mensagem com segurança.

## Positioning

Um único profissional, com pós-graduação em Fisioterapia Geriátrica, que vai até a casa do paciente: o tratamento acontece no ambiente real da pessoa (a cama, a cadeira, o degrau, o banheiro, a rotina). "Acessível" tem dois sentidos, confirmados pelo responsável pelo projeto: cuidado que chega até quem tem dificuldade de ir a uma clínica, e preço justo. Valores e comparações de preço ainda não foram definidos com o Alan; o site não pode prometer valores nem dizer que é "mais barato que" alguém.

## Operating Context

- Contato principal: WhatsApp (19) 99587-4920, com mensagens já escritas conforme o botão. Também e-mail (acessivelfisio@gmail.com) e Instagram (@fisio.acessivel).
- Fluxo: a família manda mensagem, conversa sobre a necessidade e, sendo possível, combina uma avaliação inicial na casa do paciente, em dia e horário alinhados com a família.
- Área "Orientações": seis artigos educativos em rascunho, aguardando revisão do Alan. Ficam ocultos na versão publicada.
- Estado: proposta de venda; o Alan ainda não viu o site. O projeto veio do Lovable e também é editado no Codex, na mesma pasta.

## Capabilities and Constraints

- Áreas listadas hoje: Fisioterapia Geriátrica (principal), Ortopédica, Neurológica e Esportiva. Manter ou retirar a Esportiva é decisão do Alan.
- Base técnica existente: React 19, TanStack Start, Tailwind v4 e shadcn/ui.
- Pendências que dependem do Alan (nunca inventar):
  - número e forma de exibição do CREFITO;
  - formação, cursos e tempo de atuação confirmados (o site já declara "desde 2018");
  - bairros e regiões atendidos;
  - dias e horários de atendimento;
  - como funciona a avaliação inicial e a duração das sessões;
  - preço, formas de pagamento, orçamento, convênios e reembolso;
  - número definitivo do WhatsApp e mensagem inicial;
  - fotos profissionais e de atendimento reais, com autorização;
  - depoimentos reais, com autorização;
  - links oficiais das redes sociais.

## Brand Commitments

- Nome "Fisio Acessível" e logo existente: duas mãos em azul e verde protegendo um coração com uma porta (`src/assets/logo-full.png`, `src/assets/logo-symbol.png`).
- Voz acolhedora, clara e adulta. Trata a pessoa idosa com respeito, sem infantilização, e acolhe também quem cuida.

## Evidence on Hand

- Logo em `src/assets/logo-full.png` e `src/assets/logo-symbol.png`.
- Fotos atuais são provisórias. `src/assets/dr-alan.jpg` é uma imagem gerada ou de banco e **não é o Alan**. `hero-fisioterapia-domiciliar.jpg` e `cuidado-idoso.jpg` também não mostram atendimentos reais dele. Nenhuma pode ser apresentada como o Alan ou como atendimento real.
- Declarações já presentes no site original: Pós-Graduação em Fisioterapia Geriátrica e atuação desde 2018, ambas a confirmar.
- Não existem ainda: depoimentos, número do CREFITO, preços, lista de bairros, números de pacientes ou resultados. Nada disso pode ser fabricado.
- Seis rascunhos de artigos com fontes (COFFITO, USP e outras) em `src/data/orientacoes-rascunhos.ts`.

## Product Principles

1. Confiança antes da conversão: mostrar quem atende, como funciona e o que ainda está pendente, sem inventar.
2. A casa é o lugar do tratamento: falar das tarefas reais do dia a dia, não de jargão clínico.
3. Uma ação clara: conversar pelo WhatsApp, sempre fácil de achar e de ler.
4. Respeito à pessoa idosa: linguagem adulta, informação clara e participação nas decisões.
5. Honestidade em saúde: rascunhos sinalizados, fontes citadas e nenhuma promessa de resultado.

## Accessibility & Inclusion

- WCAG 2.2 AA no mínimo. Texto do corpo com pelo menos 18px. Contraste de pelo menos 4,5:1, inclusive nos botões.
- Áreas de toque com pelo menos 44px (48px de preferência). O site precisa funcionar com zoom de 200%.
- Todo movimento tem alternativa para quem ativou "reduzir movimento". Nada de vídeo automático, parallax ou animação repetitiva chamativa, por causa da sensibilidade a tontura.
- Nomes lidos por leitores de tela correspondem ao texto visível, e links que abrem o WhatsApp deixam isso claro.

## Atualização de apresentação — 18/09/2026

O usuário forneceu seis fotos atribuídas ao Facebook da Fisio Acessível e autorizou uso provisório na apresentação ao Alan, inclusive tratamento e cenas ilustrativas. A prévia usa três: retrato tratado, proximidade junto à poltrona e acompanhamento em pé. A antiga imagem `dr-alan.jpg` continua sem representar Alan e não deve ser utilizada como retrato real. A seleção atual não confirma permissões de publicação definitiva nem informações profissionais. Home reorganizada conforme sequência: Alan, situações, cuidado em casa, primeira visita, contato. Sem publicação ou envio ao GitHub nesta etapa.
