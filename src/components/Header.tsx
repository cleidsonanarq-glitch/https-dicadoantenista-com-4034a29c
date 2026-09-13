import logoUrl from "@/assets/logo-dica-antenista.png";

const NAV_LINKS = [
  { label: "Smart TV", href: "/#smart-tv" },
  { label: "Dispositivos", href: "/#dispositivos-android" },
  { label: "Configuração", href: "/#configuracao-redes" },
  { label: "Suporte", href: "/#suporte-tecnico" },
  { label: "Dúvidas", href: "/#faq-ajuda" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
      <div className="container flex h-16 items-center justify-between gap-3 sm:h-20">
        <a href="/" className="flex items-center gap-2 shrink-0" aria-label="Dica do Antenista - Página inicial">
          <img
            src={logoUrl}
            alt="Dica do Antenista - Assistência técnica para conectividade e redes"
            width="180"
            height="56"
            fetchPriority="high"
            decoding="async"
            className="h-10 w-auto sm:h-14 object-contain"
          />
          <span className="hidden md:block leading-tight">
            <span className="block text-sm font-bold text-foreground">Dica do Antenista</span>
            <span className="block text-[11px] font-medium text-muted-foreground">Suporte & Configuração</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/#atendimento"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-glow"
        >
          Atendimento WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
