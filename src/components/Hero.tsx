import heroTV from "@/assets/hero-tv.jpg";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Tv, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[140px]" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* Left: Copy */}
        <div className="animate-float-up text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
            <Zap className="h-3.5 w-3.5 text-accent" />
            Suporte rápido • Direto no WhatsApp
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl">
            Pare de sofrer com{" "}
            <span className="relative inline-block">
              <span className="text-gradient-accent animate-glitch inline-block">TV travando</span>
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-accent opacity-60" />
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            <span className="font-semibold text-foreground">90% das TVs que travam não têm problema no aparelho.</span>{" "}
            O erro está na configuração — e a <span className="font-semibold text-primary">Dica do Antenista</span> resolve isso pra você em minutos.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-start">
            <WhatsAppButton label="Falar com especialista agora" source="hero" />
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Sem fila • Resposta em minutos
            </span>
          </div>

          {/* Mini trust strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground lg:justify-start">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">+5 mil</span> clientes atendidos
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">⭐ 4.9</span> avaliação média
            </div>
          </div>
        </div>

        {/* Right: TV mock */}
        <div className="relative mx-auto w-full max-w-xl animate-float-up [animation-delay:150ms]">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-transparent to-accent/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-card-soft">
            <img
              src={heroTV}
              alt="Smart TV reproduzindo conteúdo em alta qualidade após ajustes da Dica do Antenista"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
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
