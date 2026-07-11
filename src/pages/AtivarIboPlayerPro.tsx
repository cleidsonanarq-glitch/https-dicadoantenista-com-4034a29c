import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, Smartphone, Monitor, Box, Headphones, MessageCircle, KeyRound, CheckCircle2, Zap, ShieldCheck } from "lucide-react";

const WA = "Olá! Quero ativar meu IBO Player Pro.";

const config: AdLandingConfig = {
  path: "/ativar-ibo-player-pro",
  title: "Ativar IBO Player Pro | Suporte Rápido pelo WhatsApp",
  description:
    "Receba suporte para ativar o IBO Player Pro na sua Smart TV, TV Box ou Android. Atendimento rápido pelo WhatsApp.",
  eyebrow: "Ativação do IBO Player Pro • Suporte WhatsApp",
  heroPre: "Ativar",
  heroAccent: "IBO Player Pro",
  heroPost: "com suporte especializado",
  heroSubtitle: (
    <>
      Receba orientação para ativar e configurar o <strong className="text-foreground">IBO Player Pro</strong> em Smart TV Samsung, LG, Android TV e TV Box com atendimento direto pelo WhatsApp.
    </>
  ),
  heroImageAlt: "Ativação do IBO Player Pro em Smart TV Samsung, LG e Android TV",
  heroBadgeTitle: "Ativação assistida",
  heroBadgeDesc: "Suporte humano • App funcionando",
  ctaLabel: "Ativar Meu IBO Player Pro",
  ctaMessage: WA,
  ctaMicrocopy: "Atendimento humano • Resposta em minutos",
  benefitsEyebrow: "Dispositivos compatíveis",
  benefitsTitlePre: "IBO Player Pro",
  benefitsTitleAccent: "funciona onde você precisa",
  benefits: [
    { icon: Tv, title: "Smart TV Samsung", desc: "Suporte completo para ativação do IBO Player Pro em TVs Samsung com sistema Tizen." },
    { icon: Monitor, title: "Smart TV LG", desc: "Orientamos a ativação do IBO Player Pro em TVs LG com sistema webOS, passo a passo." },
    { icon: Smartphone, title: "Android TV / Google TV", desc: "Ativação do IBO Player Pro em Android TV, Google TV e aparelhos compatíveis." },
    { icon: Box, title: "TV Box Android", desc: "Verificamos a compatibilidade e guiamos a ativação do IBO Player Pro no seu TV Box." },
    { icon: Headphones, title: "Suporte humano", desc: "Você fala direto com um especialista em IBO Player Pro, sem robô e sem fila." },
    { icon: Zap, title: "Ativação rápida", desc: "A maioria das ativações é concluída em poucos minutos pelo WhatsApp." },
  ],
  seoBlocks: [
    {
      h2Pre: "Como funciona a",
      h2Accent: "ativação do IBO Player Pro",
      paragraphs: [
        "A ativação do IBO Player Pro é feita dentro do próprio aplicativo, informando os dados da licença. Cada modelo de TV exibe as telas de forma diferente, e é comum travar na MAC address, na validação ou na primeira abertura.",
        "Nosso suporte acompanha você pelo WhatsApp em cada etapa, indicando exatamente o que preencher e como confirmar a ativação sem erro.",
      ],
      ctaLabel: "Quero ativar meu IBO Player Pro",
      ctaMessage: "Quero ativar meu IBO Player Pro agora.",
      source: "ativar-ibo-player-pro",
    },
    {
      h2Pre: "Suporte para",
      h2Accent: "Samsung, LG, Android TV e TV Box",
      paragraphs: [
        "Cada sistema operacional tem um fluxo próprio para ativar o IBO Player Pro. Em Samsung Tizen, LG webOS, Android TV, Google TV e TV Box Android, orientamos a instalação, a configuração inicial e a ativação da licença.",
        "Se o aplicativo já estiver instalado, focamos direto na ativação. Se precisar, também ajudamos na instalação e configuração para que tudo funcione corretamente.",
      ],
      ctaLabel: "Ativar na minha TV",
      ctaMessage: "Quero ativar o IBO Player Pro na minha TV.",
      source: "ativar-ibo-player-pro-tv",
    },
    {
      h2Pre: "Atendimento rápido",
      h2Accent: "pelo WhatsApp",
      paragraphs: [
        "Todo o suporte é remoto e feito pelo WhatsApp. Você não precisa sair de casa nem levar o aparelho a lugar nenhum.",
        "Um especialista responde em minutos, conduz as telas junto com você e só encerra o atendimento quando o IBO Player Pro estiver ativado e funcionando.",
      ],
      ctaLabel: "Falar com especialista",
      ctaMessage: "Quero falar com um especialista para ativar meu IBO Player Pro.",
      source: "ativar-ibo-player-pro-whatsapp",
    },
  ],
  faqTitleAccent: "sobre ativação",
  faqs: [
    { q: "Como ativar o IBO Player Pro?", a: "A ativação é feita dentro do aplicativo, informando os dados da licença. Nosso suporte conduz cada tela pelo WhatsApp até o IBO Player Pro estar ativo e funcionando." },
    { q: "O IBO Player Pro funciona na Smart TV Samsung?", a: "Sim. Orientamos a ativação do IBO Player Pro em TVs Samsung com sistema Tizen, configurando cada tela necessária." },
    { q: "Funciona em TV LG?", a: "Sim. Fazemos o suporte para ativação do IBO Player Pro em TVs LG com sistema webOS, passo a passo." },
    { q: "Funciona em TV Box?", a: "Sim. Atendemos TV Box Android compatíveis, verificando o aplicativo e guiando a ativação do IBO Player Pro." },
    { q: "Vocês ajudam pelo WhatsApp?", a: "Sim. Todo o atendimento é feito pelo WhatsApp, de forma remota, com um especialista que acompanha você até o IBO Player Pro funcionar." },
    { q: "Quanto tempo demora a ativação?", a: "Na maioria dos casos, a ativação é concluída em poucos minutos com nosso suporte pelo WhatsApp. O tempo pode variar conforme o aparelho." },
  ],
  source: "ativar-ibo-player-pro",
};

const AtivarIboPlayerPro = () => <AdLandingPage config={config} />;

export default AtivarIboPlayerPro;
