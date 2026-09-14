import { site } from "@/lib/site";

export const SEO = {
  siteName: site.nome,
};

type PageHeadOptions = {
  path: "/" | "/servicos" | "/sobre" | "/contato" | "/politica-de-privacidade";
  title: string;
  description: string;
  ogType?: "website" | "profile";
  breadcrumbName?: string;
};

export function createPageHead({
  path,
  title,
  description,
  ogType = "website",
  breadcrumbName,
}: PageHeadOptions) {
  const personId = "/#alan-oliveira-costa";
  const businessId = "/#fisio-acessivel";
  const serviceId = "/#fisioterapia-domiciliar";
  const pageId = `${path}#webpage`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": "/#website",
      url: "/",
      name: site.nome,
      inLanguage: "pt-BR",
      publisher: { "@id": businessId },
    },
    {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: site.nome,
      url: "/",
      telephone: `+${site.whatsapp}`,
      email: site.email,
      sameAs: [site.instagram],
      areaServed: {
        "@type": "City",
        name: site.cidade,
        containedInPlace: { "@type": "State", name: "São Paulo" },
      },
      founder: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: site.profissional,
      jobTitle: "Fisioterapeuta",
      description:
        "Fisioterapeuta com atuação desde 2018, Pós-Graduação em Fisioterapia Geriátrica e atendimento domiciliar em Campinas.",
      sameAs: [site.instagram],
      worksFor: { "@id": businessId },
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: "Fisioterapia domiciliar em Campinas",
      serviceType: "Fisioterapia domiciliar",
      provider: { "@id": businessId },
      areaServed: { "@type": "City", name: site.cidade },
      audience: { "@type": "Audience", audienceType: "Pessoas idosas e suas famílias" },
    },
    {
      "@type": "WebPage",
      "@id": pageId,
      url: path,
      name: title,
      description,
      inLanguage: "pt-BR",
      isPartOf: { "@id": "/#website" },
      about: [{ "@id": businessId }, { "@id": personId }, { "@id": serviceId }],
    },
  ];

  if (path !== "/" && breadcrumbName) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${path}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "/" },
        { "@type": "ListItem", position: 2, name: breadcrumbName, item: path },
      ],
    });
  }

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: ogType },
      { property: "og:url", content: path },
      { property: "og:site_name", content: SEO.siteName },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      },
    ],
  };
}
