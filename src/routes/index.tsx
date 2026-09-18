import { createFileRoute, Link } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { BlocoContato, NumeroWhatsApp, SalvarContatoBotao } from "@/components/site/ContatoMagnet";
import {
  IconeBanheiro,
  IconeCadeira,
  IconeCama,
  IconeCaminhar,
  IconeDegrau,
  IconeWhatsApp,
} from "@/components/site/icons";
import { PlantaBaixa } from "@/components/site/PlantaBaixa";
import { fichaProfissional as ficha, site, whatsappLink } from "@/lib/site";
import { hasEditorialContent } from "@/lib/editorial";
import cuidadoImg from "@/assets/cuidado-idoso.jpg";
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

const tarefas = [
  {
    Icone: IconeCama,
    local: "No quarto",
    titulo: "Levantar da cama",
    texto: "Sair da cama sem puxão.",
  },
  {
    Icone: IconeCadeira,
    local: "Na sala",
    titulo: "Sentar e levantar",
    texto: "Da poltrona, da cama, do vaso.",
  },
  {
    Icone: IconeCaminhar,
    local: "No corredor",
    titulo: "Caminhar pela casa",
    texto: "Passo firme, menos medo de cair.",
  },
  {
    Icone: IconeDegrau,
    local: "Na entrada",
    titulo: "Subir o degrau",
    texto: "Degrau da entrada e escada.",
  },
  {
    Icone: IconeBanheiro,
    local: "No banheiro",
    titulo: "Banho com segurança",
    texto: "Entrar e sair do banheiro.",
  },
];

const passos = [
  {
    n: 1,
    titulo: "Você manda uma mensagem",
    texto: "Conta o que está acontecendo. Não precisa saber qual tratamento procurar.",
  },
  {
    n: 2,
    titulo: "O Dr. Alan responde",
    texto: "Ele escuta o caso, tira dúvidas e verifica se dá para atender no seu endereço.",
  },
  {
    n: 3,
    titulo: "Avaliação inicial em casa",
    texto: "Sendo possível, vocês combinam dia e horário para a primeira visita.",
  },
];

function Secao({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-14 sm:py-18 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <>
      {/* O ímã: contato primeiro, com o número maior que o nome do serviço. */}
      <section className="px-5 pb-12 pt-8 sm:pt-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="magnet recorte bg-highlight p-6 text-highlight-foreground motion-safe:animate-pousar sm:p-9">
            <h1 className="text-[2rem] font-bold leading-[1.1] sm:text-5xl">
              Fisioterapia que vai até a casa de quem você ama
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed sm:text-xl">
              Atendimento domiciliar em {site.cidade}, com atenção especial à pessoa idosa. Quem
              atende é o {site.profissional}, pós-graduado em Fisioterapia Geriátrica.
            </p>

            <p className="mt-6 text-sm font-bold uppercase tracking-wide">WhatsApp</p>
            <NumeroWhatsApp />

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-whatsapp-event="whatsapp_hero"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-[background-color,scale] duration-150 ease-out hover:bg-deep motion-safe:active:scale-[0.98]"
              >
                <IconeWhatsApp className="h-5 w-5 shrink-0" />
                Falar no WhatsApp
                <span className="sr-only"> (abre o WhatsApp em outra janela)</span>
              </a>
              <SalvarContatoBotao />
            </div>
          </div>

          {/* O bilhete preso ao lado do ímã: o caminho inteiro em três passos. */}
          <div className="plate p-6 sm:p-8">
            <h2 className="text-xl font-bold sm:text-2xl">Como funciona</h2>
            <ol className="mt-5">
              {passos.map((passo) => (
                <li
                  key={passo.n}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-4 last:border-b-0 last:pb-0"
                >
                  <span className="numerais flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-2xl font-bold text-deep">
                    {passo.n}
                  </span>
                  <span>
                    <span className="block text-lg font-bold">{passo.titulo}</span>
                    <span className="mt-1 block text-lg leading-relaxed text-muted-foreground">
                      {passo.texto}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-lg text-muted-foreground">
              A avaliação inicial é combinada pelo WhatsApp, sem compromisso.
            </p>
          </div>
        </div>
      </section>

      {/* As placas: um assunto por placa, do jeito que uma sinalização informa. */}
      <Secao className="bg-secondary">
        <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
          O tratamento acontece onde a vida acontece
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Em casa, a fisioterapia trabalha as tarefas reais do dia a dia — com os móveis, o degrau e
          a cadeira que a pessoa usa de verdade. Os números marcam onde cada uma acontece.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="plate p-5 sm:p-7">
            <PlantaBaixa className="w-full text-deep" />
          </div>

          <ol className="magnet grid overflow-hidden bg-primary text-primary-foreground">
            {tarefas.map(({ Icone, local, titulo, texto }, i) => (
              <li
                key={titulo}
                className={`flex items-start gap-4 p-5 ${
                  i > 0 ? "border-t border-primary-foreground/25" : ""
                }`}
              >
                <span className="numerais flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary-foreground text-xl font-bold">
                  {i + 1}
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2.5">
                    <Icone className="h-7 w-7 shrink-0" />
                    <span className="text-xl font-bold leading-snug">{titulo}</span>
                  </span>
                  <span className="mt-1 block text-lg leading-relaxed">
                    {local}: {texto}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className="plate mx-auto mt-5 flex max-w-3xl flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-lg leading-relaxed">
            Cada caso é diferente. Conte o que está acontecendo e o Dr. Alan avalia o que dá para
            trabalhar.
          </p>
          <WhatsAppButton
            trackingId="whatsapp_tarefas"
            variant="outline"
            className="shrink-0"
            mensagem="Olá, Dr. Alan! Gostaria de conversar sobre uma avaliação para um familiar idoso."
          >
            Contar o meu caso
          </WhatsAppButton>
        </div>
      </Secao>

      {/* Por que em casa */}
      <Secao>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <figure className="m-0">
            <img
              src={cuidadoImg}
              alt="Imagem ilustrativa de fisioterapia domiciliar: profissional apoiando o braço de uma pessoa idosa em casa"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-lg border border-border object-cover"
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              Imagem ilustrativa. As fotos do atendimento do Dr. Alan entram assim que forem
              autorizadas.
            </figcaption>
          </figure>
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Levar a pessoa até a clínica é, muitas vezes, a parte mais difícil
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Escada, transporte, dor ao se mover, horário, alguém disponível para acompanhar:
                depois de uma queda ou de uma perda de força, sair de casa vira um problema por si
                só.
              </p>
              <p>
                Atender em casa resolve isso e ainda mostra o cenário real — os móveis, o degrau da
                entrada, o banheiro. É ali que a fisioterapia consegue trabalhar o que importa.
              </p>
              <p>
                A pessoa idosa é tratada como adulta: linguagem clara, informação honesta e
                participação nas decisões. A família também é orientada.
              </p>
            </div>
          </div>
        </div>
      </Secao>

      {/* Quem atende, com as pendências à mostra em vez de inventadas. */}
      <Secao className="bg-secondary" id="quem-atende">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex min-h-56 flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-background p-6 text-center">
            <p className="text-base font-semibold">Foto do Dr. Alan</p>
            <p className="mt-2 text-base text-muted-foreground">
              Espaço reservado para a foto profissional real, com autorização.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">{site.profissional}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              O cuidado com pessoas idosas é a marca do trabalho dele, e o atendimento domiciliar
              leva esse cuidado até a casa do paciente em {site.cidade}.
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
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
            <Link
              to="/sobre"
              className="mt-6 inline-flex min-h-12 items-center rounded-lg border-2 border-primary bg-card px-6 py-3 text-base font-semibold text-deep transition-colors hover:bg-secondary"
            >
              Conhecer o Dr. Alan
            </Link>
          </div>
        </div>
      </Secao>

      {hasEditorialContent && (
        <Secao>
          <div className="plate flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Dúvidas sobre quedas, força e caminhada
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Orientações em linguagem simples sobre mobilidade, envelhecimento e quando procurar
                ajuda, com as fontes citadas.
              </p>
            </div>
            <Link
              to="/orientacoes"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg border-2 border-primary bg-card px-6 py-3 text-base font-semibold text-deep transition-colors hover:bg-secondary"
            >
              Ler as orientações
            </Link>
          </div>
        </Secao>
      )}

      <Secao className="pt-0">
        <BlocoContato
          titulo="Seu pai ou sua mãe precisa de fisioterapia?"
          texto="Converse com o Dr. Alan sobre o caso e descubra como funciona o atendimento em casa, em Campinas."
        />
        <div className="plate mt-5 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            <strong className="font-bold text-foreground">Depoimentos:</strong> só publicamos
            relatos reais, com autorização de quem escreveu. Ainda não há nenhum publicado.
          </p>
          <Link
            to="/contato"
            className="inline-flex min-h-12 shrink-0 items-center rounded-lg px-1 text-base font-semibold text-deep underline underline-offset-4"
          >
            Ver contato e região
          </Link>
        </div>
      </Secao>
    </>
  );
}
