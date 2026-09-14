# Incorporar a logo oficial da Fisio Acessível ao site

## Objetivo

Usar a logo real do Alan (mãos azul/verde com coração e escrita "Fisio Acessível") nos pontos-chave do site, com a imagem otimizada — sem alterar textos, cores ou estrutura já prontos.

## O que será feito

1. **Tratamento da imagem** (a logo original tem margens brancas grandes):
   - Recortar as bordas vazias e gerar duas versões limpas:
     - **Símbolo** (mãos + coração + porta, sem o texto) — para cabeçalho e ícone do navegador.
     - **Logo completa** (símbolo + escrita) — para rodapé e seção Sobre.
   - Redimensionar para tamanhos leves (cabeçalho ~96px de altura, rodapé ~200px) para carregar rápido.

2. **Cabeçalho (Header.tsx)**: substituir o quadradinho com a letra "F" pelo **símbolo da marca**, mantendo ao lado o nome "Fisio Acessível" e a linha "Fisioterapia domiciliar em Campinas". Destaque sutil: símbolo em tamanho levemente maior (h-11), sem fundo colorido, deixando as cores da logo conversarem com o azul/verde do site.

3. **Rodapé (Footer.tsx)**: mostrar a **logo completa** no lugar do nome em texto puro, com a descrição abaixo.

4. **Ícone da aba do navegador (favicon)**: gerar `public/favicon.png` a partir do símbolo da marca (quadrado, 64x64), atualizar o link no `src/routes/__root.tsx` e remover o favicon padrão antigo.

5. **Verificação**: conferir no navegador as páginas Início e Sobre, checando nitidez, espaçamento e ausência de erros.

## Detalhes técnicos

- Imagem tratada com ferramenta de imagem no sandbox (recorte das margens brancas, export em JPG/PNG otimizado); versões do site salvas em `src/assets/` e o favicon em `public/`.
- Sem novos depoimentos, preços ou informações inventadas — apenas identidade visual.
