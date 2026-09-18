import { site, vcardContato, whatsappLink } from "@/lib/site";
import { IconeSalvarContato, IconeWhatsApp } from "./icons";

const vcardHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcardContato())}`;

export function SalvarContatoBotao({ className = "" }: { className?: string }) {
  return (
    <a
      href={vcardHref}
      download="fisio-acessivel.vcf"
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg border-2 border-deep bg-card px-6 py-3 text-base font-semibold text-deep transition-[background-color,scale] duration-150 ease-out hover:bg-secondary motion-safe:active:scale-[0.98] ${className}`}
    >
      <IconeSalvarContato className="h-5 w-5 shrink-0" />
      Salvar o contato
    </a>
  );
}

export function NumeroWhatsApp({ tamanho = "grande" }: { tamanho?: "grande" | "medio" }) {
  return (
    <a
      href={`tel:${site.telefoneLink}`}
      className="inline-flex min-h-12 items-center gap-2.5 rounded-lg py-1 text-highlight-foreground hover:underline sm:gap-3"
    >
      <IconeWhatsApp
        className={tamanho === "grande" ? "h-7 w-7 shrink-0 sm:h-10 sm:w-10" : "h-6 w-6 shrink-0"}
      />
      <span
        className={`numerais font-bold ${
          tamanho === "grande"
            ? "whitespace-nowrap text-[clamp(2.35rem,5.4vw,3.9rem)] leading-none"
            : "text-2xl"
        }`}
      >
        {site.whatsappLabel}
      </span>
    </a>
  );
}

/**
 * O ímã: a peça de contato que a família guarda. Fundo amarelo com tinta
 * escura (9,1:1), o número maior que o nome do serviço e as duas ações juntas.
 */
export function BlocoContato({
  titulo,
  texto,
  mensagem,
  className = "",
}: {
  titulo: string;
  texto: string;
  mensagem?: string;
  className?: string;
}) {
  return (
    <div className={`magnet bg-highlight p-6 text-highlight-foreground sm:p-8 ${className}`}>
      <h2 className="text-2xl font-bold sm:text-3xl">{titulo}</h2>
      <p className="mt-3 max-w-md text-lg leading-relaxed">{texto}</p>

      <p className="mt-5 text-sm font-semibold uppercase tracking-wide">WhatsApp</p>
      <NumeroWhatsApp />

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          href={whatsappLink(mensagem)}
          target="_blank"
          rel="noopener noreferrer"
          data-whatsapp-event="whatsapp_magnet"
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-[background-color,scale] duration-150 ease-out hover:bg-deep motion-safe:active:scale-[0.98]"
        >
          <IconeWhatsApp className="h-5 w-5 shrink-0" />
          Falar no WhatsApp
          <span className="sr-only"> (abre o WhatsApp em outra janela)</span>
        </a>
        <SalvarContatoBotao />
      </div>
    </div>
  );
}
