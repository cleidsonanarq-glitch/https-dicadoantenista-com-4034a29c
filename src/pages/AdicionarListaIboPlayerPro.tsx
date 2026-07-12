import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, Monitor, Smartphone, Box, Flame, ListPlus, Settings, MessageCircle, Zap, Headphones } from "lucide-react";

const WA = "Olá! Quero adicionar minha lista no IBO Player Pro.";

const config: AdLandingConfig = {
  path: "/adicionar-lista-ibo-player-pro",
  title: "Adicionar Lista no IBO Player Pro | Suporte pelo WhatsApp",
  description:
    "Aprenda como adicionar e configurar sua lista no IBO Player Pro ou IBO Pro Play com atendimento especializado pelo WhatsApp.",
  eyebrow: "Adicionar Lista no IBO Player Pro • Suporte WhatsApp",
  heroPre: "Adicionar Lista no",
  heroAccent: "IBO Player Pro",
  heroPost: "com suporte especializado",
  heroSubtitle: (
    <>
      Receba ajuda para adicionar e configurar sua lista no{" "}
      <strong className="text-foreground">IBO Player Pro</strong> ou{" "}
      <strong className="text-foreground">IBO Pro Play</strong> em Smart TV, Android TV ou TV Box com atendimento especializado pelo WhatsApp.
    </>
  ),
  heroTrustLine: "Compatível com Samsung • LG • Android TV • TV Box",
  heroQuickBenefits: [
    "Configuração rápida",
    "Atendimento humano",
    "Orientação passo a passo",
    "Suporte especializado",
    "Compatível com Smart TVs",
  ],
  heroImageAlt: "Adicionar lista no IBO Player Pro em Smart TV Samsung, LG e Android TV",
  heroBadgeTitle: "Configuração assistida",
  heroBadgeDesc: "Adicione sua lista com suporte humano",
  ctaLabel: "Adicionar Minha Lista Agora",
  ctaMessage: WA,
  ctaMicrocopy: "Atendimento rápido • Suporte especializado • Configuração segura",
  benefitsEyebrow: "Compatibilidade",
  benefitsTitlePre: "Adicionar lista no IBO Player Pro",
  benefitsTitleAccent: "funciona nesses dispositivos",
  benefits: [
    { icon: Tv, title: "Samsung Smart TV", desc: "Orientamos a adição da lista no IBO Player Pro em TVs Samsung com sistema Tizen, passo a passo." },
    { icon: Monitor, title: "LG Smart TV", desc: "Suporte para inserir e configurar a lista no IBO Player Pro em TVs LG com sistema webOS." },
    { icon: Smartphone, title: "Android TV", desc: "Ajuda para adicionar a lista no IBO Player Pro em Android TV, Google TV e aparelhos compatíveis." },
    { icon: Box, title: "TV Box", desc: "Configuração da lista no IBO Player Pro em TV Box Android compatíveis." },
    { icon: Flame, title: "Fire TV Stick", desc: "Suporte para adicionar a lista no IBO Player Pro no Amazon Fire TV Stick." },
    { icon: Headphones, title: "Suporte pelo WhatsApp", desc: "Atendimento humano e remoto para configurar sua lista no IBO Player Pro ou IBO Pro Play." },
  ],
  section2: {
    title: "Como adicionar uma lista no IBO Player Pro?",
    text: "Nossa equipe orienta você durante todo o processo de configuração do aplicativo para que a lista seja adicionada corretamente no seu dispositivo.",
    cards: [
      { icon: ListPlus, title: "Adicionar Lista", desc: "Receba orientação para inserir corretamente sua lista." },
      { icon: Settings, title: "Configuração", desc: "Configuração completa do aplicativo." },
      { icon: Monitor, title: "Compatibilidade", desc: "Samsung, LG, Android TV e TV Box." },
      { icon: MessageCircle, title: "Atendimento", desc: "Suporte rápido pelo WhatsApp." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Como",
      h2Accent: "adicionar uma lista no IBO Player Pro",
      paragraphs: [
        "Adicionar uma lista no IBO Player Pro exige atenção aos campos do aplicativo. Nosso suporte acompanha você pelo WhatsApp, indicando onde inserir os dados e como salvar a configuração corretamente.",
        "Trabalhamos com orientação técnica, sem oferecer listas ou conteúdos. A lista é fornecida pelo próprio cliente, e nossa equipe auxilia apenas na configuração do app.",
      ],
      ctaLabel: "Quero adicionar minha lista",
      ctaMessage: "Quero ajuda para adicionar minha lista no IBO Player Pro.",
      source: "adicionar-lista-ibo-player-pro",
    },
    {
      h2Pre: "Configurar lista no",
      h2Accent: "IBO Pro Play",
      paragraphs: [
        "O IBO Pro Play funciona de forma semelhante ao IBO Player Pro. Se você precisa adicionar ou configurar uma lista no IBO Pro Play, nosso suporte orienta o passo a passo pelo WhatsApp.",
        "Verificamos a compatibilidade do seu dispositivo e conduzimos as telas junto com você, até a lista ser inserida corretamente no aplicativo.",
      ],
      ctaLabel: "Configurar meu IBO Pro Play",
      ctaMessage: "Quero configurar minha lista no IBO Pro Play.",
      source: "adicionar-lista-ibo-pro-play",
    },
    {
      h2Pre: "Suporte rápido",
      h2Accent: "pelo WhatsApp",
      paragraphs: [
        "Todo o atendimento é feito de forma remota pelo WhatsApp. Você não precisa sair de casa nem levar seu aparelho a lugar nenhum.",
        "Um especialista responde em minutos, conduz as telas junto com você e só encerra o atendimento quando a lista estiver configurada no IBO Player Pro.",
      ],
      ctaLabel: "Falar com especialista",
      ctaMessage: "Quero falar com um especialista para adicionar minha lista no IBO Player Pro.",
      source: "adicionar-lista-ibo-player-pro-whatsapp",
    },
  ],
  faqTitleAccent: "sobre adicionar lista",
  faqs: [
    { q: "Como adicionar uma lista no IBO Player Pro?", a: "A adição da lista é feita dentro do aplicativo, nos campos indicados para inserção dos dados. Nosso suporte conduz cada tela pelo WhatsApp até a lista ser configurada corretamente no seu dispositivo." },
    { q: "Como configurar o IBO Player Pro?", a: "A configuração do IBO Player Pro varia conforme o dispositivo. Nossa equipe orienta passo a passo pela Smart TV Samsung, LG, Android TV, TV Box ou Fire TV Stick, até o app estar pronto para uso." },
    { q: "O IBO Pro Play aceita lista?", a: "Sim. O IBO Pro Play aceita a inserção de lista da mesma forma que o IBO Player Pro. Nosso suporte orienta a configuração completa no seu aparelho." },
    { q: "Vocês ajudam pelo WhatsApp?", a: "Sim. Todo o atendimento é feito pelo WhatsApp, de forma remota, com um especialista que acompanha você até a lista ser adicionada corretamente." },
    { q: "Funciona em Smart TV Samsung?", a: "Sim. Orientamos a adição da lista no IBO Player Pro em TVs Samsung com sistema Tizen, configurando cada tela necessária." },
    { q: "Funciona em TV LG?", a: "Sim. Fazemos o suporte para adicionar a lista no IBO Player Pro em TVs LG com sistema webOS, passo a passo." },
    { q: "Funciona em TV Box?", a: "Sim. Atendemos TV Box Android compatíveis, verificando o aplicativo e guiando a inserção da lista no IBO Player Pro." },
    { q: "Quanto tempo demora a configuração?", a: "Na maioria dos casos, a configuração é concluída em poucos minutos com nosso suporte pelo WhatsApp. O tempo pode variar conforme o aparelho." },
    { q: "Preciso instalar novamente?", a: "Não necessariamente. Se o IBO Player Pro já estiver instalado, focamos direto na adição e configuração da lista. Se precisar reinstalar, orientamos também." },
    { q: "É possível alterar minha lista depois?", a: "Sim. É possível alterar os dados da lista dentro do aplicativo. Nosso suporte pode orientar como fazer isso de forma segura, sem perder as configurações já salvas." },
  ],
  source: "adicionar-lista-ibo-player-pro",
};

const AdicionarListaIboPlayerPro = () => <AdLandingPage config={config} />;

export default AdicionarListaIboPlayerPro;
