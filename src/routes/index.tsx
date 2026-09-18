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
import { site, whatsappLink } from "@/lib/site";
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
  { Icone: IconeCama, titulo: "Levantar da cama", texto: "Sair da cama com segurança, sem puxão." },
  {
    Icone: IconeCadeira,
    titulo: "Sentar e levantar",
    texto: "Da poltrona, da cama, do vaso: força de perna e apoio certo.",
  },
  {
    Icone: IconeCaminhar,
    titulo: "Caminhar pela casa",
    texto: "Equilíbrio, passo mais firme e menos medo de cair.",
  },
  {
    Icone: IconeDegrau,
    titulo: "Subir o degrau",
    texto: "Degrau da entrada, escada, meio-fio na porta de casa.",
  },
  {
    Icone: IconeBanheiro,
    titulo: "Banho com segurança",
    texto: "Entrar e sair do banheiro, o lugar de mais risco de queda.",
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
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div className="magnet bg-highlight p-6 text-highlight-foreground sm:p-9">
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
                    <span className="mt-1 block text-base leading-relaxed text-muted-foreground">
                      {passo.texto}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-base text-muted-foreground">
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
          a cadeira que a pessoa usa de verdade.
        </p>
        <ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tarefas.map(({ Icone, titulo, texto }) => (
            <li key={titulo} className="magnet bg-primary p-6 text-primary-foreground">
              <Icone className="h-11 w-11" />
              <h3 className="mt-4 text-xl font-bold">{titulo}</h3>
              <p className="mt-2 text-base leading-relaxed">{texto}</p>
            </li>
          ))}
          <li className="plate flex flex-col justify-center p-6">
            <p className="text-lg leading-relaxed">
              Cada caso é diferente. Conte o que está acontecendo e o Dr. Alan avalia o que dá para
              trabalhar.
            </p>
            <WhatsAppButton
              trackingId="whatsapp_tarefas"
              variant="outline"
              className="mt-5 w-full"
              mensagem="Olá, Dr. Alan! Gostaria de conversar sobre uma avaliação para um familiar idoso."
            >
              Contar o meu caso
            </WhatsAppButton>
          </li>
        </ul>
      </Secao>

      {/* Por que em casa */}
      <Secao>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <figure className="m-0">
            <img
              src={cuidadoImg}
              alt="Fisioterapeuta apoiando o braço de um senhor idoso durante um exercício em casa"
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
        <div className="plate grid gap-8 p-6 sm:p-9 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex min-h-56 flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-background p-6 text-center">
            <p className="text-base font-semibold">Foto do Dr. Alan</p>
            <p className="mt-2 text-base text-muted-foreground">
              Espaço reservado para a foto profissional real, com autorização.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">{site.profissional}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Fisioterapeuta com atuação desde 2018 e Pós-Graduação em Fisioterapia Geriátrica. O
              cuidado com pessoas idosas é a marca do trabalho dele, e o atendimento domiciliar leva
              esse cuidado até a casa do paciente em {site.cidade}.
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-secondary p-4">
                <dt className="text-sm font-bold uppercase tracking-wide text-deep">Formação</dt>
                <dd className="mt-1 text-base">Pós-Graduação em Fisioterapia Geriátrica</dd>
              </div>
              <div className="rounded-lg border-2 border-dashed border-border p-4">
                <dt className="text-sm font-bold uppercase tracking-wide text-deep">CREFITO</dt>
                <dd className="mt-1 text-base text-muted-foreground">
                  A ser informado pelo profissional
                </dd>
              </div>
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
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Dúvidas sobre quedas, força e caminhada
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Orientações escritas em linguagem simples sobre mobilidade, envelhecimento e quando
                procurar ajuda, com as fontes citadas.
              </p>
            </div>
            <Link
              to="/orientacoes"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-primary bg-card px-6 py-3 text-base font-semibold text-deep transition-colors hover:bg-secondary lg:justify-self-end"
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
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-muted-foreground">
            Depoimentos: só publicamos relatos reais, com autorização de quem escreveu. Ainda não há
            nenhum publicado.
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
