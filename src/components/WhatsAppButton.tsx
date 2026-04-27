import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  variant?: "primary" | "ghost" | "compact";
  label?: string;
  className?: string;
  message?: string;
}

const PHONE = "5511999999999"; // placeholder — substituir pelo WhatsApp real

const WhatsAppButton = ({
  variant = "primary",
  label = "Falar com especialista agora",
  className,
  message = "Olá! Minha TV está travando e quero ajuda da Digital Net.",
}: WhatsAppButtonProps) => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  if (variant === "compact") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-glow",
          className,
        )}
      >
        <MessageCircle className="h-4 w-4" /> {label}
      </a>
    );
  }

  if (variant === "ghost") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-base font-semibold text-primary transition-all hover:bg-primary/10",
          className,
        )}
      >
        <MessageCircle className="h-5 w-5" /> {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-cta px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_25px_70px_-15px_hsl(var(--primary)/0.7)] sm:text-lg",
        className,
      )}
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
      </span>
      <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
      {label}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </a>
  );
};

export default WhatsAppButton;
