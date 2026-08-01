import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Zap, Search, ShieldCheck, Headphones, ListChecks, Clock, KeyRound, Settings, MonitorSmartphone, RefreshCw } from "lucide-react";
import { SMARTERS_DISCLAIMER, smartersLinks } from "./smartersPlayerLinks";

const WA = "Olá! Quero ativar a licença do Smarters Player.";

const config: AdLandingConfig = {
  path: "/ativar-smarters-player",
  breadcrumbName: "Ativar Smarters Player",
  title: "Ativar Smarters Player | Ativação por MAC Address em Minutos",
  description:
    "Ative a licença do Smarters Player pelo MAC Address com suporte remoto no WhatsApp. R$ 17,99, válida por 1 ano, para Samsung, LG, Android TV e Google TV.",
  eyebrow: "Ativação por MAC Address",
  heroPre: "Ative a licença do",
  heroAccent: "Smarters Player",
  heroPost: "com acompanhamento remoto",
  heroSubtitle: (
    <>
      Você envia o <strong className="text-foreground">MAC Address</strong> pelo WhatsApp e nós realizamos a
      ativação da licença, conferindo cada dado antes de concluir.
    </>
  ),
  heroTrustLine: "Ativação feita no mesmo atendimento, com confirmação enviada para você",
  heroQuickBenefits: [
    "Ajuda para localizar o MAC Address",
    "Conferência dos dados antes de ativar",
    "Confirmação da ativação por mensagem",
    "Orientação para os primeiros ajustes",
  ],
  heroPriceCard: {
    label: "Ativação da licença",
    price: "R$ 17,99",
    lines: ["Licença válida por 1 ano.", "Suporte técnico remoto durante todo o processo."],
  },
  heroImageAlt: "Ativação da licença do Smarters Player por MAC Address em Smart TV",
  heroBadgeTitle: "Ativação em minutos",
  heroBadgeDesc: "MAC conferido antes de ativar",
  ctaLabel: "Ativar pelo WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Envie o MAC Address • Ativação em poucos minutos",
  benefitsEyebrow: "Ativação sem tentativa e erro",
  benefitsTitlePre: "Como o suporte deixa a",
  benefitsTitleAccent: "ativação simples",
  benefits: [
    { icon: Zap, title: "Ativação rápida", desc: "Assim que o MAC Address é confirmado, a licença é ativada dentro do próprio atendimento." },
    { icon: Search, title: "Localização do MAC", desc: "Mostramos onde o MAC aparece no aplicativo e no menu de rede do seu aparelho." },
    { icon: ListChecks, title: "Conferência dos dados", desc: "Revisamos caractere por caractere para a licença não ser vinculada ao identificador errado." },
    { icon: Clock, title: "Licença válida por 1 ano", desc: "Você sabe exatamente a data de início e quando será necessário renovar." },
    { icon: Headphones, title: "Suporte remoto", desc: "Atendimento humano pelo WhatsApp durante todo o processo de ativação." },
    { icon: ShieldCheck, title: "Transparência no escopo", desc: "Serviço exclusivamente técnico: instalação, configuração e ativação do aplicativo." },
  ],
  steps: {
    title: "Ativação em 5 etapas",
    items: [
      { title: "Localize o MAC Address do aplicativo", desc: "Abra o Smarters Player no aparelho e anote o MAC exibido na tela inicial ou no menu de informações." },
      { title: "Entre em contato pelo WhatsApp", desc: "Diga que deseja ativar a licença e informe o modelo do aparelho que está usando." },
      { title: "Informe o MAC Address", desc: "Envie o código por mensagem. Conferimos junto com você antes de seguir." },
      { title: "Realizamos a ativação da licença", desc: "A licença é ativada com validade de 1 ano e você recebe a confirmação." },
      { title: "Você recebe suporte durante todo o processo", desc: "Continuamos disponíveis para orientar os ajustes iniciais e sanar dúvidas." },
    ],
  },
  compatibility: {
    title: "Aparelhos atendidos na ativação",
    text: "A ativação é feita para os aparelhos compatíveis mais comuns, com instruções adaptadas a cada sistema.",
    devices: ["Samsung Smart TV", "LG Smart TV", "Android TV", "Google TV", "TV Box compatíveis"],
  },
  section2: {
    title: "O que preparamos antes de ativar",
    text: "Uma checagem simples evita retrabalho e garante que a licença fique vinculada ao aparelho certo.",
    cards: [
      { icon: MonitorSmartphone, title: "Modelo do aparelho", desc: "Identificamos o sistema para orientar os menus corretos." },
      { icon: KeyRound, title: "MAC conferido", desc: "Validamos o formato do código antes de prosseguir." },
      { icon: Settings, title: "Aplicativo atualizado", desc: "Verificamos se a versão instalada está adequada." },
      { icon: RefreshCw, title: "Teste final", desc: "Confirmamos com você que a licença consta como ativa." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Como ativar o",
      h2Accent: "Smarters Player passo a passo",
      paragraphs: [
        "Para ativar o Smarters Player é preciso informar o MAC Address do aparelho onde o aplicativo está instalado. Esse identificador é o que vincula a licença ao dispositivo.",
        "No atendimento, orientamos onde localizar o MAC, conferimos o código enviado e realizamos a ativação da licença, válida por 1 ano, pelo valor de R$ 17,99.",
        "Tudo é feito de forma remota: o aparelho continua na sua casa e você executa os passos com nossa orientação em tempo real.",
      ],
      ctaLabel: "Ativar agora",
      ctaMessage: "Quero ativar agora a licença do Smarters Player.",
      source: "ativar-smarters-servico",
    },
    {
      h2Pre: "Erros comuns",
      h2Accent: "na hora de ativar",
      paragraphs: [
        "Os problemas mais frequentes são o MAC digitado com um caractere trocado, o uso do identificador de outro aparelho e a tentativa de ativação com o aplicativo desatualizado.",
        "Nosso suporte antecipa esses pontos: conferimos o dado, confirmamos o modelo e verificamos a versão do aplicativo antes de concluir a ativação.",
      ],
      ctaLabel: "Tirar dúvida sobre o meu caso",
      ctaMessage: "Tive um erro ao tentar ativar o Smarters Player.",
      source: "ativar-smarters-erros",
    },
    {
      h2Pre: "Depois da ativação:",
      h2Accent: "configuração e ajustes",
      paragraphs: [
        "Com a licença ativa, seguimos ajudando na configuração do aplicativo — idioma, aparência e preferências de navegação — para deixar o uso confortável na sua TV.",
        "Se precisar reinstalar o aplicativo dentro do período da licença, oriente-se com nosso suporte antes de qualquer alteração no aparelho.",
      ],
      ctaLabel: "Pedir ajuda na configuração",
      ctaMessage: "Já ativei e quero ajuda para configurar o Smarters Player.",
      source: "ativar-smarters-config",
    },
  ],
  faqTitleAccent: "sobre a ativação",
  faqs: [
    { q: "Como ativar o Smarters Player?", a: "Envie uma mensagem no WhatsApp com o modelo do aparelho e o MAC Address do aplicativo. Conferimos o dado e realizamos a ativação da licença." },
    { q: "Onde localizar o MAC Address?", a: "Ele normalmente aparece na tela inicial do aplicativo ou no menu de informações de rede do aparelho. Orientamos você até encontrá-lo." },
    { q: "Quanto custa a ativação?", a: "R$ 17,99, com suporte técnico remoto incluído durante todo o processo." },
    { q: "Quanto tempo dura a licença?", a: "A licença ativada tem validade de 1 ano." },
    { q: "Em quanto tempo a ativação é concluída?", a: "Na maioria dos casos, em poucos minutos após a confirmação do MAC Address." },
    { q: "Em quais TVs a ativação funciona?", a: "Samsung Smart TV, LG Smart TV, Android TV, Google TV e TV Box compatíveis." },
    { q: "Preciso instalar algo no celular ou computador?", a: "Não. A orientação acontece por mensagens no WhatsApp e você executa os passos no próprio aparelho." },
    { q: "Errei o MAC Address, o que acontece?", a: "A licença ficaria vinculada a outro identificador. Por isso conferimos o código com você antes de ativar." },
    { q: "Como receber suporte depois de ativar?", a: "Basta responder na mesma conversa do WhatsApp; seguimos disponíveis para dúvidas técnicas." },
    { q: "Vocês acessam meu aparelho remotamente?", a: "Não. Nenhum acesso remoto é utilizado: você mantém o controle total do aparelho." },
    { q: "Vocês representam o desenvolvedor?", a: "Não. Somos um serviço independente de suporte técnico, sem afiliação oficial." },
    { q: "Posso ativar mais de um aparelho?", a: "Sim, cada aparelho possui seu próprio MAC Address e exige uma ativação individual." },
  ],
  internalLinks: smartersLinks("/ativar-smarters-player"),
  disclaimer: SMARTERS_DISCLAIMER,
  guarantee: {
    title: "Acompanhamento até a ativação ser confirmada",
    text: "Ficamos com você no WhatsApp até a licença constar como ativa no aplicativo, orientando cada tela e conferindo os dados informados.",
  },
  source: "ativar-smarters-player",
};

const AtivarSmartersPlayer = () => <AdLandingPage config={config} />;

export default AtivarSmartersPlayer;
