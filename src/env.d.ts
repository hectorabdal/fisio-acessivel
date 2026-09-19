/// <reference types="vite/client" />

// Declarar a variável aqui permite escrever `import.meta.env.VITE_ORIENTACOES_REVISAO`
// com ponto. Isso não é estilo: o Vite só substitui a variável na compilação
// quando o acesso é por ponto. Com colchetes, a condição vira decisão de tempo
// de execução e os rascunhos das Orientações passam a entrar no pacote publicado
// mesmo com o modo de revisão desligado.
interface ImportMetaEnv {
  /** "1" libera os rascunhos das Orientações no site publicado. Ver LEIA-ME-EDITORIAL.md. */
  readonly VITE_ORIENTACOES_REVISAO?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
