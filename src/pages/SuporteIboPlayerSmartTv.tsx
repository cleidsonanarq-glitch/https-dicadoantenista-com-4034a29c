import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, Monitor, Smartphone, Box, Headphones, MessageCircle, Search, AlertCircle } from "lucide-react";

const WA = "Olá! Preciso de suporte para o IBO Player na minha Smart TV.";

const config: AdLandingConfig = {
  path: "/suporte-ibo-player-smart-tv",
  title: "Suporte IBO Player para Smart TVs | LG, Samsung e Roku TV",
  description:
    "Receba suporte para instalar, configurar e ativar o IBO Player em Smart TVs LG, Samsung, Roku TV e outros modelos compatíveis.",
  eyebrow: "Suporte para Smart TVs • LG, Samsung, Roku TV",
  heroPre: "Suporte para instalar e ativar o",
  heroAccent: "IBO Player",
  heroPost: "na sua Smart TV",
  heroSubtitle: (
    <>
      Receba auxílio para localizar, instalar, configurar e ativar o aplicativo em televisores compatíveis com{" "}
      <strong className="text-foreground">LG</strong>, <strong className="text-foreground">Samsung</strong>,{" "}
      <strong className="text-foreground">Roku TV</strong> e Android TV.
    </>
  ),
  heroTrustLine: "Atendimento para LG, Samsung, Roku TV e Android TV",
  heroQuickBenefits: [
    "Suporte para LG (webOS)",
    "Suporte para Samsung (Tizen)",
    "Verificação para Roku TV",
    "Ajuda para Android TV",
  ],
  heroImageAlt: "Suporte para instalação do IBO Player em Smart TVs LG, Samsung e Roku TV",
  heroBadgeTitle: "Suporte técnico",
  heroBadgeDesc: "Instalação, configuração e ativação",
  ctaLabel: "Solicitar suporte",
  ctaMessage: WA,
  ctaMicrocopy: "Atendimento humano pelo WhatsApp",
  benefitsEyebrow: "Marcas compatíveis",
  benefitsTitlePre: "Suporte para as",
  benefitsTitleAccent: "principais Smart TVs",
  benefits: [
    { icon: Monitor, title: "LG", desc: "Orientação para localizar, instalar e configurar o aplicativo em modelos compatíveis com webOS." },
    { icon: Tv, title: "Samsung", desc: "Suporte para instalação e configuração em televisores compatíveis com o sistema Tizen." },
    { icon: Box, title: "Roku TV", desc: "Verificação de disponibilidade e orientação para modelos compatíveis com Roku TV." },
    { icon: Smartphone, title: "Android TV", desc: "Ajuda para localizar e configurar o aplicativo em televisores e dispositivos compatíveis." },
    { icon: Headphones, title: "Atendimento humanizado", desc: "Você fala direto com um especialista pelo WhatsApp, sem robô." },
    { icon: MessageCircle, title: "Suporte pelo WhatsApp", desc: "Orientação passo a passo para instalação, configuração e ativação." },
  ],
  section2: {
    title: "Está com dificuldade para instalar?",
    text: "A disponibilidade do IBO Player depende do modelo da televisão, sistema operacional, região e loja de aplicativos. Consulte nossa equipe antes de contratar a ativação.",
    cards: [
      { icon: Search, title: "Não encontrou o app", desc: "Não localizou o aplicativo na loja da sua TV." },
      { icon: AlertCircle, title: "Não sabe a versão", desc: "Dúvida sobre qual versão instalar no seu modelo." },
      { icon: Tv, title: "Identificar o modelo", desc: "Precisa descobrir o modelo exato da sua televisão." },
      { icon: MessageCircle, title: "Mensagens de erro", desc: "Encontrou algum erro durante a instalação ou ativação." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Como funciona",
      h2Accent: "o atendimento",
      paragraphs: [
        "1. Você informa a marca e o modelo da TV. 2. Nossa equipe verifica a compatibilidade. 3. Você recebe orientação para instalação e configuração. 4. A ativação da licença é concluída com suporte.",
        "Todo o processo é feito pelo WhatsApp, de forma remota, com um especialista acompanhando cada etapa.",
      ],
      ctaLabel: "Solicitar suporte agora",
      ctaMessage: WA,
      source: "suporte-ibo-player-smart-tv-como-funciona",
    },
    {
      h2Pre: "Ajuda durante",
      h2Accent: "todo o processo",
      paragraphs: [
        "Oferecemos atendimento humanizado, orientação passo a passo, suporte para instalação, ajuda na configuração, auxílio na ativação e atendimento pelo WhatsApp para diferentes sistemas de Smart TV.",
        "Consulte nossa equipe antes de contratar a ativação: a disponibilidade do aplicativo pode variar conforme o modelo, sistema, região e loja de aplicativos da TV.",
      ],
      ctaLabel: "Falar com o suporte",
      ctaMessage: WA,
      source: "suporte-ibo-player-smart-tv-beneficios",
    },
  ],
  faqTitleAccent: "sobre suporte",
  faqs: [
    { q: "O IBO Player funciona em televisores LG?", a: "A disponibilidade depende do modelo e da versão do webOS. Nossa equipe verifica a compatibilidade da sua TV LG antes da ativação." },
    { q: "O aplicativo é compatível com Smart TVs Samsung?", a: "A compatibilidade varia conforme o modelo e a versão do sistema Tizen. Consulte nossa equipe pelo WhatsApp para verificar o seu televisor." },
    { q: "O IBO Player está disponível para Roku TV?", a: "A disponibilidade em Roku TV depende do modelo, região e loja de aplicativos. Verificamos a compatibilidade antes de orientar a instalação." },
    { q: "Vocês ajudam a instalar o aplicativo?", a: "Sim. Orientamos a instalação passo a passo pelo WhatsApp, conforme o sistema e o modelo da sua Smart TV." },
    { q: "Como descubro o modelo da minha televisão?", a: "O modelo geralmente está na etiqueta traseira da TV ou no menu de configurações. Nossa equipe pode orientar como localizar essa informação." },
    { q: "Vocês também auxiliam na ativação da licença?", a: "Sim. Após a instalação e configuração, orientamos o processo de ativação da licença do aplicativo." },
    { q: "O aplicativo está disponível em todas as Smart TVs?", a: "Não. A disponibilidade e a compatibilidade podem variar conforme o modelo, sistema operacional, região e loja de aplicativos. Consulte nossa equipe antes da ativação." },
  ],
  source: "suporte-ibo-player-smart-tv",
};

const SuporteIboPlayerSmartTv = () => <AdLandingPage config={config} />;

export default SuporteIboPlayerSmartTv;
