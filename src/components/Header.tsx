import WhatsAppButton from "@/components/WhatsAppButton";
import logoUrl from "@/assets/logo-dica-antenista.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
      <div className="container flex h-16 items-center justify-between gap-3 sm:h-20">
        <a href="/" className="flex items-center gap-2 shrink-0" aria-label="Dica do Antenista - Página inicial">
          <img
            src={logoUrl}
            alt="Dica do Antenista - Suporte para configuração de aplicativos em Smart TV"
            width="180"
            height="56"
            fetchPriority="high"
            decoding="async"
            className="h-10 w-auto sm:h-14 object-contain"
          />
        </a>
        <WhatsAppButton variant="compact" label="WhatsApp" source="header" />
      </div>
    </header>
  );
};

export default Header;
