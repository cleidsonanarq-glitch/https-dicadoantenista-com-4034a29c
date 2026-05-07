import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Funciona em Smart TV?",
    a: "Sim. Atendemos as principais marcas de Smart TV do mercado e ajustamos a configuração ideal para cada modelo.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim, é totalmente compatível com celulares Android e iPhone, além de tablets.",
  },
  {
    q: "Precisa instalar algo?",
    a: "Na maioria dos casos não. Quando necessário, nosso especialista guia você passo a passo pelo WhatsApp.",
  },
  {
    q: "O suporte ajuda na instalação?",
    a: "Sim! Oferecemos suporte humano via WhatsApp do início ao fim, sem deixar você na mão.",
  },
  {
    q: "Como recebo acesso?",
    a: "Após a confirmação, o acesso é liberado em poucos minutos diretamente no WhatsApp do nosso atendimento.",
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
            Tire suas <span className="text-gradient-accent">dúvidas</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Respostas rápidas para o que você precisa saber antes de começar.
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
