import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Headphones, Settings, Clock, ShieldCheck, MonitorSmartphone, Wifi, Cpu, Tv, SlidersHorizontal } from "lucide-react";
import { SAMSUNG_DISCLAIMER, samsungLinks } from "./samsungAppsLinks";

const WA = "Olá! Preciso configurar um aplicativo na minha TV Samsung.";

const config: AdLandingConfig = {
  path: "/configurar-aplicativo-tv-samsung",
  breadcrumbName: "Configurar aplicativo na TV Samsung",
  title: "Configurar Aplicativo na TV Samsung | Suporte Remoto",
  description:
    "Configuração assistida de aplicativos compatíveis na TV Samsung: ajustes, ativação quando necessária e verificação final. Suporte técnico remoto pelo WhatsApp.",
  eyebrow: "Configuração assistida • TV Samsung",
  heroPre: "Vamos",
  heroAccent: "configurar o aplicativo na TV Samsung",
  heroPost: "do jeito certo",
  heroSubtitle: (
    <>
      Ajustes finais, ativação quando exigida e{" "}
      <strong className="text-foreground">verificação completa de funcionamento</strong>, com você no comando.
    </>
  ),
  heroTrustLine: "Configuração orientada em Samsung Smart TV, Samsung Tizen, Android TV, Google TV e TV Box compatíveis",
  heroQuickBenefits: [
    "Ajuste de idioma e preferências",
    "Ativação assistida quando exigida",
    "Verificação de rede e desempenho",
    "Teste final antes de encerrar",
  ],
  heroImageAlt: "Configuração de aplicativo em TV Samsung com apoio de suporte remoto",
  heroBadgeTitle: "Configuração revisada",
  heroBadgeDesc: "TV Samsung • Ajustes finais",
  ctaLabel: "Configurar com um especialista",
  ctaMessage: WA,
  ctaMicrocopy: "Serviço técnico independente • Sem visita técnica",
  benefitsEyebrow: "Vantagens",
  benefitsTitlePre: "Configuração feita",
  benefitsTitleAccent: "com critério",
  benefits: [
    { icon: SlidersHorizontal, title: "Suporte técnico especializado", desc: "Cada ajuste é feito com um motivo, não por tentativa." },
    { icon: Settings, title: "Configuração assistida", desc: "Acompanhamos as telas do aplicativo junto com você." },
    { icon: Wifi, title: "Atendimento online", desc: "Configuração remota, sem deslocamento e sem espera." },
    { icon: Tv, title: "Especialistas em Smart TVs", desc: "Familiaridade com o comportamento dos aplicativos no sistema Samsung." },
    { icon: Headphones, title: "Atendimento remoto", desc: "Orientação em tempo real por WhatsApp, com linguagem simples." },
    { icon: Clock, title: "Processo rápido", desc: "Poucos minutos para deixar tudo ajustado e testado." },
  ],
  steps: {
    title: "Como fazemos a configuração",
    items: [
      { title: "Instale o aplicativo compatível", desc: "Se ainda não estiver instalado, orientamos essa etapa primeiro." },
      { title: "Entre em contato pelo WhatsApp", desc: "Informe o modelo da TV e o que precisa ser ajustado." },
      { title: "Receba orientação", desc: "Explicamos cada tela de configuração, na ordem correta." },
      { title: "Caso necessário, realizamos a ativação", desc: "Alguns aplicativos exigem ativação antes de configurar." },
      { title: "Finalizamos toda a configuração", desc: "Revisão geral e teste de funcionamento antes de encerrar." },
    ],
  },
  compatibility: {
    title: "Aparelhos que configuramos",
    text: "Cada sistema apresenta os menus de forma diferente, e adaptamos a orientação ao seu aparelho.",
    devices: ["Samsung Smart TV", "Samsung Tizen", "Android TV", "Google TV", "TV Box compatíveis"],
  },
  section2: {
    title: "Nosso serviço em quatro etapas",
    text: "Suporte técnico do início ao fim, sem promessas de conteúdo.",
    cards: [
      { icon: MonitorSmartphone, title: "Instalação", desc: "Orientação quando o aplicativo ainda não está instalado." },
      { icon: Cpu, title: "Ativação", desc: "Executada quando o aplicativo exige esse passo." },
      { icon: Settings, title: "Configuração", desc: "Preferências, idioma e aparência ajustados com você." },
      { icon: ShieldCheck, title: "Verificação", desc: "Teste final de rede e funcionamento." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Quais ajustes fazem",
      h2Accent: "diferença na prática",
      paragraphs: [
        "Idioma, formato de exibição, ordenação da tela inicial e preferências de reprodução mudam bastante a experiência de uso de um aplicativo na TV Samsung.",
        "Durante a configuração revisamos esses pontos junto com você, explicando o que cada opção faz para que depois você mesmo consiga alterar o que quiser.",
      ],
      ctaLabel: "Quero revisar meus ajustes",
      ctaMessage: "Quero revisar os ajustes do aplicativo na minha TV Samsung.",
      source: "configurar-app-samsung-ajustes",
    },
    {
      h2Pre: "Rede e desempenho:",
      h2Accent: "a checagem que evita problemas",
      paragraphs: [
        "Muita queixa de aplicativo lento na TV vem da conexão e não do aplicativo. Distância do roteador, canal de Wi-Fi congestionado e cabo mal encaixado são causas frequentes.",
        "Por isso a verificação de rede faz parte da configuração: conferimos o cenário com você antes de encerrar o atendimento.",
      ],
      ctaLabel: "Verificar minha rede",
      ctaMessage: "Quero ajuda para verificar a rede e o desempenho do aplicativo na TV Samsung.",
      source: "configurar-app-samsung-rede",
    },
    {
      h2Pre: "Suporte independente,",
      h2Accent: "escopo claro",
      paragraphs: [
        "Prestamos suporte técnico para instalação, configuração e ativação de aplicativos compatíveis. Não fornecemos conteúdo, canais, programação ou listas.",
        "Não somos afiliados nem representantes oficiais da Samsung ou de desenvolvedores de aplicativos.",
      ],
      ctaLabel: "Falar sobre o serviço",
      ctaMessage: "Quero entender o serviço de configuração de aplicativo na TV Samsung.",
      source: "configurar-app-samsung-escopo",
    },
  ],
  faqTitleAccent: "sobre configurar aplicativo na TV Samsung",
  faqs: [
    { q: "O que a configuração inclui?", a: "Ajuste de idioma e preferências, ativação quando o aplicativo exige, verificação de rede e teste final de funcionamento." },
    { q: "Meu aplicativo abre com idioma errado. Dá para mudar?", a: "Sim. Mostramos onde alterar o idioma dentro do aplicativo e nas configurações da TV." },
    { q: "A configuração precisa ser refeita depois de reinstalar?", a: "Em geral sim, e nós refazemos com você caso a reinstalação seja necessária." },
    { q: "O aplicativo está lento. É problema de configuração?", a: "Muitas vezes é rede. Verificamos a conexão e ajustamos o que estiver ao nosso alcance." },
    { q: "Vocês configuram mais de um aplicativo no mesmo atendimento?", a: "Sim, desde que sejam aplicativos compatíveis com o seu aparelho." },
    { q: "Preciso estar em frente à TV?", a: "Sim, porque você executa os passos com o controle enquanto orientamos por mensagem." },
    { q: "Vocês pedem senhas?", a: "Não pedimos senhas de e-mail nem dados bancários. Apenas as informações exibidas na tela do aplicativo." },
    { q: "A ativação é obrigatória?", a: "Depende do aplicativo. Quando for exigida, realizamos esse passo com você." },
    { q: "Vocês fornecem listas ou conteúdo?", a: "Não. O serviço é exclusivamente técnico." },
    { q: "Como inicio o atendimento?", a: "Toque em qualquer botão de WhatsApp desta página e envie o modelo da sua TV Samsung." },
  ],
  internalLinks: samsungLinks("/configurar-aplicativo-tv-samsung"),
  disclaimer: SAMSUNG_DISCLAIMER,
  guarantee: {
    title: "Configuração testada antes de encerrar",
    text: "Só finalizamos o atendimento depois de testar o aplicativo com você e confirmar que está tudo funcionando na sua TV Samsung.",
  },
  source: "configurar-aplicativo-tv-samsung",
};

const ConfigurarAplicativoTvSamsung = () => <AdLandingPage config={config} />;

export default ConfigurarAplicativoTvSamsung;
