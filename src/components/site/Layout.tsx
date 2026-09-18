import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { whatsappLink } from "@/lib/site";
import { IconeWhatsApp } from "./icons";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#conteudo-principal"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground shadow-plate transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      {/* A folga embaixo impede que o botão flutuante cubra o texto no celular. */}
      <main id="conteudo-principal" tabIndex={-1} className="flex-1 pb-24 sm:pb-0">
        {children}
      </main>
      <Footer />

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        data-whatsapp-event="whatsapp_floating"
        className="fixed bottom-4 right-4 z-50 flex min-h-14 items-center gap-2.5 rounded-lg bg-primary px-5 text-base font-semibold text-primary-foreground shadow-magnet transition-[background-color,scale] duration-150 ease-out hover:bg-deep motion-safe:active:scale-[0.98] sm:bottom-6 sm:right-6"
      >
        <IconeWhatsApp className="h-7 w-7 shrink-0" />
        WhatsApp
        <span className="sr-only"> (abre o WhatsApp em outra janela)</span>
      </a>
    </div>
  );
}
