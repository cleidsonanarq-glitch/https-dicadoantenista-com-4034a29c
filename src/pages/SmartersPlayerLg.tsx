import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, Search, KeyRound, Headphones, Settings, ShieldCheck, Zap, Clock, MonitorSmartphone, Wifi } from "lucide-react";
import { SMARTERS_DISCLAIMER, smartersLinks } from "./smartersPlayerLinks";

const WA = "Olá! Tenho uma Smart TV LG e quero suporte para o Smarters Player.";

const config: AdLandingConfig = {
  path: "/smarters-player-lg",
  breadcrumbName: "Smarters Player LG",
  title: "Smarters Player LG | Ativação da Licença e Suporte Técnico",
  description:
    "Suporte técnico para instalar, configurar e ativar o Smarters Player em Smart TV LG. Licença de 1 ano por R$ 17,99 com ativação por MAC Address no WhatsApp.",
  eyebrow: "Smart TV LG • Atendimento remoto",
  heroPre: "Smarters Player em",
  heroAccent: "Smart TV LG",
  heroPost: "com licença ativada por nós",
  heroSubtitle: (
    <>
      Conduzimos a <strong className="text-foreground">instalação, a configuração e a ativação da licença</strong>{" "}
      pelo MAC Address em TVs LG, com instruções feitas para o sistema do aparelho.
    </>
  ),
  heroTrustLine: "Atendimento pensado para as Smart TVs LG e seus menus de rede",
  heroQuickBenefits: [
    "Localização do MAC na TV LG",
    "Instalação acompanhada passo a passo",
    "Ativação da licença por 1 ano",
    "Suporte técnico remoto no WhatsApp",
  ],
  heroPriceCard: {
    label: "Ativação da licença",
    price: "R$ 17,99",
    lines: ["Licença válida por 1 ano.", "Suporte técnico remoto durante todo o processo."],
  },
  heroImageAlt: "Smarters Player ativado em Smart TV LG com suporte técnico remoto",
  heroBadgeTitle: "Atendimento para LG",
  heroBadgeDesc: "Licença vinculada ao MAC",
  ctaLabel: "Falar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Atendimento para Smart TV LG • Suporte humano",
  benefitsEyebrow: "Atendimento para TVs LG",
  benefitsTitlePre: "Vantagens do suporte",
  benefitsTitleAccent: "para Smart TV LG",
  benefits: [
    { icon: Search, title: "MAC Address na LG", desc: "Indicamos onde consultar o identificador de rede nos menus da sua TV LG." },
    { icon: Zap, title: "Ativação rápida", desc: "Com o dado confirmado, a licença é ativada no mesmo atendimento." },
    { icon: Settings, title: "Auxílio na configuração", desc: "Deixamos o aplicativo ajustado para uso confortável com o controle da LG." },
    { icon: Clock, title: "Licença válida por 1 ano", desc: "Você acompanha o prazo e sabe quando renovar." },
    { icon: Headphones, title: "Suporte remoto", desc: "Todo o atendimento acontece por WhatsApp, sem deslocamento." },
    { icon: ShieldCheck, title: "Serviço independente", desc: "Suporte técnico sem vínculo oficial com fabricantes ou desenvolvedores." },
  ],
  steps: {
    title: "Como atendemos sua TV LG",
    items: [
      { title: "Localize o MAC Address do aplicativo", desc: "Abra o Smarters Player na TV LG e verifique o MAC na tela inicial ou nas informações de rede." },
      { title: "Entre em contato pelo WhatsApp", desc: "Informe o modelo da sua LG para adaptarmos as orientações." },
      { title: "Informe o MAC Address", desc: "Conferimos o código para garantir a ativação no aparelho correto." },
      { title: "Realizamos a ativação da licença", desc: "A licença passa a valer por 1 ano, com confirmação enviada a você." },
      { title: "Você recebe suporte durante todo o processo", desc: "Seguimos ao seu lado na configuração e nas dúvidas posteriores." },
    ],
  },
  compatibility: {
    title: "Compatibilidade além da LG",
    text: "Também atendemos outros aparelhos compatíveis com o aplicativo, sempre com instruções específicas.",
    devices: ["LG Smart TV", "Samsung Smart TV", "Android TV", "Google TV", "TV Box compatíveis"],
  },
  section2: {
    title: "O que verificamos na sua LG",
    text: "Checagens simples que evitam falhas depois da ativação.",
    cards: [
      { icon: MonitorSmartphone, title: "Modelo e sistema", desc: "Identificamos a linha da TV para indicar os menus corretos." },
      { icon: KeyRound, title: "MAC Address", desc: "Confirmamos o identificador que receberá a licença." },
      { icon: Wifi, title: "Conexão", desc: "Avaliamos pontos básicos de rede antes de finalizar." },
      { icon: Tv, title: "Aplicativo", desc: "Verificamos a instalação e a versão em uso." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Suporte para o Smarters Player em",
      h2Accent: "Smart TV LG",
      paragraphs: [
        "As Smart TVs LG organizam a instalação de aplicativos e as informações de rede de forma própria. Encontrar o MAC Address é justamente onde a maioria dos usuários trava.",
        "Nosso atendimento cuida disso: orientamos a localização do identificador na sua LG, conferimos o dado e realizamos a ativação da licença, com validade de 1 ano, por R$ 17,99.",
        "Em seguida, ajudamos nos ajustes do aplicativo para que a navegação fique simples no controle da TV.",
      ],
      ctaLabel: "Ativar na minha LG",
      ctaMessage: "Quero ativar o Smarters Player na minha Smart TV LG.",
      source: "smarters-lg-servico",
    },
    {
      h2Pre: "MAC Address na",
      h2Accent: "TV LG: onde consultar",
      paragraphs: [
        "Na maioria dos casos, o MAC Address é exibido na tela inicial do Smarters Player. Quando não aparece, ele pode ser consultado nas informações de conexão do aparelho.",
        "Como o caminho muda conforme a linha e o ano da TV, conduzimos você em tempo real até localizar o dado correto.",
      ],
      ctaLabel: "Ajuda para achar o MAC",
      ctaMessage: "Não encontrei o MAC Address na minha TV LG.",
      source: "smarters-lg-mac",
    },
    {
      h2Pre: "Instalação, configuração e",
      h2Accent: "suporte após a ativação",
      paragraphs: [
        "Toda a orientação é remota e a TV permanece com você. Nenhum acesso remoto ao aparelho é utilizado durante o atendimento.",
        "Após a ativação, o canal de suporte segue aberto para dúvidas de configuração, reinstalação e verificação da licença durante os 12 meses.",
      ],
      ctaLabel: "Iniciar atendimento",
      ctaMessage: "Quero iniciar o atendimento para minha Smart TV LG.",
      source: "smarters-lg-atendimento",
    },
  ],
  faqTitleAccent: "sobre TVs LG",
  faqs: [
    { q: "O Smarters Player funciona em Smart TV LG?", a: "Sim, nas TVs LG compatíveis com o aplicativo. Confirmamos o modelo antes de iniciar." },
    { q: "Como ativar na TV LG?", a: "Envie pelo WhatsApp o MAC Address exibido pelo aplicativo; conferimos e realizamos a ativação da licença." },
    { q: "Onde fica o MAC Address na LG?", a: "Normalmente na tela inicial do aplicativo ou nas informações de rede do aparelho. Orientamos passo a passo." },
    { q: "Quanto custa a ativação?", a: "R$ 17,99, já com suporte técnico remoto durante todo o processo." },
    { q: "Qual a validade da licença?", a: "A licença ativada é válida por 1 ano." },
    { q: "O atendimento é presencial?", a: "Não. É totalmente remoto, feito por mensagens no WhatsApp." },
    { q: "Vocês instalam o aplicativo por mim?", a: "Orientamos a instalação em tempo real; a execução é feita por você no aparelho." },
    { q: "Minha LG é de um modelo antigo, dá para usar?", a: "Depende do modelo. Informe a linha e o ano da TV e verificamos a compatibilidade antes de qualquer cobrança." },
    { q: "Serve para mais de uma TV?", a: "Cada aparelho possui MAC Address próprio, portanto exige uma ativação individual." },
    { q: "Como peço suporte depois de ativar?", a: "Pelo mesmo WhatsApp do atendimento, com resposta de um atendente." },
    { q: "Vocês representam a LG?", a: "Não. Citamos a marca apenas para indicar compatibilidade; nosso suporte é independente." },
    { q: "O que preciso ter em mãos?", a: "O modelo da TV LG e o MAC Address exibido pelo aplicativo." },
  ],
  internalLinks: smartersLinks("/smarters-player-lg"),
  disclaimer: SMARTERS_DISCLAIMER,
  guarantee: {
    title: "Acompanhamento na sua LG até funcionar",
    text: "Seguimos com você no WhatsApp até o aplicativo estar instalado, com a licença ativa e configurado na sua Smart TV LG.",
  },
  source: "smarters-player-lg",
};

const SmartersPlayerLg = () => <AdLandingPage config={config} />;

export default SmartersPlayerLg;
