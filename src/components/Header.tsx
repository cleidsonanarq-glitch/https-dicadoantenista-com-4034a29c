import { Tv } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-cta shadow-glow">
            <Tv className="h-5 w-5 text-primary-foreground" strokeWidth={2.4} />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            Dica do <span className="text-primary">Antenista</span>
          </span>
        </a>
        <WhatsAppButton variant="compact" label="WhatsApp" source="header" />
      </div>
    </header>
  );
};

export default Header;
