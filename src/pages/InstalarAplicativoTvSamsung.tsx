import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Headphones, Settings, Clock, ShieldCheck, MonitorSmartphone, Wifi, Cpu, Tv, Download } from "lucide-react";
import { SAMSUNG_DISCLAIMER, samsungLinks } from "./samsungAppsLinks";

const WA = "Olá! Quero instalar um aplicativo na minha TV Samsung com suporte.";

const config: AdLandingConfig = {
  path: "/instalar-aplicativo-tv-samsung",
  breadcrumbName: "Instalar aplicativo na TV Samsung",
  title: "Instalar Aplicativo na TV Samsung | Passo a Passo Assistido",
  description:
    "Instale aplicativos compatíveis na sua TV Samsung com suporte técnico remoto. Passo a passo assistido pelo WhatsApp, com ativação e configuração incluídas.",
  eyebrow: "Instalação assistida • TV Samsung",
  heroPre: "Vamos",
  heroAccent: "instalar o aplicativo na TV Samsung",
  heroPost: "juntos",
  heroSubtitle: (
    <>
      Instalação orientada do início ao fim, com{" "}
      <strong className="text-foreground">ativação e configuração incluídas</strong> no mesmo atendimento.
    </>
  ),
  heroTrustLine: "Instalação orientada em Samsung Smart TV, Samsung Tizen, Android TV, Google TV e TV Box compatíveis",
  heroQuickBenefits: [
    "Passo a passo em linguagem simples",
    "Sem risco de procedimento errado",
    "Ativação quando o app exigir",
    "Configuração final incluída",
  ],
  heroImageAlt: "Instalação de aplicativo em TV Samsung com orientação técnica remota",
  heroBadgeTitle: "Instalação guiada",
  heroBadgeDesc: "TV Samsung • Passo a passo",
  ctaLabel: "Quero instalar agora",
  ctaMessage: WA,
  ctaMicrocopy: "Suporte independente • Atendimento em minutos",
  benefitsEyebrow: "O que esperar",
  benefitsTitlePre: "Instalação sem",
  benefitsTitleAccent: "dor de cabeça",
  benefits: [
    { icon: Download, title: "Suporte técnico especializado", desc: "Você recebe o caminho certo já na primeira tentativa." },
    { icon: Settings, title: "Configuração assistida", desc: "Depois de instalar, deixamos o aplicativo pronto para uso." },
    { icon: Wifi, title: "Atendimento online", desc: "Instalação feita de casa, sem visita técnica." },
    { icon: Tv, title: "Especialistas em Smart TVs", desc: "Conhecimento prático dos menus Samsung de cada geração." },
    { icon: Headphones, title: "Atendimento remoto", desc: "Um atendente acompanha você em tempo real pelo WhatsApp." },
    { icon: Clock, title: "Processo rápido", desc: "A instalação leva poucos minutos quando é feita na ordem certa." },
  ],
  steps: {
    title: "Instalação em 5 passos",
    items: [
      { title: "Instale o aplicativo compatível", desc: "Indicamos o aplicativo adequado ao seu modelo e o caminho na loja da TV." },
      { title: "Entre em contato pelo WhatsApp", desc: "Informe o modelo da TV para receber as instruções corretas." },
      { title: "Receba orientação", desc: "Acompanhamos cada tela até o ícone aparecer na sua TV." },
      { title: "Caso necessário, realizamos a ativação", desc: "Se o aplicativo pedir ativação, executamos esse passo com você." },
      { title: "Finalizamos toda a configuração", desc: "Preferências ajustadas e teste de funcionamento." },
    ],
  },
  compatibility: {
    title: "Onde instalamos",
    text: "Cada aparelho tem um caminho diferente. Adaptamos as instruções ao seu sistema.",
    devices: ["Samsung Smart TV", "Samsung Tizen", "Android TV", "Google TV", "TV Box compatíveis"],
  },
  section2: {
    title: "Tudo que o atendimento cobre",
    text: "Instalação é o começo; entregamos o processo completo.",
    cards: [
      { icon: MonitorSmartphone, title: "Instalação", desc: "Download e instalação orientados na própria TV." },
      { icon: Cpu, title: "Ativação", desc: "Realizada quando o aplicativo solicita." },
      { icon: Settings, title: "Configuração", desc: "Ajustes para o aplicativo abrir corretamente." },
      { icon: ShieldCheck, title: "Suporte", desc: "Acompanhamento remoto durante todo o processo." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Como instalar um aplicativo na",
      h2Accent: "TV Samsung com segurança",
      paragraphs: [
        "Na TV Samsung, a instalação começa pela loja de aplicativos do próprio aparelho. É lá que você busca o aplicativo compatível e confirma a instalação com o controle remoto.",
        "O erro mais comum é tentar instalar uma versão que não existe para aquele modelo. Por isso confirmamos a compatibilidade antes de você iniciar qualquer download.",
        "Com o caminho certo, a instalação dura poucos minutos e não exige nenhum programa externo.",
      ],
      ctaLabel: "Quero o passo a passo",
      ctaMessage: "Quero o passo a passo para instalar o aplicativo na minha TV Samsung.",
      source: "instalar-app-samsung-passo",
    },
    {
      h2Pre: "Quando a instalação",
      h2Accent: "não conclui",
      paragraphs: [
        "Instalação que para no meio, mensagem de erro ou aplicativo que desaparece depois de instalado costumam ter causas simples: memória cheia, conexão instável ou sistema desatualizado.",
        "Verificamos essas condições com você e retomamos a instalação na sequência correta, sem procedimentos arriscados no aparelho.",
      ],
      ctaLabel: "Minha instalação falhou",
      ctaMessage: "A instalação do aplicativo na minha TV Samsung não conclui.",
      source: "instalar-app-samsung-erro",
    },
    {
      h2Pre: "O que contratamos",
      h2Accent: "com você",
      paragraphs: [
        "O serviço é técnico: instalação, configuração, ativação quando necessária e suporte remoto de aplicativos compatíveis. Não fornecemos conteúdo, canais ou listas.",
        "Somos independentes e não representamos oficialmente a Samsung nem desenvolvedores de aplicativos.",
      ],
      ctaLabel: "Falar com o suporte",
      ctaMessage: "Quero falar com o suporte sobre instalação de aplicativo na TV Samsung.",
      source: "instalar-app-samsung-escopo",
    },
  ],
  faqTitleAccent: "sobre instalar aplicativo na TV Samsung",
  faqs: [
    { q: "Como começo a instalação?", a: "Envie o modelo da TV pelo WhatsApp. Confirmamos a compatibilidade e enviamos o caminho exato da loja de aplicativos." },
    { q: "Preciso de pen drive ou computador?", a: "Não. A instalação é feita pela própria TV, com o controle remoto." },
    { q: "A instalação apaga alguma coisa da TV?", a: "Não. Instalar um aplicativo não afeta seus outros aplicativos nem as configurações da TV." },
    { q: "Quanto tempo demora?", a: "Normalmente poucos minutos, desde que a conexão esteja estável." },
    { q: "E se o aplicativo não estiver na loja?", a: "Verificamos alternativas compatíveis com o seu modelo antes de qualquer tentativa." },
    { q: "A instalação inclui a configuração?", a: "Sim. O mesmo atendimento cobre instalação, ativação quando necessária e configuração." },
    { q: "Vocês acessam minha TV?", a: "Não. Você executa os passos e nós orientamos por mensagem em tempo real." },
    { q: "Funciona em TV Samsung sem controle original?", a: "Funciona, desde que o controle usado permita navegar pelos menus da TV." },
    { q: "Vocês fornecem conteúdo depois de instalar?", a: "Não. Nosso serviço termina na parte técnica: aplicativo instalado, ativado e configurado." },
    { q: "Se der problema depois, tenho suporte?", a: "Sim. O canal de WhatsApp fica disponível para dúvidas de configuração e reinstalação." },
  ],
  internalLinks: samsungLinks("/instalar-aplicativo-tv-samsung"),
  disclaimer: SAMSUNG_DISCLAIMER,
  guarantee: {
    title: "Instalação acompanhada até o fim",
    text: "Ficamos com você no WhatsApp até o aplicativo estar instalado e abrindo normalmente na sua TV Samsung.",
  },
  source: "instalar-aplicativo-tv-samsung",
};

const InstalarAplicativoTvSamsung = () => <AdLandingPage config={config} />;

export default InstalarAplicativoTvSamsung;
