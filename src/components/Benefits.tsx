import { CheckCircle2, Headphones, Settings2, Sparkles } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const benefits = [
  {
    icon: Sparkles,
    title: "Melhor desempenho",
    desc: "Sua TV roda mais rápido e responde no toque, sem engasgar.",
  },
  {
    icon: CheckCircle2,
    title: "Menos travamentos",
    desc: "Adeus filme pausando no meio. Streaming fluído de ponta a ponta.",
  },
  {
    icon: Settings2,
    title: "Imagem ajustada",
    desc: "Qualidade de imagem otimizada para o seu aparelho e conexão.",
  },
  {
    icon: Headphones,
    title: "Suporte no WhatsApp",
    desc: "Atendimento rápido, direto e sem fila de espera. Você fala, a gente resolve.",
  },
];

const Benefits = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-64 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container relative">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            O que a Digital Net faz por você
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            A gente ajusta tudo.{" "}
            <span className="text-gradient-primary">Você só assiste.</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="glass-card group relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-cta text-primary-foreground shadow-glow">
                    <Icon className="h-7 w-7" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <WhatsAppButton label="Quero ajustar minha TV agora" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
