import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Configurei o IBO Player na minha Samsung em poucos minutos. Atendimento rápido e explicado passo a passo pelo WhatsApp.",
    author: "Carla M.",
    role: "Smart TV Samsung",
  },
  {
    quote: "Já tinha tentado instalar sozinho na LG e não conseguia. O suporte resolveu tudo pelo WhatsApp, sem complicação.",
    author: "Rodrigo S.",
    role: "Smart TV LG",
  },
  {
    quote: "Ativação do IBO Player no TV Box feita direto comigo. Fácil, rápido e sem precisar sair de casa.",
    author: "Patrícia L.",
    role: "TV Box Android",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Depoimentos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Clientes que já <span className="text-gradient-accent">receberam suporte</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="glass-card relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/20" strokeWidth={1.5} />
              <div className="mb-4 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="flex-1 text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.author}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
