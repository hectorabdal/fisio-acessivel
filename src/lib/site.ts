// Dados do negócio — Fisio Acessível, Dr. Alan Oliveira Costa.
export const site = {
  nome: "Fisio Acessível",
  profissional: "Dr. Alan Oliveira Costa",
  cidade: "Campinas",
  estado: "SP",
  whatsapp: "5519995874920",
  whatsappLabel: "(19) 99587-4920",
  email: "acessivelfisio@gmail.com",
  instagram: "https://instagram.com/fisio.acessivel",
};

export function whatsappLink(
  mensagem = "Olá, Dr. Alan! Gostaria de conversar sobre uma avaliação inicial de fisioterapia domiciliar em Campinas.",
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
