import { Link } from "@tanstack/react-router";
import { hasEditorialContent } from "@/lib/editorial";
import { site, whatsappLink } from "@/lib/site";
import logoFull from "@/assets/logo-full.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logoFull}
            alt={`Logo ${site.nome}`}
            className="h-24 w-auto"
            width={116}
            height={96}
          />
          <p className="mt-2 text-sm text-muted-foreground">
            Fisioterapia domiciliar em {site.cidade} ({site.estado}), com atenção especial às
            necessidades da pessoa idosa.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary">
                Início
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="hover:text-primary">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-primary">
                Sobre o Dr. Alan
              </Link>
            </li>
            {hasEditorialContent && (
              <li>
                <Link to="/orientacoes" className="hover:text-primary">
                  Orientações
                </Link>
              </li>
            )}
            <li>
              <Link to="/contato" className="hover:text-primary">
                Contato
              </Link>
            </li>
            <li>
              <Link to="/politica-de-privacidade" className="hover:text-primary">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Atendimento</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Fisioterapia Geriátrica</li>
            <li>Fisioterapia Ortopédica</li>
            <li>Fisioterapia Neurológica</li>
            <li>Fisioterapia Esportiva</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Contato</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-whatsapp-event="whatsapp_footer"
                className="hover:text-primary"
              >
                WhatsApp: {site.whatsappLabel}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
            <li>Atendimento domiciliar em {site.cidade} e região</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70 px-5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.nome} — {site.profissional}. Este site tem caráter
        informativo e não substitui avaliação profissional individual.
      </div>
    </footer>
  );
}
