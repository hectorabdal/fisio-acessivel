export type EditorialReview = {
  name: string;
  reviewedAt: string;
  publishedAt: string;
  credential?: string;
};
export type EditorialArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  tags: string[];
  status: "draft" | "published";
  review: EditorialReview | null;
  intro: string;
  answer: string;
  sections: { heading: string; text: string; reference?: string }[];
  faqs: { question: string; answer: string }[];
  conclusion: string;
  related: string[];
  references: string[];
};

export const editorialReferences: Record<string, { title: string; url: string }> = {
  coffito: {
    title: "COFFITO — Caderno de Boas Práticas: Fisioterapia na Atenção Domiciliar (2024)",
    url: "https://www.coffito.gov.br/nsite/wp-content/uploads/2024/06/caderno-de-boas-praticas.pdf",
  },
  norma: {
    title: "COFFITO — Resolução nº 565/2022: Fisioterapia na Atenção Domiciliar",
    url: "https://www.coffito.gov.br/nsite/wp-content/uploads/2023/03/RESOLUCAO-No-565-DE-9-DE-DEZEMBRO-DE-2022-RESOLUCAO-No-565-DE-9-DE-DEZEMBRO-.pdf",
  },
  quedas: {
    title: "Mariana Varella — Quedas em idosos: um problema grave, mas evitável",
    url: "https://drauziovarella.uol.com.br/coluna-da-mariana-varella/quedas-em-idosos-um-problema-grave-mas-evitavel/",
  },
  ednor: {
    title: "Dr. Ednor Neto — Prevenção de quedas: o que o geriatra recomenda",
    url: "https://www.drednorgeriatra.com/blog/prevencao-quedas-idosos",
  },
  usp: {
    title:
      "Araújo, Miranda e Silva — Sarcopenia in elderly people: agreement between predictor methods (2024)",
    url: "https://revistas.usp.br/rbefe/en/article/view/190873",
  },
  treino: {
    title:
      "Viana e colaboradores — Resistance training as a tool for changing muscle mass and frailty status in sarcopenic older women (2022)",
    url: "https://revistas.usp.br/fpusp/en/article/view/207867",
  },
  artmed: {
    title:
      "Tofani, Abreu e Porto — Envelhecimento muscular, sarcopenia e fisioterapia traumato-ortopédica (2023; resumo consultado)",
    url: "https://portal.secad.artmed.com.br/doi/artigo/envelhecimento-muscular-sarcopenia-e-fisioterapia-traumato-ortopedica",
  },
};

export const editorialCategories = [
  "Cuidado da pessoa idosa",
  "Fisioterapia domiciliar",
  "Mobilidade e independência",
  "Prevenção de quedas",
  "Força e funcionalidade",
  "Orientações para familiares",
];

// Somente textos revisados e aprovados devem entrar nesta lista.
export const publishedArticles: EditorialArticle[] = [];
