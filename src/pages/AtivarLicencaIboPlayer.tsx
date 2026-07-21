import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, Monitor, Smartphone, Box, Headphones, MessageCircle, Zap, ShieldCheck } from "lucide-react";

const WA = "Olá! Quero ativar minha licença do IBO Player.";

const config: AdLandingConfig = {
  path: "/ativar-licenca-ibo-player",
  title: "Ativar Licença IBO Player | Suporte pelo WhatsApp",
  description:
    "Ative sua licença do IBO Player com orientação especializada. Receba suporte durante o processo de ativação em Smart TVs compatíveis.",
  eyebrow: "Ativar Licença Oficial • Suporte WhatsApp",
  heroPre: "Ative sua licença do",
  heroAccent: "IBO Player",
  heroPost: "com suporte especializado",
  heroSubtitle: (
    <>
      Receba orientação durante a ativação e deixe o aplicativo pronto para uso em sua{" "}
      <strong className="text-foreground">Smart TV</strong>.
    </>
  ),
  heroTrustLine: "Atendimento rápido pelo WhatsApp",
  heroQuickBenefits: [
    "Ativação rápida e segura",
    "Suporte humano especializado",
    "Orientação passo a passo",
    "Compatível com Smart TVs",
  ],
  heroImageAlt: "Ativação de licença do IBO Player em Smart TV com suporte pelo WhatsApp",
  heroBadgeTitle: "Ativação assistida",
  heroBadgeDesc: "Orientação do início ao fim",
  ctaLabel: "Ativar minha licença",
  ctaMessage: WA,
  ctaMicrocopy: "Atendimento rápido pelo WhatsApp",
  benefitsEyebrow: "Como funciona a ativação",
  benefitsTitlePre: "Ativação com",
  benefitsTitleAccent: "orientação do início ao fim",
  benefits: [
    { icon: MessageCircle, title: "1. Entre em contato pelo WhatsApp", desc: "Fale diretamente com nossa equipe para iniciar o atendimento." },
    { icon: Tv, title: "2. Informe o modelo da sua TV", desc: "Verificamos a compatibilidade do aplicativo com o seu aparelho." },
    { icon: Headphones, title: "3. Receba as orientações", desc: "Você recebe as instruções necessárias para prosseguir com a ativação." },
    { icon: ShieldCheck, title: "4. Conclua a ativação", desc: "Nosso suporte acompanha até a licença estar ativada corretamente." },
    { icon: Zap, title: "Ativação rápida", desc: "Atendimento ágil para diferentes modelos de Smart TV." },
    { icon: Headphones, title: "Suporte especializado", desc: "Auxílio antes, durante e após a ativação, com atendimento humanizado." },
  ],
  section2: {
    title: "Compatível com diferentes Smart TVs",
    text: "A disponibilidade do aplicativo pode variar de acordo com o modelo, sistema operacional, região e loja de aplicativos da TV. Consulte nossa equipe antes da ativação.",
    cards: [
      { icon: Monitor, title: "LG", desc: "Orientação para modelos LG compatíveis com o aplicativo." },
      { icon: Tv, title: "Samsung", desc: "Suporte para Smart TVs Samsung compatíveis." },
      { icon: Box, title: "Roku TV", desc: "Verificação de compatibilidade para modelos Roku TV." },
      { icon: Smartphone, title: "Android TV", desc: "Ajuda para televisores e dispositivos com Android TV." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Ativação da",
      h2Accent: "licença do IBO Player",
      paragraphs: [
        "A ativação da licença é feita dentro do próprio aplicativo, e cada modelo de Smart TV apresenta as telas de forma diferente. Nossa equipe orienta cada passo pelo WhatsApp para que você conclua o processo com segurança.",
        "O suporte é remoto e acompanha você do início ao fim, sem que você precise sair de casa ou levar o aparelho a qualquer lugar.",
      ],
      ctaLabel: "Ativar minha licença agora",
      ctaMessage: WA,
      source: "ativar-licenca-ibo-player",
    },
    {
      h2Pre: "Suporte especializado",
      h2Accent: "pelo WhatsApp",
      paragraphs: [
        "Todo o atendimento é humano e feito pelo WhatsApp. Um especialista conduz as telas junto com você, explica cada etapa e tira suas dúvidas durante o processo de ativação.",
        "Também oferecemos auxílio antes e após a ativação, para que você tenha orientação sempre que precisar.",
      ],
      ctaLabel: "Falar com especialista",
      ctaMessage: WA,
      source: "ativar-licenca-ibo-player-whatsapp",
    },
  ],
  faqTitleAccent: "sobre ativação",
  faqs: [
    { q: "Como funciona a ativação da licença do IBO Player?", a: "A ativação é realizada dentro do próprio aplicativo, informando os dados da licença. Nosso suporte orienta cada tela pelo WhatsApp até a conclusão do processo." },
    { q: "Vocês ajudam durante o processo de ativação?", a: "Sim. Um especialista acompanha você pelo WhatsApp durante toda a ativação, indicando os passos necessários para o seu modelo de TV." },
    { q: "Quais televisores são compatíveis?", a: "Atendemos modelos LG, Samsung, Roku TV, Android TV e outros dispositivos compatíveis. A disponibilidade pode variar conforme o modelo, sistema operacional, região e loja de aplicativos." },
    { q: "Quanto tempo leva para realizar a ativação?", a: "O tempo pode variar conforme o aparelho e o modelo. Nosso atendimento é rápido e busca concluir a ativação assim que possível." },
    { q: "O suporte continua disponível depois da ativação?", a: "Sim. Oferecemos auxílio antes, durante e após a ativação, para que você tenha orientação sempre que precisar." },
    { q: "Preciso informar o modelo da minha televisão?", a: "Sim. Informar a marca e o modelo da TV ajuda nossa equipe a verificar a compatibilidade e orientar a ativação corretamente." },
  ],
  source: "ativar-licenca-ibo-player",
};

const AtivarLicencaIboPlayer = () => <AdLandingPage config={config} />;

export default AtivarLicencaIboPlayer;
