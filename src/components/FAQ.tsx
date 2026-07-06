import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Como funciona a ativação do IBO Player?",
    a: "Você fala com nosso especialista pelo WhatsApp, informa seu dispositivo e nós orientamos, passo a passo, a instalação e a ativação da licença até o aplicativo abrir corretamente.",
  },
  {
    q: "O atendimento é totalmente remoto?",
    a: "Sim. Todo o suporte é feito à distância, pelo WhatsApp. Você não precisa sair de casa nem levar seu equipamento a lugar nenhum.",
  },
  {
    q: "Quanto tempo demora a configuração?",
    a: "Na maioria dos casos, o processo leva poucos minutos. O tempo pode variar conforme o dispositivo e a sua familiaridade com a TV.",
  },
  {
    q: "Quais dispositivos são compatíveis?",
    a: "Smart TVs Samsung (Tizen) e LG (webOS), Android TV, Google TV, Fire TV Stick e TV Box Android compatíveis com o aplicativo.",
  },
  {
    q: "Como solicito o atendimento?",
    a: "Basta clicar em qualquer botão do WhatsApp nesta página. Uma pessoa da nossa equipe responde e inicia o suporte com você.",
  },
  {
    q: "Preciso levar meu equipamento a algum lugar?",
    a: "Não. Todo o atendimento é remoto pelo WhatsApp, direto na sua casa, com sua TV ou TV Box.",
  },
  {
    q: "O IBO Player funciona na Smart TV Samsung e LG?",
    a: "Sim. O aplicativo é compatível com Samsung (Tizen) e LG (webOS). Orientamos a instalação no seu modelo específico.",
  },
  {
    q: "A configuração é difícil?",
    a: "Não. Você não precisa entender de tecnologia — nosso suporte conduz cada etapa de forma simples e tranquila.",
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
