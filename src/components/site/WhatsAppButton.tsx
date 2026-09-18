import type { ReactNode } from "react";
import { whatsappLink } from "@/lib/site";
import { IconeWhatsApp } from "./icons";

type Props = {
  children: ReactNode;
  mensagem?: string;
  variant?: "primary" | "outline";
  className?: string;
  trackingId?: string;
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg px-6 py-3 text-base font-semibold transition-[background-color,border-color,color,scale] duration-150 ease-out motion-safe:active:scale-[0.98]";

const variantes = {
  primary: "bg-primary text-primary-foreground hover:bg-deep",
  outline: "border-2 border-primary bg-card text-deep hover:bg-secondary",
};

export function WhatsAppButton({
  children,
  mensagem,
  variant = "primary",
  className = "",
  trackingId,
}: Props) {
  return (
    <a
      href={whatsappLink(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      data-whatsapp-event={trackingId}
      className={`${base} ${variantes[variant]} ${className}`}
    >
      <IconeWhatsApp className="h-5 w-5 shrink-0" />
      {children}
      <span className="sr-only"> (abre o WhatsApp em outra janela)</span>
    </a>
  );
}
