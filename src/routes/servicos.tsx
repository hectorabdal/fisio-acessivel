import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/servicos")({
  head: () =>
    createPageHead({
      path: "/servicos",
      title: "Serviços de Fisioterapia em Campinas | Fisio Acessível",
      description:
        "Fisioterapia geriátrica, ortopédica, neurológica e esportiva em domicílio em Campinas com o Dr. Alan Oliveira Costa.",
      breadcrumbName: "Serviços",
    }),
  component: Servicos,
});

const servicos = [
  {
    titulo: "Fisioterapia Geriátrica",
    resumo: "Nossa principal área de atuação.",
    texto:
      "Cuidado fisioterapêutico voltado às necessidades da pessoa idosa, respeitando suas características, seu ritmo e seus objetivos. O trabalho considera mobilidade, equilíbrio, força e as tarefas do dia a dia — levantar da cama, caminhar pela casa, subir um degrau, sentar e levantar da cadeira.",
    beneficios: [
      "Atendimento no ambiente onde a pessoa realmente vive",
      "Orientação também para a família e para quem cuida",
      "Linguagem clara e trato respeitoso, sem infantilização",
    ],
    destaque: true,
  },
  {
    titulo: "Fisioterapia Ortopédica",
    resumo: "Músculos, articulações e recuperação funcional.",
    texto:
      "Atendimento direcionado às necessidades relacionadas ao sistema musculoesquelético e à recuperação funcional, incluindo acompanhamento após lesões ou procedimentos cirúrgicos, conforme a indicação médica de cada caso.",
    beneficios: [
      "Acompanhamento sem sair de casa",
      "Exercícios adaptados ao espaço e à rotina do paciente",
    ],
  },
  {
    titulo: "Fisioterapia Neurológica",
    resumo: "Funcionalidade e autonomia possível.",
    texto:
      "Fisioterapia voltada às necessidades funcionais de pessoas com condições neurológicas, com foco na qualidade do movimento, na segurança dentro de casa e na maior independência possível para cada situação.",
    beneficios: [
      "Ambiente familiar, que favorece a rotina de cuidado",
      "Orientações práticas para o dia a dia da família",
    ],
  },
  {
    titulo: "Fisioterapia Esportiva",
    resumo: "Para quem mantém o corpo em movimento.",
    texto:
      "Atendimento fisioterapêutico para pessoas que praticam atividades físicas e esportivas e desejam acompanhamento profissional na sua rotina, com horários combinados e a comodidade do atendimento em domicílio.",
    beneficios: ["Horários combinados", "Acompanhamento no próprio ambiente de treino ou em casa"],
  },
];

function Servicos() {
  return (
    <>
      <section className="bg-gradient-soft px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Fisioterapia em domicílio em Campinas
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Todas as áreas abaixo são atendidas na casa do paciente, com atenção especial à pessoa
            idosa. Se você não tem certeza de qual é o caso do seu familiar, conversamos antes — sem
            compromisso.
          </p>
          <div className="mt-8">
            <WhatsAppButton trackingId="whatsapp_servicos">
              Solicitar avaliação inicial pelo WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6">
          {servicos.map((s) => (
            <article
              key={s.titulo}
              className={`rounded-3xl border p-8 shadow-soft sm:p-10 ${
                s.destaque
                  ? "border-primary/40 bg-gradient-brand text-primary-foreground"
                  : "border-border bg-card"
              }`}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-wide ${
                  s.destaque ? "opacity-90" : "text-primary"
                }`}
              >
                {s.resumo}
              </p>
              <h2
                className={`mt-2 text-2xl font-bold sm:text-3xl ${s.destaque ? "" : "text-foreground"}`}
              >
                {s.titulo}
              </h2>
              <p
                className={`mt-4 max-w-3xl text-lg leading-relaxed ${
                  s.destaque ? "opacity-95" : "text-muted-foreground"
                }`}
              >
                {s.texto}
              </p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {s.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-base">
                    <span className={s.destaque ? "opacity-90" : "text-leaf"}>✓</span>
                    <span className={s.destaque ? "opacity-95" : "text-foreground"}>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-secondary p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Não sabe qual atendimento é o mais indicado?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            Entre em contato pelo WhatsApp para conversar sobre sua necessidade e verificar as
            possibilidades de atendimento.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton trackingId="whatsapp_servicos">
              Quero conversar com o Dr. Alan
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
