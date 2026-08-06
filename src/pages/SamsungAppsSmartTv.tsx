import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Headphones, Settings, Clock, ShieldCheck, MonitorSmartphone, Wifi, Cpu, Tv, LayoutGrid } from "lucide-react";
import { SAMSUNG_DISCLAIMER, samsungLinks } from "./samsungAppsLinks";

const WA = "Olá! Preciso de suporte com os aplicativos da minha Smart TV Samsung.";

const config: AdLandingConfig = {
  path: "/samsung-apps-smart-tv",
  breadcrumbName: "Samsung Apps Smart TV",
  title: "Samsung Apps Smart TV | Suporte para Instalar e Configurar",
  description:
    "Suporte técnico remoto para aplicativos na Smart TV Samsung: atualizar, reinstalar, organizar e configurar. Atendimento humano pelo WhatsApp, sem deslocamento.",
  eyebrow: "Samsung Apps Smart TV • WhatsApp",
  heroPre: "Organize os",
  heroAccent: "Samsung Apps da Smart TV",
  heroPost: "com ajuda especializada",
  heroSubtitle: (
    <>
      Atualizar, reinstalar, organizar a tela inicial e{" "}
      <strong className="text-foreground">configurar o aplicativo compatível</strong> — tudo com orientação remota.
    </>
  ),
  heroTrustLine: "Suporte para Samsung Smart TV, Samsung Tizen, Android TV, Google TV e TV Box compatíveis",
  heroQuickBenefits: [
    "Atualização de aplicativos orientada",
    "Reinstalação sem perder ajustes",
    "Organização da tela inicial",
    "Configuração final revisada",
  ],
  heroImageAlt: "Tela inicial de Smart TV Samsung organizada após suporte técnico",
  heroBadgeTitle: "Tela inicial no lugar",
  heroBadgeDesc: "Samsung Apps • Smart TV",
  ctaLabel: "Pedir ajuda no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Serviço técnico independente • Atendimento remoto",
  benefitsEyebrow: "Motivos para contratar",
  benefitsTitlePre: "Suporte completo para a",
  benefitsTitleAccent: "sua Smart TV",
  benefits: [
    { icon: Headphones, title: "Suporte técnico especializado", desc: "Atendimento por quem lida com aparelhos Samsung diariamente." },
    { icon: Settings, title: "Configuração assistida", desc: "Ajustes de preferências feitos com você, sem pressa." },
    { icon: Wifi, title: "Atendimento online", desc: "Tudo remoto: sem visita técnica e sem sair de casa." },
    { icon: Tv, title: "Especialistas em Smart TVs", desc: "Conhecemos o comportamento da loja de aplicativos em cada versão do sistema." },
    { icon: LayoutGrid, title: "Atendimento remoto", desc: "Organizamos a tela inicial para você achar o que usa com um clique." },
    { icon: Clock, title: "Processo rápido", desc: "Resolução direta, normalmente no primeiro atendimento." },
  ],
  steps: {
    title: "Como funciona o passo a passo",
    items: [
      { title: "Instale o aplicativo compatível", desc: "Confirmamos a compatibilidade e orientamos a instalação na sua Smart TV." },
      { title: "Entre em contato pelo WhatsApp", desc: "Explique o que precisa: atualizar, reinstalar, organizar ou configurar." },
      { title: "Receba orientação", desc: "Enviamos instruções claras para o seu modelo específico." },
      { title: "Caso necessário, realizamos a ativação", desc: "Se o aplicativo exigir ativação, cuidamos desse passo." },
      { title: "Finalizamos toda a configuração", desc: "Testamos o funcionamento e ajustamos os detalhes finais." },
    ],
  },
  compatibility: {
    title: "Aparelhos atendidos",
    text: "Cada sistema tem seus próprios menus, e adaptamos as orientações a cada um deles.",
    devices: ["Samsung Smart TV", "Samsung Tizen", "Android TV", "Google TV", "TV Box compatíveis"],
  },
  section2: {
    title: "O que está incluído",
    text: "Trabalho técnico, sem promessas de conteúdo.",
    cards: [
      { icon: MonitorSmartphone, title: "Instalação", desc: "Aplicativos compatíveis instalados na ordem correta." },
      { icon: Cpu, title: "Ativação", desc: "Executada apenas quando o aplicativo exige." },
      { icon: Settings, title: "Configuração", desc: "Idioma, aparência e preferências ajustados." },
      { icon: ShieldCheck, title: "Suporte", desc: "Canal aberto para dúvidas depois do atendimento." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Como manter os aplicativos da",
      h2Accent: "Smart TV atualizados",
      paragraphs: [
        "As TVs Samsung podem atualizar aplicativos automaticamente, mas essa opção às vezes vem desligada — e um aplicativo desatualizado abre com falhas ou nem abre.",
        "No atendimento mostramos onde ativar a atualização automática e como forçar a atualização manual de um aplicativo específico, respeitando os menus da sua versão de sistema.",
      ],
      ctaLabel: "Quero atualizar meus apps",
      ctaMessage: "Quero ajuda para atualizar os aplicativos da minha Smart TV Samsung.",
      source: "samsung-apps-smart-tv-update",
    },
    {
      h2Pre: "Tela inicial",
      h2Accent: "organizada e prática",
      paragraphs: [
        "Na Smart TV Samsung é possível reordenar os aplicativos da barra inferior, deixando o que você mais usa em primeiro lugar e escondendo o resto.",
        "É um ajuste simples que muda bastante o dia a dia, especialmente para quem tem pouca familiaridade com o controle. Fazemos isso junto com você durante o atendimento.",
      ],
      ctaLabel: "Organizar minha tela inicial",
      ctaMessage: "Quero organizar os aplicativos da tela inicial da minha Samsung.",
      source: "samsung-apps-smart-tv-tela",
    },
    {
      h2Pre: "Serviço independente:",
      h2Accent: "sem conteúdo, só suporte",
      paragraphs: [
        "Não fornecemos canais, filmes, séries, programação ou listas. Prestamos suporte técnico para instalação, configuração, ativação e uso de aplicativos compatíveis.",
        "Também não representamos a Samsung nem desenvolvedores de aplicativos: somos um atendimento independente contratado por você.",
      ],
      ctaLabel: "Tirar dúvidas",
      ctaMessage: "Tenho dúvidas sobre o suporte para aplicativos da Smart TV Samsung.",
      source: "samsung-apps-smart-tv-escopo",
    },
  ],
  faqTitleAccent: "sobre Samsung Apps na Smart TV",
  faqs: [
    { q: "Como atualizo um aplicativo na Smart TV Samsung?", a: "Pela própria loja de aplicativos, na página do app. Se a opção não aparecer, orientamos o caminho da sua versão de sistema." },
    { q: "Posso ativar a atualização automática?", a: "Sim, existe essa opção nas configurações da loja. Mostramos onde encontrá-la no seu modelo." },
    { q: "Reinstalar apaga minhas configurações?", a: "Em geral sim, e por isso refazemos a configuração com você depois da reinstalação." },
    { q: "Consigo mudar a ordem dos aplicativos na tela inicial?", a: "Sim. A barra de aplicativos permite reordenar, e ajudamos você a fazer isso." },
    { q: "A memória da TV pode ficar cheia?", a: "Pode. Nesse caso orientamos quais aplicativos remover com segurança." },
    { q: "Vocês fazem visita técnica?", a: "Não. Nosso atendimento é 100% remoto, pelo WhatsApp." },
    { q: "É preciso reiniciar a TV durante o processo?", a: "Em alguns casos sim, e é um passo simples que orientamos na hora." },
    { q: "O aplicativo exige ativação?", a: "Alguns exigem. Quando for o caso, realizamos a ativação com o identificador exibido na tela." },
    { q: "Vocês entregam listas ou conteúdo?", a: "Não. Nosso serviço é apenas de instalação, configuração, ativação e suporte." },
    { q: "Qual o horário de atendimento?", a: "Atendemos de segunda a sábado, das 08h às 22h, pelo WhatsApp." },
  ],
  internalLinks: samsungLinks("/samsung-apps-smart-tv"),
  disclaimer: SAMSUNG_DISCLAIMER,
  guarantee: {
    title: "Atendimento até a Smart TV ficar pronta",
    text: "Continuamos no WhatsApp até os aplicativos estarem atualizados, organizados e configurados na sua Smart TV Samsung.",
  },
  source: "samsung-apps-smart-tv",
};

const SamsungAppsSmartTv = () => <AdLandingPage config={config} />;

export default SamsungAppsSmartTv;
