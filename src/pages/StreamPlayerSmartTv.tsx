import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, MonitorPlay, Cast, Radio, Smartphone, Box } from "lucide-react";

const WA = "Olá! Quero ativar um stream player na Smart TV.";

const config: AdLandingConfig = {
  path: "/stream-player-smart-tv",
  title: "Stream Player para Smart TV | Ativação por R$ 19,99/mês",
  description:
    "Stream Player para Smart TV: ativação rápida, configuração orientada, compatibilidade verificada (Samsung, LG, Android TV) e suporte pelo WhatsApp. R$ 19,99/mês.",
  eyebrow: "Stream Player • Smart TV",
  heroPre: "Stream Player para",
  heroAccent: "Smart TV",
  heroPost: "ativação e configuração",
  heroSubtitle: (
    <>
      Ative e configure o <strong className="text-foreground">Stream Player na sua Smart TV</strong> com compatibilidade
      verificada antes e suporte pelo WhatsApp. Plano mensal de R$ 19,99.
    </>
  ),
  heroTrustLine: "Compatibilidade verificada • Samsung, LG, Android TV e Google TV.",
  heroQuickBenefits: [
    "R$ 19,99/mês",
    "Ativação rápida",
    "Compatibilidade com Smart TV",
    "Suporte pelo WhatsApp",
    "Experiência estável",
  ],
  heroImageAlt: "Stream Player rodando em Smart TV Samsung, LG e Android TV",
  heroBadgeTitle: "Compatível",
  heroBadgeDesc: "Samsung • LG • Android TV",
  heroPriceCard: {
    label: "Plano mensal",
    price: "R$ 19,99/mês",
    lines: [
      "Ativação rápida do stream player",
      "Configuração orientada na sua Smart TV",
      "Compatibilidade verificada antes",
      "Suporte pelo WhatsApp",
    ],
  },
  ctaLabel: "Ativar Meu Aplicativo",
  ctaMessage: WA,
  ctaMicrocopy: "R$ 19,99/mês • Compatibilidade confirmada antes",
  benefitsEyebrow: "Compatibilidade ampla",
  benefitsTitlePre: "Dispositivos que rodam",
  benefitsTitleAccent: "Stream Player",
  benefits: [
    { icon: Tv, title: "Samsung Smart TV", desc: "Modelos Samsung compatíveis com o app Stream Player." },
    { icon: MonitorPlay, title: "LG Smart TV", desc: "Modelos LG compatíveis, com instalação assistida." },
    { icon: Cast, title: "Android TV", desc: "Sony, TCL, Philips, AOC e outros com Android TV." },
    { icon: Radio, title: "Google TV", desc: "Smart TVs mais recentes com Google TV." },
    { icon: Smartphone, title: "Fire TV Stick", desc: "Amazon Fire TV Stick compatíveis, com instalação assistida." },
    { icon: Box, title: "TV Box Android", desc: "TV Box Android compatíveis, verificados antes de iniciar." },
  ],
  seoBlocks: [
    {
      h2Pre: "Stream Player em",
      h2Accent: "Samsung e LG",
      paragraphs: [
        "Em Smart TVs Samsung e LG compatíveis, o Stream Player é instalado seguindo o procedimento específico de cada marca. Suportamos os principais modelos vendidos hoje.",
        "Antes de iniciar, confirmamos pelo WhatsApp o modelo exato da sua TV, evitando começar um atendimento em um aparelho incompatível.",
      ],
      ctaLabel: "Verificar Samsung ou LG",
      ctaMessage: "Quero saber se meu modelo Samsung ou LG é compatível com o Stream Player.",
      source: "stream-samsung-lg",
    },
    {
      h2Pre: "Stream Player em",
      h2Accent: "Android TV e Google TV",
      paragraphs: [
        "Android TV e Google TV cobrem marcas como Sony, TCL, Philips, AOC, Multilaser e o Chromecast com Google TV. O Stream Player roda muito bem nesses sistemas.",
        "A instalação e a configuração são feitas com suporte humano no WhatsApp, garantindo o app rodando estável na sua TV.",
      ],
      ctaLabel: "Verificar Android / Google TV",
      ctaMessage: "Quero saber se meu Android TV ou Google TV é compatível.",
      source: "stream-android-google",
    },
  ],
  faqTitleAccent: "sobre Smart TV",
  faqs: [
    { q: "Meu modelo de Smart TV é compatível?", a: "Envie a marca e o modelo pelo WhatsApp. Confirmamos a compatibilidade do Stream Player com o seu aparelho antes de iniciar." },
    { q: "Funciona em Samsung?", a: "Sim, em modelos Samsung compatíveis. Confirmamos pelo WhatsApp antes de iniciar." },
    { q: "Funciona em LG?", a: "Sim, em modelos LG compatíveis. Verificamos o modelo antes." },
    { q: "Funciona em Android TV?", a: "Sim. O Stream Player é compatível com aparelhos Android TV e Google TV." },
    { q: "Preciso de internet para usar?", a: "Sim. O Stream Player depende de conexão com a internet, de preferência via cabo ou Wi-Fi estável." },
    { q: "TV Box funciona?", a: "Sim, em TV Box Android compatíveis. Confirmamos antes de tentar instalar." },
  ],
  source: "stream-player-smart-tv",
};

const StreamPlayerSmartTv = () => <AdLandingPage config={config} />;

export default StreamPlayerSmartTv;
