import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, ShieldCheck, Settings, Download, KeyRound, Headphones } from "lucide-react";
import { smartTvLinks, SMARTTV_DISCLAIMER } from "./smartTvAppLinks";

const WA = "Olá! Quero verificar um app para minha Smart TV Samsung.";

const config: AdLandingConfig = {
  path: "/app-iptv-smartv-samsung",
  title: "App para Smart TV Samsung | Ativação e Suporte por R$ 19,99/mês",
  description:
    "App para Smart TV Samsung: verificação de compatibilidade pelo modelo da TV, ativação rápida, configuração orientada e suporte pelo WhatsApp. Plano de R$ 19,99/mês.",
  eyebrow: "Smart TV Samsung • Aplicativo e ativação",
  heroPre: "App para",
  heroAccent: "Smart TV Samsung",
  heroPost: "compatibilidade, ativação e suporte",
  heroSubtitle: (
    <>
      Verificamos se o <strong className="text-foreground">aplicativo é compatível com a sua Smart TV Samsung</strong> e
      orientamos a instalação, a configuração e a ativação. Plano mensal de R$ 19,99.
    </>
  ),
  heroTrustLine: "Compatibilidade conferida pelo modelo da TV antes de qualquer etapa.",
  heroQuickBenefits: [
    "R$ 19,99/mês",
    "Ativação rápida",
    "Compatibilidade com Smart TV Samsung",
    "Suporte pelo WhatsApp",
    "Experiência estável",
  ],
  heroImageAlt: "Smart TV Samsung exibindo a tela de aplicativos instalados",
  heroBadgeTitle: "Samsung",
  heroBadgeDesc: "Tizen • Instalação • Configuração • Ativação",
  heroPriceCard: {
    label: "Plano mensal",
    price: "R$ 19,99/mês",
    lines: [
      "Ativação rápida do aplicativo",
      "Compatibilidade verificada no seu modelo Samsung",
      "Configuração orientada passo a passo",
      "Suporte pelo WhatsApp",
    ],
  },
  ctaLabel: "Verificar Compatibilidade",
  ctaMessage: WA,
  ctaMicrocopy: "R$ 19,99/mês • Informe o modelo da sua TV Samsung",
  benefitsEyebrow: "O que está incluído",
  benefitsTitlePre: "Suporte para o seu app na",
  benefitsTitleAccent: "TV Samsung",
  benefits: [
    { icon: Tv, title: "Verificação por modelo Samsung", desc: "Conferimos o modelo e o ano da sua Smart TV Samsung para saber se o aplicativo desejado está disponível para aquele aparelho." },
    { icon: Download, title: "Instalação orientada", desc: "Indicamos onde o aplicativo pode ser localizado na sua TV Samsung e acompanhamos a instalação pelos recursos do próprio aparelho." },
    { icon: Settings, title: "Configuração assistida", desc: "Ajustamos os dados de configuração junto com você, evitando erros de digitação pelo controle." },
    { icon: KeyRound, title: "Ativação rápida", desc: "Quando o aplicativo exige ativação para sair do modo de teste, conduzimos essa etapa no atendimento." },
    { icon: ShieldCheck, title: "Serviço técnico independente", desc: "Não somos afiliados à Samsung nem aos desenvolvedores dos aplicativos e não fornecemos conteúdo audiovisual." },
    { icon: Headphones, title: "Suporte pelo WhatsApp", desc: "Atendimento humano acompanhando cada passo até a configuração ficar concluída." },
  ],
  section2: {
    title: "Seu aplicativo é compatível com sua TV Samsung?",
    text: "A disponibilidade de um aplicativo varia conforme o modelo, o ano e a versão do sistema Tizen da sua Smart TV Samsung — o mesmo app pode estar disponível em um modelo e indisponível em outro da mesma marca. Por isso não afirmamos que qualquer aplicativo funciona em qualquer Samsung: pedimos o modelo da TV e o aplicativo utilizado para verificar antes.",
    cards: [
      { icon: Tv, title: "Informe o modelo da TV", desc: "Está no menu de informações da Samsung ou na etiqueta traseira do aparelho." },
      { icon: Settings, title: "Informe o aplicativo", desc: "Diga qual app você usa ou pretende usar na sua Smart TV Samsung." },
      { icon: ShieldCheck, title: "Verificamos a compatibilidade", desc: "Se não houver compatibilidade, avisamos com clareza em vez de seguir adiante." },
    ],
  },
  steps: {
    title: "Como funciona a ativação na Samsung",
    items: [
      { title: "Você envia o modelo da TV", desc: "Marca Samsung, modelo e, se possível, a versão do sistema." },
      { title: "Informa o aplicativo", desc: "Qual app pretende instalar, configurar ou ativar." },
      { title: "Verificamos a compatibilidade", desc: "Confirmação antes de iniciar qualquer procedimento." },
      { title: "Ativação e configuração orientadas", desc: "Ativação rápida e configuração acompanhada pelo WhatsApp." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Aplicativo em Smart TV Samsung:",
      h2Accent: "compatibilidade primeiro",
      paragraphs: [
        "As Smart TVs Samsung utilizam o sistema Tizen, com uma loja de aplicativos que muda de acordo com o modelo e o ano do aparelho. Isso significa que a compatibilidade precisa ser confirmada caso a caso, e não presumida.",
        "Com o modelo em mãos, dizemos com honestidade se o aplicativo está disponível para a sua TV Samsung e quais são as alternativas compatíveis quando não está.",
      ],
      ctaLabel: "Verificar Compatibilidade",
      ctaMessage: WA,
      source: "samsung-iptv-compatibilidade",
    },
    {
      h2Pre: "Ativação e configuração com",
      h2Accent: "suporte pelo WhatsApp",
      paragraphs: [
        "A ativação é rápida e feita durante o atendimento: explicamos o que o aplicativo solicita e acompanhamos o preenchimento para evitar erros pelo controle da TV.",
        "Depois da ativação, revisamos a configuração para uma experiência estável no uso diário. O plano mensal é de R$ 19,99 e cobre exclusivamente o serviço técnico de instalação, configuração, ativação e suporte.",
      ],
      ctaLabel: "Falar no WhatsApp",
      ctaMessage: "Olá! Quero ativar um aplicativo na minha Smart TV Samsung.",
      source: "samsung-iptv-ativacao",
    },
  ],
  faqTitleAccent: "frequentes",
  faqs: [
    { q: "O aplicativo funciona em qualquer Smart TV Samsung?", a: "Não. A disponibilidade depende do modelo, do ano e da versão do sistema Tizen. Informe o modelo no WhatsApp que verificamos antes de iniciar." },
    { q: "Como descobrir o modelo da minha TV Samsung?", a: "No menu de informações da TV (Configurações > Suporte > Sobre) ou na etiqueta traseira do aparelho. Ajudamos você a localizar esse dado." },
    { q: "Quanto custa?", a: "O plano é de R$ 19,99/mês e cobre o serviço técnico de instalação, configuração, ativação e suporte do aplicativo compatível." },
    { q: "Quanto tempo leva a ativação?", a: "A ativação é rápida e normalmente concluída no próprio atendimento, desde que a compatibilidade tenha sido confirmada." },
    { q: "Vocês ajudam na instalação e configuração?", a: "Sim. Orientamos a instalação usando os recursos da própria TV Samsung e a configuração é feita com acompanhamento passo a passo." },
    { q: "O atendimento é pelo WhatsApp?", a: "Sim, todo o suporte acontece por WhatsApp, com texto e imagens, no seu ritmo." },
    { q: "O serviço inclui canais, novelas ou filmes?", a: "Não. Prestamos apenas suporte técnico ao aplicativo. Não fornecemos, vendemos ou indicamos conteúdo audiovisual." },
    { q: "Vocês são a Samsung?", a: "Não. Somos um serviço técnico independente, sem vínculo com a Samsung ou com os desenvolvedores dos aplicativos." },
  ],
  internalLinks: smartTvLinks("/app-iptv-smartv-samsung"),
  disclaimer: SMARTTV_DISCLAIMER,
  breadcrumbName: "App para Smart TV Samsung",
  source: "app-iptv-smartv-samsung",
};

const AppIptvSmartvSamsung = () => <AdLandingPage config={config} />;

export default AppIptvSmartvSamsung;
