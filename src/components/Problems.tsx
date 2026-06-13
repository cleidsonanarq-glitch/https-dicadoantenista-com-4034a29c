import { AlertTriangle, HelpCircle, Loader2, Settings2 } from "lucide-react";

const problems = [
  { icon: HelpCircle, title: "Não sabe instalar o aplicativo?", desc: "Receba orientação para instalar o IBO Player corretamente." },
  { icon: Settings2, title: "Dificuldade para configurar?", desc: "Ajudamos você durante todo o processo de configuração." },
  { icon: AlertTriangle, title: "Erro ou tela em branco?", desc: "Orientação para identificar e resolver problemas comuns." },
  { icon: Loader2, title: "Não tem suporte?", desc: "Fale com uma pessoa e receba ajuda pelo WhatsApp." },
];

const Problems = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Precisa de ajuda?
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Não consegue configurar o <span className="text-gradient-accent">IBO Player</span> sozinho?
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Nossa equipe ajuda você passo a passo, desde a instalação até a configuração correta do aplicativo no seu dispositivo.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="glass-card group relative flex flex-col gap-3 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-tight text-foreground sm:text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
