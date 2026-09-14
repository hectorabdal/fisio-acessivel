import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { hasEditorialContent } from "@/lib/editorial";
import { site } from "@/lib/site";
import logoSymbol from "@/assets/logo-symbol.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  ...(hasEditorialContent ? [{ to: "/orientacoes", label: "Orientações" }] : []),
  { to: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const firstMobileLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstMobileLink.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={logoSymbol}
            alt="Símbolo da Fisio Acessível: duas mãos protegendo um coração"
            className="h-11 w-11 shrink-0"
            width={44}
            height={44}
          />

          <span className="leading-tight">
            <span className="block text-lg font-bold text-foreground">{site.nome}</span>
            <span className="block text-xs text-muted-foreground">
              Fisioterapia domiciliar em {site.cidade}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton trackingId="whatsapp_header" className="px-5 py-2.5 text-sm">
            WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-principal-mobile"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-border p-2 text-foreground md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="menu-principal-mobile"
          className="border-t border-border bg-background px-5 py-4 md:hidden"
        >
          <nav aria-label="Navegação principal" className="flex flex-col gap-3">
            {nav.map((item, index) => (
              <Link
                ref={index === 0 ? firstMobileLink : undefined}
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <WhatsAppButton trackingId="whatsapp_header" className="mt-4 w-full">
            Falar no WhatsApp
          </WhatsAppButton>
        </div>
      )}
    </header>
  );
}
