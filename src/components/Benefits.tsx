import { Wrench, Settings2, Headphones, MessageCircle, Sparkles, ListChecks } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const benefits = [
  {
    icon: Wrench,
    title: "Instalação assistida",
    desc: "Te guiamos na instalação do IBO Player no seu aparelho, sem que você precise entender de tecnologia.",
  },
  {
    icon: Settings2,
    title: "Configuração completa",
    desc: "Ativação da licença e ajustes finais feitos junto com você, do começo ao fim.",
  },
  {
    icon: Headphones,
    title: "Suporte especializado",
    desc: "Atendimento humano com experiência real em Smart TVs, TV Box e Android.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento pelo WhatsApp",
    desc: "Sem robô e sem espera: você fala direto com um especialista.",
  },
  {
    icon: Sparkles,
    title: "Processo simples",
    desc: "Passo a passo descomplicado, no seu ritmo, sem termos técnicos.",
  },
  {
    icon: ListChecks,
    title: "Orientação durante toda a configuração",
    desc: "Acompanhamento ativo até o aplicativo funcionar corretamente na sua TV.",
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
            Por que escolher nosso suporte para{" "}
            <span className="text-gradient-primary">IBO Player?</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-12 flex flex-col items-center gap-2">
          <WhatsAppButton label="Falar com um Especialista" source="benefits" />
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            Atendimento humano • Resposta rápida
          </span>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
