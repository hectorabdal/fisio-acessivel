import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { site } from "@/lib/site";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () =>
    createPageHead({
      path: "/contato",
      title: "Contato para Fisioterapia Domiciliar | Fisio Acessível",
      description:
        "Fale pelo WhatsApp com o Dr. Alan Oliveira Costa sobre uma avaliação inicial de fisioterapia domiciliar em Campinas.",
      breadcrumbName: "Contato",
    }),
  component: Contato,
});

const faq = [
  {
    p: "Quem atende?",
    r: `${site.profissional}, fisioterapeuta com atuação desde 2018 e Pós-Graduação em Fisioterapia Geriátrica.`,
  },
  {
    p: "Onde é o atendimento?",
    r: `Na casa do paciente, em ${site.cidade} e região. Consulte a disponibilidade para o seu endereço pelo WhatsApp.`,
  },
  {
    p: "Como solicitar uma avaliação inicial?",
    r: "Envie uma mensagem pelo WhatsApp contando brevemente quem precisa de atendimento e o que está acontecendo.",
  },
  {
    p: "O que acontece depois do primeiro contato?",
    r: "O Dr. Alan conversa com você sobre a necessidade, esclarece dúvidas e verifica as possibilidades de atendimento e de uma avaliação inicial em domicílio.",
  },
];

function Contato() {
  return (
    <>
      <section className="bg-gradient-soft px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Vamos conversar sobre o cuidado de quem você ama
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            O WhatsApp é o caminho mais rápido para falar com o Dr. Alan. Entre em contato para
            conversar sobre sua necessidade e verificar as possibilidades de atendimento.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppButton trackingId="whatsapp_contato">
              Solicitar avaliação inicial pelo WhatsApp
            </WhatsAppButton>
            <WhatsAppButton
              variant="outline"
              trackingId="whatsapp_contato_familiar"
              mensagem="Olá! Preciso de fisioterapia para um familiar. Podemos conversar?"
            >
              Preciso de fisioterapia para um familiar
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-foreground">Canais de contato</h2>
            <ul className="mt-5 space-y-4 text-lg text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">WhatsApp:</span>{" "}
                {site.whatsappLabel}
              </li>
              <li>
                <span className="font-semibold text-foreground">E-mail:</span>{" "}
                <a className="hover:text-primary" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <span className="font-semibold text-foreground">Instagram:</span>{" "}
                <a
                  className="hover:text-primary"
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @fisio.acessivel
                </a>
              </li>
              <li>
                <span className="font-semibold text-foreground">Região:</span> atendimento
                domiciliar em {site.cidade} ({site.estado}) e região.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-secondary p-8">
            <h2 className="text-2xl font-bold text-foreground">Perguntas rápidas</h2>
            <dl className="mt-5 space-y-5">
              {faq.map((f) => (
                <div key={f.p}>
                  <dt className="text-base font-semibold text-foreground">{f.p}</dt>
                  <dd className="mt-1 text-base leading-relaxed text-muted-foreground">{f.r}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
