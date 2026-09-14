import { draftArticles } from "@/data/orientacoes-rascunhos";
import { publishedArticles, type EditorialArticle } from "@/data/orientacoes";
import { site } from "@/lib/site";

// Drafts are available locally only; they never become public by accident during a build.
export const editorialPreview = import.meta.env.DEV;

export function isPublished(article: EditorialArticle) {
  return (
    article.status === "published" &&
    Boolean(article.review?.name.trim() && article.review.reviewedAt && article.review.publishedAt)
  );
}

const candidates = editorialPreview ? [...publishedArticles, ...draftArticles] : publishedArticles;
export const availableArticles = candidates.filter(
  (article) => editorialPreview || isPublished(article),
);
export const hasEditorialContent = availableArticles.length > 0;

export function findArticle(slug: string) {
  return availableArticles.find((article) => article.slug === slug);
}

export function editorialHead(article?: EditorialArticle) {
  const title = `${article?.seoTitle ?? "Orientações sobre mobilidade e envelhecimento"} | ${site.nome}`;
  const description =
    article?.description ??
    "Orientações sobre fisioterapia, mobilidade, força e prevenção de quedas para pessoas idosas, familiares e cuidadores.";
  const url = article ? `/orientacoes/${article.slug}` : "/orientacoes";
  const published = article ? isPublished(article) : !editorialPreview && hasEditorialContent;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "/" },
        { "@type": "ListItem", position: 2, name: "Orientações", item: "/orientacoes" },
        ...(article ? [{ "@type": "ListItem", position: 3, name: article.title, item: url }] : []),
      ],
    },
  ];
  if (article && published && article.review) {
    graph.push({
      "@type": "Article",
      headline: article.title,
      description,
      url,
      inLanguage: "pt-BR",
      author: { "@type": "Organization", name: site.nome },
      datePublished: article.review.publishedAt,
      dateModified: article.review.reviewedAt,
    });
  }
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: published ? "index,follow" : "noindex,nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: article ? "article" : "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: site.nome },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      },
    ],
  };
}
