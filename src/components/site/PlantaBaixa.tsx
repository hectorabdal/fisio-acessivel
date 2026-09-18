/**
 * Planta da casa como índice das tarefas: cada número marca o cômodo onde a
 * fisioterapia trabalha aquele item. O desenho é um apoio visual — a mesma
 * informação está na lista ao lado em texto, por isso ele fica oculto para
 * leitores de tela.
 */
export function PlantaBaixa({ className = "" }: { className?: string | undefined }) {
  const marcadores = [
    { n: 1, x: 168, y: 62 },
    { n: 2, x: 158, y: 258 },
    { n: 3, x: 272, y: 104 },
    { n: 4, x: 402, y: 78 },
    { n: 5, x: 296, y: 262 },
  ];

  return (
    <svg viewBox="0 0 460 340" aria-hidden="true" fill="none" className={className}>
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="square">
        {/* paredes externas */}
        <path d="M20 20h420v300H20z" />
        {/* paredes internas, com os vãos de passagem */}
        <path d="M210 20v120M210 190v130" />
        <path d="M20 180h100M170 180h40" />
        <path d="M210 190h140M400 190h40" />
      </g>

      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.75">
        {/* giro das portas */}
        <path d="M210 140a50 50 0 0 0 50 50" />
        <path d="M350 190a50 50 0 0 1 50-50" />

        {/* quarto: cama */}
        <path d="M46 46h108v96H46z" />
        <path d="M46 74h108" />

        {/* sala: poltrona */}
        <path d="M52 228h76v56H52z" />
        <path d="M52 228v-14h76v14" />

        {/* entrada: degraus */}
        <path d="M360 44h64M360 62h64M360 80h64" />

        {/* banheiro: box */}
        <path d="M344 232h78v68h-78z" />
        <path d="M344 232l78 68" />
      </g>

      {marcadores.map(({ n, x, y }) => (
        <g key={n}>
          <circle cx={x} cy={y} r="19" className="fill-primary" />
          <text
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-primary-foreground"
            fontSize="22"
            fontWeight="700"
          >
            {n}
          </text>
        </g>
      ))}
    </svg>
  );
}
