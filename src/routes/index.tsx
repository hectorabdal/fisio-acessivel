import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { site } from "@/lib/site";
import heroImg from "@/assets/hero-fisioterapia-domiciliar.jpg";
import cuidadoImg from "@/assets/cuidado-idoso.jpg";
import alanImg from "@/assets/dr-alan.jpg";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    createPageHead({
      path: "/",
      title: "Fisioterapia Domiciliar em Campinas | Fisio Acessível",
      description:
        "Fisioterapia domiciliar em Campinas com atenção especial à pessoa idosa. Conheça o atendimento do Dr. Alan Oliveira Costa e fale pelo WhatsApp.",
    }),
  component: Index,
});

const diferenciais = [
  {
    titulo: "Cuidado especial com pessoas idosas",
    texto:
      "A experiência com o público idoso é uma das principais características do trabalho do Dr. Alan, com pós-graduação em Fisioterapia Geriátrica.",
  },
  {
    titulo: "Atendimento no conforto de casa",
    texto:
      "Mais comodidade para o paciente e para a família, sem a necessidade de deslocamento até uma clínica.",
  },
  {
    titulo: "Atendimento humanizado",
    texto:
      "Cada pessoa merece ser tratada com atenção, respeito e escuta — inclusive quem cuida dela.",
  },
  {
    titulo: "Proposta acessível",
    texto:
      "Fisioterapia com uma proposta pensada para facilitar o acesso ao cuidado. Condições conversadas caso a caso.",
  },
  {
    titulo: "Atuação desde 2018",
    texto: "Experiência profissional na área de fisioterapia desde 2018.",
  },
  {
    titulo: "Presença em Campinas",
    texto:
      "Atendimento fisioterapêutico domiciliar em Campinas e região. Consulte a disponibilidade para o seu endereço.",
  },
];

const areas = [
  {
    titulo: "Fisioterapia Geriátrica",
    texto:
      "Cuidado voltado às necessidades da pessoa idosa: mobilidade, equilíbrio, força e autonomia no dia a dia, respeitando o ritmo de cada um.",
    destaque: true,
  },
  {
    titulo: "Fisioterapia Ortopédica",
    texto:
      "Acompanhamento de necessidades ligadas a músculos, articulações e recuperação funcional após lesões ou cirurgias.",
  },
  {
    titulo: "Fisioterapia Neurológica",
    texto:
      "Atenção às necessidades funcionais de pessoas com condições neurológicas, com foco em qualidade de movimento e independência possível.",
  },
  {
    titulo: "Fisioterapia Esportiva",
    texto:
      "Atendimento para quem pratica atividades físicas e busca acompanhamento profissional na rotina de treinos.",
  },
];

const passos = [
  {
    n: "1",
    titulo: "Você manda uma mensagem",
    texto:
      "Conte brevemente o que está acontecendo e quem precisa de atendimento. Não é preciso saber qual tratamento procurar.",
  },
  {
    n: "2",
    titulo: "Conversamos sobre a necessidade",
    texto:
      "O Dr. Alan escuta o caso, esclarece dúvidas e verifica as possibilidades de atendimento domiciliar.",
  },
  {
    n: "3",
    titulo: "Avaliação inicial em casa",
    texto:
      "Sendo possível, é combinada uma avaliação inicial no endereço do paciente, em dia e horário alinhados com a família.",
  },
];

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-soft px-5 pb-16 pt-12 sm:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-medium text-deep shadow-soft">
              Fisioterapia domiciliar em {site.cidade} · {site.estado}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Cuidar de quem você ama ficou mais fácil.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Fisioterapia domiciliar em Campinas com o {site.profissional}: atendimento humanizado,
              atenção especial às necessidades da pessoa idosa e o conforto de ser atendida em casa.
            </p>

            <ul className="mt-6 grid gap-2 text-base text-foreground sm:grid-cols-2">
              {[
                "Atendimento em domicílio",
                "Pós-graduado em Fisioterapia Geriátrica",
                "Avaliação inicial combinada por WhatsApp",
                "Proposta acessível",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-leaf">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton trackingId="whatsapp_hero">
                Solicitar avaliação inicial pelo WhatsApp
              </WhatsAppButton>
              <Link
                to="/servicos"
                className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-card px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-accent"
              >
                Conhecer o atendimento
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Atendimento para famílias que buscam fisioterapia para idosos em Campinas — sem
              deslocamento até a clínica.
            </p>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Fisioterapeuta atendendo uma senhora idosa na sala de casa, em Campinas"
              width={1600}
              height={1104}
              fetchPriority="high"
              className="w-full rounded-3xl object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* EMPATIA / IDOSOS */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={cuidadoImg}
            alt="Mãos de um fisioterapeuta apoiando o braço de um senhor idoso durante sessão em casa"
            loading="lazy"
            width={1200}
            height={900}
            className="w-full rounded-3xl object-cover shadow-soft"
          />
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Quando o paciente é alguém que você ama, o cuidado precisa ser diferente.
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Para muitas famílias, levar uma pessoa idosa até uma clínica pode ser cansativo,
                desconfortável ou simplesmente difícil: escadas, transporte, dor ao se mover,
                horários, alguém disponível para acompanhar.
              </p>
              <p>
                A Fisio Acessível leva o atendimento fisioterapêutico até a casa do paciente,
                proporcionando mais comodidade e um ambiente familiar para o cuidado.
              </p>
              <p>
                O {site.profissional} tem pós-graduação em Fisioterapia Geriátrica e uma atuação
                especialmente voltada ao atendimento de pessoas idosas — com linguagem clara,
                respeito e paciência.
              </p>
            </div>
            <div className="mt-7">
              <WhatsAppButton
                trackingId="whatsapp_idosos"
                mensagem="Olá, Dr. Alan! Gostaria de conversar sobre uma avaliação para um familiar idoso."
              >
                Quero conversar sobre uma avaliação
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section className="bg-secondary">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Por que escolher a Fisio Acessível?
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Mais do que sessões de fisioterapia: a tranquilidade de saber que quem você ama está sendo
          bem cuidado, em casa.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d) => (
            <div
              key={d.titulo}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-foreground">{d.titulo}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{d.texto}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOBRE */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1fr]">
          <img
            src={alanImg}
            alt="Retrato do Dr. Alan Oliveira Costa, fisioterapeuta em Campinas"
            loading="lazy"
            width={1008}
            height={1200}
            className="mx-auto w-full max-w-sm rounded-3xl object-cover shadow-soft"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Conheça o profissional
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {site.profissional}
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Fisioterapeuta com atuação desde 2018 e Pós-Graduação em Fisioterapia Geriátrica.
              </p>
              <p>
                Seu trabalho tem uma característica especial: o cuidado com pessoas idosas. Por meio
                do atendimento domiciliar, a fisioterapia chega até o paciente em Campinas,
                proporcionando mais conforto para quem precisa de cuidado e mais tranquilidade para
                toda a família.
              </p>
            </div>
            <Link
              to="/sobre"
              className="mt-7 inline-flex items-center justify-center rounded-full border border-primary/40 bg-card px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-accent"
            >
              Conhecer o Dr. Alan
            </Link>
          </div>
        </div>
      </Section>

      {/* ÁREAS */}
      <Section className="bg-secondary">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Áreas de fisioterapia
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Atendimento domiciliar com foco no que faz diferença no dia a dia de cada pessoa.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {areas.map((a) => (
            <div
              key={a.titulo}
              className={`rounded-2xl border p-7 shadow-soft ${
                a.destaque
                  ? "border-primary/40 bg-gradient-brand text-primary-foreground md:row-span-2"
                  : "border-border bg-card"
              }`}
            >
              {a.destaque && (
                <span className="mb-3 inline-block rounded-full bg-card/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  Principal especialidade
                </span>
              )}
              <h3 className={`text-xl font-semibold ${a.destaque ? "" : "text-foreground"}`}>
                {a.titulo}
              </h3>
              <p
                className={`mt-2 text-base leading-relaxed ${
                  a.destaque ? "opacity-95" : "text-muted-foreground"
                }`}
              >
                {a.texto}
              </p>
            </div>
          ))}
        </div>
        <Link
          to="/servicos"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-primary/40 bg-card px-6 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-accent"
        >
          Ver especialidades
        </Link>
      </Section>

      {/* COMO FUNCIONA */}
      <Section id="como-funciona">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          O primeiro passo é conversar
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Você não precisa saber exatamente qual tratamento procurar. Entre em contato pelo WhatsApp
          e explique a situação.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {passos.map((p) => (
            <div key={p.n} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                {p.n}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{p.titulo}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{p.texto}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Entre em contato pelo WhatsApp para conversar sobre sua necessidade e verificar as
          possibilidades de atendimento.
        </p>
        <div className="mt-6">
          <WhatsAppButton trackingId="whatsapp_como_funciona">
            Solicitar avaliação inicial
          </WhatsAppButton>
        </div>
      </Section>

      {/* DEPOIMENTOS */}
      <Section className="bg-secondary">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Depoimentos de pacientes e famílias
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Estamos reunindo relatos reais de pacientes e familiares atendidos em Campinas. Nesta
            página só serão publicados depoimentos verdadeiros, com autorização de quem os escreveu.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Já foi atendido pelo Dr. Alan? Envie seu relato pelo WhatsApp.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton
              variant="outline"
              trackingId="whatsapp_depoimentos"
              mensagem="Olá! Gostaria de deixar um depoimento sobre o atendimento."
            >
              Enviar meu depoimento
            </WhatsAppButton>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section>
        <div className="rounded-3xl bg-gradient-brand p-8 text-primary-foreground shadow-soft sm:p-14">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Seu familiar precisa de fisioterapia?
          </h2>
          <p className="mt-4 max-w-2xl text-lg opacity-95">
            Não deixe que o deslocamento até uma clínica seja mais uma dificuldade. Converse com o
            Dr. Alan e descubra como funciona o atendimento domiciliar em Campinas.
          </p>
          <ul className="mt-6 grid gap-2 text-lg sm:grid-cols-3">
            <li>Cuidado com atenção à pessoa idosa</li>
            <li>Atendimento no conforto de casa</li>
            <li>Uma proposta acessível</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton trackingId="whatsapp_final" variant="outline" className="bg-card">
              Solicitar avaliação inicial pelo WhatsApp
            </WhatsAppButton>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/50 px-6 py-3.5 text-base font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Ver contato e região
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
