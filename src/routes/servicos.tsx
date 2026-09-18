import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { BlocoContato } from "@/components/site/ContatoMagnet";
import { IconeCheck } from "@/components/site/icons";
import { site } from "@/lib/site";
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
    resumo: "A principal área de atuação do Dr. Alan",
    texto:
      "Cuidado voltado às necessidades da pessoa idosa, no ritmo dela. O trabalho considera mobilidade, equilíbrio, força e as tarefas do dia a dia: levantar da cama, caminhar pela casa, subir um degrau, sentar e levantar da cadeira.",
    beneficios: [
      "Atendimento no ambiente onde a pessoa realmente vive",
      "Orientação também para a família e para quem cuida",
      "Linguagem clara e trato respeitoso, sem infantilização",
    ],
    destaque: true,
  },
  {
    titulo: "Fisioterapia Ortopédica",
    resumo: "Músculos, articulações e recuperação funcional",
    texto:
      "Atendimento voltado às necessidades do sistema musculoesquelético e à recuperação funcional, incluindo acompanhamento após lesões ou cirurgias, conforme a indicação médica de cada caso.",
    beneficios: [
      "Acompanhamento sem sair de casa",
      "Exercícios adaptados ao espaço e à rotina do paciente",
    ],
  },
  {
    titulo: "Fisioterapia Neurológica",
    resumo: "Funcionalidade e autonomia possível",
    texto:
      "Fisioterapia voltada às necessidades funcionais de pessoas com condições neurológicas, com foco na qualidade do movimento, na segurança dentro de casa e na maior independência possível para cada situação.",
    beneficios: [
      "Ambiente familiar, que favorece a rotina de cuidado",
      "Orientações práticas para o dia a dia da família",
    ],
  },
  {
    titulo: "Fisioterapia Esportiva",
    resumo: "Para quem mantém o corpo em movimento",
    texto:
      "Atendimento para pessoas que praticam atividades físicas e querem acompanhamento profissional na rotina, com horários combinados e a comodidade do atendimento em domicílio.",
    beneficios: ["Horários combinados", "Acompanhamento no próprio ambiente de treino ou em casa"],
  },
];

function Servicos() {
  return (
    <>
      <section className="px-5 pb-10 pt-10 sm:pt-14">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-[2rem] font-bold leading-[1.1] sm:text-5xl">
            Fisioterapia em domicílio em {site.cidade}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Todas as áreas abaixo são atendidas na casa do paciente, com atenção especial à pessoa
            idosa. Se você não tem certeza de qual é o caso do seu familiar, conversamos antes — sem
            compromisso.
          </p>
          <WhatsAppButton trackingId="whatsapp_servicos" className="mt-7">
            Solicitar avaliação inicial
          </WhatsAppButton>
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto grid max-w-6xl gap-5">
          {servicos.map((s) => (
            <article
              key={s.titulo}
              className={
                s.destaque
                  ? "magnet bg-primary p-7 text-primary-foreground sm:p-9"
                  : "plate p-7 sm:p-9"
              }
            >
              <p
                className={`text-base font-semibold ${s.destaque ? "" : "text-deep"}`}
              >
                {s.resumo}
              </p>
              <h2 className="mt-1 text-2xl font-bold sm:text-3xl">{s.titulo}</h2>
              <p
                className={`mt-4 max-w-3xl text-lg leading-relaxed ${
                  s.destaque ? "" : "text-muted-foreground"
                }`}
              >
                {s.texto}
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {s.beneficios.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-base">
                    <IconeCheck
                      className={`mt-0.5 h-5 w-5 shrink-0 ${s.destaque ? "" : "text-leaf"}`}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 pb-12">
        <div className="mx-auto max-w-6xl">
          <BlocoContato
            titulo="Não sabe qual atendimento é o mais indicado?"
            texto="Conte o que está acontecendo. O Dr. Alan escuta o caso e diz se a fisioterapia domiciliar faz sentido."
            mensagem="Olá, Dr. Alan! Não sei qual tipo de fisioterapia meu familiar precisa. Podemos conversar?"
          />
        </div>
      </section>
    </>
  );
}
