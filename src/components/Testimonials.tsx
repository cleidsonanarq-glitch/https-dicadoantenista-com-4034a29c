import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Minha TV travava todo dia… agora está perfeita. Atendimento muito rápido pelo WhatsApp.",
    author: "Carla M.",
    role: "Cliente Digital Net",
  },
  {
    quote: "Pensei que ia precisar comprar uma TV nova. Em 15 minutos resolveram tudo remotamente.",
    author: "Rodrigo S.",
    role: "Cliente Digital Net",
  },
  {
    quote: "A imagem ficou outra. Sem travamento nenhum nos jogos e nas séries. Recomendo demais.",
    author: "Patrícia L.",
    role: "Cliente Digital Net",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Quem usa, recomenda
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Resultados <span className="text-gradient-accent">reais</span>, todo dia.
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
