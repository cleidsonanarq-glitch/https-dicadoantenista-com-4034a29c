import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Download, Box, Wrench, Zap, Headphones, ShieldCheck } from "lucide-react";

const WA = "Olá! Quero baixar e instalar o Stream Player no meu TV Box.";

const config: AdLandingConfig = {
  path: "/download-stream-player",
  title: "Download Stream Player • Instale no seu TV Box | Suporte WhatsApp",
  description:
    "Baixe e instale o Stream Player diretamente no seu TV Box. Acesse o site, ative com a gente e receba suporte humano pelo WhatsApp.",
  eyebrow: "Download Stream Player • Instalação em TV Box",
  heroPre: "Download",
  heroAccent: "Stream Player",
  heroPost: "para o seu TV Box",
  heroSubtitle: (
    <>
      Instale o <strong className="text-foreground">Stream Player</strong> diretamente no seu TV Box.
      Acesse o nosso site e ative conosco pelo WhatsApp — passo a passo, sem dor de cabeça.
    </>
  ),
  heroTrustLine: "Instale diretamente no seu TV Box • Ative conosco.",
  heroQuickBenefits: [
    "Instalação direta no TV Box",
    "Ativação assistida pelo WhatsApp",
    "Compatível com TV Box Android",
    "Passo a passo humano",
    "Acompanhamento até funcionar",
  ],
  heroImageAlt: "Download e instalação do Stream Player em TV Box Android",
  heroBadgeTitle: "Download assistido",
  heroBadgeDesc: "TV Box • Android • Passo a passo",
  ctaLabel: "Baixar Stream Player Agora",
  ctaMessage: WA,
  ctaMicrocopy: "Instale no TV Box • Ative conosco • Suporte humano",
  benefitsEyebrow: "Por que instalar com a gente",
  benefitsTitlePre: "Download e instalação",
  benefitsTitleAccent: "sem complicação",
  benefits: [
    { icon: Download, title: "Download passo a passo", desc: "Guiamos o download e a instalação do Stream Player, sem precisar entender de tecnologia." },
    { icon: Box, title: "TV Box Android", desc: "Instalação otimizada em TV Box Android compatíveis com o Stream Player." },
    { icon: Wrench, title: "Ajustes iniciais", desc: "Deixamos permissões, rede e ajustes básicos prontos para o app rodar estável." },
    { icon: Zap, title: "Rápido, em minutos", desc: "A maior parte das instalações fica pronta em minutos, direto no WhatsApp." },
    { icon: Headphones, title: "Suporte humano no WhatsApp", desc: "Sem robô, sem fila. Fala direto com quem entende do Stream Player." },
    { icon: ShieldCheck, title: "Acompanhamento até funcionar", desc: "Só encerramos o atendimento quando o Stream Player está aberto e rodando." },
  ],
  seoBlocks: [
    {
      h2Pre: "Como fazer o",
      h2Accent: "download do Stream Player no TV Box",
      paragraphs: [
        "O download do Stream Player para TV Box é feito por um procedimento específico. Orientamos você a acessar o arquivo correto, autorizar a instalação e concluir a configuração inicial.",
        "Se aparecer algum bloqueio de instalação ou erro de permissão, nossa equipe conduz o próximo passo pelo WhatsApp até o Stream Player abrir corretamente.",
      ],
      ctaLabel: "Baixar no meu TV Box",
      ctaMessage: "Quero baixar o Stream Player no meu TV Box.",
      source: "download-tvbox",
    },
    {
      h2Pre: "Ativação após o",
      h2Accent: "download do Stream Player",
      paragraphs: [
        "Depois do download, é necessário concluir a ativação e a configuração dentro do aplicativo. Este é o momento em que muita gente trava.",
        "Fazemos o processo completo com você: download, instalação, ativação e primeiros ajustes. Tudo pelo WhatsApp, com um especialista.",
      ],
      ctaLabel: "Ativar após o download",
      ctaMessage: "Já baixei o Stream Player, preciso ativar.",
      source: "download-ativacao",
    },
  ],
  faqTitleAccent: "sobre download",
  faqs: [
    { q: "Como faço o download do Stream Player?", a: "Você toca no botão do WhatsApp e nossa equipe orienta o procedimento correto para o download no seu TV Box." },
    { q: "Funciona em qualquer TV Box?", a: "Em TV Box Android compatíveis. Confirmamos pelo WhatsApp antes de iniciar." },
    { q: "É seguro instalar?", a: "Orientamos o procedimento correto para instalar de forma segura, sem alterar nada além do necessário." },
    { q: "Preciso levar o TV Box a algum lugar?", a: "Não. Todo o download e instalação são 100% remotos, feitos no WhatsApp com você em frente ao aparelho." },
    { q: "Quanto tempo demora?", a: "Na maior parte dos casos, poucos minutos, variando conforme a velocidade da internet e do aparelho." },
    { q: "Quanto custa o suporte?", a: "Explicamos o valor direto no WhatsApp, de forma clara, antes de iniciar. Sem cobrança surpresa." },
  ],
  source: "download-stream-player",
};

const DownloadStreamPlayer = () => <AdLandingPage config={config} />;

export default DownloadStreamPlayer;
