import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { MonitorPlay, Tv, Settings, Download, KeyRound, Headphones } from "lucide-react";
import { smartTvLinks, SMARTTV_DISCLAIMER } from "./smartTvAppLinks";

const WA = "Olá! Quero configurar um player na Smart TV.";

const config: AdLandingConfig = {
  path: "/player-para-smart-tv",
  title: "Player para Smart TV | Configuração e Ativação por R$ 19,99/mês",
  description:
    "Player para Smart TV com configuração orientada, ativação rápida, compatibilidade verificada e suporte pelo WhatsApp. Plano mensal de R$ 19,99.",
  eyebrow: "Suporte técnico • Players para Smart TV",
  heroPre: "Player para",
  heroAccent: "Smart TV",
  heroPost: "configuração e ativação orientadas",
  heroSubtitle: (
    <>
      Configure e ative um <strong className="text-foreground">player compatível com a sua Smart TV</strong> com
      verificação de compatibilidade e suporte pelo WhatsApp. Plano mensal de R$ 19,99.
    </>
  ),
  heroTrustLine: "Processo simples: você informa a TV e o app, nós orientamos a configuração.",
  heroQuickBenefits: [
    "R$ 19,99/mês",
    "Ativação rápida",
    "Configuração orientada",
    "Compatibilidade com Smart TV",
    "Suporte pelo WhatsApp",
    "Experiência estável",
  ],
  heroImageAlt: "Smart TV exibindo a tela inicial de um player de aplicativos",
  heroBadgeTitle: "Configuração guiada",
  heroBadgeDesc: "Você acompanha pelo controle da TV",
  heroPriceCard: {
    label: "Plano mensal",
    price: "R$ 19,99/mês",
    lines: [
      "Ativação rápida",
      "Configuração orientada do player",
      "Compatibilidade verificada com a sua TV",
      "Suporte pelo WhatsApp",
    ],
  },
  ctaLabel: "Falar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "R$ 19,99/mês • Atendimento direto, sem complicação técnica",
  benefitsEyebrow: "O que você recebe",
  benefitsTitlePre: "Suporte para o seu",
  benefitsTitleAccent: "player na Smart TV",
  benefits: [
    { icon: Tv, title: "Compatibilidade com Smart TVs", desc: "Verificamos se o player desejado é compatível com o modelo e o sistema da sua TV." },
    { icon: Download, title: "Instalação orientada", desc: "Indicamos onde o aplicativo pode ser localizado no seu aparelho e acompanhamos a instalação." },
    { icon: Settings, title: "Configuração do player", desc: "Ajustamos os dados de configuração junto com você, evitando erros de digitação e travamentos." },
    { icon: KeyRound, title: "Ativação quando necessária", desc: "Alguns players exigem ativação para funcionar após o teste; conduzimos essa etapa no atendimento." },
    { icon: MonitorPlay, title: "Ajustes de funcionamento", desc: "Revisamos preferências e configurações básicas para o app rodar de forma estável." },
    { icon: Headphones, title: "Suporte durante o processo", desc: "Você é acompanhado pelo WhatsApp até a configuração ser concluída." },
  ],
  steps: {
    title: "Configure seu player na Smart TV",
    items: [
      { title: "Informe o modelo da sua Smart TV", desc: "Marca, modelo e, se possível, o sistema do aparelho." },
      { title: "Informe qual aplicativo utiliza", desc: "Diga qual player você quer instalar ou já tem instalado na TV." },
      { title: "Verificamos a compatibilidade", desc: "Confirmamos se aquele player é compatível com o seu aparelho." },
      { title: "Orientamos a configuração", desc: "Passo a passo pelo WhatsApp até o aplicativo ficar configurado." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Por que configurar um player para Smart TV",
      h2Accent: "com suporte",
      paragraphs: [
        "A configuração de um player envolve etapas em que um pequeno erro impede o aplicativo de iniciar: dados digitados de forma incorreta pelo controle, versão inadequada para o sistema da TV ou instalação incompleta.",
        "Com acompanhamento, cada etapa é confirmada antes de seguir para a próxima, reduzindo tentativa e erro na frente da TV.",
      ],
      ctaLabel: "Falar no WhatsApp",
      ctaMessage: WA,
      source: "player-smarttv-suporte",
    },
    {
      h2Pre: "Compatibilidade depende do",
      h2Accent: "aparelho e do sistema",
      paragraphs: [
        "Players para Smart TV não estão disponíveis para todos os aparelhos. A oferta muda conforme o fabricante, o ano do modelo e o sistema operacional instalado na TV.",
        "Por isso a verificação vem antes de qualquer promessa: com o modelo em mãos, informamos com clareza se é possível prosseguir.",
      ],
      ctaLabel: "Verificar meu modelo",
      ctaMessage: "Olá! Quero verificar se o player é compatível com a minha Smart TV.",
      source: "player-smarttv-compatibilidade",
    },
  ],
  faqTitleAccent: "frequentes",
  faqs: [
    { q: "O player funciona na minha Smart TV?", a: "Depende do modelo e do sistema do aparelho. Informe a marca e o modelo no WhatsApp para verificarmos a compatibilidade." },
    { q: "Como saber se minha TV é compatível?", a: "Pelo modelo exato, encontrado no menu de informações da TV ou na etiqueta traseira. Ajudamos a localizar esse dado." },
    { q: "Vocês ajudam na instalação?", a: "Sim, orientamos a instalação usando os recursos disponíveis no próprio aparelho." },
    { q: "Vocês ajudam na configuração?", a: "Sim. A configuração é conduzida passo a passo durante o atendimento." },
    { q: "Preciso informar o modelo da TV?", a: "Sim. É o que permite confirmar a compatibilidade e indicar o procedimento correto." },
    { q: "Como funciona a ativação?", a: "Quando o player exige ativação, explicamos o que o aplicativo solicita e acompanhamos essa etapa." },
    { q: "O atendimento é pelo WhatsApp?", a: "Sim, todo o suporte é realizado por WhatsApp." },
    { q: "Vocês fornecem conteúdo ou canais?", a: "Não. Nosso serviço é apenas o suporte técnico de instalação, configuração e ativação de aplicativos compatíveis." },
  ],
  internalLinks: smartTvLinks("/player-para-smart-tv"),
  disclaimer: SMARTTV_DISCLAIMER,
  breadcrumbName: "Player para Smart TV",
  source: "player-para-smart-tv",
};

const PlayerParaSmartTv = () => <AdLandingPage config={config} />;

export default PlayerParaSmartTv;
