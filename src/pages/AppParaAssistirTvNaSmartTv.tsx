import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, AlertTriangle, Download, Settings, KeyRound, Headphones } from "lucide-react";
import { smartTvLinks, SMARTTV_DISCLAIMER } from "./smartTvAppLinks";

const WA = "Olá! Quero saber sobre app para assistir TV na Smart TV.";

const config: AdLandingConfig = {
  path: "/app-para-assistir-tv-na-smart-tv",
  title: "App para Assistir TV na Smart TV | Ativação por R$ 19,99/mês",
  description:
    "Procura um app para assistir TV na Smart TV? Encontre uma opção compatível com o seu aparelho, com ativação rápida, configuração orientada e suporte no WhatsApp. R$ 19,99/mês.",
  eyebrow: "App para assistir TV • Smart TV",
  heroPre: "App para assistir TV na",
  heroAccent: "Smart TV",
  heroPost: "compatível com o seu aparelho",
  heroSubtitle: (
    <>
      Encontre uma opção compatível com a sua Smart TV e tenha suporte para instalar, configurar e ativar
      <strong className="text-foreground"> aplicativos compatíveis</strong>. Plano mensal de R$ 19,99.
    </>
  ),
  heroTrustLine: "Suporte humano por WhatsApp, do primeiro passo até o app configurado.",
  heroQuickBenefits: [
    "R$ 19,99/mês",
    "Ativação rápida",
    "Compatibilidade com Smart TV verificada",
    "Suporte pelo WhatsApp",
    "Experiência estável",
  ],
  heroImageAlt: "Smart TV moderna exibindo a lista de aplicativos instalados",
  heroBadgeTitle: "Atendimento online",
  heroBadgeDesc: "Instalação • Configuração • Ativação",
  heroPriceCard: {
    label: "Plano mensal",
    price: "R$ 19,99/mês",
    lines: [
      "Ativação rápida",
      "Configuração orientada no seu modelo de TV",
      "Suporte pelo WhatsApp",
      "Experiência estável",
    ],
  },
  ctaLabel: "Falar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "R$ 19,99/mês • Resposta pelo WhatsApp",
  benefitsEyebrow: "Onde ajudamos",
  benefitsTitlePre: "Suporte para o seu",
  benefitsTitleAccent: "app na Smart TV",
  benefits: [
    { icon: Download, title: "Dificuldade para instalar", desc: "Orientamos onde localizar o aplicativo no seu aparelho e como concluir a instalação usando os recursos da própria TV." },
    { icon: AlertTriangle, title: "Aplicativo não abre", desc: "Verificamos causas comuns como versão desatualizada, memória cheia, cache ou conexão instável." },
    { icon: Settings, title: "Configuração incorreta", desc: "Revisamos os dados de configuração inseridos e corrigimos o que impede o aplicativo de iniciar corretamente." },
    { icon: KeyRound, title: "Necessidade de ativação", desc: "Quando o aplicativo pede ativação para sair do modo de teste, conduzimos essa etapa com você." },
    { icon: Tv, title: "Dúvidas sobre compatibilidade", desc: "Confirmamos, pelo modelo e sistema da TV, se aquele aplicativo realmente é compatível com o aparelho." },
    { icon: Headphones, title: "Acompanhamento até o fim", desc: "Você não fica sozinho no meio do processo: seguimos no atendimento até concluir a configuração." },
  ],
  section2: {
    title: "Encontre o aplicativo certo para sua Smart TV",
    text: "Existem vários aplicativos para assistir TV na Smart TV e a compatibilidade varia conforme o modelo da TV, o sistema operacional (Tizen, webOS, Android TV, Google TV) e o aplicativo utilizado. No atendimento verificamos essas três informações e indicamos uma opção compatível com o seu aparelho, além de orientar a instalação, a configuração e a ativação. O serviço é técnico: não fornecemos canais, novelas, filmes ou qualquer conteúdo.",
    cards: [
      { icon: AlertTriangle, title: "Descrever o sintoma", desc: "Tela preta, erro ao abrir, app não aparece na loja, pedido de ativação." },
      { icon: Tv, title: "Confirmar o aparelho", desc: "Marca, modelo e sistema da Smart TV para checar a compatibilidade." },
      { icon: Settings, title: "Corrigir e configurar", desc: "Ajustes orientados passo a passo até o aplicativo iniciar normalmente." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Por que um app para assistir TV na Smart TV",
      h2Accent: "para de funcionar",
      paragraphs: [
        "Atualizações do sistema da TV, memória interna cheia e configurações salvas de forma incorreta estão entre os motivos mais comuns. Em muitos casos, a solução é uma reinstalação limpa seguida de uma nova configuração.",
        "Também é frequente o aplicativo estar em período de teste e precisar de ativação. Nesses casos explicamos exatamente o que o aplicativo solicita e acompanhamos o procedimento.",
      ],
      ctaLabel: "Falar no WhatsApp",
      ctaMessage: WA,
      source: "app-assistir-tv-problemas",
    },
    {
      h2Pre: "Instalação e configuração com",
      h2Accent: "suporte acompanhado",
      paragraphs: [
        "Você não precisa entender de tecnologia. Basta ter o controle da TV em mãos e o celular ao lado: enviamos as instruções e você confirma cada etapa.",
        "Trabalhamos apenas com o serviço técnico de instalação, configuração, ativação e suporte de aplicativos compatíveis. Nenhum canal, filme, série ou conteúdo é fornecido por nós.",
      ],
      ctaLabel: "Quero suporte agora",
      ctaMessage: "Olá! Quero suporte para instalar e configurar um app na minha Smart TV.",
      source: "app-assistir-tv-suporte",
    },
  ],
  faqTitleAccent: "frequentes",
  faqs: [
    { q: "O app funciona na minha Smart TV?", a: "Isso depende do modelo e do sistema da TV. Informe a marca e o modelo no WhatsApp para que possamos verificar a compatibilidade antes de iniciar." },
    { q: "Como saber se minha TV é compatível?", a: "Pelo modelo exato do aparelho, que fica no menu de informações da TV ou na etiqueta traseira. Ajudamos você a localizar esse dado." },
    { q: "Vocês ajudam na instalação?", a: "Sim. Indicamos onde o aplicativo pode ser encontrado no seu aparelho e acompanhamos a instalação." },
    { q: "Vocês ajudam na configuração?", a: "Sim, a configuração é feita com orientação passo a passo durante o atendimento." },
    { q: "Preciso informar o modelo da TV?", a: "Sim. Sem o modelo não conseguimos confirmar compatibilidade nem indicar o procedimento correto." },
    { q: "Como funciona a ativação?", a: "Quando o aplicativo exige ativação, explicamos o que ele pede e conduzimos essa etapa junto com você no atendimento." },
    { q: "O atendimento é pelo WhatsApp?", a: "Sim, todo o suporte acontece por WhatsApp, no seu ritmo." },
    { q: "O serviço inclui canais ou programação?", a: "Não. Prestamos apenas suporte técnico ao aplicativo. Não fornecemos, vendemos ou indicamos conteúdo audiovisual." },
  ],
  internalLinks: smartTvLinks("/app-para-assistir-tv-na-smart-tv"),
  disclaimer: SMARTTV_DISCLAIMER,
  breadcrumbName: "App para assistir TV na Smart TV",
  source: "app-para-assistir-tv-na-smart-tv",
};

const AppParaAssistirTvNaSmartTv = () => <AdLandingPage config={config} />;

export default AppParaAssistirTvNaSmartTv;
