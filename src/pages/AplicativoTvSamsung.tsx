import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Headphones, Settings, Clock, ShieldCheck, MonitorSmartphone, Wifi, Cpu, Tv, Search } from "lucide-react";
import { SAMSUNG_DISCLAIMER, samsungLinks } from "./samsungAppsLinks";

const WA = "Olá! Quero orientação sobre aplicativo para TV Samsung.";

const config: AdLandingConfig = {
  path: "/aplicativo-tv-samsung",
  breadcrumbName: "Aplicativo TV Samsung",
  title: "Aplicativo TV Samsung | Orientação Técnica e Configuração",
  description:
    "Descubra qual aplicativo é compatível com sua TV Samsung e receba suporte técnico remoto para instalar, configurar e ativar. Atendimento humano no WhatsApp.",
  eyebrow: "Aplicativo TV Samsung • Suporte técnico",
  heroPre: "Qual",
  heroAccent: "aplicativo TV Samsung",
  heroPost: "combina com o seu modelo?",
  heroSubtitle: (
    <>
      Identificamos o aplicativo compatível com o seu aparelho e{" "}
      <strong className="text-foreground">acompanhamos a instalação e a configuração</strong> com você.
    </>
  ),
  heroTrustLine: "Orientação para Samsung Smart TV, Samsung Tizen, Android TV, Google TV e TV Box compatíveis",
  heroQuickBenefits: [
    "Verificação do modelo e do sistema",
    "Indicação de aplicativo compatível",
    "Ativação assistida se for exigida",
    "Configuração revisada no final",
  ],
  heroImageAlt: "Smart TV Samsung exibindo aplicativo configurado por suporte técnico",
  heroBadgeTitle: "Compatibilidade conferida",
  heroBadgeDesc: "Aplicativo TV Samsung • Antes de instalar",
  ctaLabel: "Consultar meu modelo",
  ctaMessage: WA,
  ctaMicrocopy: "Consulta sem compromisso • Suporte independente",
  benefitsEyebrow: "Vantagens do atendimento",
  benefitsTitlePre: "Menos tentativa e erro,",
  benefitsTitleAccent: "mais resultado",
  benefits: [
    { icon: Search, title: "Suporte técnico especializado", desc: "Conferimos modelo, ano e versão do sistema antes de indicar qualquer aplicativo." },
    { icon: Settings, title: "Configuração assistida", desc: "Cada ajuste é feito junto com você, na sequência correta." },
    { icon: Wifi, title: "Atendimento online", desc: "Você resolve tudo de casa, pelo WhatsApp." },
    { icon: Tv, title: "Especialistas em Smart TVs", desc: "Atendemos aparelhos Samsung todos os dias e conhecemos suas particularidades." },
    { icon: Headphones, title: "Atendimento remoto", desc: "Explicações em linguagem simples, com prints quando necessário." },
    { icon: Clock, title: "Processo rápido", desc: "Do primeiro contato ao aplicativo funcionando em poucos minutos." },
  ],
  steps: {
    title: "Como funciona",
    items: [
      { title: "Instale o aplicativo compatível", desc: "Depois de conferir o modelo, indicamos o aplicativo adequado e orientamos a instalação." },
      { title: "Entre em contato pelo WhatsApp", desc: "Envie o modelo da TV, que normalmente fica na etiqueta traseira ou no menu de suporte." },
      { title: "Receba orientação", desc: "Passamos o caminho exato dentro dos menus do seu aparelho." },
      { title: "Caso necessário, realizamos a ativação", desc: "Quando o aplicativo exige ativação, fazemos esse passo com você." },
      { title: "Finalizamos toda a configuração", desc: "Revisão final para o aplicativo abrir sem erros." },
    ],
  },
  compatibility: {
    title: "Aparelhos compatíveis",
    text: "As instruções mudam conforme o sistema. Por isso adaptamos o atendimento a cada aparelho.",
    devices: ["Samsung Smart TV", "Samsung Tizen", "Android TV", "Google TV", "TV Box compatíveis"],
  },
  section2: {
    title: "Nosso escopo de trabalho",
    text: "Serviço técnico completo, do começo ao fim.",
    cards: [
      { icon: MonitorSmartphone, title: "Instalação", desc: "Aplicativo compatível instalado corretamente." },
      { icon: Cpu, title: "Ativação", desc: "Feita quando o aplicativo solicita." },
      { icon: Settings, title: "Configuração", desc: "Preferências ajustadas para uso confortável." },
      { icon: ShieldCheck, title: "Suporte", desc: "Acompanhamento remoto durante todo o processo." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Como descobrir o modelo da",
      h2Accent: "sua TV Samsung",
      paragraphs: [
        "O modelo aparece na etiqueta na parte de trás do aparelho e também no menu de configurações, na área de suporte e informações da TV. Esse código indica o ano e a linha do produto.",
        "Com essa informação, sabemos qual versão do sistema Tizen sua TV usa e, a partir disso, qual aplicativo compatível faz sentido instalar.",
      ],
      ctaLabel: "Enviar meu modelo",
      ctaMessage: "Quero enviar o modelo da minha TV Samsung para verificação.",
      source: "app-tv-samsung-modelo",
    },
    {
      h2Pre: "Configuração feita",
      h2Accent: "com acompanhamento",
      paragraphs: [
        "Instalar é apenas metade do caminho. Um aplicativo mal configurado pode abrir com idioma errado, aparência confusa ou travando na primeira tela.",
        "Por isso a configuração faz parte do nosso serviço: revisamos as preferências junto com você e testamos o funcionamento antes de encerrar o atendimento.",
      ],
      ctaLabel: "Quero configurar com suporte",
      ctaMessage: "Quero ajuda para configurar o aplicativo na minha TV Samsung.",
      source: "app-tv-samsung-config",
    },
    {
      h2Pre: "Um serviço",
      h2Accent: "independente e transparente",
      paragraphs: [
        "Não somos afiliados nem representantes oficiais da Samsung ou de desenvolvedores de aplicativos, e não fornecemos conteúdo, canais ou listas.",
        "O que você contrata é suporte técnico: instalação, configuração, ativação quando necessária e atendimento remoto.",
      ],
      ctaLabel: "Falar com um especialista",
      ctaMessage: "Quero falar com um especialista sobre aplicativo para TV Samsung.",
      source: "app-tv-samsung-transparencia",
    },
  ],
  faqTitleAccent: "sobre aplicativo TV Samsung",
  faqs: [
    { q: "Como sei se o aplicativo é compatível com minha TV?", a: "Basta enviar o modelo do aparelho pelo WhatsApp. Verificamos a compatibilidade antes de qualquer instalação." },
    { q: "Onde encontro o modelo da minha Samsung?", a: "Na etiqueta atrás da TV e também no menu de configurações, na área de suporte e informações do aparelho." },
    { q: "TVs Samsung antigas também são atendidas?", a: "Sim, sempre que houver um aplicativo compatível disponível para aquela versão do sistema." },
    { q: "Vocês cobram pela consulta de compatibilidade?", a: "A verificação inicial pelo WhatsApp é sem compromisso. Explicamos os valores do serviço antes de iniciar." },
    { q: "Preciso de internet rápida?", a: "Uma conexão estável é suficiente. Se houver instabilidade, orientamos ajustes de rede." },
    { q: "O aplicativo pode sumir depois de uma atualização?", a: "Pode acontecer. Nesse caso, orientamos a reinstalação e refazemos a configuração." },
    { q: "Vocês fazem a ativação?", a: "Sim, quando o aplicativo exige esse passo, realizamos a ativação junto com você." },
    { q: "É preciso instalar algo no celular ou computador?", a: "Não. Todo o processo acontece na própria TV, com orientação por mensagem." },
    { q: "Vocês fornecem canais ou filmes?", a: "Não. Nosso serviço é exclusivamente técnico." },
    { q: "Consigo atendimento no mesmo dia?", a: "Na maioria das vezes sim. Envie a mensagem e um atendente responde em poucos minutos." },
  ],
  internalLinks: samsungLinks("/aplicativo-tv-samsung"),
  disclaimer: SAMSUNG_DISCLAIMER,
  guarantee: {
    title: "Compatibilidade conferida antes de começar",
    text: "Só avançamos quando confirmamos que existe um aplicativo compatível com o seu modelo Samsung — assim você não perde tempo nem dinheiro.",
  },
  source: "aplicativo-tv-samsung",
};

const AplicativoTvSamsung = () => <AdLandingPage config={config} />;

export default AplicativoTvSamsung;
