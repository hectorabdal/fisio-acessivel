import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { type EditorialArticle } from "@/data/orientacoes";
import { editorialPreview, isPublished } from "@/lib/editorial";
import { WhatsAppButton } from "./WhatsAppButton";
import { site } from "@/lib/site";

export function EditorialNotice() {
  if (!editorialPreview) return null;
  return (
    <p className="border-b border-border bg-secondary px-5 py-3 text-center text-sm text-foreground">
      Versão para revisão profissional · Os rascunhos não estão publicados.
    </p>
  );
}

export function EditorialCard({ article }: { article: EditorialArticle }) {
  return (
    <article className="flex h-full flex-col border-t-2 border-primary/40 py-7">
      <p className="text-sm font-semibold text-deep">{article.category}</p>
      <h3 className="mt-4 text-2xl font-bold leading-snug tracking-tight">
        <Link
          to="/orientacoes/$slug"
          params={{ slug: article.slug }}
          className="hover:underline underline-offset-4"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mt-4 mb-6 text-base leading-relaxed text-muted-foreground">
        {article.description}
      </p>
      <Link
        to="/orientacoes/$slug"
        params={{ slug: article.slug }}
        className="mt-auto flex min-h-11 items-center justify-between gap-3 font-semibold text-deep"
      >
        Ler orientação <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0" />
      </Link>
    </article>
  );
}

export function EditorialContact() {
  return (
    <section className="mx-auto mt-16 max-w-6xl rounded-3xl border border-border bg-secondary p-7 sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-deep">
        Atendimento domiciliar em {site.cidade}
      </p>
      <h2 className="mt-3 max-w-3xl text-2xl font-bold sm:text-3xl">
        Está preocupado com a mobilidade de um familiar?
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        A {site.nome} realiza atendimento fisioterapêutico domiciliar em {site.cidade}. Converse com
        o {site.profissional} para entender se essa modalidade pode ser adequada e solicitar
        informações sobre a avaliação inicial.
      </p>
      <WhatsAppButton
        trackingId="whatsapp_orientacoes"
        className="mt-6 max-w-full bg-deep text-white"
      >
        Conversar pelo WhatsApp
      </WhatsAppButton>
    </section>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(
    new Date(`${value}T12:00:00Z`),
  );
}

export function EditorialReview({ article }: { article: EditorialArticle }) {
  if (isPublished(article) && article.review)
    return (
      <div className="mt-10 rounded-2xl border border-border p-6 text-base">
        <p className="font-semibold">Revisão profissional: {article.review.name}</p>
        {article.review.credential && <p className="mt-2">{article.review.credential}</p>}
        <p className="mt-2 text-muted-foreground">
          Revisado em {formatDate(article.review.reviewedAt)}.
        </p>
      </div>
    );
  return (
    <div className="mt-10 rounded-2xl border border-dashed border-border bg-secondary/40 p-6 text-base">
      <p className="font-semibold">Revisão profissional pendente</p>
      <p className="mt-2 text-muted-foreground">
        Espaço reservado para identificação e data da revisão, após aprovação e autorização do Dr.
        Alan Oliveira Costa.
      </p>
    </div>
  );
}
