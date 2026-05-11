import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Funciona em qualquer Smart TV?",
    a: "Sim. Compatível com as principais marcas: Samsung, LG, TCL, Philco, AOC, Roku TV e outras Smart TVs com acesso à internet.",
  },
  {
    q: "Funciona em TV Box e celular?",
    a: "Sim. Compatível com TV Box Android, celulares Android, iPhone, tablets e também no computador.",
  },
  {
    q: "O aplicativo é leve?",
    a: "Sim. App otimizado para abrir rápido, ocupar pouca memória e rodar estável mesmo em conexões medianas.",
  },
  {
    q: "A configuração é difícil?",
    a: "Não. Configuração simples e guiada pelo WhatsApp. Em poucos minutos você já está assistindo.",
  },
  {
    q: "Tem suporte caso eu precise de ajuda?",
    a: "Sim. Suporte humano direto no WhatsApp, com resposta rápida sempre que você precisar.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="container max-w-3xl">
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
            <HelpCircle className="h-3.5 w-3.5 text-accent" />
            Perguntas frequentes
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Perguntas <span className="text-gradient-accent">frequentes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Tudo o que você precisa saber sobre compatibilidade, app e suporte.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border/70 bg-gradient-card p-2 shadow-card-soft sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border/60 last:border-b-0"
              >
                <AccordionTrigger className="px-4 text-left text-base font-semibold hover:no-underline sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
