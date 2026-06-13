import { MessageCircle, Smartphone, Settings2, Headphones } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Entre em contato pelo WhatsApp",
    desc: "Toque no botão e fale direto com um especialista, sem robô e sem espera.",
  },
  {
    n: "02",
    icon: Smartphone,
    title: "Informe seu aparelho",
    desc: "Diga se é Smart TV Samsung, LG, Android TV ou TV Box para o suporte adequado.",
  },
  {
    n: "03",
    icon: Settings2,
    title: "Receba orientação para configuração",
    desc: "Te guiamos passo a passo na instalação e configuração do IBO Player no seu dispositivo.",
  },
  {
    n: "04",
    icon: Headphones,
    title: "Tenha suporte durante o processo",
    desc: "Acompanhamento humano até o aplicativo estar funcionando corretamente.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Configure em <span className="text-gradient-primary">4 passos</span>
          </h2>
        </div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                <h3 className="font-display text-lg font-bold sm:text-xl">{s.title}</h3>
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
