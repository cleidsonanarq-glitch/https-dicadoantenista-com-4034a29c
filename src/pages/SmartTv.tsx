import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, MonitorPlay, Cast, Radio, Smartphone, Box } from "lucide-react";

const WA = "Olá! Quero saber se o IBO Player funciona na minha Smart TV.";

const config: AdLandingConfig = {
  path: "/smart-tv",
  title: "IBO Player para Smart TV Samsung, LG, Android TV e TV Box | Suporte WhatsApp",
  description:
    "Aplicativo IBO Player para Smart TV Samsung, LG, Android TV, Google TV, Fire TV Stick e TV Box. Verificação de compatibilidade e suporte no WhatsApp.",
  eyebrow: "IBO Player • Compatibilidade Smart TV",
  heroPre: "IBO Player para",
  heroAccent: "Smart TV",
  heroPost: "Samsung, LG, Android TV e TV Box",
  heroSubtitle: (
    <>
      Verificamos a compatibilidade do <strong className="text-foreground">IBO Player</strong> com o seu modelo de Smart TV
      e conduzimos toda a instalação e configuração pelo WhatsApp.
    </>
  ),
  heroImageAlt: "IBO Player rodando em Smart TV Samsung, LG, Android TV, Google TV e TV Box",
  heroBadgeTitle: "Compatível",
  heroBadgeDesc: "Samsung • LG • Android • TV Box",
  ctaLabel: "Verificar minha Smart TV",
  ctaMessage: WA,
  ctaMicrocopy: "Compatibilidade confirmada antes • Suporte humano",
  benefitsEyebrow: "Compatibilidade oficial",
  benefitsTitlePre: "Dispositivos que rodam",
  benefitsTitleAccent: "IBO Player",
  benefits: [
    { icon: Tv, title: "Samsung Smart TV", desc: "Modelos Samsung com sistema Tizen que suportam o app IBO Player pela loja de apps." },
    { icon: MonitorPlay, title: "LG Smart TV", desc: "Modelos LG com sistema webOS compatíveis, com instalação via LG Content Store." },
    { icon: Cast, title: "Android TV", desc: "Sony, TCL, Philips, AOC e outros com Android TV / Google TV." },
    { icon: Radio, title: "Google TV / Chromecast", desc: "Chromecast com Google TV e Smart TVs mais recentes com Google TV." },
    { icon: Smartphone, title: "Fire TV Stick", desc: "Amazon Fire TV Stick, com instalação assistida via WhatsApp." },
    { icon: Box, title: "TV Box Android", desc: "TV Box Android compatíveis com IBO Player, verificados antes de iniciar o suporte." },
  ],
  seoBlocks: [
    {
      h2Pre: "IBO Player em",
      h2Accent: "Samsung e LG",
      paragraphs: [
        "Em Smart TVs Samsung (Tizen) e LG (webOS), o IBO Player é instalado pela loja oficial de aplicativos de cada marca. Suportamos os principais modelos vendidos hoje no mercado brasileiro.",
        "Antes de iniciar, confirmamos pelo WhatsApp o modelo exato da sua TV, evitando começar um atendimento em um aparelho incompatível.",
      ],
      ctaLabel: "Verificar minha Samsung ou LG",
      ctaMessage: "Quero saber se meu modelo Samsung ou LG é compatível com o IBO Player.",
      source: "smarttv-samsung-lg",
    },
    {
      h2Pre: "IBO Player em",
      h2Accent: "Android TV e Google TV",
      paragraphs: [
        "Android TV e Google TV cobrem marcas como Sony, TCL, Philips, AOC, Multilaser e o próprio Chromecast com Google TV. O IBO Player está entre os aplicativos mais utilizados nesses sistemas.",
        "A instalação e a configuração em Android TV são feitas com suporte humano no WhatsApp, garantindo o app rodando estável na sua TV.",
      ],
      ctaLabel: "Verificar Android TV / Google TV",
      ctaMessage: "Quero saber se meu Android TV ou Google TV é compatível.",
      source: "smarttv-android-google",
    },
    {
      h2Pre: "IBO Player em",
      h2Accent: "TV Box e Fire TV Stick",
      paragraphs: [
        "TV Box Android e Amazon Fire TV Stick permitem instalar o IBO Player em TVs que não têm sistema smart nativo compatível. Verificamos qual método é o ideal para o seu aparelho.",
        "Se o seu TV Box não for compatível, avisamos com transparência antes de iniciar, para você não gastar tempo em uma configuração inviável.",
      ],
      ctaLabel: "Verificar meu TV Box",
      ctaMessage: "Quero saber se meu TV Box é compatível com o IBO Player.",
      source: "smarttv-tvbox-firestick",
    },
  ],
  faqTitleAccent: "sobre Smart TV",
  faqs: [
    { q: "Meu modelo de Smart TV é compatível?", a: "Envie a marca e o modelo pelo WhatsApp. Confirmamos a compatibilidade do IBO Player com o seu aparelho antes de iniciar o suporte." },
    { q: "Preciso ter internet para usar o IBO Player?", a: "Sim. O IBO Player depende de conexão com a internet, de preferência via cabo ou Wi-Fi estável." },
    { q: "Funciona em Samsung antiga?", a: "Alguns modelos Samsung antigos não recebem mais atualização e podem não rodar o app. Verificamos isso antes." },
    { q: "Funciona em LG antiga?", a: "Depende da versão do webOS. Informamos pelo WhatsApp se o seu modelo LG é compatível com o IBO Player." },
    { q: "TV Box genérico funciona?", a: "Alguns sim, outros não. Sempre confirmamos com você antes de tentar instalar o IBO Player." },
    { q: "Fire TV Stick funciona?", a: "Sim, com procedimento específico. Orientamos passo a passo no WhatsApp." },
  ],
  source: "smart-tv",
};

const SmartTv = () => <AdLandingPage config={config} />;

export default SmartTv;
