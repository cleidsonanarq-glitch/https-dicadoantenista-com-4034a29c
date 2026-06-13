import WhatsAppButton from "@/components/WhatsAppButton";
import { Clock, ShieldCheck, Users } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-primary/30 bg-gradient-card p-10 shadow-glow sm:p-14 lg:p-16">
          <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Suporte online agora
            </span>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Pronto para configurar seu{" "}
              <span className="text-gradient-accent">IBO Player?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Fale com nosso suporte e receba orientação para instalar e configurar seu aplicativo.
            </p>

            <div className="mt-8 flex justify-center">
              <WhatsAppButton label="Configurar meu IBO Player agora" source="final-cta" />
            </div>

            <div className="mt-10 grid gap-6 border-t border-border/60 pt-8 sm:grid-cols-3">
              {[
                { icon: Clock, label: "Resposta em poucos minutos" },
                { icon: Users, label: "+5 mil clientes atendidos" },
                { icon: ShieldCheck, label: "Suporte humano e seguro" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
