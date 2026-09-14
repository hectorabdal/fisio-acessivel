# Otimização técnica da Fisio Acessível

## Objetivo

Melhorar SEO técnico e local, compreensão por buscadores e IAs, acessibilidade e conversão para WhatsApp, preservando o visual e usando somente informações já confirmadas no site. O domínio oficial será `https://fisioacessivel.com.br`.

## Implementação

1. **Base técnica de SEO**
   - Criar `sitemap.xml` com as cinco páginas públicas e URLs absolutas do domínio oficial.
   - Simplificar o `robots.txt` para permitir rastreamento legítimo e adicionar o sitemap.
   - Centralizar URLs e metadados compartilhados para evitar divergências.

2. **Metadados por página**
   - Incluir em cada página: título e descrição exclusivos, canonical próprio, Open Graph completo e Twitter Card.
   - Preparar imagens sociais estáticas a partir das fotos já usadas no site, sem gerar ou substituir fotografias.
   - Manter títulos naturais, voltados a pessoas e associados a Campinas.

3. **Dados estruturados e GEO**
   - Adicionar JSON-LD em `@graph` com `WebSite`, `WebPage`, `Person`, `ProfessionalService`, `Service` e breadcrumbs internos.
   - Relacionar claramente Fisio Acessível, Dr. Alan, fisioterapia domiciliar, fisioterapia geriátrica e Campinas/SP.
   - Omitir endereço, CREFITO, preços, horários, avaliações e qualquer dado não confirmado.

4. **Conteúdo e navegação sem redesenho**
   - Ajustar apenas trechos necessários para deixar explícito quem atende, o serviço, o público, a cidade e o contato.
   - Adicionar uma FAQ curta e acessível com respostas já comprovadas.
   - Melhorar links internos descritivos entre Início, Serviços, Sobre e Contato.
   - Revisar a hierarquia de títulos e manter um único H1 por página.

5. **WhatsApp e acessibilidade**
   - Identificar os CTAs por origem (`header`, `hero`, `idosos`, `servicos`, `contato`, `floating`) sem instalar analytics.
   - Preservar mensagens específicas e garantir o mesmo número oficial em todos os links.
   - Adicionar link para pular ao conteúdo, foco visível, área clicável adequada e melhorias no menu móvel.
   - Traduzir e completar a página 404 com links úteis, CTA de WhatsApp e `noindex`.

6. **Imagens, desempenho e qualidade**
   - Confirmar dimensões, carregamento prioritário da imagem principal e lazy loading nas demais.
   - Corrigir a classe `bg-gradient-soft` com um fundo extremamente sutil, preservando a composição atual.
   - Remover apenas código/importações desnecessárias encontradas nesta rodada.

## Validação

- Executar lint e verificação de tipos disponíveis, além da validação automática do projeto.
- Conferir no navegador as cinco páginas, a 404, sitemap, robots, metadados, JSON-LD e links de WhatsApp.
- Testar desktop e mobile, navegação por teclado, menu móvel e ausência de erros no console.
- Fazer uma revisão factual final para confirmar que nenhum dado novo foi inventado.

## Limites preservados

- Nenhuma mudança de identidade visual ou da estrutura comercial principal.
- Nenhuma nova ferramenta de analytics.
- Nenhuma página artificial por bairro.
- Nenhum dado profissional, clínico, jurídico, comercial ou social além dos já confirmados.
