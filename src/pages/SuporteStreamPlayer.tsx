import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Headphones, MessageCircle, Wrench, Clock, ShieldCheck, LifeBuoy } from "lucide-react";

const WA = "Olá! Preciso de suporte para o Stream Player.";

const config: AdLandingConfig = {
  path: "/suporte-stream-player",
  title: "Suporte Stream Player • Atendimento pelo WhatsApp | Especialista",
  description:
    "Suporte para Stream Player em Smart TV, Android TV e TV Box. Atendimento humano pelo WhatsApp, sem robô e sem espera.",
  eyebrow: "Suporte Stream Player • Atendimento humano",
  heroPre: "Suporte para",
  heroAccent: "Stream Player",
  heroPost: "direto com um especialista",
  heroSubtitle: (
    <>
      Ajuda humana para <strong className="text-foreground">Stream Player</strong> em Smart TV, Android TV e TV Box.
      Atendimento pelo WhatsApp, sem robô e sem fila.
    </>
  ),
  heroTrustLine: "Atendimento pelo WhatsApp • Especialista de verdade.",
  heroQuickBenefits: [
    "Atendimento pelo WhatsApp",
    "Especialista humano",
    "Sem robô e sem fila",
    "Configuração 100% remota",
    "Acompanhamento até resolver",
  ],
  heroImageAlt: "Especialista prestando suporte remoto para Stream Player em Smart TV pelo WhatsApp",
  heroBadgeTitle: "Suporte online",
  heroBadgeDesc: "Humano • Especialista • Sem robô",
  ctaLabel: "Falar com Especialista Agora",
  ctaMessage: WA,
  ctaMicrocopy: "Resposta rápida • Sem robô • Configuração 100% remota",
  benefitsEyebrow: "Ajuda de verdade, feita por gente",
  benefitsTitlePre: "Suporte humano",
  benefitsTitleAccent: "em Stream Player",
  benefits: [
    { icon: Headphones, title: "Especialista dedicado", desc: "Você fala com quem realmente entende do Stream Player, não com um script genérico." },
    { icon: MessageCircle, title: "Atendimento no WhatsApp", desc: "Sem app estranho, sem cadastro complicado — direto no WhatsApp que você já usa." },
    { icon: Wrench, title: "Resolução de problemas", desc: "Tela preta, erro, travamento — resolvemos junto com você." },
    { icon: Clock, title: "Resposta rápida", desc: "Sem fila longa e sem robô. Você é atendido por um humano em pouco tempo." },
    { icon: ShieldCheck, title: "Atendimento até resolver", desc: "Seguimos com você até o Stream Player estar funcionando na sua TV." },
    { icon: LifeBuoy, title: "Configuração remota", desc: "Você não sai de casa e não leva a TV a lugar nenhum. Tudo é feito à distância." },
  ],
  seoBlocks: [
    {
      h2Pre: "Suporte técnico para",
      h2Accent: "Stream Player em qualquer TV",
      paragraphs: [
        "Nosso suporte cobre Smart TVs Samsung, LG, Android TV, Google TV, Fire TV Stick e TV Box Android compatíveis com o Stream Player.",
        "Você não precisa saber o que está acontecendo tecnicamente — apenas descreve o problema no WhatsApp e nossa equipe conduz o resto.",
      ],
      ctaLabel: "Chamar o suporte agora",
      ctaMessage: "Preciso de suporte para Stream Player na minha TV.",
      source: "suporte-stream-geral",
    },
    {
      h2Pre: "Ajuda para",
      h2Accent: "problemas comuns do Stream Player",
      paragraphs: [
        "Tela preta ao abrir, erro na abertura, lista vazia, imagem travando: são cenários que atendemos com frequência e sabemos exatamente o que fazer.",
        "Se você já mexeu na TV e piorou, tudo bem — descrevemos, corrigimos e deixamos o aplicativo estável de novo.",
      ],
      ctaLabel: "Descrever meu problema",
      ctaMessage: "Estou com um problema no Stream Player, quero ajuda.",
      source: "suporte-stream-problemas",
    },
  ],
  faqTitleAccent: "sobre suporte",
  faqs: [
    { q: "Como funciona o suporte?", a: "Você toca no botão do WhatsApp, descreve seu caso e um especialista assume o atendimento até resolver seu problema com o Stream Player." },
    { q: "É um humano ou um robô?", a: "Humano. Todo o atendimento é feito por um especialista, sem fluxo automático de mensagens." },
    { q: "Vocês instalam algo no meu celular ou TV?", a: "Não. O suporte é conduzido por instruções via WhatsApp, sem invadir seu aparelho." },
    { q: "Atendem no fim de semana?", a: "Sempre que possível. Informe seu caso pelo WhatsApp e retornamos com o próximo horário disponível." },
    { q: "E se meu problema for grave?", a: "Continuamos com você até resolver ou até identificarmos que o aparelho é incompatível — nesse caso, avisamos com transparência." },
    { q: "Vale a pena chamar um especialista?", a: "Sim. Você economiza tempo, evita retrabalho e não corre risco de piorar a configuração da sua TV." },
  ],
  source: "suporte-stream-player",
};

const SuporteStreamPlayer = () => <AdLandingPage config={config} />;

export default SuporteStreamPlayer;
