import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { IconeSeta } from "@/components/site/icons";
import { editorialReferences } from "@/data/orientacoes";
import { editorialHead, findArticle, isPublished } from "@/lib/editorial";
import {
  EditorialContact,
  EditorialNotice,
  EditorialReview,
  EditorialUrgencia,
} from "@/components/site/Editorial";

export const Route = createFileRoute("/orientacoes/$slug")({
  loader: ({ params }) => {
    const article = findArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) =>
    loaderData
      ? editorialHead(loaderData)
      : {
          meta: [
            { title: "Orientação não encontrada | Fisio Acessível" },
            { name: "robots", content: "noindex,nofollow" },
          ],
        },
  component: Artigo,
});

function Artigo() {
  const article = Route.useLoaderData();
  const related = article.related.flatMap((slug) => {
    const item = findArticle(slug);
    return item ? [item] : [];
  });
  return (
    <>
      <EditorialNotice />
      <div className="px-5 pb-4">
        <header className="mx-auto max-w-6xl py-10 sm:py-14 lg:max-w-6xl">
          <Link
            to="/orientacoes"
            className="inline-flex min-h-11 items-center gap-2 text-base font-medium text-deep"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Todas as orientações
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-deep">
            {article.category}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl sm:leading-tight">
            {article.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">
            {article.intro}
          </p>
          <p className="mt-5 text-base text-muted-foreground">
            Conteúdo educativo ·{" "}
            {isPublished(article)
              ? "Revisão profissional identificada ao final"
              : "Revisão profissional pendente"}
          </p>
        </header>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
          <nav
            aria-label="Nesta orientação"
            className="self-start rounded-lg border border-border bg-card p-5 lg:sticky lg:top-24"
          >
            <p className="text-base font-bold uppercase tracking-wide text-deep">
              Nesta orientação
            </p>
            <ol className="mt-4 space-y-3 text-base leading-snug">
              {article.sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#secao-${index}`} className="hover:underline underline-offset-4">
                    {section.heading}
                  </a>
                </li>
              ))}
              <li>
                <a href="#perguntas" className="hover:underline underline-offset-4">
                  Perguntas frequentes
                </a>
              </li>
              <li>
                <a href="#referencias" className="hover:underline underline-offset-4">
                  Referências utilizadas
                </a>
              </li>
            </ol>
          </nav>
          <article className="editorial-prose min-w-0 max-w-3xl text-lg leading-relaxed">
            <div className="rounded-lg border-2 border-deep bg-secondary p-6 sm:p-8">
              <p className="mb-3 text-base font-bold uppercase tracking-wide text-deep">
                Resposta direta
              </p>
              <p>{article.answer}</p>
            </div>
            {article.alerta && <EditorialUrgencia>{article.alerta}</EditorialUrgencia>}
            {article.sections.map((section, index) => (
              <section key={section.heading} id={`secao-${index}`} className="mt-10 scroll-mt-28">
                <h2 className="mb-4 text-2xl font-bold leading-snug sm:text-3xl">
                  {section.heading}
                </h2>
                <p>{section.text}</p>
                {section.reference && (
                  <div className="mt-3 text-sm">
                    Fonte: <SourceLink referenceKey={section.reference} />
                  </div>
                )}
              </section>
            ))}
            <section id="perguntas" className="mt-12 scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Perguntas frequentes</h2>
              {article.faqs.map((faq) => (
                <details key={faq.question} className="group border-b border-border">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-bold [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <IconeSeta className="h-5 w-5 shrink-0 text-deep transition-transform duration-200 ease-out group-open:rotate-180 motion-reduce:transition-none" />
                  </summary>
                  <p className="pb-5">{faq.answer}</p>
                </details>
              ))}
            </section>
            <section className="mt-10">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Para seguir com mais clareza</h2>
              <p>{article.conclusion}</p>
            </section>
            <section id="referencias" className="mt-12 scroll-mt-28 border-t border-border pt-8">
              <h2 className="mb-5 text-2xl font-bold">Referências utilizadas</h2>
              <ul className="list-disc space-y-4 pl-5 text-base">
                {article.references.map((key) => (
                  <li key={key}>
                    <SourceLink referenceKey={key} />
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">
                Fontes consultadas em 14/09/2026. Este conteúdo não substitui uma avaliação
                profissional individual.
              </p>
            </section>
            <EditorialReview article={article} />
            {related.length > 0 && (
              <section className="mt-12">
                <h2 className="mb-4 text-2xl font-bold">Continue a leitura</h2>
                {related.map((item) => (
                  <Link
                    to="/orientacoes/$slug"
                    params={{ slug: item.slug }}
                    key={item.slug}
                    className="flex items-center justify-between gap-4 border-b border-border py-5 text-base font-semibold text-deep"
                  >
                    {item.title}
                    <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0" />
                  </Link>
                ))}
              </section>
            )}
          </article>
        </div>
        <EditorialContact />
      </div>
    </>
  );
}

function SourceLink({ referenceKey }: { referenceKey: string }) {
  const reference = editorialReferences[referenceKey];
  if (!reference) return null;
  return (
    <a href={reference.url} className="text-deep underline underline-offset-4">
      {reference.title}
    </a>
  );
}
