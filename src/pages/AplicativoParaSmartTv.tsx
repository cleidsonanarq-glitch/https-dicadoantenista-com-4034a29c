import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, Download, Settings, Headphones, ShieldCheck, Clock } from "lucide-react";
import { smartTvLinks, SMARTTV_DISCLAIMER } from "./smartTvAppLinks";

const WA = "Olá! Quero ajuda com aplicativo para Smart TV.";

const config: AdLandingConfig = {
  path: "/aplicativo-para-smart-tv",
  title: "Aplicativo para Smart TV: Ative e Configure com Suporte no WhatsApp",
  description:
    "Precisa ativar ou configurar um aplicativo para Smart TV? Suporte técnico para instalação, configuração e ativação de aplicativos compatíveis, direto no WhatsApp.",
  eyebrow: "Suporte técnico • Aplicativos para Smart TV",
  heroPre: "Aplicativo para",
  heroAccent: "Smart TV?",
  heroPost: "Ative e configure com facilidade",
  heroSubtitle: (
    <>
      Precisa ativar ou configurar um aplicativo na sua Smart TV? Conte com suporte para
      instalação, configuração e ativação de <strong className="text-foreground">aplicativos compatíveis</strong>.
    </>
  ),
  heroTrustLine: "Atendimento humano, feito passo a passo pelo WhatsApp.",
  heroQuickBenefits: [
    "Compatibilidade verificada antes de começar",
    "Orientação de instalação no seu modelo de TV",
    "Configuração acompanhada até funcionar",
  ],
  heroImageAlt: "Smart TV na sala exibindo a tela de aplicativos",
  heroBadgeTitle: "Suporte online",
  heroBadgeDesc: "Instalação • Configuração • Ativação",
  ctaLabel: "Falar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Sem instalar nada no celular • Resposta no WhatsApp",
  benefitsEyebrow: "O que está incluído",
  benefitsTitlePre: "Suporte completo para o seu",
  benefitsTitleAccent: "aplicativo de Smart TV",
  benefits: [
    { icon: Tv, title: "Compatibilidade com Smart TVs", desc: "Conferimos o modelo e o sistema da sua TV para saber se o aplicativo desejado é compatível antes de qualquer etapa." },
    { icon: Download, title: "Orientação para instalação", desc: "Explicamos onde encontrar e como instalar o aplicativo na sua TV, respeitando as lojas e recursos do próprio aparelho." },
    { icon: Settings, title: "Configuração do aplicativo", desc: "Ajustamos os dados de configuração e as preferências do app junto com você, sem termos técnicos complicados." },
    { icon: Headphones, title: "Suporte durante o processo", desc: "Acompanhamos cada passo pelo WhatsApp e tiramos dúvidas até a configuração ser concluída." },
    { icon: ShieldCheck, title: "Serviço técnico independente", desc: "Nosso trabalho é o serviço de instalação, configuração e ativação do aplicativo — não fornecemos conteúdo." },
    { icon: Clock, title: "Atendimento direto", desc: "Você fala com uma pessoa, informa o modelo da TV e o aplicativo, e recebe orientação objetiva." },
  ],
  section2: {
    title: "Precisa de ajuda com seu aplicativo?",
    text: "Cada aplicativo para Smart TV tem exigências diferentes: alguns pedem apenas instalação, outros precisam de configuração de dados ou de uma ativação para funcionar. No atendimento, verificamos junto com você a compatibilidade com o seu modelo de TV e orientamos o procedimento correto, do início ao fim.",
    cards: [
      { icon: Tv, title: "Você informa a TV e o app", desc: "Marca, modelo e sistema da Smart TV, além do aplicativo que pretende usar." },
      { icon: ShieldCheck, title: "Verificamos a compatibilidade", desc: "Se o aplicativo não for compatível com o seu aparelho, avisamos com clareza." },
      { icon: Settings, title: "Orientamos o procedimento", desc: "Instalação, configuração e, quando necessário, a ativação do aplicativo." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Como funciona o suporte para",
      h2Accent: "aplicativo para Smart TV",
      paragraphs: [
        "O atendimento começa com duas informações simples: qual é a sua Smart TV e qual aplicativo você quer usar. A partir disso, verificamos a compatibilidade e explicamos o caminho de instalação disponível para aquele aparelho.",
        "Em seguida, a configuração é feita em conjunto: você acompanha na TV enquanto recebe as orientações no WhatsApp. Se o aplicativo exigir uma etapa de ativação, ela também é conduzida no mesmo atendimento.",
      ],
      ctaLabel: "Falar no WhatsApp",
      ctaMessage: WA,
      source: "app-smarttv-como-funciona",
    },
    {
      h2Pre: "Compatibilidade varia por",
      h2Accent: "modelo e sistema",
      paragraphs: [
        "Smart TVs usam sistemas diferentes (por exemplo Tizen, webOS, Android TV e Google TV) e cada um oferece um conjunto próprio de aplicativos. Por isso não é possível afirmar que todo aplicativo funciona em toda TV.",
        "Preferimos verificar antes: com o modelo em mãos, dizemos com honestidade se o aplicativo é compatível e quais são as alternativas quando não é.",
      ],
      ctaLabel: "Verificar minha Smart TV",
      ctaMessage: "Olá! Quero verificar se o aplicativo é compatível com a minha Smart TV.",
      source: "app-smarttv-compatibilidade",
    },
  ],
  faqTitleAccent: "frequentes",
  faqs: [
    { q: "O aplicativo funciona na minha Smart TV?", a: "Depende do modelo e do sistema da sua TV. Informe a marca, o modelo e o aplicativo desejado no WhatsApp que verificamos a compatibilidade antes de iniciar qualquer procedimento." },
    { q: "Como saber se minha TV é compatível?", a: "A forma mais segura é conferir o modelo exato do aparelho. Explicamos onde encontrar essa informação no menu da TV e, com ela, confirmamos a compatibilidade." },
    { q: "Vocês ajudam na instalação?", a: "Sim. Orientamos onde localizar o aplicativo na sua TV e como concluir a instalação usando os recursos do próprio aparelho." },
    { q: "Vocês ajudam na configuração?", a: "Sim. A configuração é feita com acompanhamento: você recebe as instruções passo a passo enquanto opera o controle da TV." },
    { q: "Preciso informar o modelo da TV?", a: "Sim, é a informação mais importante. Sem o modelo não é possível confirmar a compatibilidade nem indicar o caminho correto de instalação." },
    { q: "Como funciona a ativação?", a: "Alguns aplicativos exigem uma ativação para deixar de operar em modo de teste. Quando é o caso, explicamos o que o aplicativo pede e conduzimos essa etapa no atendimento." },
    { q: "O atendimento é pelo WhatsApp?", a: "Sim, todo o suporte é realizado por WhatsApp, com texto, imagens e orientações no seu ritmo." },
    { q: "Vocês fornecem canais, filmes ou conteúdo?", a: "Não. Nosso serviço é exclusivamente técnico: instalação, configuração, ativação e suporte de aplicativos compatíveis. Não fornecemos nem vendemos conteúdo audiovisual." },
  ],
  internalLinks: smartTvLinks("/aplicativo-para-smart-tv"),
  disclaimer: SMARTTV_DISCLAIMER,
  breadcrumbName: "Aplicativo para Smart TV",
  source: "aplicativo-para-smart-tv",
};

const AplicativoParaSmartTv = () => <AdLandingPage config={config} />;

export default AplicativoParaSmartTv;
