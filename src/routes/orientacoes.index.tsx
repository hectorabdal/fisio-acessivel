import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { editorialCategories } from "@/data/orientacoes";
import { availableArticles, editorialHead, hasEditorialContent } from "@/lib/editorial";
import { EditorialCard, EditorialContact, EditorialNotice } from "@/components/site/Editorial";
import cuidadoIdoso from "@/assets/cuidado-idoso.jpg";

export const Route = createFileRoute("/orientacoes/")({
  beforeLoad: () => {
    if (!hasEditorialContent) throw notFound();
  },
  head: () => editorialHead(),
  component: Orientacoes,
});

function Orientacoes() {
  const [category, setCategory] = useState("Todos os assuntos");
  const visible = availableArticles.filter(
    (article) =>
      category === "Todos os assuntos" ||
      article.category === category ||
      article.tags.includes(category),
  );
  const firstRead = availableArticles.find(
    (article) => article.slug === "idoso-com-dificuldade-para-caminhar",
  );
  return (
    <>
      <EditorialNotice />
      <section className="bg-gradient-soft px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-deep">
              Orientações · Fisio Acessível
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Informação para cuidar.
              <br />
              <span className="text-deep">Respeito para envelhecer.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Orientações sobre fisioterapia, mobilidade, envelhecimento e cuidado da pessoa idosa.
              Para entender mudanças na rotina e saber quando buscar ajuda.
            </p>
            {firstRead && (
              <Link
                to="/orientacoes/$slug"
                params={{ slug: firstRead.slug }}
                className="mt-7 inline-flex items-center gap-3 text-base font-semibold text-deep underline underline-offset-4"
              >
                Percebeu uma mudança na caminhada?{" "}
                <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" />
              </Link>
            )}
          </div>
          <img
            src={cuidadoIdoso}
            alt="Cuidado e atenção à pessoa idosa"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
            width={800}
            height={600}
          />
        </div>
      </section>
      <div className="px-5 py-12">
        <section className="mx-auto max-w-6xl" aria-labelledby="orientacoes-titulo">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 id="orientacoes-titulo" className="text-2xl font-bold sm:text-3xl">
              Encontre uma orientação
            </h2>
            <p className="text-base text-muted-foreground" aria-live="polite" aria-atomic="true">
              {visible.length}{" "}
              {visible.length === 1 ? "conteúdo educativo" : "conteúdos educativos"}
            </p>
          </div>
          <div
            className="mt-6 mb-8 flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar por assunto"
          >
            {["Todos os assuntos", ...editorialCategories].map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
                className={`min-h-11 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${category === item ? "border-deep bg-deep text-white" : "border-border bg-card text-foreground hover:bg-secondary"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((article) => (
              <EditorialCard key={article.slug} article={article} />
            ))}
          </div>
          {visible.length === 0 && (
            <p className="rounded-2xl bg-secondary p-6">
              Ainda não há orientações publicadas neste assunto. Escolha outra categoria.
            </p>
          )}
        </section>
        <EditorialContact />
      </div>
    </>
  );
}
