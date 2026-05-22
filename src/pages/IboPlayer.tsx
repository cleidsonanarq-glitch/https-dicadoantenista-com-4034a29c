import { useEffect } from "react";
import { CheckCircle2, Headphones, Settings2, Sparkles } from "lucide-react";
import LandingVariant, { type LandingVariantConfig } from "@/components/LandingVariant";

const config: LandingVariantConfig = {
  eyebrow: "IBO Player • Samsung • LG • Smart TV",
  headlinePre: "IBO Player",
  headlineAccent: "estável e fluído",
  headlinePost: "na sua Smart TV",
  subheadline: (
    <>
      Configuração simples no <span className="font-semibold text-foreground">IBO Player</span>, compatível com{" "}
      <span className="font-semibold text-foreground">Samsung e LG</span>, com aplicativo leve e{" "}
      <span className="font-semibold text-primary">suporte humano no WhatsApp</span>.
    </>
  ),
  heroAlt: "IBO Player configurado em Smart TV Samsung e LG com streaming HD estável",
  heroStatusTitle: "IBO Player estável",
  heroStatusDesc: "Samsung • LG • HD sem travamentos",
  benefitsEyebrow: "Por que usar com a Dica do Antenista",
  benefitsTitlePre: "IBO Player com",
  benefitsTitleAccent: "configuração simples",
  benefits: [
    {
      icon: Settings2,
      title: "Compatível com Samsung e LG",
      desc: "Funciona perfeitamente no IBO Player de Smart TVs Samsung e LG, além de outras marcas com acesso à internet.",
    },
    {
      icon: Sparkles,
      title: "Aplicativo leve no IBO Player",
      desc: "App otimizado para abrir rápido, ocupar pouca memória e rodar fluído mesmo em conexões medianas.",
    },
    {
      icon: CheckCircle2,
      title: "Streaming estável em HD",
      desc: "Transmissão contínua, sem travamentos no meio do conteúdo, com experiência premium em alta qualidade.",
    },
    {
      icon: Headphones,
      title: "Configuração guiada no WhatsApp",
      desc: "Atendimento humano que te guia passo a passo na instalação e configuração do IBO Player.",
    },
  ],
  faqTitleAccent: "sobre o IBO Player",
  faqs: [
    {
      q: "Funciona em Smart TV Samsung?",
      a: "Sim. O IBO Player é compatível com Smart TVs Samsung que possuem acesso à loja de aplicativos e conexão com internet.",
    },
    {
      q: "Funciona em Smart TV LG?",
      a: "Sim. Compatível com Smart TVs LG (webOS) com acesso à loja de apps. A configuração é simples e guiada pelo WhatsApp.",
    },
    {
      q: "Como instalar e configurar o IBO Player?",
      a: "Após baixar o aplicativo na sua TV, basta nos chamar no WhatsApp. Em poucos minutos a configuração estará pronta e você já pode assistir.",
    },
    {
      q: "Precisa de internet muito rápida?",
      a: "Não. O aplicativo é leve e otimizado para rodar estável mesmo em conexões medianas. Para qualidade HD ideal, recomendamos pelo menos 10 Mbps.",
    },
    {
      q: "A configuração é fácil?",
      a: "Sim. Você não precisa entender de tecnologia. Nosso suporte humano configura tudo com você no WhatsApp, em poucos minutos.",
    },
  ],
  ctaMicrocopy: "Resposta rápida • Configuração simples • Compatível com Samsung e LG",
};

const IboPlayer = () => {
  useEffect(() => {
    document.title = "IBO Player para Smart TV Samsung e LG | Configuração Simples";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "IBO Player estável e fluído para Smart TV Samsung e LG. Aplicativo leve, configuração simples e suporte humano no WhatsApp.");
  }, []);

  return <LandingVariant config={config} />;
};

export default IboPlayer;
