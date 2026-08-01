import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Settings, Sliders, Languages, Headphones, Wifi, ShieldCheck, MonitorSmartphone, RefreshCw, Search, Zap } from "lucide-react";
import { SMARTERS_DISCLAIMER, smartersLinks } from "./smartersPlayerLinks";

const WA = "Olá! Preciso de ajuda para configurar o Smarters Player.";

const config: AdLandingConfig = {
  path: "/configurar-smarters-player",
  breadcrumbName: "Configurar Smarters Player",
  title: "Configurar Smarters Player | Ajuda Remota pelo WhatsApp",
  description:
    "Configuração assistida do Smarters Player em Smart TV Samsung, LG, Android TV e Google TV. Instalação, ativação por MAC Address e suporte técnico remoto.",
  eyebrow: "Configuração assistida • Suporte remoto",
  heroPre: "Configuração do",
  heroAccent: "Smarters Player",
  heroPost: "feita com você, passo a passo",
  heroSubtitle: (
    <>
      Orientamos a <strong className="text-foreground">instalação, os ajustes do aplicativo</strong> e a
      ativação da licença por MAC Address, tudo por atendimento remoto.
    </>
  ),
  heroTrustLine: "Instruções adaptadas ao sistema da sua Smart TV, Android TV, Google TV ou TV Box",
  heroQuickBenefits: [
    "Instalação orientada no seu aparelho",
    "Ajuste de idioma e preferências",
    "Verificação de rede e compatibilidade",
    "Ativação da licença por MAC Address",
  ],
  heroPriceCard: {
    label: "Ativação da licença",
    price: "R$ 17,99",
    lines: ["Licença válida por 1 ano.", "Suporte técnico remoto durante todo o processo."],
  },
  heroImageAlt: "Configuração do Smarters Player em Smart TV com suporte remoto",
  heroBadgeTitle: "Configuração guiada",
  heroBadgeDesc: "Atendimento humano no WhatsApp",
  ctaLabel: "Pedir ajuda no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Orientação em tempo real • Sem acesso remoto ao aparelho",
  benefitsEyebrow: "Configuração sem dor de cabeça",
  benefitsTitlePre: "O que o suporte",
  benefitsTitleAccent: "configura com você",
  benefits: [
    { icon: MonitorSmartphone, title: "Instalação orientada", desc: "Indicamos o caminho correto de instalação conforme o sistema do seu aparelho." },
    { icon: Sliders, title: "Ajuste das preferências", desc: "Organizamos as opções do aplicativo para uma navegação simples no controle da TV." },
    { icon: Languages, title: "Idioma e aparência", desc: "Deixamos o aplicativo em português e com a exibição mais confortável para você." },
    { icon: Wifi, title: "Verificação de rede", desc: "Checamos pontos básicos de conexão que costumam causar travamentos." },
    { icon: Headphones, title: "Suporte remoto", desc: "Atendimento humano pelo WhatsApp durante toda a configuração." },
    { icon: ShieldCheck, title: "Serviço técnico independente", desc: "Nosso trabalho é instalar, configurar e ativar aplicativos compatíveis." },
  ],
  steps: {
    title: "Configuração em 5 etapas",
    items: [
      { title: "Localize o MAC Address do aplicativo", desc: "Antes dos ajustes, identificamos o MAC exibido pelo aplicativo no seu aparelho." },
      { title: "Entre em contato pelo WhatsApp", desc: "Conte qual aparelho você usa e o que precisa configurar." },
      { title: "Informe o MAC Address", desc: "Conferimos o código para vincular a licença ao dispositivo correto." },
      { title: "Realizamos a ativação da licença", desc: "Com a licença ativa, seguimos para os ajustes do aplicativo." },
      { title: "Você recebe suporte durante todo o processo", desc: "Acompanhamos cada tela até a configuração ficar do seu jeito." },
    ],
  },
  compatibility: {
    title: "Configuramos nestes aparelhos",
    text: "Cada fabricante organiza os menus de forma diferente. Adaptamos as instruções ao seu modelo.",
    devices: ["Samsung Smart TV", "LG Smart TV", "Android TV", "Google TV", "TV Box compatíveis"],
  },
  section2: {
    title: "Ajustes que fazem diferença no uso",
    text: "Pequenas configurações deixam a navegação mais rápida e evitam chamados repetidos.",
    cards: [
      { icon: Settings, title: "Preferências", desc: "Ordenação, idioma e opções de exibição do aplicativo." },
      { icon: Zap, title: "Desempenho", desc: "Ajustes que reduzem lentidão na navegação pelos menus." },
      { icon: Search, title: "Diagnóstico", desc: "Identificação da causa quando algo não abre corretamente." },
      { icon: RefreshCw, title: "Reinstalação", desc: "Orientação segura caso o aplicativo precise ser reinstalado." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Como configurar o",
      h2Accent: "Smarters Player na sua TV",
      paragraphs: [
        "A configuração do Smarters Player começa pela instalação correta no aparelho e pela ativação da licença vinculada ao MAC Address. Só depois disso os ajustes de preferência fazem sentido.",
        "No atendimento remoto, orientamos cada etapa pelo WhatsApp: onde encontrar o aplicativo no seu sistema, como localizar o MAC, como concluir a ativação e como organizar as opções internas.",
        "A ativação da licença custa R$ 17,99 e vale por 1 ano, com suporte técnico remoto incluído durante todo o processo.",
      ],
      ctaLabel: "Quero configurar agora",
      ctaMessage: "Quero configurar o Smarters Player com o suporte de vocês.",
      source: "configurar-smarters-servico",
    },
    {
      h2Pre: "Diferenças entre",
      h2Accent: "Samsung, LG e Android TV",
      paragraphs: [
        "Em Smart TVs Samsung e LG, a instalação e o acesso às informações de rede seguem caminhos próprios de cada sistema. Em Android TV, Google TV e TV Box, os menus são semelhantes entre si, mas variam por fabricante.",
        "Por isso, o atendimento é personalizado: pedimos o modelo do aparelho e indicamos exatamente a sequência de telas do seu caso.",
      ],
      ctaLabel: "Informar meu modelo",
      ctaMessage: "Vou informar o modelo do meu aparelho para configurar o Smarters Player.",
      source: "configurar-smarters-aparelhos",
    },
    {
      h2Pre: "Suporte contínuo",
      h2Accent: "após a configuração",
      paragraphs: [
        "Terminada a configuração, você continua com o canal de suporte aberto para dúvidas técnicas, reinstalação e verificação da licença.",
        "Não solicitamos senhas de e-mail nem dados bancários: apenas o modelo do aparelho e o MAC Address necessários para o serviço.",
      ],
      ctaLabel: "Falar com o suporte",
      ctaMessage: "Preciso de suporte técnico para configurar o Smarters Player.",
      source: "configurar-smarters-suporte",
    },
  ],
  faqTitleAccent: "sobre configuração",
  faqs: [
    { q: "Como configurar o Smarters Player?", a: "Entre em contato pelo WhatsApp informando o modelo do aparelho. Orientamos a instalação, a ativação da licença por MAC Address e os ajustes internos do aplicativo." },
    { q: "A configuração é feita remotamente?", a: "Sim. Você executa os passos no aparelho com nossa orientação em tempo real, sem acesso remoto ao dispositivo." },
    { q: "Preciso ativar a licença antes de configurar?", a: "A ativação é parte do processo. Normalmente ativamos a licença e depois seguimos com os ajustes." },
    { q: "Onde localizar o MAC Address?", a: "Na tela inicial do aplicativo ou no menu de informações de rede do aparelho." },
    { q: "Quanto custa?", a: "A ativação da licença custa R$ 17,99, com suporte técnico remoto incluído durante o processo." },
    { q: "Quanto tempo dura a licença?", a: "Um ano, contado a partir da ativação." },
    { q: "Em quais TVs vocês configuram?", a: "Samsung Smart TV, LG Smart TV, Android TV, Google TV e TV Box compatíveis." },
    { q: "Quanto tempo leva a configuração?", a: "Depende do aparelho, mas na maioria dos casos o atendimento é concluído no mesmo contato." },
    { q: "O aplicativo está lento, vocês ajudam?", a: "Sim. Verificamos pontos de rede e ajustes internos que costumam causar lentidão." },
    { q: "Preciso reinstalar o aplicativo, perco a licença?", a: "A licença está vinculada ao MAC Address. Fale com o suporte antes de reinstalar para orientarmos corretamente." },
    { q: "Como recebo suporte depois?", a: "Pelo mesmo WhatsApp, com atendimento humano sempre que precisar." },
    { q: "Vocês são o desenvolvedor do aplicativo?", a: "Não. Somos um serviço independente de suporte técnico, sem afiliação oficial." },
  ],
  internalLinks: smartersLinks("/configurar-smarters-player"),
  disclaimer: SMARTERS_DISCLAIMER,
  guarantee: {
    title: "Acompanhamento até o aplicativo estar configurado",
    text: "Seguimos com você no WhatsApp até o Smarters Player estar instalado, com a licença ativa e configurado no seu aparelho.",
  },
  source: "configurar-smarters-player",
};

const ConfigurarSmartersPlayer = () => <AdLandingPage config={config} />;

export default ConfigurarSmartersPlayer;
