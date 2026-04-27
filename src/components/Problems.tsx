import { AlertTriangle, SignalLow, Loader2, Volume2 } from "lucide-react";

const problems = [
  { icon: AlertTriangle, label: "Trava no meio do filme" },
  { icon: SignalLow, label: "Queda constante de sinal" },
  { icon: Loader2, label: "Demora pra carregar" },
  { icon: Volume2, label: "Imagem ou som ruim" },
];

const Problems = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Reconhece esses sintomas?
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Sua TV está te <span className="text-gradient-accent">deixando na mão</span>?
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Você não precisa trocar de aparelho. Na maioria dos casos, é só uma configuração mal feita.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="glass-card group relative flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold leading-tight text-foreground sm:text-base">
                  {p.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
