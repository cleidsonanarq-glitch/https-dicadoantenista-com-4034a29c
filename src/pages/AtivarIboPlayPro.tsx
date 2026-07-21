import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, Smartphone, Monitor, Box, Headphones, MessageCircle, Zap, ShieldCheck, Settings } from "lucide-react";

const WA = "Olá! Quero ativar minha licença do IBO Play Pro.";

const config: AdLandingConfig = {
  path: "/ativar-ibo-play-pro",
  title: "Ativar IBO Play Pro | Suporte Especializado",
  description:
    "Ative sua licença do IBO Play Pro com atendimento especializado e suporte durante todo o processo.",
  eyebrow: "Ativação de Licença • Suporte WhatsApp",
  heroPre: "Ative sua licença do",
  heroAccent: "IBO Play Pro",
  heroPost: "com suporte especializado",
  heroSubtitle: (
    <>
      Receba orientação durante toda a <strong className="text-foreground">ativação</strong> e{" "}
      <strong className="text-foreground">configuração</strong> do aplicativo.
    </>
  ),
  heroTrustLine: "Compatível com Smart TV Samsung, LG, Roku TV e Android TV",
  heroQuickBenefits: [
    "Ativação da licença assistida",
    "Suporte técnico humano",
    "Auxílio na configuração",
    "Atendimento via WhatsApp",
  ],
  heroImageAlt: "Ativação da licença do IBO Play Pro em Smart TV com suporte especializado",
  heroBadgeTitle: "Ativação assistida",
  heroBadgeDesc: "Suporte humano • Configuração completa",
  ctaLabel: "Ativar Agora",
  ctaMessage: WA,
  ctaMicrocopy: "Atendimento rápido • Suporte especializado • Ativação sem complicação",
  benefitsEyebrow: "Por que escolher nosso suporte",
  benefitsTitlePre: "Benefícios da ativação",
  benefitsTitleAccent: "assistida",
  benefits: [
    { icon: ShieldCheck, title: "Ativação da licença", desc: "Orientamos você durante todo o processo de ativação da licença do IBO Play Pro, evitando erros comuns." },
    { icon: Settings, title: "Configuração completa", desc: "Ajudamos na configuração inicial do aplicativo para que tudo funcione corretamente no seu dispositivo." },
    { icon: Headphones, title: "Suporte técnico", desc: "Você fala com um especialista que conduz cada etapa de forma clara e objetiva." },
    { icon: MessageCircle, title: "Atendimento via WhatsApp", desc: "Suporte remoto pelo WhatsApp, sem filas e sem robôs, com resposta em minutos." },
    { icon: Zap, title: "Ativação rápida", desc: "Na maioria dos casos, a ativação é concluída em poucos minutos com nossa orientação." },
    { icon: Tv, title: "Smart TVs compatíveis", desc: "Atendemos Samsung, LG, Roku TV e Android TV, adaptando as instruções ao seu aparelho." },
  ],
  section2: {
    title: "Compatibilidade com as principais Smart TVs",
    text: "O IBO Play Pro pode ser ativado em diferentes modelos de TV. Nosso suporte acompanha você de acordo com o sistema do seu aparelho.",
    cards: [
      { icon: Monitor, title: "LG", desc: "Orientamos a ativação e configuração em Smart TVs LG com sistema webOS." },
      { icon: Tv, title: "Samsung", desc: "Suporte para ativação da licença em TVs Samsung com sistema Tizen." },
      { icon: Box, title: "Roku TV", desc: "Ajudamos na ativação e configuração do aplicativo em aparelhos Roku TV." },
      { icon: Smartphone, title: "Android TV", desc: "Ativação assistida em Android TV e Google TV, passo a passo." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Como funciona a",
      h2Accent: "ativação da licença",
      paragraphs: [
        "A ativação da licença do IBO Play Pro é feita dentro do próprio aplicativo. Durante o processo, é comum encontrar telas de validação, confirmação de dados ou ajustes iniciais que podem gerar dúvidas.",
        "Nosso suporte acompanha você pelo WhatsApp em cada etapa, indicando exatamente o que preencher e como confirmar a ativação de forma correta.",
      ],
      ctaLabel: "Quero ativar minha licença",
      ctaMessage: "Quero ativar minha licença do IBO Play Pro agora.",
      source: "ativar-ibo-play-pro",
    },
    {
      h2Pre: "Suporte para",
      h2Accent: "Smart TV Samsung, LG, Roku TV e Android TV",
      paragraphs: [
        "Cada sistema operacional exige um fluxo específico para ativar a licença do IBO Play Pro. Em Samsung Tizen, LG webOS, Roku TV e Android TV, orientamos a instalação, a configuração inicial e a ativação da licença.",
        "Se o aplicativo já estiver instalado, focamos direto na ativação. Se precisar, também ajudamos na configuração para que tudo funcione corretamente.",
      ],
      ctaLabel: "Ativar na minha TV",
      ctaMessage: "Quero ativar o IBO Play Pro na minha Smart TV.",
      source: "ativar-ibo-play-pro-tv",
    },
    {
      h2Pre: "Atendimento",
      h2Accent: "via WhatsApp",
      paragraphs: [
        "Todo o suporte é remoto e feito pelo WhatsApp. Você não precisa sair de casa nem levar o aparelho a lugar nenhum.",
        "Um especialista responde em minutos, conduz as telas junto com você e só encerra o atendimento quando a licença do IBO Play Pro estiver ativada e o aplicativo funcionando.",
      ],
      ctaLabel: "Falar com especialista",
      ctaMessage: "Quero falar com um especialista para ativar minha licença do IBO Play Pro.",
      source: "ativar-ibo-play-pro-whatsapp",
    },
  ],
  faqTitleAccent: "sobre ativação",
  faqs: [
    { q: "Como ativar a licença do IBO Play Pro?", a: "A ativação é feita dentro do aplicativo, informando os dados da licença. Nosso suporte conduz cada tela pelo WhatsApp até o IBO Play Pro estar ativo e funcionando." },
    { q: "Vocês ajudam na configuração do aplicativo?", a: "Sim. Além da ativação da licença, orientamos a configuração inicial do IBO Play Pro no seu dispositivo." },
    { q: "O suporte é feito pelo WhatsApp?", a: "Sim. Todo o atendimento é feito pelo WhatsApp, de forma remota, com um especialista que acompanha você até tudo funcionar." },
    { q: "Funciona em Smart TV Samsung?", a: "Sim. Orientamos a ativação da licença do IBO Play Pro em TVs Samsung com sistema Tizen." },
    { q: "Funciona em TV LG?", a: "Sim. Fazemos o suporte para ativação e configuração do IBO Play Pro em TVs LG com sistema webOS." },
    { q: "Funciona em Roku TV?", a: "Sim. Atendemos aparelhos Roku TV, verificando o aplicativo e guiando a ativação da licença." },
    { q: "Funciona em Android TV?", a: "Sim. Orientamos a ativação e configuração do IBO Play Pro em Android TV e Google TV." },
    { q: "Quanto tempo demora a ativação?", a: "Na maioria dos casos, a ativação é concluída em poucos minutos com nosso suporte pelo WhatsApp. O tempo pode variar conforme o aparelho." },
    { q: "Preciso levar minha TV em algum lugar?", a: "Não. O atendimento é 100% remoto pelo WhatsApp. Você recebe orientação enquanto usa o aplicativo na sua TV." },
    { q: "O suporte é com pessoa real ou robô?", a: "Você fala com um especialista real. Não usamos robôs e acompanhamos você até a ativação estar concluída." },
  ],
  source: "ativar-ibo-play-pro",
};

const AtivarIboPlayPro = () => <AdLandingPage config={config} />;

export default AtivarIboPlayPro;
