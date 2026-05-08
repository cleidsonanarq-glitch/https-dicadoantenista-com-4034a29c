import { MessageCircle } from "lucide-react";
import { triggerWebhook } from "@/lib/webhook";
import { trackEvent } from "@/lib/tracking";
import {
  WHATSAPP_PHONE,
  WHATSAPP_DEFAULT_MESSAGE,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";

const FloatingWhatsApp = () => {
  const href = buildWhatsAppUrl();

  const handleClick = () => {
    trackEvent("click_whatsapp", { source: "floating-button" });
    void triggerWebhook({
      source: "floating-button",
      message: WHATSAPP_DEFAULT_MESSAGE,
      phone: WHATSAPP_PHONE,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Fale conosco no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary py-3 pl-3 pr-4 text-primary-foreground shadow-glow transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
        <MessageCircle className="relative w-5 h-[19px]" strokeWidth={2.4} />
      </span>
      <span className="hidden text-sm font-bold sm:inline">Fale conosco</span>
    </a>
  );
};

export default FloatingWhatsApp;
