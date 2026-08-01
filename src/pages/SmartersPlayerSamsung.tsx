import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, Search, KeyRound, Headphones, Settings, ShieldCheck, Zap, Clock, MonitorSmartphone, Wifi } from "lucide-react";
import { SMARTERS_DISCLAIMER, smartersLinks } from "./smartersPlayerLinks";

const WA = "Olá! Tenho uma Smart TV Samsung e quero suporte para o Smarters Player.";

const config: AdLandingConfig = {
  path: "/smarters-player-samsung",
  breadcrumbName: "Smarters Player Samsung",
  title: "Smarters Player Samsung | Ativação e Suporte para Smart TV",
  description:
    "Suporte técnico para instalar, configurar e ativar o Smarters Player em Smart TV Samsung. Licença de 1 ano por R$ 17,99 com ativação por MAC Address.",
  eyebrow: "Smart TV Samsung • Suporte remoto",
  heroPre: "Smarters Player em",
  heroAccent: "Smart TV Samsung",
  heroPost: "com ativação assistida",
  heroSubtitle: (
    <>
      Atendemos donos de TVs Samsung na <strong className="text-foreground">instalação, configuração e ativação
      da licença</strong> pelo MAC Address, com orientação nos menus do próprio aparelho.
    </>
  ),
  heroTrustLine: "Instruções específicas para o sistema das Smart TVs Samsung",
  heroQuickBenefits: [
    "Ajuda para localizar o MAC na TV Samsung",
    "Instalação orientada no aparelho",
    "Ativação da licença em minutos",
    "Suporte humano pelo WhatsApp",
  ],
  heroPriceCard: {
    label: "Ativação da licença",
    price: "R$ 17,99",
    lines: ["Licença válida por 1 ano.", "Suporte técnico remoto durante todo o processo."],
  },
  heroImageAlt: "Smarters Player configurado em Smart TV Samsung com suporte remoto",
  heroBadgeTitle: "Especialistas em Samsung",
  heroBadgeDesc: "Ativação por MAC Address",
  ctaLabel: "Falar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Atendimento para Smart TV Samsung • Resposta rápida",
  benefitsEyebrow: "Atendimento para TVs Samsung",
  benefitsTitlePre: "Por que o suporte",
  benefitsTitleAccent: "faz diferença na Samsung",
  benefits: [
    { icon: Search, title: "MAC Address na Samsung", desc: "Mostramos onde encontrar o identificador de rede nos menus da sua TV Samsung." },
    { icon: Zap, title: "Ativação rápida", desc: "Com o MAC conferido, a licença é ativada dentro do próprio atendimento." },
    { icon: Settings, title: "Auxílio na configuração", desc: "Ajustamos o aplicativo para navegar com o controle da Samsung sem complicação." },
    { icon: Clock, title: "Licença válida por 1 ano", desc: "Doze meses de licença ativa, com data de renovação combinada." },
    { icon: Headphones, title: "Suporte remoto", desc: "Você não precisa levar a TV a lugar algum: tudo é resolvido por mensagem." },
    { icon: ShieldCheck, title: "Serviço independente", desc: "Prestamos suporte técnico e não temos vínculo oficial com fabricantes ou desenvolvedores." },
  ],
  steps: {
    title: "Como atendemos sua TV Samsung",
    items: [
      { title: "Localize o MAC Address do aplicativo", desc: "Abra o Smarters Player na TV Samsung e verifique o MAC exibido na tela inicial ou nas informações de rede." },
      { title: "Entre em contato pelo WhatsApp", desc: "Informe o modelo da sua Samsung para adaptarmos as instruções." },
      { title: "Informe o MAC Address", desc: "Conferimos o código antes de qualquer procedimento." },
      { title: "Realizamos a ativação da licença", desc: "A licença é ativada com validade de 1 ano e confirmada com você." },
      { title: "Você recebe suporte durante todo o processo", desc: "Acompanhamos a configuração e ficamos disponíveis para dúvidas." },
    ],
  },
  compatibility: {
    title: "Compatibilidade além da Samsung",
    text: "Além das Smart TVs Samsung, atendemos outros aparelhos compatíveis com o aplicativo.",
    devices: ["Samsung Smart TV", "LG Smart TV", "Android TV", "Google TV", "TV Box compatíveis"],
  },
  section2: {
    title: "O que verificamos na sua Samsung",
    text: "Uma checagem rápida evita retrabalho e deixa o aplicativo estável no aparelho.",
    cards: [
      { icon: MonitorSmartphone, title: "Modelo e sistema", desc: "Confirmamos a linha da TV para indicar os menus corretos." },
      { icon: KeyRound, title: "MAC Address", desc: "Validamos o identificador que receberá a licença." },
      { icon: Wifi, title: "Conexão", desc: "Checamos pontos básicos de rede antes de concluir." },
      { icon: Tv, title: "Aplicativo", desc: "Verificamos se está instalado e atualizado corretamente." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Suporte para o Smarters Player em",
      h2Accent: "Smart TV Samsung",
      paragraphs: [
        "Nas Smart TVs Samsung, o caminho para instalar aplicativos e consultar as informações de rede segue a organização própria do sistema da fabricante. Isso costuma gerar dúvidas na hora de localizar o MAC Address.",
        "Nosso atendimento resolve esse ponto: orientamos onde encontrar o identificador na sua Samsung, conferimos o dado e realizamos a ativação da licença, válida por 1 ano, por R$ 17,99.",
        "Depois da ativação, seguimos ajudando na configuração do aplicativo para que a navegação fique confortável com o controle da TV.",
      ],
      ctaLabel: "Ativar na minha Samsung",
      ctaMessage: "Quero ativar o Smarters Player na minha Smart TV Samsung.",
      source: "smarters-samsung-servico",
    },
    {
      h2Pre: "Onde encontrar o MAC Address na",
      h2Accent: "TV Samsung",
      paragraphs: [
        "Em geral, o MAC Address aparece na própria tela inicial do Smarters Player. Quando não está visível, ele pode ser consultado nas informações de rede do aparelho.",
        "Como os menus mudam entre linhas e anos de fabricação, orientamos você em tempo real até localizar o dado correto, sem tentativa e erro.",
      ],
      ctaLabel: "Ajuda para achar o MAC",
      ctaMessage: "Não encontrei o MAC Address na minha TV Samsung.",
      source: "smarters-samsung-mac",
    },
    {
      h2Pre: "Instalação e configuração",
      h2Accent: "com acompanhamento",
      paragraphs: [
        "Todo o serviço é remoto: a TV Samsung permanece com você e cada passo é executado sob nossa orientação por WhatsApp.",
        "Solicitamos apenas o modelo do aparelho e o MAC Address. Não pedimos senhas de e-mail nem dados bancários.",
      ],
      ctaLabel: "Iniciar atendimento",
      ctaMessage: "Quero iniciar o atendimento para minha Smart TV Samsung.",
      source: "smarters-samsung-atendimento",
    },
  ],
  faqTitleAccent: "sobre TVs Samsung",
  faqs: [
    { q: "O Smarters Player funciona em Smart TV Samsung?", a: "Sim, nas TVs Samsung compatíveis com o aplicativo. Verificamos o modelo antes de iniciar o atendimento." },
    { q: "Como ativar na TV Samsung?", a: "Envie o MAC Address exibido pelo aplicativo no WhatsApp. Conferimos o dado e realizamos a ativação da licença." },
    { q: "Onde localizar o MAC na Samsung?", a: "Normalmente na tela inicial do aplicativo ou nas informações de rede do aparelho. Orientamos até você encontrar." },
    { q: "Quanto custa a ativação?", a: "R$ 17,99, com suporte técnico remoto incluído durante todo o processo." },
    { q: "Quanto tempo dura a licença?", a: "A licença é válida por 1 ano a partir da ativação." },
    { q: "Preciso levar a TV a uma assistência?", a: "Não. O atendimento é totalmente remoto, feito pelo WhatsApp." },
    { q: "Vocês instalam o aplicativo na minha Samsung?", a: "Orientamos a instalação passo a passo; você executa no aparelho com nossa condução." },
    { q: "Minha Samsung é antiga, funciona?", a: "Depende do modelo. Informe a linha e o ano da TV e verificamos a compatibilidade antes de qualquer cobrança." },
    { q: "Posso ativar em outra TV depois?", a: "Cada aparelho tem um MAC Address diferente e exige ativação própria." },
    { q: "Como recebo suporte?", a: "Pelo WhatsApp, com atendimento humano durante e após a ativação." },
    { q: "Vocês são representantes da Samsung?", a: "Não. A marca é citada apenas para indicar compatibilidade técnica; nosso suporte é independente." },
    { q: "O que preciso ter em mãos?", a: "O modelo da TV Samsung e o MAC Address exibido pelo aplicativo." },
  ],
  internalLinks: smartersLinks("/smarters-player-samsung"),
  disclaimer: SMARTERS_DISCLAIMER,
  guarantee: {
    title: "Acompanhamento na sua Samsung até funcionar",
    text: "Ficamos com você no WhatsApp até o aplicativo estar instalado, com a licença ativa e configurado na sua Smart TV Samsung.",
  },
  source: "smarters-player-samsung",
};

const SmartersPlayerSamsung = () => <AdLandingPage config={config} />;

export default SmartersPlayerSamsung;
