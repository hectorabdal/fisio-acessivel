import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { hasEditorialContent } from "@/lib/editorial";
import { site } from "@/lib/site";
import logoSymbol from "@/assets/logo-symbol.webp";

const nav = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  ...(hasEditorialContent ? [{ to: "/orientacoes", label: "Orientações" }] : []),
  { to: "/contato", label: "Contato" },
];

const linkAtivo = "border-b-2 border-primary font-bold text-deep";

export function Header() {
  const [open, setOpen] = useState(false);
  const botaoMenu = useRef<HTMLButtonElement>(null);
  const primeiroLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    primeiroLink.current?.focus();
    const fecharComEsc = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      botaoMenu.current?.focus();
    };
    window.addEventListener("keydown", fecharComEsc);
    return () => window.removeEventListener("keydown", fecharComEsc);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2.5">
        <Link
          to="/"
          className="flex items-center gap-2.5 py-1"
          onClick={() => setOpen(false)}
          aria-label={`${site.nome} — página inicial`}
        >
          <img src={logoSymbol} alt="" className="h-11 w-11 shrink-0" width={44} height={44} />
          <span className="leading-tight">
            <span className="block text-lg font-bold text-foreground">{site.nome}</span>
            <span className="hidden text-sm text-muted-foreground sm:block">
              Fisioterapia domiciliar em {site.cidade}
            </span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="py-1 text-base font-medium text-foreground transition-colors hover:text-deep"
              activeProps={{ className: linkAtivo }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton trackingId="whatsapp_header" className="px-5 text-base">
            WhatsApp
          </WhatsAppButton>
        </div>

        <button
          ref={botaoMenu}
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-principal-mobile"
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-border text-foreground md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="menu-principal-mobile"
          className="border-t border-border bg-background px-5 pb-4 motion-safe:animate-menu motion-reduce:animate-menu-reduzido md:hidden"
        >
          <nav aria-label="Navegação principal" className="flex flex-col">
            {nav.map((item, index) => (
              <Link
                ref={index === 0 ? primeiroLink : undefined}
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-border text-lg font-medium text-foreground"
                activeProps={{ className: "font-bold text-deep" }}
                activeOptions={{ exact: item.to === "/" }}
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
