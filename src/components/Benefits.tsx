import { Wrench, Settings2, Tv, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const benefits = [
  {
    icon: Wrench,
    title: "Instalação guiada",
    desc: "Te orientamos passo a passo na instalação do IBO Player no seu aparelho, do início ao fim.",
  },
  {
    icon: Settings2,
    title: "Configuração personalizada",
    desc: "Configuração feita de acordo com o seu dispositivo, sem complicação técnica.",
  },
  {
    icon: Tv,
    title: "Compatível com Smart TV Samsung, LG, Android e TV Box",
    desc: "Atendemos os principais aparelhos do mercado com orientação especializada para cada modelo.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento direto pelo WhatsApp",
    desc: "Suporte humano com resposta rápida e acompanhamento durante todo o processo.",
  },
];

const Benefits = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-64 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container relative">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Suporte especializado em IBO Player
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Por que escolher{" "}
            <span className="text-gradient-primary">nosso suporte?</span>
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
          <WhatsAppButton label="Configurar meu IBO Player" source="benefits" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
