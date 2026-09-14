import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/lib/site";
import { createPageHead } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () =>
    createPageHead({
      path: "/politica-de-privacidade",
      title: "Política de Privacidade | Fisio Acessível",
      description:
        "Saiba como a Fisio Acessível trata os dados de quem entra em contato pelo site ou WhatsApp, em linguagem clara e objetiva.",
      breadcrumbName: "Política de Privacidade",
    }),
  component: Privacidade,
});

const blocos = [
  {
    t: "1. Quem somos",
    p: [
      `Este site é da ${site.nome}, serviço de fisioterapia domiciliar prestado pelo ${site.profissional} em ${site.cidade} (${site.estado}).`,
    ],
  },
  {
    t: "2. Quais dados coletamos",
    p: [
      "Só recebemos os dados que você mesmo nos envia quando entra em contato — por exemplo, seu nome, telefone e as informações que você escolher contar sobre a necessidade de atendimento.",
      "Este site não possui formulário de cadastro e não pede documentos, dados de pagamento ou informações de saúde para navegar.",
    ],
  },
  {
    t: "3. Como usamos essas informações",
    p: [
      "Usamos os dados apenas para responder ao seu contato, entender a necessidade apresentada e conversar sobre as possibilidades de atendimento.",
      "Não vendemos, alugamos nem compartilhamos suas informações com terceiros para fins comerciais.",
    ],
  },
  {
    t: "4. Conversas pelo WhatsApp",
    p: [
      "Ao clicar nos botões de WhatsApp, você é levado ao aplicativo, que é operado por outra empresa e tem política de privacidade própria. As mensagens trocadas ficam registradas no aplicativo, como em qualquer conversa.",
    ],
  },
  {
    t: "5. Sigilo profissional",
    p: [
      "As informações de saúde compartilhadas durante o contato ou o atendimento são tratadas com sigilo profissional, conforme as normas aplicáveis à profissão de fisioterapeuta.",
    ],
  },
  {
    t: "6. Cookies e medição de acessos",
    p: [
      "O site pode utilizar cookies e ferramentas de medição para entender, de forma geral, como as páginas são acessadas. Esses dados são estatísticos e não identificam você pessoalmente. Você pode bloquear cookies nas configurações do seu navegador.",
    ],
  },
  {
    t: "7. Por quanto tempo guardamos",
    p: [
      "Mantemos as mensagens e informações apenas pelo tempo necessário para o atendimento e para cumprir obrigações legais.",
    ],
  },
  {
    t: "8. Seus direitos",
    p: [
      "Você pode, a qualquer momento, pedir para saber quais informações suas temos, corrigi-las ou solicitar que sejam apagadas. Basta pedir pelo WhatsApp ou pelo e-mail de contato.",
    ],
  },
  {
    t: "9. Alterações nesta política",
    p: ["Se esta política mudar, o texto atualizado será publicado nesta mesma página."],
  },
  {
    t: "10. Fale conosco",
    p: [`Dúvidas sobre privacidade podem ser enviadas para ${site.email} ou pelo WhatsApp.`],
  },
];

function Privacidade() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Esta página explica, em linguagem simples, como tratamos as informações de quem entra em
          contato com a {site.nome}.
        </p>
        <div className="mt-10 space-y-8">
          {blocos.map((b) => (
            <div key={b.t}>
              <h2 className="text-xl font-semibold text-foreground">{b.t}</h2>
              {b.p.map((texto) => (
                <p key={texto} className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {texto}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
