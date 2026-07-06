import { Headphones, MonitorSmartphone, Wifi, Clock } from "lucide-react";

const items = [
  { icon: Headphones, label: "Atendimento humanizado" },
  { icon: Wifi, label: "Suporte remoto" },
  { icon: MonitorSmartphone, label: "Compatível com diversos dispositivos" },
  { icon: Clock, label: "Resposta rápida no WhatsApp" },
];

const TrustBar = () => {
  return (
    <section aria-label="Diferenciais do atendimento" className="border-y border-border/60 bg-secondary/40">
      <div className="container py-4 sm:py-5">
        <ul className="grid grid-cols-2 gap-3 text-xs font-medium text-muted-foreground sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3 sm:text-sm">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <li key={it.label} className="flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
                <span className="text-foreground/90">{it.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default TrustBar;
