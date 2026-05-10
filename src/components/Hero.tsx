import heroTV from "@/assets/hero-tv.webp";
import heroTVMobile from "@/assets/hero-tv-720.webp";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Tv, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
      {/* Decorative blobs — desktop only to save mobile GPU/paint */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 hidden h-96 w-96 rounded-full bg-primary/15 blur-3xl sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 right-0 hidden h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl sm:block"
      />

      <div className="container relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* Left: Copy */}
        <div className="text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-accent" />
            Suporte rápido • Direto no WhatsApp
          </div>

          <h1 className="font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Pare de sofrer com{" "}
            <span className="relative inline-block">
              <span className="text-gradient-accent inline-block">TV travando</span>
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-accent opacity-60" />
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
            <span className="font-semibold text-foreground">90% das TVs que travam não têm defeito.</span>{" "}
            O erro está na configuração — e a <span className="font-semibold text-primary">Dica do Antenista</span> resolve em minutos pelo WhatsApp.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 lg:items-start">
            <WhatsAppButton label="Resolver minha TV agora" source="hero" />
            <span className="text-center text-xs uppercase tracking-wider text-muted-foreground lg:text-left">
              Atendimento humano • Resposta em minutos
            </span>
          </div>

          {/* Mini trust strip */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground sm:gap-x-8 lg:justify-start">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground sm:text-2xl">+5 mil</span> clientes atendidos
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground sm:text-2xl">⭐ 4.9/5.0</span> avaliação média
            </div>
          </div>
        </div>

        {/* Right: TV mock */}
        <div className="relative mx-auto w-full max-w-xl">
          <div
            aria-hidden
            className="absolute -inset-4 hidden rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl sm:block"
          />
          <div
            className="relative overflow-hidden rounded-3xl border border-border shadow-card-soft"
            style={{ aspectRatio: "1 / 1" }}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet={heroTVMobile} type="image/webp" />
              <img
                src={heroTV}
                alt="Smart TV reproduzindo streaming em alta qualidade após ajustes da Dica do Antenista"
                width={1280}
                height={1280}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
            {/* Floating status card */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs">
              <div className="glass-card flex items-center gap-3 rounded-2xl p-4">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Tv className="h-5 w-5 text-primary" />
                  <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">Conexão estável</p>
                  <p className="truncate text-xs text-muted-foreground">Streaming em 4K • 0 travamentos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
