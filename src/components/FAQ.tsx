import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Como instalar o IBO Player na Smart TV?",
    a: "Nós te orientamos, pelo WhatsApp, na instalação do IBO Player em Smart TVs Samsung, LG, Android TV, Google TV, Fire TV Stick e TV Box. Você faz tudo direto na TV, sem precisar levar o aparelho a lugar nenhum.",
  },
  {
    q: "Como configurar o IBO Player na Smart TV Samsung?",
    a: "Em TVs Samsung com sistema Tizen, orientamos a instalação do aplicativo, o preenchimento da MAC address e a ativação da licença passo a passo, até o IBO Player abrir corretamente com sua lista.",
  },
  {
    q: "Como configurar o IBO Player na Smart TV LG?",
    a: "Em TVs LG com sistema webOS, nosso suporte orienta a instalação do aplicativo e a ativação usando a MAC address, além de todos os ajustes necessários para o funcionamento correto do IBO Player.",
  },
  {
    q: "Como ativar o IBO Player?",
    a: "A ativação é feita informando os dados da sua licença dentro do aplicativo. Nossa equipe conduz cada tela pelo WhatsApp para que a ativação seja concluída sem erros.",
  },
  {
    q: "O IBO Player funciona em Android TV e Google TV?",
    a: "Sim. O IBO Player é totalmente compatível com Android TV e Google TV (Sony, TCL, Philips, Chromecast e outros). Orientamos a instalação e a configuração para o seu modelo.",
  },
  {
    q: "O IBO Player funciona em TV Box?",
    a: "Sim, em TV Box Android compatíveis com o aplicativo. Fazemos a verificação de compatibilidade antes de iniciar o suporte, para garantir que o IBO Player rode corretamente no seu aparelho.",
  },
  {
    q: "Preciso de suporte técnico especializado?",
    a: "Sim — e é exatamente isso que oferecemos. Você fala direto com um especialista em IBO Player, sem robô, sem espera, e recebe orientação humana até o aplicativo estar 100% funcional.",
  },
  {
    q: "Quanto tempo demora a configuração do IBO Player?",
    a: "Na maioria dos casos, a instalação e a configuração são concluídas em poucos minutos. O tempo pode variar conforme o modelo da TV e o ritmo de quem está sendo atendido.",
  },
  {
    q: "O atendimento é feito pelo WhatsApp?",
    a: "Sim. Todo o suporte é 100% remoto, pelo WhatsApp. Você não precisa sair de casa nem levar seu equipamento a nenhum lugar — resolvemos junto com você, na sua TV.",
  },
  {
    q: "Quais aparelhos são compatíveis com o IBO Player?",
    a: "Smart TVs Samsung (Tizen), LG (webOS), Android TV, Google TV, Amazon Fire TV Stick e TV Box Android compatíveis. Em caso de dúvida sobre o seu modelo, confirmamos a compatibilidade pelo WhatsApp antes de iniciar.",
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
            Perguntas <span className="text-gradient-accent">frequentes</span> sobre o IBO Player
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Tire suas dúvidas sobre instalação, configuração, ativação e suporte do IBO Player em Smart TV, TV Box e Android.
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
