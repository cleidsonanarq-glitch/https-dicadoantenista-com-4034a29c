import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Streaming na minha Smart TV ficou muito mais estável. Imagem em HD e zero travamento durante os jogos.",
    author: "Carla M.",
    role: "Cliente Smart TV",
  },
  {
    quote: "Configuração rápida no TV Box e suporte excelente pelo WhatsApp. Recomendo para quem quer praticidade.",
    author: "Rodrigo S.",
    role: "Cliente TV Box",
  },
  {
    quote: "Uso no celular e na TV ao mesmo tempo. App leve, abre rápido e funciona muito bem.",
    author: "Patrícia L.",
    role: "Cliente Multi-dispositivo",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Clientes que já assistem com a gente
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Experiência <span className="text-gradient-accent">estável e prática</span>
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
