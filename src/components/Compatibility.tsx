import { Tv, MonitorPlay, Cast, Radio, Smartphone, Box } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const devices = [
  { icon: Tv, name: "Samsung Smart TV", desc: "Sistema Tizen" },
  { icon: MonitorPlay, name: "LG Smart TV", desc: "Sistema webOS" },
  { icon: Cast, name: "Android TV", desc: "Sony, TCL, Philips e outras" },
  { icon: Radio, name: "Google TV", desc: "Chromecast e modelos recentes" },
  { icon: Smartphone, name: "Fire TV Stick", desc: "Amazon Fire OS" },
  { icon: Box, name: "TV Box Android", desc: "Modelos compatíveis" },
];

const Compatibility = () => {
  return (
    <section id="compatibilidade" className="relative py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Compatibilidade
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Configuramos o IBO Player no seu{" "}
            <span className="text-gradient-primary">dispositivo</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Atendemos as principais marcas e sistemas de Smart TV e TV Box do mercado.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {devices.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.name}
                className="glass-card group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold sm:text-lg">{d.name}</h3>
                  <p className="text-xs text-muted-foreground sm:text-sm">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Seu aparelho não está na lista? Consulte pelo WhatsApp — verificamos a compatibilidade antes.
        </p>

        <div className="mt-8 flex justify-center">
          <WhatsAppButton label="Verificar meu dispositivo" source="compatibility" />
        </div>
      </div>
    </section>
  );
};

export default Compatibility;
