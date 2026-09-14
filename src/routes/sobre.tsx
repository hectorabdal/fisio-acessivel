import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import alanImg from "@/assets/dr-alan.jpg";
import { site } from "@/lib/site";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () =>
    createPageHead({
      path: "/sobre",
      title: "Dr. Alan Oliveira Costa | Fisioterapeuta em Campinas",
      description:
        "Conheça o Dr. Alan Oliveira Costa, fisioterapeuta desde 2018, pós-graduado em Fisioterapia Geriátrica e com atendimento domiciliar em Campinas.",
      ogType: "profile",
      breadcrumbName: "Sobre o Dr. Alan",
    }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="bg-gradient-soft px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.75fr_1fr]">
          <img
            src={alanImg}
            alt="Dr. Alan Oliveira Costa, fisioterapeuta domiciliar em Campinas"
            width={1008}
            height={1200}
            className="mx-auto w-full max-w-sm rounded-3xl object-cover shadow-soft"
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Conheça o {site.profissional}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Fisioterapeuta com atuação desde 2018 e Pós-Graduação em Fisioterapia Geriátrica. Seu
              trabalho tem uma característica especial: o cuidado com pessoas idosas.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Por meio do atendimento domiciliar, a fisioterapia chega até o paciente em Campinas,
              proporcionando mais conforto para quem precisa de cuidado e mais tranquilidade para
              toda a família.
            </p>
            <div className="mt-8">
              <WhatsAppButton trackingId="whatsapp_sobre">
                Falar com o Dr. Alan no WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              t: "Formação",
              d: "Fisioterapeuta com Pós-Graduação em Fisioterapia Geriátrica, área que orienta a maior parte do seu trabalho.",
            },
            {
              t: "Experiência",
              d: "Atuação profissional na área de fisioterapia desde 2018, com foco especial no atendimento de pessoas idosas.",
            },
            {
              t: "Onde atende",
              d: "Atendimento fisioterapêutico domiciliar em Campinas e região. Consulte a disponibilidade para o seu endereço.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h2 className="text-lg font-semibold text-foreground">{c.t}</h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-secondary p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Filosofia de cuidado</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Atender em casa é mais do que uma comodidade: é encontrar a pessoa no ambiente em que
              ela vive, com seus móveis, seus degraus, sua cadeira preferida e sua rotina real.
            </p>
            <p>
              O atendimento humanizado começa pela escuta. Entender o histórico, as dificuldades do
              dia a dia e o que aquela pessoa gostaria de voltar a fazer com mais segurança é parte
              essencial do trabalho.
            </p>
            <p>
              Pessoas idosas merecem ser tratadas como adultas: com respeito, informação clara e
              participação nas decisões sobre o próprio cuidado. A família também é acolhida, porque
              costuma ser quem organiza, acompanha e se preocupa.
            </p>
          </div>
          <div className="mt-8">
            <WhatsAppButton trackingId="whatsapp_sobre">
              Solicitar avaliação inicial pelo WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
