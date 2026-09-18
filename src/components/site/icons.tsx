type IconProps = { className?: string | undefined };

// Pictogramas das tarefas da casa. Traço único de 1.75, grade de 24,
// desenhados para o mesmo peso visual das placas de sinalização.
function Tracado({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconeCama({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <path d="M3 6v13" />
      <path d="M3 12h13a5 5 0 0 1 5 5v2" />
      <path d="M3 19h18" />
      <circle cx="8.5" cy="9" r="1.75" />
    </Tracado>
  );
}

export function IconeCadeira({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <path d="M8 3v10" />
      <path d="M8 9h6" />
      <path d="M8 13h9" />
      <path d="M8 21v-8" />
      <path d="M17 21v-8" />
    </Tracado>
  );
}

export function IconeDegrau({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <path d="M3 20h5v-4h5v-4h5v-4h3" />
      <path d="M3 20v-1" />
      <path d="M6 12.5 17 4" />
      <path d="M17 4v3" />
    </Tracado>
  );
}

export function IconeBanheiro({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <path d="M12 3v5" />
      <path d="M7 10a5 5 0 0 1 10 0z" />
      <path d="M8.5 14v2" />
      <path d="M12 15v3" />
      <path d="M15.5 14v2" />
    </Tracado>
  );
}

export function IconeCaminhar({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <circle cx="12.5" cy="4.25" r="2.25" />
      <path d="M12.5 8.5 11 13l3 3 1 5" />
      <path d="M11 13l-3 4 .5 4" />
      <path d="M13.5 10.5 16 9" />
      <path d="M17.5 8.5 19 21" />
    </Tracado>
  );
}

export function IconeCasa({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M6 12v8h12v-8" />
      <path d="M10.5 20v-5h3v5" />
    </Tracado>
  );
}

export function IconeSalvarContato({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5.5A1.5 1.5 0 0 1 4 18.5z" />
      <path d="M4 9h3M4 12h3M4 15h3" />
      <circle cx="13.5" cy="11" r="2" />
      <path d="M10 17c.6-1.7 2-2.5 3.5-2.5s2.9.8 3.5 2.5" />
    </Tracado>
  );
}

export function IconeImprimir({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <path d="M7 9V4h10v5" />
      <path d="M7 18H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <path d="M7 14h10v6H7z" />
    </Tracado>
  );
}

export function IconeSeta({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <path d="M6 9.5 12 15.5 18 9.5" />
    </Tracado>
  );
}

export function IconeSetaDireita({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </Tracado>
  );
}

export function IconeSetaEsquerda({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <path d="M20 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </Tracado>
  );
}

export function IconeCheck({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <path d="M4.5 12.5 9.5 18 19.5 6" />
    </Tracado>
  );
}

export function IconeAviso({ className }: IconProps) {
  return (
    <Tracado className={className}>
      <path d="M12 4 2.5 20h19z" />
      <path d="M12 10v4.5" />
      <path d="M12 17.5v.01" />
    </Tracado>
  );
}

// Símbolo do WhatsApp: o contorno do balão e o anel interno precisam ser
// dois subcaminhos, senão o fone se funde no balão e vira bolha genérica.
export function IconeWhatsApp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.65-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.05-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.22-8.24 8.22Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12s-.64.8-.79.97c-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}
