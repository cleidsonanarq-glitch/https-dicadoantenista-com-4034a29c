import { MessageCircle } from "lucide-react";

const PHONE = "5511999999999";
const message = "Olá! Minha TV está travando e quero ajuda da Digital Net.";

const FloatingWhatsApp = () => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-40" />
      <MessageCircle className="relative h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.2} />
    </a>
  );
};

export default FloatingWhatsApp;
