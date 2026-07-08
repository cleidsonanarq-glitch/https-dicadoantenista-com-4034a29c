import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { KeyRound, ShieldCheck, RefreshCcw, Headphones, Zap, CheckCircle2 } from "lucide-react";

const WA = "Olá! Quero ativar meu IBO Player.";

const config: AdLandingConfig = {
  path: "/ativar-ibo-player",
  title: "Ativar IBO Player • Licença e Ativação na Smart TV | Suporte WhatsApp",
  description:
    "Ativação do IBO Player com licença correta em Smart TV Samsung, LG, Android TV e TV Box. Suporte humano no WhatsApp para ativar seu aplicativo sem erro.",
  eyebrow: "Ativação do IBO Player • Licença • Smart TV",
  heroPre: "Ativar",
  heroAccent: "IBO Player",
  heroPost: "com a licença certa e sem erro",
  heroSubtitle: (
    <>
      Ativação do <strong className="text-foreground">IBO Player</strong> em Smart TV Samsung, LG, Android TV e TV Box.
      Um especialista conduz cada tela para a licença ser aceita e o aplicativo abrir.
    </>
  ),
  heroImageAlt: "Ativação do IBO Player com licença em Smart TV Samsung, LG e Android TV",
  heroBadgeTitle: "Ativação concluída",
  heroBadgeDesc: "Licença aceita • App aberto",
  ctaLabel: "Ativar Meu IBO Player Agora",
  ctaMessage: WA,
  ctaMicrocopy: "Ativação guiada • Licença correta • Suporte humano",
  benefitsEyebrow: "Ativação sem erro",
  benefitsTitlePre: "IBO Player",
  benefitsTitleAccent: "ativado de vez",
  benefits: [
    { icon: KeyRound, title: "Ativação guiada", desc: "Guiamos você em cada tela do IBO Player até a licença ser aceita e o app abrir." },
    { icon: ShieldCheck, title: "Licença correta", desc: "Ajudamos a evitar erros comuns de ativação e uso de licença incompatível." },
    { icon: RefreshCcw, title: "Reativação após reset", desc: "Se sua TV foi resetada ou trocou de aparelho, orientamos o processo de reativação." },
    { icon: Headphones, title: "Suporte humano", desc: "Você fala direto com um especialista em IBO Player, sem robô e sem fila." },
    { icon: Zap, title: "Rápido, sem enrolação", desc: "A maior parte das ativações é resolvida em minutos pelo WhatsApp." },
    { icon: CheckCircle2, title: "Confirmação final", desc: "Só encerramos o atendimento quando o IBO Player está ativado e funcionando." },
  ],
  seoBlocks: [
    {
      h2Pre: "Como funciona a",
      h2Accent: "ativação do IBO Player",
      paragraphs: [
        "A ativação do IBO Player é feita dentro do próprio aplicativo, informando os dados da sua licença. Cada modelo de TV mostra a tela de ativação de um jeito, e é aí que muita gente trava.",
        "Nosso suporte identifica exatamente qual dado deve ser informado, evitando erros de digitação e configurações incorretas que impedem a licença de ser aceita.",
      ],
      ctaLabel: "Quero ativar agora",
      ctaMessage: "Quero ativar meu IBO Player agora.",
      source: "ativar-ibo",
    },
    {
      h2Pre: "Ativar IBO Player em",
      h2Accent: "Samsung, LG e Android TV",
      paragraphs: [
        "Em Samsung Tizen, LG webOS, Android TV e Google TV, cada sistema tem um fluxo próprio para exibir a MAC address, aceitar a licença e liberar o uso do IBO Player.",
        "Fazemos junto com você as telas de MAC, licença, servidor e primeira reprodução até o IBO Player estar 100% ativado no seu aparelho.",
      ],
      ctaLabel: "Ativar na minha TV",
      ctaMessage: "Quero ativar o IBO Player na minha TV.",
      source: "ativar-tv",
    },
    {
      h2Pre: "Problemas comuns na",
      h2Accent: "ativação do IBO Player",
      paragraphs: [
        "Licença não reconhecida, MAC address incorreta, tela preta após ativar, erro de servidor: são cenários que resolvemos todos os dias.",
        "Se você já tentou ativar e algo deu errado, mande a tela pelo WhatsApp que orientamos exatamente o próximo passo.",
      ],
      ctaLabel: "Enviar minha tela pelo WhatsApp",
      ctaMessage: "Estou com erro para ativar o IBO Player, posso mandar a tela?",
      source: "ativar-erros",
    },
  ],
  faqTitleAccent: "sobre ativação",
  faqs: [
    { q: "Como ativar o IBO Player?", a: "A ativação é feita dentro do aplicativo, com os dados da sua licença. Nosso suporte conduz cada tela pelo WhatsApp até a ativação ser concluída." },
    { q: "O que é a MAC address do IBO Player?", a: "É um código único que identifica seu aparelho para o aplicativo. Ele é usado no processo de ativação e vinculação da licença." },
    { q: "Minha licença não é aceita, o que fazer?", a: "Envie a tela para o nosso WhatsApp. A maior parte dos casos é resolvida corrigindo digitação, servidor ou reativando o app corretamente." },
    { q: "Posso ativar em mais de uma TV?", a: "Depende da licença. Nós explicamos as regras direto no WhatsApp para você entender o que é permitido antes de tentar." },
    { q: "Se eu resetar a TV, preciso ativar de novo?", a: "Sim, em muitos casos. Orientamos a reativação para não travar no meio do processo." },
    { q: "A ativação é rápida?", a: "Na maior parte dos casos, sim — poucos minutos com nossa equipe pelo WhatsApp." },
  ],
  source: "ativar-ibo-player",
};

const AtivarIboPlayer = () => <AdLandingPage config={config} />;

export default AtivarIboPlayer;
