import { Link } from "@tanstack/react-router";
import { hasEditorialContent } from "@/lib/editorial";
import { site, whatsappLink } from "@/lib/site";
import logoFull from "@/assets/logo-full.webp";

const navegacao = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre o Dr. Alan" },
  ...(hasEditorialContent ? [{ to: "/orientacoes", label: "Orientações" }] : []),
  { to: "/contato", label: "Contato" },
  { to: "/politica-de-privacidade", label: "Política de Privacidade" },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <img
            src={logoFull}
            alt={`Logo da ${site.nome}`}
            className="h-24 w-auto"
            width={97}
            height={96}
            loading="lazy"
          />
          <p className="mt-3 max-w-xs text-base text-muted-foreground">
            Fisioterapia domiciliar em {site.cidade} ({site.estado}), com atenção especial às
            necessidades da pessoa idosa.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="text-base font-bold text-foreground">Navegação</h2>
          <ul className="mt-3">
            {navegacao.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="flex min-h-11 items-center text-base text-muted-foreground hover:text-deep hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-bold text-foreground">Contato</h2>
          <ul className="mt-3">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-whatsapp-event="whatsapp_footer"
                className="flex min-h-11 items-center text-base text-muted-foreground hover:text-deep hover:underline"
              >
                WhatsApp: {site.whatsappLabel}
                <span className="sr-only"> (abre o WhatsApp em outra janela)</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.telefoneLink}`}
                className="flex min-h-11 items-center text-base text-muted-foreground hover:text-deep hover:underline"
              >
                Ligar: {site.whatsappLabel}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-11 items-center text-base text-muted-foreground hover:text-deep hover:underline"
              >
                {site.email}
              </a>
            </li>
            <li className="flex min-h-11 items-center text-base text-muted-foreground">
              Atendimento domiciliar em {site.cidade} e região
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {site.nome} — {site.profissional}. Este site tem caráter
        informativo e não substitui avaliação profissional individual.
      </div>
    </footer>
  );
}
