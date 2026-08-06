import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Headphones, Settings, Clock, ShieldCheck, MonitorSmartphone, Wifi, Cpu, Tv, Zap } from "lucide-react";
import { SAMSUNG_DISCLAIMER, samsungLinks } from "./samsungAppsLinks";

const WA = "Olá! Quero suporte para instalar um aplicativo na minha TV Samsung.";

const config: AdLandingConfig = {
  path: "/aplicativo-para-tv-samsung",
  breadcrumbName: "Aplicativo para TV Samsung",
  title: "Aplicativo para TV Samsung | Instalação e Suporte Técnico",
  description:
    "Suporte técnico independente para instalar, configurar e ativar aplicativos compatíveis na sua TV Samsung. Atendimento remoto pelo WhatsApp, sem sair de casa.",
  eyebrow: "TV Samsung • Suporte no WhatsApp",
  heroPre: "Suporte para",
  heroAccent: "aplicativo na TV Samsung",
  heroPost: "do jeito certo",
  heroSubtitle: (
    <>
      Ajudamos você a <strong className="text-foreground">instalar, configurar e ativar</strong> aplicativos
      compatíveis na sua Samsung, com orientação remota e linguagem simples.
    </>
  ),
  heroTrustLine: "Atendimento especializado em Samsung Tizen, Android TV, Google TV e TV Box compatíveis",
  heroQuickBenefits: [
    "Instalação orientada passo a passo",
    "Configuração assistida em tempo real",
    "Ativação quando o aplicativo exigir",
    "Atendimento humano, sem robôs",
  ],
  heroImageAlt: "Smart TV Samsung com aplicativo instalado após suporte técnico remoto",
  heroBadgeTitle: "Suporte remoto",
  heroBadgeDesc: "TV Samsung • Instalação e configuração",
  ctaLabel: "Falar no WhatsApp agora",
  ctaMessage: WA,
  ctaMicrocopy: "Serviço técnico independente • Resposta em minutos",
  benefitsEyebrow: "Por que falar com a gente",
  benefitsTitlePre: "Um serviço feito para",
  benefitsTitleAccent: "quem usa Samsung",
  benefits: [
    { icon: Headphones, title: "Suporte técnico especializado", desc: "Quem atende conhece os menus do sistema Samsung e evita tentativas às cegas." },
    { icon: Settings, title: "Configuração assistida", desc: "Acompanhamos cada ajuste do aplicativo junto com você, na hora." },
    { icon: Wifi, title: "Atendimento online", desc: "Tudo é resolvido a distância: você não precisa levar a TV a nenhum lugar." },
    { icon: Tv, title: "Especialistas em Smart TVs", desc: "Rotina diária com modelos Samsung de diferentes anos e versões de sistema." },
    { icon: MonitorSmartphone, title: "Atendimento remoto", desc: "Orientação por WhatsApp, com fotos e vídeos curtos quando necessário." },
    { icon: Clock, title: "Processo rápido", desc: "A maioria dos atendimentos é concluída na primeira conversa." },
  ],
  steps: {
    title: "Como funciona o atendimento",
    items: [
      { title: "Instale o aplicativo compatível", desc: "Indicamos o aplicativo adequado ao seu modelo Samsung e orientamos a instalação." },
      { title: "Entre em contato pelo WhatsApp", desc: "Envie uma mensagem informando o modelo da TV para começarmos." },
      { title: "Receba orientação", desc: "Explicamos cada passo em linguagem simples, no seu ritmo." },
      { title: "Caso necessário, realizamos a ativação", desc: "Alguns aplicativos pedem ativação; cuidamos disso com você." },
      { title: "Finalizamos toda a configuração", desc: "Ajustes finais e verificação para deixar tudo funcionando." },
    ],
  },
  compatibility: {
    title: "Aparelhos que atendemos",
    text: "Adaptamos as instruções ao sistema de cada aparelho para que o processo seja simples e seguro.",
    devices: ["Samsung Smart TV", "Samsung Tizen", "Android TV", "Google TV", "TV Box compatíveis"],
  },
  section2: {
    title: "Do primeiro clique até o aplicativo pronto",
    text: "Nosso serviço é técnico: instalação, configuração, ativação e suporte.",
    cards: [
      { icon: MonitorSmartphone, title: "Instalação", desc: "Orientação para instalar o aplicativo compatível no seu aparelho." },
      { icon: Cpu, title: "Ativação", desc: "Realizamos a ativação quando o aplicativo exigir esse passo." },
      { icon: Settings, title: "Configuração", desc: "Preferências, idioma e organização da tela inicial." },
      { icon: ShieldCheck, title: "Verificação", desc: "Checagem de rede e compatibilidade para evitar falhas depois." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Como escolher o",
      h2Accent: "aplicativo para TV Samsung",
      paragraphs: [
        "As TVs Samsung usam o sistema Tizen, que tem sua própria loja de aplicativos. Isso significa que nem todo aplicativo disponível em celulares aparece na TV, e a versão correta depende do ano e da linha do seu aparelho.",
        "No atendimento, a primeira coisa que fazemos é identificar o modelo da sua TV. A partir disso indicamos um aplicativo compatível e explicamos como instalá-lo corretamente.",
        "Nosso serviço é exclusivamente técnico: instalação, configuração, ativação e suporte remoto do aplicativo no seu aparelho.",
      ],
      ctaLabel: "Quero saber qual aplicativo usar",
      ctaMessage: "Quero saber qual aplicativo é compatível com minha TV Samsung.",
      source: "app-samsung-escolha",
    },
    {
      h2Pre: "Suporte remoto",
      h2Accent: "sem complicação",
      paragraphs: [
        "Todo o atendimento acontece pelo WhatsApp. Você mantém o controle da TV nas mãos e apenas segue as orientações que enviamos, com prints e vídeos curtos quando ajuda a entender.",
        "Se algo travar no caminho — a TV não encontra o aplicativo, a instalação para no meio, a tela fica em branco — seguimos com você até o problema estar resolvido.",
      ],
      ctaLabel: "Preciso de ajuda agora",
      ctaMessage: "Preciso de ajuda com um aplicativo na minha TV Samsung.",
      source: "app-samsung-suporte",
    },
    {
      h2Pre: "Transparência sobre",
      h2Accent: "o que oferecemos",
      paragraphs: [
        "Não vendemos e não fornecemos conteúdo, listas ou programação. O que contratamos com você é tempo de trabalho técnico: instalação, configuração, ativação e suporte de aplicativos compatíveis.",
        "Também não somos afiliados nem representantes oficiais da Samsung ou de desenvolvedores de aplicativos. Somos um serviço de suporte independente.",
      ],
      ctaLabel: "Tirar dúvidas sobre o serviço",
      ctaMessage: "Quero entender melhor o serviço de suporte para TV Samsung.",
      source: "app-samsung-transparencia",
    },
  ],
  faqTitleAccent: "sobre aplicativos na TV Samsung",
  faqs: [
    { q: "O que exatamente vocês fazem?", a: "Prestamos suporte técnico remoto para instalar, configurar e ativar aplicativos compatíveis na sua TV Samsung, com acompanhamento pelo WhatsApp." },
    { q: "Preciso levar minha TV a uma assistência?", a: "Não. Todo o atendimento é remoto e você segue os passos no próprio controle da TV, com nossa orientação." },
    { q: "Funciona em qualquer TV Samsung?", a: "Atendemos a maioria dos modelos com sistema Tizen. Informe o modelo no WhatsApp e verificamos a compatibilidade antes de qualquer coisa." },
    { q: "Quanto tempo leva o atendimento?", a: "A maior parte dos casos é concluída na primeira conversa, em poucos minutos." },
    { q: "Vocês instalam o aplicativo remotamente na minha TV?", a: "Nós orientamos você passo a passo. Não acessamos sua TV nem instalamos programas no seu computador." },
    { q: "O aplicativo pede ativação. Vocês fazem isso?", a: "Sim. Quando o aplicativo exige ativação, realizamos esse passo com os dados que você informa." },
    { q: "Vocês fornecem canais, filmes ou listas?", a: "Não. Nosso serviço é apenas técnico: instalação, configuração, ativação e suporte de aplicativos compatíveis." },
    { q: "Que informações vocês pedem?", a: "Basicamente o modelo da TV e, quando o aplicativo exigir, o identificador exibido na tela. Não pedimos senhas de e-mail nem dados bancários." },
    { q: "O atendimento é humano?", a: "Sim. Você conversa diretamente com um atendente especializado, sem robôs." },
    { q: "Se der problema depois, posso voltar a falar com vocês?", a: "Pode. O canal de WhatsApp continua aberto para dúvidas de configuração e reinstalação." },
  ],
  internalLinks: samsungLinks("/aplicativo-para-tv-samsung"),
  disclaimer: SAMSUNG_DISCLAIMER,
  guarantee: {
    title: "Acompanhamento até o aplicativo estar funcionando",
    text: "Seguimos com você no WhatsApp até o aplicativo estar instalado e configurado na sua TV Samsung — sem espera e sem custo surpresa.",
  },
  source: "aplicativo-para-tv-samsung",
};

const AplicativoParaTvSamsung = () => <AdLandingPage config={config} />;

export default AplicativoParaTvSamsung;
