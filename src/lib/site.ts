// Dados do negócio — Fisio Acessível, Dr. Alan Oliveira Costa.
export const site = {
  nome: "Fisio Acessível",
  profissional: "Dr. Alan Oliveira Costa",
  cidade: "Campinas",
  estado: "SP",
  whatsapp: "5519995874920",
  whatsappLabel: "(19) 99587-4920",
  telefoneLink: "+5519995874920",
  email: "acessivelfisio@gmail.com",
  instagram: "https://instagram.com/fisio.acessivel",
};

// Ficha do profissional. "pendente" marca o que ainda depende de confirmação
// do Dr. Alan e aparece no site com borda tracejada e o aviso "a confirmar".
export const fichaProfissional = [
  { t: "Formação", d: "Pós-Graduação em Fisioterapia Geriátrica", pendente: false },
  { t: "Atua desde", d: "2018", pendente: false },
  { t: "CREFITO", d: "A ser informado", pendente: true },
];

export function whatsappLink(
  mensagem = "Olá, Dr. Alan! Gostaria de conversar sobre uma avaliação inicial de fisioterapia domiciliar em Campinas.",
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

// Cartão de contato para a agenda do celular. Quebra de linha CRLF e escape de
// vírgula fazem parte do formato vCard; sem isso o Android ignora o arquivo.
export function vcardContato() {
  const linhas = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${site.profissional};;;;`,
    `FN:${site.profissional}`,
    `ORG:${site.nome}`,
    "TITLE:Fisioterapeuta",
    `TEL;TYPE=CELL:${site.telefoneLink}`,
    `EMAIL:${site.email}`,
    `NOTE:Fisioterapia domiciliar em ${site.cidade} (${site.estado}) — atendimento na casa do paciente.`,
    "END:VCARD",
  ];
  return linhas.join("\r\n");
}
