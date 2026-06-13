import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "O IBO Player funciona na Smart TV Samsung?",
    a: "Sim. O IBO Player é compatível com Smart TVs Samsung (Tizen). Nossa equipe orienta a instalação e configuração no seu modelo pelo WhatsApp.",
  },
  {
    q: "Como configurar IBO Player na LG?",
    a: "Em Smart TVs LG (webOS), a configuração envolve instalar o aplicativo e inserir os dados de ativação. Te orientamos passo a passo pelo WhatsApp.",
  },
  {
    q: "Vocês ajudam na instalação?",
    a: "Sim. Oferecemos suporte completo para instalação e configuração do IBO Player, com orientação humana pelo WhatsApp durante todo o processo.",
  },
  {
    q: "O IBO Player funciona em TV Box?",
    a: "Sim, em TV Box Android e dispositivos compatíveis com o aplicativo. Verificamos seu aparelho antes de iniciar a configuração.",
  },
  {
    q: "Como recebo suporte?",
    a: "Todo o atendimento é feito pelo WhatsApp, com resposta humana em poucos minutos. Acompanhamos você durante todo o processo de configuração.",
  },
  {
    q: "A configuração é difícil?",
    a: "Não. Você não precisa entender de tecnologia — nosso suporte humano orienta cada etapa pelo WhatsApp, de forma simples e tranquila.",
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
            Tire suas dúvidas sobre instalação, configuração e suporte do IBO Player.
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
