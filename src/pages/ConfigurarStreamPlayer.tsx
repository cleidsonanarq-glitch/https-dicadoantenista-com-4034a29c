import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Settings2, Tv, MonitorSmartphone, Wrench, Headphones, ListChecks } from "lucide-react";

const WA = "Olá! Quero configurar o Stream Player.";

const config: AdLandingConfig = {
  path: "/configurar-stream-player",
  title: "Configurar Stream Player • Rápido e Seguro | Suporte WhatsApp",
  description:
    "Configuração rápida e segura do Stream Player em Smart TV, TV Box e aparelhos Android. Suporte humano pelo WhatsApp em cada tela.",
  eyebrow: "Configuração Stream Player • Rápida e Segura",
  heroPre: "Configurar",
  heroAccent: "Stream Player",
  heroPost: "de forma rápida e segura",
  heroSubtitle: (
    <>
      Configuração completa do <strong className="text-foreground">Stream Player</strong> em Smart TV, Android TV e TV Box.
      Passo a passo no WhatsApp, sem termos técnicos.
    </>
  ),
  heroTrustLine: "Configuração rápida e segura • Suporte pelo WhatsApp.",
  heroQuickBenefits: [
    "Configuração rápida e segura",
    "Suporte pelo WhatsApp",
    "Ajustes finais até o app rodar estável",
    "Sem cobrança surpresa",
    "Acompanhamento até funcionar",
  ],
  heroImageAlt: "Configuração do Stream Player em Smart TV, Android TV e TV Box",
  heroBadgeTitle: "Configuração completa",
  heroBadgeDesc: "Rápida • Segura • Estável",
  ctaLabel: "Configurar Meu Stream Player Agora",
  ctaMessage: WA,
  ctaMicrocopy: "Passo a passo no WhatsApp • Sem termos técnicos • Suporte humano",
  benefitsEyebrow: "Configuração feita por especialista",
  benefitsTitlePre: "Stream Player configurado",
  benefitsTitleAccent: "do começo ao fim",
  benefits: [
    { icon: Settings2, title: "Ajustes completos", desc: "Configuramos todos os parâmetros do Stream Player na sua TV ou TV Box." },
    { icon: Tv, title: "Smart TV compatível", desc: "Dominamos a configuração em Smart TVs compatíveis com o app." },
    { icon: MonitorSmartphone, title: "TV Box e Android TV", desc: "Configuração otimizada para TV Box Android e Android TV." },
    { icon: Wrench, title: "Correção de erros comuns", desc: "Se aparecer erro, tela preta ou lista vazia, ajustamos junto com você." },
    { icon: Headphones, title: "Atendimento humano", desc: "Você fala direto com um especialista, sem robô e sem fila." },
    { icon: ListChecks, title: "Checklist final", desc: "Só finalizamos quando o Stream Player abre, carrega e roda estável." },
  ],
  seoBlocks: [
    {
      h2Pre: "Como configurar o",
      h2Accent: "Stream Player passo a passo",
      paragraphs: [
        "A configuração do Stream Player envolve preencher corretamente as informações dentro do aplicativo e ajustar os parâmetros de reprodução. Todo esse passo a passo é conduzido no WhatsApp junto com você.",
        "Se aparecer erro, tela preta ou algum campo não reconhecido, nossa equipe identifica o motivo e corrige a configuração para o seu aparelho.",
      ],
      ctaLabel: "Configurar meu aparelho",
      ctaMessage: "Quero configurar o Stream Player no meu aparelho.",
      source: "configurar-stream",
    },
    {
      h2Pre: "Configuração em",
      h2Accent: "Smart TV, Android TV e TV Box",
      paragraphs: [
        "Em Smart TV, Android TV, Google TV e TV Box Android, a configuração do Stream Player passa por ajustes de reprodução compatíveis com o desempenho do aparelho.",
        "Fazemos a configuração ideal para o seu aparelho, incluindo checagem de rede, para garantir que o Stream Player rode sem travamento.",
      ],
      ctaLabel: "Configurar Smart TV / TV Box",
      ctaMessage: "Quero configurar o Stream Player no meu Smart TV ou TV Box.",
      source: "configurar-stream-smarttv",
    },
  ],
  faqTitleAccent: "sobre configuração",
  faqs: [
    { q: "O que exatamente é configurado?", a: "Configuramos todos os parâmetros necessários dentro do Stream Player. Você recebe o app pronto para usar." },
    { q: "A configuração serve para qualquer TV?", a: "Serve para os aparelhos compatíveis com o Stream Player (Smart TV, Android TV, Google TV e TV Box Android)." },
    { q: "E se der erro depois de configurar?", a: "Continuamos com você no WhatsApp até resolver. Ajustar servidor, lista ou refazer o processo faz parte do atendimento." },
    { q: "Consigo fazer sozinho?", a: "Muita gente tenta e trava. Nosso trabalho é evitar retrabalho e deixar tudo funcionando de primeira." },
    { q: "Quanto tempo leva a configuração?", a: "A maior parte é concluída em poucos minutos, com você acompanhando cada passo pelo WhatsApp." },
    { q: "É seguro fazer pelo WhatsApp?", a: "Sim. O suporte é conduzido por instruções via WhatsApp, sem invasão do seu aparelho." },
  ],
  source: "configurar-stream-player",
};

const ConfigurarStreamPlayer = () => <AdLandingPage config={config} />;

export default ConfigurarStreamPlayer;
