import { Link } from "@tanstack/react-router";
import { type EditorialArticle } from "@/data/orientacoes";
import { editorialPreview, isPublished } from "@/lib/editorial";
import { BlocoContato } from "./ContatoMagnet";
import { IconeAviso } from "./icons";

export function EditorialNotice() {
  if (!editorialPreview) return null;
  return (
    <p className="border-b border-border bg-secondary px-5 py-3 text-center text-base text-foreground">
      Versão para revisão profissional · Os rascunhos não estão publicados.
    </p>
  );
}

/** Aviso raro: só entra quando o texto trata de procurar atendimento de urgência. */
export function EditorialUrgencia({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 flex gap-4 rounded-lg border-2 border-destructive bg-card p-5">
      <IconeAviso className="mt-0.5 h-6 w-6 shrink-0 text-destructive" />
      <div>
        <p className="text-base font-bold text-destructive">Procure atendimento de urgência</p>
        <p className="mt-1 text-base leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

export function EditorialCard({ article }: { article: EditorialArticle }) {
  return (
    <article className="h-full">
      <Link
        to="/orientacoes/$slug"
        params={{ slug: article.slug }}
        className="flex h-full flex-col border-t-2 border-border py-6 transition-colors hover:border-primary"
      >
        <h3 className="text-xl font-bold leading-snug">{article.title}</h3>
        <p className="mt-3 mb-5 text-lg leading-relaxed text-muted-foreground">
          {article.description}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 font-semibold text-deep underline underline-offset-4">
          Ler orientação
        </span>
      </Link>
    </article>
  );
}

export function EditorialContact() {
  return (
    <div className="mx-auto mt-14 max-w-6xl">
      <BlocoContato
        titulo="Preocupado com a mobilidade de um familiar?"
        texto="Converse com o Dr. Alan sobre o caso e veja se a fisioterapia em casa faz sentido para a sua família."
        mensagem="Olá, Dr. Alan! Li uma orientação no site e gostaria de conversar sobre um familiar."
      />
    </div>
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
      <div className="mt-10 rounded-lg border border-border p-6 text-base">
        <p className="font-bold">Revisão profissional: {article.review.name}</p>
        {article.review.credential && <p className="mt-2">{article.review.credential}</p>}
        <p className="mt-2 text-muted-foreground">
          Revisado em {formatDate(article.review.reviewedAt)}.
        </p>
      </div>
    );
  return (
    <div className="mt-10 rounded-lg border-2 border-dashed border-border bg-secondary p-6 text-base">
      <p className="font-bold">Revisão profissional pendente</p>
      <p className="mt-2 text-muted-foreground">
        Espaço reservado para a identificação e a data da revisão, após aprovação e autorização do
        Dr. Alan Oliveira Costa.
      </p>
    </div>
  );
}
