import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Settings2, Tv, MonitorSmartphone, Wrench, Headphones, ListChecks } from "lucide-react";

const WA = "Olá! Quero configurar o IBO Player na minha TV.";

const config: AdLandingConfig = {
  path: "/configurar-ibo-player",
  title: "Configurar IBO Player na Smart TV Samsung, LG e TV Box | Suporte WhatsApp",
  description:
    "Configuração completa do IBO Player em Smart TV Samsung, LG, Android TV e TV Box. Suporte humano no WhatsApp guiando cada tela até o app funcionar.",
  eyebrow: "Configuração do IBO Player • Smart TV • TV Box",
  heroPre: "Configurar",
  heroAccent: "IBO Player",
  heroPost: "na sua Smart TV do jeito certo",
  heroSubtitle: (
    <>
      Configuração completa do <strong className="text-foreground">IBO Player</strong> em Smart TV Samsung, LG, Android TV e TV Box.
      Ajustes, MAC address e lista pronta no WhatsApp, sem dor de cabeça.
    </>
  ),
  heroImageAlt: "Configuração do IBO Player em Smart TV Samsung, LG, Android TV e TV Box",
  heroBadgeTitle: "Configuração completa",
  heroBadgeDesc: "MAC • Lista • Ajustes finais",
  ctaLabel: "Configurar Meu IBO Player Agora",
  ctaMessage: WA,
  ctaMicrocopy: "Passo a passo no WhatsApp • Sem termos técnicos • Suporte humano",
  benefitsEyebrow: "Configuração feita por especialista",
  benefitsTitlePre: "IBO Player configurado",
  benefitsTitleAccent: "do começo ao fim",
  benefits: [
    { icon: Settings2, title: "Ajustes completos", desc: "Configuramos MAC address, servidor, lista e todos os parâmetros do IBO Player na sua TV." },
    { icon: Tv, title: "Samsung, LG e Google TV", desc: "Dominamos a configuração em Tizen (Samsung), webOS (LG), Android TV e Google TV." },
    { icon: MonitorSmartphone, title: "TV Box e Fire TV Stick", desc: "Configuração otimizada para TV Box Android e Amazon Fire TV Stick compatíveis." },
    { icon: Wrench, title: "Correção de erros comuns", desc: "Se aparecer erro de servidor, tela preta ou lista vazia, ajustamos junto com você." },
    { icon: Headphones, title: "Atendimento humano", desc: "Você fala direto com um especialista em IBO Player, sem robô e sem fila." },
    { icon: ListChecks, title: "Checklist final", desc: "Só finalizamos quando o IBO Player abre, carrega e roda estável na sua TV." },
  ],
  seoBlocks: [
    {
      h2Pre: "Como configurar o",
      h2Accent: "IBO Player na Samsung",
      paragraphs: [
        "Em TVs Samsung com Tizen, a configuração envolve informar o MAC address correto, ativar a licença e preencher os dados de servidor. Todo esse passo a passo é conduzido no WhatsApp junto com você.",
        "Se aparecer erro de ativação, tela preta ou tela de MAC não reconhecido, nossa equipe identifica o motivo e corrige a configuração para o seu modelo Samsung.",
      ],
      ctaLabel: "Configurar minha Samsung",
      ctaMessage: "Quero configurar o IBO Player na minha Samsung.",
      source: "configurar-samsung",
    },
    {
      h2Pre: "Como configurar o",
      h2Accent: "IBO Player na LG",
      paragraphs: [
        "Em TVs LG com webOS, a configuração exige o MAC address correto e o preenchimento cuidadoso dos dados dentro do aplicativo. Conduzimos cada tela para que o IBO Player abra sem erro.",
        "Também ajustamos parâmetros como servidor, EPG e idioma, deixando o IBO Player pronto para uso diário na sua LG.",
      ],
      ctaLabel: "Configurar minha LG",
      ctaMessage: "Quero configurar o IBO Player na minha LG.",
      source: "configurar-lg",
    },
    {
      h2Pre: "Como configurar",
      h2Accent: "Smart TV e TV Box",
      paragraphs: [
        "Em Android TV, Google TV e TV Box Android, a configuração do IBO Player passa por definir servidor, lista e ajustes de reprodução compatíveis com o desempenho do aparelho.",
        "Fazemos a configuração ideal para o seu TV Box, incluindo checagem de rede, para garantir que o IBO Player rode sem travamento.",
      ],
      ctaLabel: "Configurar meu aparelho",
      ctaMessage: "Quero configurar o IBO Player no meu Smart TV ou TV Box.",
      source: "configurar-smarttv-tvbox",
    },
  ],
  faqTitleAccent: "sobre configuração",
  faqs: [
    { q: "O que exatamente é configurado no IBO Player?", a: "Configuramos MAC address, ativação da licença, dados de servidor, lista, EPG e ajustes finais. Você recebe o IBO Player pronto para usar." },
    { q: "Preciso informar algum dado antes?", a: "Sim. No WhatsApp pedimos as informações necessárias, sempre de forma clara. Sem essas informações não é possível configurar corretamente." },
    { q: "A configuração serve para qualquer TV?", a: "Serve para as TVs compatíveis com IBO Player (Samsung Tizen, LG webOS, Android TV, Google TV, Fire TV Stick e TV Box Android)." },
    { q: "E se der erro depois de configurar?", a: "Continuamos com você no WhatsApp até resolver. Ajustar servidor, lista ou reativar licença faz parte do atendimento." },
    { q: "Consigo fazer sozinho?", a: "Muita gente tenta e trava em alguma etapa. Nosso trabalho é justamente evitar retrabalho e deixar tudo funcionando de primeira, com um especialista." },
    { q: "Quanto tempo leva a configuração?", a: "A maior parte é concluída em poucos minutos, com você acompanhando cada passo pelo WhatsApp." },
  ],
  source: "configurar-ibo-player",
};

const ConfigurarIboPlayer = () => <AdLandingPage config={config} />;

export default ConfigurarIboPlayer;
