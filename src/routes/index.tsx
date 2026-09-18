import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { BlocoContato } from "@/components/site/ContatoMagnet";
import { IconeCama, IconeCadeira, IconeCaminhar, IconeDegrau } from "@/components/site/icons";
import { site } from "@/lib/site";
import { hasEditorialContent } from "@/lib/editorial";
import retrato from "@/assets/alan-preview/retrato-tratado.jpg";
import escuta from "@/assets/alan-preview/escuta.jpg";
import movimento from "@/assets/alan-preview/movimento.jpg";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    createPageHead({
      path: "/",
      title: "Fisioterapia Domiciliar em Campinas | Fisio Acessível",
      description:
        "Conheça o Dr. Alan Oliveira Costa e a proposta de fisioterapia domiciliar em Campinas, com atenção especial à pessoa idosa.",
    }),
  component: Index,
});

const situacoes = [
  {
    Icone: IconeCama,
    titulo: "Sair da cama ficou difícil",
    texto: "Quando uma tarefa que fazia parte da rotina começa a exigir ajuda.",
  },
  {
    Icone: IconeCadeira,
    titulo: "Levantar da cadeira exige apoio",
    texto: "A poltrona da sala também pode revelar uma mudança no dia a dia.",
  },
  {
    Icone: IconeCaminhar,
    titulo: "Caminhar traz insegurança",
    texto: "Medo de cair ou dificuldade para circular pela própria casa.",
  },
  {
    Icone: IconeDegrau,
    titulo: "O degrau virou um obstáculo",
    texto: "Pequenos trajetos podem se tornar grandes preocupações para a família.",
  },
];

const primeiraVisita = [
  {
    titulo: "A história de quem será atendido",
    texto:
      "O que mudou, quais são as dificuldades e o que a pessoa gostaria de fazer com mais facilidade.",
  },
  {
    titulo: "A rotina e o espaço da casa",
    texto:
      "Os caminhos, os móveis e as atividades que fazem parte do dia a dia entram na conversa.",
  },
  {
    titulo: "As dúvidas e os próximos passos",
    texto:
      "A avaliação ajuda a conversar sobre as necessidades e a proposta de acompanhamento para cada caso.",
  },
];

function Index() {
  return (
    <>
      <section className="home-intro px-5 pb-14 pt-8 sm:pb-20 sm:pt-12">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="hero-copy min-w-0">
            <p className="mb-5 flex items-center gap-3 text-lg font-semibold text-deep">
              <span className="h-px w-9 bg-primary" aria-hidden="true" />
              Fisioterapia domiciliar em Campinas
            </p>
            <h1 className="max-w-2xl text-[2.4rem] font-bold leading-[1.08] sm:text-6xl">
              O cuidado começa
              <br className="hidden sm:block" /> por conhecer
              <br className="hidden sm:block" /> quem vai cuidar.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted-foreground">
              Conheça o{" "}
              <strong className="font-bold text-foreground">Dr. Alan Oliveira Costa</strong>.
              Fisioterapia em casa, com atenção à pessoa idosa e às pequenas coisas que fazem
              diferença na rotina.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <WhatsAppButton trackingId="whatsapp_hero">Conversar com o Alan</WhatsAppButton>
              <a
                href="#cuidado-em-casa"
                className="inline-flex min-h-12 items-center justify-center rounded-lg px-4 py-3 text-base font-semibold text-deep underline underline-offset-4 hover:bg-secondary"
              >
                Conhecer o atendimento
              </a>
            </div>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Para você ou para alguém da família. Não é preciso saber qual tratamento procurar.
            </p>
          </div>
          <figure className="portrait-note m-0 min-w-0">
            <img
              src={retrato}
              alt="Alan Oliveira Costa sorrindo, com a camisa da Fisio Acessível"
              width={1254}
              height={1254}
              fetchPriority="high"
              className="aspect-square w-full rounded-t-lg object-cover"
            />
            <figcaption className="rounded-b-lg border border-t-0 border-border bg-card px-6 py-5">
              <p className="text-xl font-bold">Dr. Alan Oliveira Costa</p>
              <p className="mt-1 text-lg text-muted-foreground">Fisioterapeuta · Fisio Acessível</p>
              <Link
                to="/sobre"
                className="mt-2 inline-flex min-h-12 items-center text-base font-semibold text-deep underline underline-offset-4 hover:text-primary"
              >
                Mais sobre o Alan
              </Link>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="border-y border-border bg-secondary px-5 py-14 sm:py-18"
        aria-labelledby="situacoes-titulo"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <h2 id="situacoes-titulo" className="max-w-xl text-3xl font-bold sm:text-4xl">
              Você percebeu alguma mudança no dia a dia?
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Muitas vezes, a procura começa por uma situação simples de contar. Observar o que
              mudou é um ponto de partida para conversar sobre o cuidado.
            </p>
          </div>
          <ul className="mt-9 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {situacoes.map(({ Icone, titulo, texto }) => (
              <li key={titulo} className="border-t-2 border-primary/30 py-6">
                <Icone className="mb-5 h-10 w-10 text-deep" />
                <h3 className="max-w-xs text-xl font-bold">{titulo}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{texto}</p>
              </li>
            ))}
          </ul>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed">
            Cada pessoa tem uma história. A avaliação profissional ajuda a entender quais cuidados
            fazem sentido para ela.
          </p>
        </div>
      </section>

      <section id="cuidado-em-casa" className="px-5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">A casa faz parte do cuidado.</h2>
            <p className="mt-4 text-xl leading-relaxed text-muted-foreground">
              A cadeira preferida. O caminho até o quarto. O apoio de alguém da família. É nesse
              cotidiano que o atendimento encontra seu sentido.
            </p>
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <figure className="m-0">
              <img
                src={escuta}
                alt="Alan ao lado de uma pessoa idosa sentada em uma poltrona, segurando sua mão"
                width={1080}
                height={1440}
                loading="lazy"
                className="care-photo aspect-[4/5] w-full rounded-lg object-cover object-[center_58%]"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Um registro de proximidade no atendimento.
              </figcaption>
            </figure>
            <div>
              <p className="mb-3 text-lg font-semibold text-deep">Tempo para conhecer a pessoa</p>
              <h3 className="text-3xl font-bold sm:text-4xl">
                Antes de falar em exercícios, uma conversa.
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                O que está difícil? O que a pessoa sente falta de fazer? Ouvir essas respostas ajuda
                a colocar a rotina e as escolhas de quem será atendido no centro do cuidado.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A família pode trazer suas observações e dúvidas, mantendo a pessoa idosa como parte
                da conversa.
              </p>
              <div className="mt-7 border-l-4 border-primary pl-5">
                <p className="text-xl font-semibold leading-relaxed">
                  A pessoa tem uma história, uma casa e um jeito próprio de viver.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid items-center gap-8 lg:mt-20 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
            <div className="lg:order-1">
              <p className="mb-3 text-lg font-semibold text-deep">Movimento no ambiente real</p>
              <h3 className="text-3xl font-bold sm:text-4xl">
                O que importa está nas pequenas tarefas.
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Levantar, sentar, percorrer um caminho. O atendimento em casa permite considerar o
                espaço e as atividades que a pessoa encontra todos os dias.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A proposta de acompanhamento depende da avaliação e das necessidades de cada pessoa,
                respeitando suas possibilidades.
              </p>
              <Link
                to="/servicos"
                className="mt-6 inline-flex min-h-12 items-center text-base font-semibold text-deep underline underline-offset-4 hover:text-primary"
              >
                Conhecer as áreas de atendimento
              </Link>
            </div>
            <figure className="m-0 lg:order-2">
              <img
                src={movimento}
                alt="Alan acompanhando uma pessoa idosa em pé, com apoio das mãos, em um ambiente com poltronas"
                width={1080}
                height={1350}
                loading="lazy"
                className="care-photo aspect-[4/5] w-full rounded-lg object-cover"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Presença e acompanhamento durante o movimento.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="primeira-visita" className="bg-secondary px-5 py-14 sm:py-18">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              A primeira visita começa pela sua história.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Antes de agendar, converse com o Alan sobre o endereço, a disponibilidade e como
              funciona a avaliação inicial.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Leve suas dúvidas. Não é preciso chegar com todas as respostas.
            </p>
          </div>
          <ol className="border-t border-border">
            {primeiraVisita.map((item, i) => (
              <li
                key={item.titulo}
                className="grid grid-cols-[2rem_1fr] gap-4 border-b border-border py-6"
              >
                <span className="numerais text-2xl font-bold text-deep">{i + 1}</span>
                <div>
                  <h3 className="text-xl font-bold">{item.titulo}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{item.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {hasEditorialContent && (
        <section className="px-5 py-12">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 border-b border-border pb-10 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold">Para entender melhor, com calma.</h2>
              <p className="mt-2 max-w-2xl text-lg text-muted-foreground">
                Leituras sobre mobilidade, força e cuidado com a pessoa idosa.
              </p>
            </div>
            <Link
              to="/orientacoes"
              className="inline-flex min-h-12 shrink-0 items-center rounded-lg border-2 border-primary px-5 py-3 text-base font-semibold text-deep hover:bg-secondary"
            >
              Ler as orientações
            </Link>
          </div>
        </section>
      )}

      <section id="vamos-conversar" className="px-5 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Vamos conversar sobre quem precisa de cuidado?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Conte o que está acontecendo e em qual região de Campinas seria o atendimento. O
              próximo passo pode começar por uma conversa simples.
            </p>
            <Link
              to="/contato"
              className="mt-5 inline-flex min-h-12 items-center text-base font-semibold text-deep underline underline-offset-4 hover:text-primary"
            >
              Outras formas de contato
            </Link>
          </div>
          <div className="hero-copy min-w-0">
            <BlocoContato
              titulo="O contato do Alan, sempre à mão."
              texto="Converse pelo WhatsApp ou salve o número para falar depois."
            />
          </div>
        </div>
      </section>
      <aside className="px-5 pb-8">
        <p className="mx-auto max-w-6xl border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
          Prévia para apresentação ao Alan. Fotografias fornecidas para uso provisório; seleção,
          textos e informações sujeitos à revisão antes da publicação.
        </p>
      </aside>
    </>
  );
}
