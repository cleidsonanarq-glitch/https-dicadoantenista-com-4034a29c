import { useEffect } from "react";
import { CheckCircle2, Headphones, Settings2, Sparkles } from "lucide-react";
import LandingVariant, { type LandingVariantConfig } from "@/components/LandingVariant";

const config: LandingVariantConfig = {
  eyebrow: "Funplay • Smart TV • Samsung • LG",
  headlinePre: "Funplay",
  headlineAccent: "rápido e estável",
  headlinePost: "para sua Smart TV",
  subheadline: (
    <>
      Configuração simples no <span className="font-semibold text-foreground">Funplay TV</span>, aplicativo leve para{" "}
      <span className="font-semibold text-foreground">Samsung, LG e outras Smart TVs</span>, com{" "}
      <span className="font-semibold text-primary">suporte humano no WhatsApp</span>.
    </>
  ),
  heroAlt: "Funplay configurado em Smart TV com streaming estável em HD",
  heroStatusTitle: "Funplay estável",
  heroStatusDesc: "Samsung • LG • HD sem travamentos",
  benefitsEyebrow: "Por que usar Funplay com a gente",
  benefitsTitlePre: "Funplay com",
  benefitsTitleAccent: "experiência premium",
  benefits: [
    {
      icon: Sparkles,
      title: "Aplicativo Funplay leve",
      desc: "Funplay otimizado para abrir rápido, ocupar pouca memória e rodar fluído mesmo em conexões medianas.",
    },
    {
      icon: CheckCircle2,
      title: "Streaming estável em HD",
      desc: "Assista sem travamentos, com transmissão contínua em alta qualidade em todos os seus dispositivos.",
    },
    {
      icon: Settings2,
      title: "Compatível com Samsung e LG",
      desc: "Funciona em Smart TVs Samsung, LG, TCL, Philco, Roku e outras marcas com acesso à internet.",
    },
    {
      icon: Headphones,
      title: "Suporte humano no WhatsApp",
      desc: "Atendimento direto, sem robô, que te guia passo a passo na configuração do Funplay.",
    },
  ],
  faqTitleAccent: "sobre o Funplay",
  faqs: [
    {
      q: "Funplay funciona em Smart TV Samsung?",
      a: "Sim. O Funplay é compatível com Smart TVs Samsung modernas com acesso à loja de aplicativos e conexão com internet.",
    },
    {
      q: "Funplay funciona em Smart TV LG?",
      a: "Sim. Funciona em Smart TVs LG (webOS) com acesso à loja de apps. A configuração é simples e guiada no WhatsApp.",
    },
    {
      q: "Como configurar o Funplay TV?",
      a: "Basta nos chamar no WhatsApp. Em poucos minutos configuramos o Funplay na sua TV e você já está assistindo.",
    },
    {
      q: "O Funplay é leve?",
      a: "Sim. Aplicativo otimizado para rodar estável e fluído mesmo em conexões medianas, sem travamentos.",
    },
    {
      q: "Tem suporte se eu precisar de ajuda?",
      a: "Sim. Suporte humano direto no WhatsApp, com resposta em poucos minutos sempre que você precisar.",
    },
  ],
  ctaMicrocopy: "Resposta rápida • Configuração simples • Compatível com Samsung e LG",
};

const Funplay = () => {
  useEffect(() => {
    document.title = "Funplay TV para Smart TV Samsung e LG | Streaming Estável HD";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Funplay TV rápido e estável para Smart TV Samsung e LG. Aplicativo leve, configuração simples e suporte humano no WhatsApp.");
  }, []);

  return <LandingVariant config={config} />;
};

export default Funplay;
