import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Headphones, MessageCircle, Wrench, Clock, ShieldCheck, LifeBuoy } from "lucide-react";

const WA = "Olá! Preciso de suporte para o IBO Player.";

const config: AdLandingConfig = {
  path: "/suporte",
  title: "Suporte IBO Player • Ajuda e Especialista pelo WhatsApp | Configuração Remota",
  description:
    "Suporte especializado em IBO Player para Smart TV Samsung, LG, Android TV e TV Box. Configuração remota humana pelo WhatsApp, sem robô e sem espera.",
  eyebrow: "Suporte IBO Player • Ajuda • Especialista",
  heroPre: "Suporte para",
  heroAccent: "IBO Player",
  heroPost: "direto com um especialista",
  heroSubtitle: (
    <>
      Ajuda humana para <strong className="text-foreground">IBO Player</strong> em Smart TV Samsung, LG, Android TV e TV Box.
      Configuração remota pelo WhatsApp, sem robô e sem fila.
    </>
  ),
  heroImageAlt: "Especialista prestando suporte remoto para IBO Player em Smart TV pelo WhatsApp",
  heroBadgeTitle: "Suporte online",
  heroBadgeDesc: "Humano • Especialista • Sem robô",
  ctaLabel: "Falar com Especialista Agora",
  ctaMessage: WA,
  ctaMicrocopy: "Resposta rápida • Sem robô • Configuração 100% remota",
  benefitsEyebrow: "Ajuda de verdade, feita por gente",
  benefitsTitlePre: "Suporte humano",
  benefitsTitleAccent: "em IBO Player",
  benefits: [
    { icon: Headphones, title: "Especialista dedicado", desc: "Você fala com quem realmente entende do IBO Player, não com um script genérico." },
    { icon: MessageCircle, title: "Atendimento no WhatsApp", desc: "Sem app estranho, sem cadastro complicado — direto no WhatsApp que você já usa." },
    { icon: Wrench, title: "Resolução de problemas", desc: "Tela preta, erro de servidor, licença recusada, travamento — resolvemos junto com você." },
    { icon: Clock, title: "Resposta rápida", desc: "Sem fila longa e sem robô. Você é atendido por um humano em pouco tempo." },
    { icon: ShieldCheck, title: "Atendimento até resolver", desc: "Seguimos com você até o IBO Player estar funcionando corretamente na sua TV." },
    { icon: LifeBuoy, title: "Configuração remota", desc: "Você não sai de casa e não leva a TV a lugar nenhum. Tudo é feito à distância, com você." },
  ],
  seoBlocks: [
    {
      h2Pre: "Suporte técnico para",
      h2Accent: "IBO Player em qualquer TV",
      paragraphs: [
        "Nosso suporte cobre Smart TVs Samsung (Tizen), LG (webOS), Android TV, Google TV, Fire TV Stick e TV Box Android compatíveis com o IBO Player.",
        "Você não precisa saber o que está acontecendo tecnicamente — apenas descreve o problema no WhatsApp e nossa equipe conduz o resto.",
      ],
      ctaLabel: "Chamar o suporte agora",
      ctaMessage: "Preciso de suporte para IBO Player na minha TV.",
      source: "suporte-geral",
    },
    {
      h2Pre: "Ajuda para",
      h2Accent: "problemas comuns do IBO Player",
      paragraphs: [
        "Tela preta ao abrir, erro de servidor, licença não aceita, lista vazia, imagem travando: são cenários que atendemos com frequência e sabemos exatamente o que fazer.",
        "Se você já mexeu na TV e piorou, tudo bem — descrevemos, corrigimos e deixamos o aplicativo estável de novo.",
      ],
      ctaLabel: "Descrever meu problema",
      ctaMessage: "Estou com um problema no IBO Player, quero ajuda.",
      source: "suporte-problemas",
    },
    {
      h2Pre: "Configuração remota",
      h2Accent: "sem sair de casa",
      paragraphs: [
        "Todo o atendimento é 100% remoto, feito no WhatsApp com você em frente à sua TV. Não precisa levar o equipamento a nenhum lugar nem receber ninguém na sua casa.",
        "Você segue as instruções do especialista na sua própria TV. Sem invasão, sem download estranho, sem risco.",
      ],
      ctaLabel: "Começar atendimento remoto",
      ctaMessage: "Quero começar um atendimento remoto para IBO Player.",
      source: "suporte-remoto",
    },
  ],
  faqTitleAccent: "sobre suporte",
  faqs: [
    { q: "Como funciona o suporte?", a: "Você toca no botão do WhatsApp, descreve seu caso e um especialista assume o atendimento até resolver seu problema com o IBO Player." },
    { q: "É um humano ou um robô?", a: "Humano. Todo o atendimento é feito por um especialista em IBO Player, sem fluxo automático de mensagens." },
    { q: "Vocês instalam alguma coisa no meu celular ou TV?", a: "Não. O suporte é conduzido por instruções via WhatsApp, sem invadir seu aparelho." },
    { q: "Atendem no fim de semana?", a: "Sempre que possível. Informe seu caso pelo WhatsApp e retornamos com o próximo horário disponível." },
    { q: "E se meu problema for grave?", a: "Continuamos com você até resolver ou até identificarmos que o aparelho é incompatível — nesse caso, avisamos com transparência." },
    { q: "Vale a pena chamar um especialista?", a: "Sim. Você economiza tempo, evita retrabalho e não corre risco de piorar a configuração da sua TV." },
  ],
  source: "suporte",
};

const Suporte = () => <AdLandingPage config={config} />;

export default Suporte;
