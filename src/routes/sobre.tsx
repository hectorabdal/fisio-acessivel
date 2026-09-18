import { createFileRoute } from "@tanstack/react-router";
import { BlocoContato } from "@/components/site/ContatoMagnet";
import { fichaProfissional as ficha, site } from "@/lib/site";
import { createPageHead } from "@/lib/seo";
import retrato from "@/assets/alan-preview/retrato-tratado.jpg";

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

const fichas = [
  {
    titulo: "Foco do trabalho",
    texto:
      "Atendimento de pessoas idosas, com atenção a mobilidade, equilíbrio, força e às tarefas do dia a dia.",
  },
  {
    titulo: "Quem participa",
    texto:
      "O paciente e também a família, que recebe orientação sobre como apoiar o cuidado na rotina.",
  },
  {
    titulo: "Onde atende",
    texto: `Atendimento domiciliar em ${site.cidade} e região. Consulte a disponibilidade para o seu endereço.`,
  },
];

const principios = [
  {
    titulo: "A casa é o consultório",
    texto:
      "Atender em casa é encontrar a pessoa no ambiente em que ela vive, com seus móveis, seus degraus, sua cadeira preferida e sua rotina real.",
  },
  {
    titulo: "Começa pela escuta",
    texto:
      "Entender o histórico, as dificuldades do dia a dia e o que aquela pessoa gostaria de voltar a fazer com segurança é parte essencial do trabalho.",
  },
  {
    titulo: "Pessoa idosa é adulta",
    texto:
      "Respeito, informação clara e participação nas decisões sobre o próprio cuidado. A família também é acolhida, porque costuma ser quem organiza e se preocupa.",
  },
];

function Sobre() {
  return (
    <>
      <section className="px-5 pb-10 pt-10 sm:pt-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <figure className="m-0 min-w-0">
            <img
              src={retrato}
              alt="Retrato de Alan Oliveira Costa, da Fisio Acessível"
              width={1254}
              height={1254}
              fetchPriority="high"
              className="aspect-square w-full rounded-lg object-cover"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Fotografia com tratamento de imagem, provisória para apresentação.
            </figcaption>
          </figure>
          <div>
            <h1 className="text-[2rem] font-bold leading-[1.1] sm:text-5xl">
              Quem vai atender na sua casa
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {site.profissional}, fisioterapeuta com atuação desde 2018 e Pós-Graduação em
              Fisioterapia Geriátrica. O cuidado com pessoas idosas é a marca do trabalho dele.
            </p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-3">
              {ficha.map((item) => (
                <div
                  key={item.t}
                  className={`rounded-lg border-2 bg-card p-4 ${
                    item.pendente ? "border-dashed border-border" : "border-border"
                  }`}
                >
                  <dt className="text-sm font-bold uppercase tracking-wide text-deep">{item.t}</dt>
                  <dd className="mt-1 text-lg">{item.d}</dd>
                  {item.pendente && (
                    <dd className="mt-1 text-base text-muted-foreground">a confirmar</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-14 sm:py-18">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Como o atendimento acontece</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {fichas.map((f) => (
              <div key={f.titulo} className="plate p-6">
                <h3 className="text-xl font-bold">{f.titulo}</h3>
                <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{f.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:py-18">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Filosofia de cuidado</h2>
          <div className="mt-8 grid gap-6">
            {principios.map((p) => (
              <div key={p.titulo} className="border-t-2 border-border pt-5">
                <h3 className="text-xl font-bold">{p.titulo}</h3>
                <p className="mt-2 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  {p.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-12">
        <div className="mx-auto max-w-6xl">
          <BlocoContato
            titulo="Quer conversar com o Dr. Alan?"
            texto="Conte o que está acontecendo com seu familiar. A avaliação inicial é combinada pelo WhatsApp."
            mensagem="Olá, Dr. Alan! Gostaria de conversar sobre uma avaliação inicial de fisioterapia domiciliar."
          />
        </div>
      </section>
    </>
  );
}
