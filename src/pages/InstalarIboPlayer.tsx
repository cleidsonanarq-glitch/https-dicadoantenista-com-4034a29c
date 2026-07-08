import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Download, Tv, Wrench, Zap, Headphones, ShieldCheck } from "lucide-react";

const WA = "Olá! Quero instalar o IBO Player na minha Smart TV.";

const config: AdLandingConfig = {
  path: "/instalar-ibo-player",
  title: "Instalar IBO Player na Smart TV Samsung, LG e Android | Suporte WhatsApp",
  description:
    "Instale o IBO Player em Smart TV Samsung, LG, Android TV e TV Box com passo a passo guiado. Suporte especializado no WhatsApp, rápido e humano.",
  eyebrow: "Instalação do IBO Player • Samsung • LG • Android",
  heroPre: "Instalar",
  heroAccent: "IBO Player",
  heroPost: "na sua Smart TV em poucos minutos",
  heroSubtitle: (
    <>
      Instalação guiada do <strong className="text-foreground">IBO Player</strong> em Smart TV Samsung, LG, Android TV e TV Box.
      Passo a passo direto no WhatsApp, sem sair de casa.
    </>
  ),
  heroImageAlt: "Instalação do IBO Player em Smart TV Samsung, LG e Android TV com suporte especializado",
  heroBadgeTitle: "Instalação assistida",
  heroBadgeDesc: "Samsung • LG • Android TV • TV Box",
  ctaLabel: "Instalar Meu IBO Player Agora",
  ctaMessage: WA,
  ctaMicrocopy: "Resposta rápida • Passo a passo humano • Sem sair de casa",
  benefitsEyebrow: "Por que instalar com a gente",
  benefitsTitlePre: "Instalação do IBO Player",
  benefitsTitleAccent: "sem complicação",
  benefits: [
    { icon: Download, title: "Instalação passo a passo", desc: "Guiamos o download e a instalação do IBO Player na sua TV, sem precisar entender de tecnologia." },
    { icon: Tv, title: "Samsung Tizen e LG webOS", desc: "Sabemos exatamente onde encontrar e instalar o IBO Player em cada modelo de Smart TV." },
    { icon: Wrench, title: "Android TV e TV Box", desc: "Instalação em Google TV, Fire TV Stick e TV Box Android compatíveis com o app." },
    { icon: Zap, title: "Rápido, na maioria em minutos", desc: "A maior parte das instalações fica pronta em minutos, direto no WhatsApp com um especialista." },
    { icon: Headphones, title: "Suporte humano no WhatsApp", desc: "Sem robô, sem fila. Fala direto com quem entende do IBO Player." },
    { icon: ShieldCheck, title: "Acompanhamento até funcionar", desc: "Só encerramos o atendimento quando o IBO Player está aberto e rodando na sua TV." },
  ],
  seoBlocks: [
    {
      h2Pre: "Como instalar o",
      h2Accent: "IBO Player na Smart TV Samsung",
      paragraphs: [
        "Em Smart TVs Samsung com sistema Tizen, a instalação do IBO Player é feita pela loja de apps oficial. Orientamos você a localizar o aplicativo, iniciar a instalação e concluir os passos até o app abrir corretamente.",
        "Se o IBO Player não aparecer na busca ou apresentar erro, nosso suporte identifica pelo WhatsApp o motivo e conduz a instalação alternativa compatível com o seu modelo Samsung.",
      ],
      ctaLabel: "Instalar na minha Samsung",
      ctaMessage: "Quero instalar o IBO Player na minha Smart TV Samsung.",
      source: "instalar-samsung",
    },
    {
      h2Pre: "Como instalar o",
      h2Accent: "IBO Player na Smart TV LG",
      paragraphs: [
        "Em Smart TVs LG com sistema webOS, orientamos passo a passo a instalação pela LG Content Store, incluindo o cadastro básico necessário para baixar aplicativos e a configuração inicial do IBO Player.",
        "Se o modelo LG exigir método alternativo, nossa equipe faz todo o processo com você no WhatsApp, até o aplicativo abrir sem erros na sua TV.",
      ],
      ctaLabel: "Instalar na minha LG",
      ctaMessage: "Quero instalar o IBO Player na minha Smart TV LG.",
      source: "instalar-lg",
    },
    {
      h2Pre: "Como instalar o",
      h2Accent: "IBO Player em Android TV e TV Box",
      paragraphs: [
        "Em Android TV, Google TV, Fire TV Stick e TV Box Android, o IBO Player é instalado a partir da loja de aplicativos correspondente. Fazemos junto com você a busca, o download e as permissões necessárias.",
        "Também ajudamos a verificar a compatibilidade do seu TV Box antes de iniciar, para garantir que o IBO Player rode de forma estável no seu aparelho.",
      ],
      ctaLabel: "Instalar no meu aparelho",
      ctaMessage: "Quero instalar o IBO Player no meu Android TV ou TV Box.",
      source: "instalar-android-tvbox",
    },
  ],
  faqTitleAccent: "sobre instalação",
  faqs: [
    { q: "Como instalar o IBO Player na Smart TV?", a: "Você toca no botão do WhatsApp, informa a marca e o modelo da sua TV, e nossa equipe conduz cada tela até o IBO Player estar instalado e aberto no seu aparelho." },
    { q: "Preciso levar minha TV a algum lugar?", a: "Não. Toda a instalação é 100% remota, feita no WhatsApp com você em frente à sua TV. Não precisa levar o equipamento a lugar nenhum." },
    { q: "Instalar IBO Player na Samsung é diferente da LG?", a: "Sim. Cada marca tem uma loja e um caminho próprios. Nosso suporte já domina os dois — orientamos o passo correto para o seu modelo específico." },
    { q: "É possível instalar IBO Player em Smart TV antiga?", a: "Depende do modelo. Antes de começar, verificamos pelo WhatsApp se a sua TV é compatível com o IBO Player, para não perder tempo em uma instalação inviável." },
    { q: "Quanto tempo demora a instalação?", a: "Na maior parte dos casos, a instalação é concluída em minutos, variando conforme a velocidade da TV e a familiaridade de quem está sendo atendido." },
    { q: "Quanto custa a instalação?", a: "Explicamos o valor do serviço direto no WhatsApp, de forma clara, antes de iniciar. Sem cobrança surpresa e sem custo escondido." },
  ],
  source: "instalar-ibo-player",
};

const InstalarIboPlayer = () => <AdLandingPage config={config} />;

export default InstalarIboPlayer;
