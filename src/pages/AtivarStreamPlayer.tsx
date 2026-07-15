import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { KeyRound, ShieldCheck, RefreshCcw, Headphones, Zap, CheckCircle2 } from "lucide-react";

const WA = "Olá! Quero ativar meu Stream Player.";

const config: AdLandingConfig = {
  path: "/ativar-stream-player",
  title: "Ativar Stream Player • Ativação Simples e Rápida | Suporte WhatsApp",
  description:
    "Ativação do Stream Player em aparelhos Android, Smart TV e TV Box. Ativação simples, rápida e com suporte humano pelo WhatsApp.",
  eyebrow: "Ativação Stream Player • Compatível com Android",
  heroPre: "Ativar",
  heroAccent: "Stream Player",
  heroPost: "de forma simples e rápida",
  heroSubtitle: (
    <>
      Ativação do <strong className="text-foreground">Stream Player</strong> em aparelhos com sistema Android,
      Smart TV e TV Box. Um especialista conduz cada tela até o aplicativo abrir e funcionar.
    </>
  ),
  heroTrustLine: "Compatível com sistema Android, Smart TV e TV Box.",
  heroQuickBenefits: [
    "Ativação simples e rápida",
    "Passo a passo humano pelo WhatsApp",
    "Compatível com sistema Android",
    "Sem sair de casa",
    "Acompanhamento até funcionar",
  ],
  heroImageAlt: "Ativação do Stream Player em Smart TV, TV Box e aparelhos Android",
  heroBadgeTitle: "Ativação concluída",
  heroBadgeDesc: "App aberto • Funcionando",
  ctaLabel: "Ativar Meu Stream Player Agora",
  ctaMessage: WA,
  ctaMicrocopy: "Ativação guiada • Compatível com Android • Suporte humano",
  benefitsEyebrow: "Ativação sem complicação",
  benefitsTitlePre: "Stream Player",
  benefitsTitleAccent: "ativado do jeito certo",
  benefits: [
    { icon: KeyRound, title: "Ativação guiada", desc: "Guiamos você em cada tela do Stream Player até a ativação ser concluída." },
    { icon: ShieldCheck, title: "Dados corretos", desc: "Ajudamos a evitar erros comuns durante o processo de ativação." },
    { icon: RefreshCcw, title: "Reativação após reset", desc: "Se a TV foi resetada ou trocou de aparelho, orientamos a reativação." },
    { icon: Headphones, title: "Suporte humano", desc: "Você fala direto com um especialista, sem robô e sem fila." },
    { icon: Zap, title: "Rápido, sem enrolação", desc: "Maior parte das ativações é resolvida em minutos pelo WhatsApp." },
    { icon: CheckCircle2, title: "Confirmação final", desc: "Só encerramos o atendimento com o Stream Player ativado e funcionando." },
  ],
  seoBlocks: [
    {
      h2Pre: "Como funciona a",
      h2Accent: "ativação do Stream Player",
      paragraphs: [
        "A ativação do Stream Player é feita dentro do próprio aplicativo. Cada modelo de aparelho mostra a tela de ativação de um jeito diferente, e é aí que muita gente trava.",
        "Nosso suporte identifica exatamente o que deve ser informado, evitando erros que impedem a ativação de ser concluída.",
      ],
      ctaLabel: "Quero ativar agora",
      ctaMessage: "Quero ativar meu Stream Player agora.",
      source: "ativar-stream",
    },
    {
      h2Pre: "Ativar Stream Player em",
      h2Accent: "Android, Smart TV e TV Box",
      paragraphs: [
        "Em Android TV, Google TV, Smart TV compatíveis e TV Box Android, cada sistema tem um fluxo próprio para ativação do Stream Player.",
        "Fazemos junto com você todas as telas necessárias até o Stream Player estar 100% ativado no seu aparelho.",
      ],
      ctaLabel: "Ativar na minha TV",
      ctaMessage: "Quero ativar o Stream Player na minha TV.",
      source: "ativar-stream-tv",
    },
  ],
  faqTitleAccent: "sobre ativação",
  faqs: [
    { q: "Como ativar o Stream Player?", a: "A ativação é feita dentro do aplicativo. Nosso suporte conduz cada tela pelo WhatsApp até a ativação ser concluída." },
    { q: "Funciona em sistema Android?", a: "Sim. O Stream Player é compatível com aparelhos Android, Android TV e Google TV." },
    { q: "Funciona em TV Box?", a: "Sim, em TV Box Android compatíveis. Confirmamos a compatibilidade antes de iniciar." },
    { q: "Se eu resetar a TV, preciso ativar de novo?", a: "Sim, em muitos casos. Orientamos a reativação para não travar no meio do processo." },
    { q: "Vocês ajudam pelo WhatsApp?", a: "Sim. Todo o atendimento é feito no WhatsApp, direto com um especialista." },
    { q: "Quanto tempo demora a ativação?", a: "Na maior parte dos casos, poucos minutos com nossa equipe pelo WhatsApp." },
  ],
  source: "ativar-stream-player",
};

const AtivarStreamPlayer = () => <AdLandingPage config={config} />;

export default AtivarStreamPlayer;
