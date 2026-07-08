const heroTV = "/img/hero-tv.webp";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Tv, Zap, MessageCircle, Wrench, MonitorSmartphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 hidden h-96 w-96 rounded-full bg-primary/15 blur-3xl sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 right-0 hidden h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl sm:block"
      />

      <div className="container relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div className="text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-accent" />
            IBO Player • Smart TV • TV Box • Android
          </div>

          <h1 className="font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Configure seu{" "}
            <span className="relative inline-block">
              <span className="text-gradient-accent inline-block">IBO Player</span>
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-accent opacity-60" />
            </span>{" "}
            na sua Smart TV sem complicação
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
            Suporte especializado para <span className="font-semibold text-foreground">instalação, configuração e ativação</span> do IBO Player em Smart TV Samsung, LG, Android TV e TV Box.
          </p>

          <ul className="mx-auto mt-5 grid max-w-md grid-cols-1 gap-2 text-sm text-foreground sm:mt-6 sm:grid-cols-2 sm:text-base lg:mx-0">
            {[
              "Atendimento humano no WhatsApp",
              "Configuração rápida e sem complicação",
              "Suporte especializado em IBO Player",
              "Samsung, LG, Android TV e TV Box",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span aria-hidden className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground sm:text-base">
            <MonitorSmartphone className="h-4 w-4 text-primary" />
            Compatível com Samsung, LG, Android TV e TV Box
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 lg:items-start">
            <WhatsAppButton label="Falar com um Especialista" source="hero" />
            <p className="inline-flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground sm:text-sm lg:justify-start">
              <MessageCircle className="h-3.5 w-3.5 text-primary" />
              Atendimento rápido • Orientação passo a passo • Suporte humano
            </p>
          </div>

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

        <div className="relative mx-auto w-full max-w-xl">
          <div
            aria-hidden
            className="absolute -inset-4 hidden rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl sm:block"
          />
          <div
            className="relative overflow-hidden rounded-3xl border border-border shadow-card-soft"
            style={{ aspectRatio: "1 / 1" }}
          >
            <img
              src="/img/hero-tv-480.webp"
              srcSet="/img/hero-tv-480.webp 480w, /img/hero-tv-720.webp 720w, /img/hero-tv.webp 1280w"
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 50vw"
              alt="IBO Player configurado em Smart TV com suporte especializado da Dica do Antenista"
              width={1280}
              height={1280}
              fetchPriority="high"
              decoding="async"
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs">
              <div className="glass-card flex items-center gap-3 rounded-2xl p-4">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Tv className="h-5 w-5 text-primary" />
                  <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">IBO Player configurado</p>
                  <p className="truncate text-xs text-muted-foreground">Samsung • LG • Android TV • TV Box</p>
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
