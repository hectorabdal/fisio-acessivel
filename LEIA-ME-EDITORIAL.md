# Área editorial da Fisio Acessível

O projeto original do Lovable foi preservado e recebeu a área **Orientações**, com página principal, seis artigos, filtros por assunto, perguntas frequentes, referências e links entre textos. As chamadas usam o WhatsApp que já estava configurado no projeto: (19) 99587-4920.

## Estado da entrega

- Cópia local preparada para revisão. Nenhuma alteração foi enviada ao Lovable, GitHub ou a um serviço de hospedagem.
- Os seis artigos são rascunhos. Ficam visíveis no servidor de desenvolvimento, com aviso de revisão pendente e `noindex,nofollow`.
- Na compilação de produção, os rascunhos não aparecem no menu, suas rotas retornam 404 e seus textos não entram nos arquivos públicos. A exceção é o modo de revisão descrito abaixo.
- A proteção é editorial, não um sistema de autenticação. Não exponha o servidor de desenvolvimento à internet.
- Não foi criado domínio, registro profissional, depoimento ou credencial.

## Como visualizar

Depois de instalar as dependências com `bun install --frozen-lockfile`, execute `bun run dev --configLoader native` e acesse `/orientacoes` no endereço mostrado pelo servidor. O projeto conserva seu arquivo de dependências e a configuração do Lovable. O ajuste de caminhos no Windows está em `vite.config.ts`.

## Modo de revisão no site publicado

Serve para o Dr. Alan ler os rascunhos no endereço real, antes de qualquer publicação.

- Ligue a variável de ambiente `VITE_ORIENTACOES_REVISAO=1` na hospedagem e publique de novo.
- Com ela ligada: os seis rascunhos aparecem no menu e nas rotas, o aviso "Versão para revisão profissional" fica no topo das páginas editoriais e elas continuam com `noindex,nofollow`. A página inicial e as demais seguem indexáveis normalmente.
- Sem a variável, nada muda: nenhum rascunho entra na compilação. Verificado nas duas compilações — sem a variável, o texto dos rascunhos não aparece em nenhum arquivo gerado.
- O modo de revisão não é autenticação: quem tiver o endereço consegue ler. Ele evita indexação e deixa claro que o texto não foi revisado, mas não esconde a página.
- Depois da aprovação, desligue a variável e publique de verdade seguindo a seção "Aprovação e publicação de um artigo".

## O que revisar com o Dr. Alan

1. Avaliar os seis textos: precisão, exemplos, critérios de procura por atendimento e orientações diante de urgência.
2. Confirmar a descrição do serviço e o número de WhatsApp já existente no projeto.
3. Autorizar a identificação como revisor e fornecer a data efetiva de revisão.
4. Confirmar as credenciais antes de associá-las aos novos artigos. O site original já declara Pós-Graduação em Fisioterapia Geriátrica e atuação desde 2018; essas declarações preexistentes foram preservadas, mas não tomadas como confirmação profissional para os novos textos.
5. Se aprovada, a identificação proposta é: “Revisão profissional: Dr. Alan Oliveira Costa — fisioterapeuta com Pós-Graduação em Fisioterapia Geriátrica”. Sem acrescentar registro ou título não confirmado.

## Fontes e limites da consulta

Foram consultados o Caderno de Boas Práticas do COFFITO, a Resolução nº 565/2022, o artigo de Mariana Varella, o conteúdo do Dr. Ednor Neto, os dois artigos da USP e o resumo público da SECAD/Artmed indicados no briefing. Os artigos da USP foram acessados pelos endereços em inglês do mesmo portal. As referências estão ligadas a cada texto.

O PDF da SBGG indicado no briefing não pôde ser consultado. Não foi apresentado como referência utilizada. Sua leitura e a identificação do artigo específico dentro do volume ficam pendentes para a revisão profissional:
https://sbgg.org.br/wp-content/uploads/2014/10/1443207095_GG_v9n2.pdf

A consulta à SECAD/Artmed se limitou ao resumo público, não ao capítulo completo. Não foram extrapoladas dos estudos taxas de sucesso, prescrições de exercícios ou promessas de resultado. Data da consulta: 14/09/2026.

## Aprovação e publicação de um artigo

Os rascunhos estão em `src/data/orientacoes-rascunhos.ts`. Os tipos, as categorias, as referências e a lista `publishedArticles` estão em `src/data/orientacoes.ts`.

Somente depois da aprovação: mover o objeto do artigo para `publishedArticles`, alterar `status` para `published` e preencher `review` com `name`, `reviewedAt` e `publishedAt` reais, em formato AAAA-MM-DD. `credential` é opcional e só deve ser preenchido se confirmado e autorizado. A identificação do revisor será exibida automaticamente. A lista de conteúdos e os links de leitura relacionada mostram apenas artigos disponíveis.

As descrições e títulos de busca estão preparados por página. Quando o domínio for escolhido, revisar a origem dos endereços canônicos e dos dados estruturados no conjunto do site, seguindo a configuração definitiva de hospedagem.

## Continuar no Lovable

Este ZIP é uma cópia, sem sincronização automática. Para devolver alterações ao projeto já existente, use seu repositório conectado ao Lovable ou substitua os arquivos alterados no editor de código. Não crie um projeto paralelo nem reescreva o histórico publicado. O projeto não foi vinculado a um repositório nesta entrega.

## Verificações realizadas

- Compilação completa de produção e análise de tipos.
- Verificação de estilo dos novos componentes e dados.
- Resposta das seis páginas de artigo e das cinco páginas originais.
- Títulos, metadados, aviso de rascunho, três perguntas por artigo, links relacionados e destino do WhatsApp.
- Filtro de prevenção de quedas e expansão de resposta no navegador.
- Inspeção visual em largura de celular e tela ampla.
- Rotas não existentes retornam 404. Os rascunhos também retornam 404 em produção e seus textos não constam nos arquivos públicos gerados.
