import { createFileRoute } from "@tanstack/react-router";
import { BlocoContato, SalvarContatoBotao } from "@/components/site/ContatoMagnet";
import { IconeImprimir, IconeWhatsApp } from "@/components/site/icons";
import { site } from "@/lib/site";
import { createPageHead } from "@/lib/seo";
import logoFull from "@/assets/logo-full.png";

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

const perguntas = [
  {
    p: "Quem atende?",
    r: `${site.profissional}, fisioterapeuta com atuação desde 2018 e Pós-Graduação em Fisioterapia Geriátrica. O número do CREFITO será publicado aqui assim que confirmado.`,
  },
  {
    p: "Onde é o atendimento?",
    r: `Na casa do paciente, em ${site.cidade} e região. A lista de bairros atendidos ainda não está definida — pergunte pelo WhatsApp informando seu endereço.`,
  },
  {
    p: "Quanto custa?",
    r: "Os valores são conversados caso a caso, de acordo com a necessidade e a frequência do atendimento. Pergunte pelo WhatsApp antes de agendar; não há cobrança pela conversa inicial.",
  },
  {
    p: "Quais são os dias e horários?",
    r: "Os horários são combinados diretamente com a família. A agenda fixa ainda não está publicada no site.",
  },
  {
    p: "Como é a primeira visita?",
    r: "É uma avaliação inicial no endereço do paciente, em dia e horário combinados. A duração e o formato são explicados pelo Dr. Alan antes de vocês marcarem.",
  },
];

function Contato() {
  return (
    <>
      <section className="px-5 pb-10 pt-10 sm:pt-14">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-3xl text-[2rem] font-bold leading-[1.1] sm:text-5xl">
            Fale com o Dr. Alan
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            O WhatsApp é o caminho mais rápido. Conte quem precisa de atendimento e o que está
            acontecendo; não é preciso saber qual tratamento procurar.
          </p>
          <BlocoContato
            className="mt-8"
            titulo="Avaliação inicial em casa"
            texto="Mande uma mensagem e o Dr. Alan responde para entender o caso e verificar o atendimento no seu endereço."
          />
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2 lg:items-start">
          <div className="plate p-7">
            <h2 className="text-2xl font-bold">Canais de contato</h2>
            <ul className="mt-5">
              <li className="border-b border-border">
                <a
                  href={`tel:${site.telefoneLink}`}
                  className="flex min-h-14 items-center justify-between gap-4 text-lg hover:text-deep"
                >
                  <span className="font-semibold">Ligar</span>
                  <span className="numerais">{site.whatsappLabel}</span>
                </a>
              </li>
              <li className="border-b border-border">
                <a
                  href={`mailto:${site.email}`}
                  className="flex min-h-14 items-center justify-between gap-4 text-lg hover:text-deep"
                >
                  <span className="font-semibold">E-mail</span>
                  <span className="break-all text-right">{site.email}</span>
                </a>
              </li>
              <li className="border-b border-border">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-14 items-center justify-between gap-4 text-lg hover:text-deep"
                >
                  <span className="font-semibold">Instagram</span>
                  <span>@fisio.acessivel</span>
                </a>
              </li>
              <li className="flex min-h-14 items-center justify-between gap-4 py-2 text-lg">
                <span className="font-semibold">Região</span>
                <span className="text-right text-muted-foreground">
                  {site.cidade} ({site.estado}) e região
                </span>
              </li>
            </ul>
          </div>

          <div className="plate p-7">
            <h2 className="text-2xl font-bold">Perguntas frequentes</h2>
            <dl className="mt-5 space-y-5">
              {perguntas.map((f) => (
                <div key={f.p}>
                  <dt className="text-lg font-bold">{f.p}</dt>
                  <dd className="mt-1 text-base leading-relaxed text-muted-foreground">{f.r}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* O cartão que vira ímã: salvar no celular ou imprimir e colar na geladeira. */}
      <section className="px-5 pb-14" id="cartao-geladeira">
        <div className="mx-auto max-w-6xl">
          <div className="plate grid gap-7 p-7 sm:p-9 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Deixe o número à mão</h2>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                Salve o contato no celular ou imprima o cartão e cole na geladeira — útil para quem
                mora com o paciente e não usa o celular com facilidade.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <SalvarContatoBotao />
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border-2 border-primary bg-card px-6 py-3 text-base font-semibold text-deep transition-[background-color,scale] duration-150 ease-out hover:bg-secondary motion-safe:active:scale-[0.98]"
                >
                  <IconeImprimir className="h-5 w-5 shrink-0" />
                  Imprimir o cartão
                </button>
              </div>
            </div>

            <div className="cartao-impressao magnet bg-highlight p-6 text-highlight-foreground">
              <div className="flex items-center gap-3">
                <img src={logoFull} alt="" className="h-14 w-auto" width={57} height={56} />
                <div>
                  <p className="text-lg font-bold">{site.nome}</p>
                  <p className="text-base">Fisioterapia domiciliar em {site.cidade}</p>
                </div>
              </div>
              <p className="mt-4 text-sm font-bold uppercase tracking-wide">WhatsApp</p>
              <p className="numerais flex items-center gap-2 text-3xl font-bold sm:text-4xl">
                <IconeWhatsApp className="h-7 w-7 shrink-0" />
                {site.whatsappLabel}
              </p>
              <p className="mt-3 text-base">{site.profissional} — fisioterapeuta</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
