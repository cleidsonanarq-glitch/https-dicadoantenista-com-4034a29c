import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Zap, ShieldCheck, Headphones, Settings, Clock, Smartphone, Tv, MonitorSmartphone, Cpu, Wifi } from "lucide-react";
import { SMARTERS_DISCLAIMER, smartersLinks } from "./smartersPlayerLinks";

const WA = "Olá! Quero suporte para o Smarters Player.";

const config: AdLandingConfig = {
  path: "/smarters-player",
  breadcrumbName: "Smarters Player",
  title: "Smarters Player | Ativação da Licença e Suporte Técnico",
  description:
    "Suporte técnico independente para instalar, configurar e ativar o Smarters Player via MAC Address. Licença de 1 ano por R$ 17,99 com atendimento no WhatsApp.",
  eyebrow: "Smarters Player • Suporte no WhatsApp",
  heroPre: "Suporte técnico para o",
  heroAccent: "Smarters Player",
  heroPost: "na sua Smart TV",
  heroSubtitle: (
    <>
      Cuidamos da <strong className="text-foreground">instalação, configuração e ativação da licença</strong> pelo
      MAC Address, com acompanhamento remoto do início ao fim.
    </>
  ),
  heroTrustLine: "Atendimento especializado para Samsung, LG, Android TV, Google TV e TV Box compatíveis",
  heroQuickBenefits: [
    "Ativação da licença pelo MAC Address",
    "Configuração do aplicativo assistida",
    "Suporte remoto por WhatsApp",
    "Atendimento humano, sem robôs",
  ],
  heroPriceCard: {
    label: "Ativação da licença",
    price: "R$ 17,99",
    lines: ["Licença válida por 1 ano.", "Suporte técnico remoto durante todo o processo."],
  },
  heroImageAlt: "Smarters Player instalado em Smart TV com suporte técnico remoto",
  heroBadgeTitle: "Ativação assistida",
  heroBadgeDesc: "Smarters Player • MAC Address",
  ctaLabel: "Falar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Serviço técnico independente • Resposta em minutos",
  benefitsEyebrow: "Vantagens do nosso atendimento",
  benefitsTitlePre: "Por que contratar o",
  benefitsTitleAccent: "suporte especializado",
  benefits: [
    { icon: Zap, title: "Ativação rápida", desc: "Com o MAC Address em mãos, a ativação da licença é concluída em poucos minutos." },
    { icon: Clock, title: "Licença válida por 1 ano", desc: "Você fica um ano com a licença ativa e sabe exatamente quando renovar." },
    { icon: Headphones, title: "Suporte remoto", desc: "Todo o acompanhamento acontece pelo WhatsApp, sem precisar levar a TV a nenhum lugar." },
    { icon: ShieldCheck, title: "Atendimento especializado", desc: "Quem fala com você conhece os menus de cada fabricante e evita tentativas às cegas." },
    { icon: Settings, title: "Auxílio na configuração", desc: "Ajustamos idioma, aparência e preferências do aplicativo junto com você." },
    { icon: Smartphone, title: "Sem instalação de programas", desc: "Você mantém o controle do aparelho: apenas seguimos os passos juntos, em tempo real." },
  ],
  steps: {
    title: "Como funciona o atendimento",
    items: [
      { title: "Localize o MAC Address do aplicativo", desc: "Ele aparece na tela inicial do Smarters Player ou no menu de informações do aparelho. Se não encontrar, orientamos você." },
      { title: "Entre em contato pelo WhatsApp", desc: "Basta enviar uma mensagem informando o modelo da sua TV para iniciarmos o atendimento." },
      { title: "Informe o MAC Address", desc: "Conferimos o dado enviado para garantir que a ativação seja feita no aparelho correto." },
      { title: "Realizamos a ativação da licença", desc: "A licença é ativada e válida por 1 ano, com confirmação enviada para você." },
      { title: "Você recebe suporte durante todo o processo", desc: "Seguimos disponíveis para orientar a configuração e responder dúvidas técnicas." },
    ],
  },
  compatibility: {
    title: "Compatibilidade de aparelhos",
    text: "Atendemos os aparelhos mais utilizados no Brasil, adaptando as instruções ao sistema de cada fabricante.",
    devices: ["Samsung Smart TV", "LG Smart TV", "Android TV", "Google TV", "TV Box compatíveis"],
  },
  section2: {
    title: "Um serviço técnico, do começo ao fim",
    text: "Nosso trabalho é deixar o aplicativo instalado, ativado e configurado corretamente no seu aparelho.",
    cards: [
      { icon: MonitorSmartphone, title: "Instalação", desc: "Orientação para instalar o aplicativo conforme o sistema do seu aparelho." },
      { icon: Cpu, title: "Ativação", desc: "Ativação da licença a partir do MAC Address informado por você." },
      { icon: Settings, title: "Configuração", desc: "Ajuste das preferências do aplicativo para uma navegação confortável." },
      { icon: Wifi, title: "Verificação", desc: "Checagem de rede e de compatibilidade para evitar falhas depois." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "O que é o serviço de suporte para o",
      h2Accent: "Smarters Player",
      paragraphs: [
        "O Smarters Player é um aplicativo de reprodução compatível com Smart TVs Samsung, LG, aparelhos Android TV, Google TV e TV Box. Para funcionar em muitos aparelhos, ele exige uma licença vinculada ao MAC Address do dispositivo.",
        "Nosso serviço é exatamente esse: identificar o MAC Address, ativar a licença pelo período de 1 ano e acompanhar a instalação e a configuração do aplicativo por atendimento remoto no WhatsApp.",
        "A ativação custa R$ 17,99 e inclui suporte técnico durante todo o processo, sem taxas escondidas.",
      ],
      ctaLabel: "Quero ativar minha licença",
      ctaMessage: "Quero ativar a licença do Smarters Player por R$ 17,99.",
      source: "smarters-player-servico",
    },
    {
      h2Pre: "MAC Address:",
      h2Accent: "por que ele é necessário",
      paragraphs: [
        "O MAC Address é o identificador de rede do seu aparelho. A licença do Smarters Player é vinculada a ele, por isso o dado precisa ser informado corretamente na hora da ativação.",
        "Um caractere trocado ativa a licença em outro identificador. Para evitar isso, conferimos o MAC junto com você antes de concluir o processo.",
      ],
      ctaLabel: "Preciso localizar meu MAC",
      ctaMessage: "Preciso de ajuda para localizar o MAC Address do Smarters Player.",
      source: "smarters-player-mac",
    },
    {
      h2Pre: "Suporte técnico",
      h2Accent: "após a ativação",
      paragraphs: [
        "Depois da ativação, você continua com nosso canal de suporte disponível para dúvidas de configuração, reinstalação do aplicativo e verificação de compatibilidade.",
        "Se o aparelho for substituído dentro do período da licença, orientamos os passos técnicos para retomar o uso no novo dispositivo.",
      ],
      ctaLabel: "Falar com o suporte",
      ctaMessage: "Preciso de suporte técnico para o Smarters Player.",
      source: "smarters-player-suporte",
    },
  ],
  faqTitleAccent: "sobre o Smarters Player",
  faqs: [
    { q: "O que vocês fazem exatamente?", a: "Prestamos suporte técnico independente para instalar, configurar e ativar a licença do Smarters Player no seu aparelho, com acompanhamento remoto pelo WhatsApp." },
    { q: "Quanto custa a ativação da licença?", a: "A ativação da licença custa R$ 17,99 e inclui suporte técnico remoto durante todo o processo." },
    { q: "Por quanto tempo a licença fica válida?", a: "A licença ativada é válida por 1 ano, contado a partir da ativação." },
    { q: "Onde encontro o MAC Address?", a: "Normalmente ele aparece na tela inicial do aplicativo ou no menu de informações de rede do aparelho. Se não localizar, orientamos passo a passo." },
    { q: "Em quais aparelhos funciona?", a: "Samsung Smart TV, LG Smart TV, Android TV, Google TV e TV Box compatíveis." },
    { q: "Como recebo o suporte?", a: "Todo o atendimento é remoto, pelo WhatsApp, com orientação em tempo real de um atendente." },
    { q: "Preciso enviar a TV para vocês?", a: "Não. O aparelho permanece com você e todos os passos são feitos por você mesmo, com nossa orientação." },
    { q: "Quanto tempo leva a ativação?", a: "Com o MAC Address correto em mãos, a ativação costuma ser concluída em poucos minutos." },
    { q: "Vocês são o desenvolvedor do aplicativo?", a: "Não. Somos um serviço de suporte técnico independente, sem vínculo, afiliação ou representação oficial do desenvolvedor." },
    { q: "E se eu trocar de aparelho?", a: "A licença é vinculada ao MAC Address. Se houver troca de aparelho, entre em contato para orientarmos os passos técnicos possíveis." },
    { q: "Vocês pedem senhas ou dados bancários?", a: "Não pedimos senhas de e-mail nem dados bancários. Solicitamos apenas o modelo do aparelho e o MAC Address." },
    { q: "O atendimento é humano?", a: "Sim. Você conversa diretamente com um atendente especializado, sem robôs." },
  ],
  internalLinks: smartersLinks("/smarters-player"),
  disclaimer: SMARTERS_DISCLAIMER,
  guarantee: {
    title: "Acompanhamento até a licença estar ativa",
    text: "Seguimos com você no WhatsApp até a licença do Smarters Player estar ativa e o aplicativo configurado no seu aparelho — sem espera e sem custo surpresa.",
  },
  source: "smarters-player",
};

const SmartersPlayer = () => <AdLandingPage config={config} />;

export default SmartersPlayer;
