import { MessageCircle, Wrench, PartyPopper } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Você chama no WhatsApp",
    desc: "Toca o botão e fala direto com um especialista. Sem robô, sem espera.",
  },
  {
    n: "02",
    icon: Wrench,
    title: "A gente ajusta tudo",
    desc: "Diagnóstico rápido e ajustes feitos remotamente, com você acompanhando.",
  },
  {
    n: "03",
    icon: PartyPopper,
    title: "TV funcionando perfeita",
    desc: "Streaming fluído, imagem nítida e nada de travamento. Pronto pra maratonar.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Simples assim
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Em 3 passos sua TV <span className="text-gradient-primary">volta a funcionar</span>
          </h2>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {/* Connector line */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />

          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative text-center">
                <div className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-cta opacity-20 blur-xl" />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 bg-card">
                    <Icon className="h-10 w-10 text-primary" strokeWidth={1.8} />
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground shadow-accent-glow">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold sm:text-2xl">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground sm:text-base">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
