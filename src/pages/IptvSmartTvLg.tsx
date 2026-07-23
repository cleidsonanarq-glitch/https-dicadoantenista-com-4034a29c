import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Monitor, ShieldCheck, Settings, Headphones, MessageCircle, Zap, Search, KeyRound, LifeBuoy, Wrench } from "lucide-react";

const WA = "Olá! Preciso de suporte para configurar o aplicativo na minha Smart TV LG.";

const TRANSPARENCIA =
  "Prestamos um serviço independente de instalação, configuração e ativação de aplicativos compatíveis com Smart TVs. Não somos desenvolvedores, representantes ou parceiros oficiais dos aplicativos ou fabricantes mencionados. As marcas citadas pertencem aos seus respectivos proprietários e são utilizadas apenas para identificar compatibilidade. O serviço não inclui fornecimento de listas de reprodução, canais, filmes, séries ou qualquer conteúdo audiovisual. O cliente é responsável pelos conteúdos e serviços que utilizar.";

const config: AdLandingConfig = {
  path: "/iptv-smart-tv-lg",
  title: "IPTV Smart TV LG | Instalação, Configuração e Ativação",
  description:
    "Serviço técnico para instalar, configurar e ativar aplicativos de IPTV em Smart TV LG com sistema webOS. Suporte remoto pelo WhatsApp, sem listas e sem conteúdo.",
  eyebrow: "Smart TV LG • Sistema webOS",
  heroPre: "Suporte técnico para",
  heroAccent: "IPTV em Smart TV LG",
  heroPost: "no sistema webOS",
  heroSubtitle: (
    <>
      Cuidamos da <strong className="text-foreground">instalação</strong>,{" "}
      <strong className="text-foreground">configuração</strong> e ativação dos aplicativos compatíveis com a sua LG.
      Não fornecemos listas, canais ou qualquer conteúdo.
    </>
  ),
  heroTrustLine: "Compatível com Smart TVs LG com sistema webOS",
  heroQuickBenefits: [
    "Instalação de aplicativos compatíveis",
    "Configuração ajustada ao seu modelo LG",
    "Ativação quando o aplicativo exige",
    "Atendimento humano no WhatsApp",
  ],
  heroImageAlt: "Suporte para IPTV em Smart TV LG com aplicativo configurado no webOS",
  heroBadgeTitle: "LG webOS",
  heroBadgeDesc: "Instalação • Configuração • Suporte",
  ctaLabel: "Falar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Serviço técnico • Atendimento humano • Sem venda de conteúdo",
  benefitsEyebrow: "Feito para Smart TVs LG",
  benefitsTitlePre: "Vantagens do suporte",
  benefitsTitleAccent: "para LG",
  benefits: [
    { icon: Monitor, title: "Especialistas em webOS", desc: "Conhecemos os caminhos e menus das TVs LG e adaptamos o atendimento à versão do seu webOS." },
    { icon: Settings, title: "Configuração otimizada", desc: "Ajustamos as opções do aplicativo compatível para uma experiência estável na sua LG." },
    { icon: KeyRound, title: "Ativação orientada", desc: "Quando o aplicativo precisa de ativação, orientamos o passo a passo até concluir." },
    { icon: Search, title: "Achamos o MAC com você", desc: "Ensinamos como localizar o MAC Address da sua Smart TV LG quando essa informação for exigida." },
    { icon: Headphones, title: "Suporte remoto", desc: "Você recebe atendimento pelo WhatsApp com um especialista real, sem robôs." },
    { icon: ShieldCheck, title: "Serviço apenas técnico", desc: "Prestamos exclusivamente serviços de instalação, configuração e ativação. Não vendemos conteúdo." },
  ],
  section2: {
    title: "Etapas do atendimento em LG",
    text: "Cada Smart TV LG tem particularidades no webOS. Nosso atendimento cobre as etapas essenciais para o aplicativo compatível funcionar corretamente.",
    cards: [
      { icon: Zap, title: "Instalação", desc: "Instalamos o aplicativo compatível na sua LG ou orientamos alternativas quando ele não está na loja." },
      { icon: Settings, title: "Configuração", desc: "Configuramos as opções iniciais do aplicativo para funcionar bem na sua LG." },
      { icon: KeyRound, title: "Ativação", desc: "Quando aplicável, conduzimos a ativação com base no MAC Address ou licença." },
      { icon: Wrench, title: "Ajustes finais", desc: "Resolvemos ajustes de qualidade, buffer, EPG e outros pontos técnicos comuns em LG." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "IPTV em Smart TV LG:",
      h2Accent: "escopo do serviço",
      paragraphs: [
        "Para quem procura IPTV em Smart TV LG, oferecemos apenas suporte técnico: instalamos aplicativos compatíveis com o webOS, configuramos as preferências iniciais e orientamos a ativação quando o aplicativo pedir.",
        "Não fornecemos listas IPTV, listas M3U, canais, filmes, séries ou transmissões. A lista utilizada dentro do aplicativo é sempre providenciada pelo próprio cliente, e a responsabilidade pelo conteúdo é dele.",
        TRANSPARENCIA,
      ],
      ctaLabel: "Quero atendimento LG",
      ctaMessage: "Quero atendimento técnico para minha Smart TV LG.",
      source: "iptv-smart-tv-lg-servico",
    },
    {
      h2Pre: "Como localizar o",
      h2Accent: "MAC da sua LG",
      paragraphs: [
        "Nas Smart TVs LG, o MAC Address costuma aparecer em Configurações, Conexão, Configuração Avançada ou Sobre a TV, dependendo da versão do webOS.",
        "Como o menu muda entre modelos, guiamos você em tempo real pelo WhatsApp até encontrar exatamente a tela que exibe o MAC.",
      ],
      ctaLabel: "Preciso do MAC da LG",
      ctaMessage: "Preciso de ajuda para localizar o MAC Address da minha LG.",
      source: "iptv-smart-tv-lg-mac",
    },
    {
      h2Pre: "Ativação e",
      h2Accent: "erros comuns em LG",
      paragraphs: [
        "Ao ativar aplicativos em Smart TVs LG, erros comuns envolvem MAC digitado incorretamente, aplicativo não localizado na loja e falhas de conexão com a internet.",
        "Nosso atendimento identifica e corrige cada um desses pontos de forma remota, mantendo o processo simples para o cliente.",
      ],
      ctaLabel: "Resolver erro na LG",
      ctaMessage: "Estou com erro para ativar o aplicativo na minha LG. Podem ajudar?",
      source: "iptv-smart-tv-lg-erros",
    },
    {
      h2Pre: "Independência e",
      h2Accent: "responsabilidade",
      paragraphs: [
        "Não somos parceiros, representantes ou desenvolvedores da LG ou dos aplicativos. Utilizamos a marca apenas para descrever compatibilidade técnica.",
        "Todo conteúdo consumido dentro dos aplicativos é de responsabilidade do cliente, que utiliza suas próprias listas e serviços.",
      ],
      ctaLabel: "Falar com atendente",
      ctaMessage: "Quero falar com um atendente sobre o serviço para LG.",
      source: "iptv-smart-tv-lg-aviso",
    },
  ],
  faqTitleAccent: "sobre LG",
  faqs: [
    { q: "Vocês trabalham com todas as LG?", a: "Atendemos Smart TVs LG com sistema webOS. Confirmamos o modelo antes de iniciar, para ter certeza da compatibilidade com o aplicativo desejado." },
    { q: "O serviço inclui lista IPTV?", a: "Não. O serviço é 100% técnico. Não fornecemos listas, canais, filmes ou séries. A lista utilizada é sempre do próprio cliente." },
    { q: "Como localizar o MAC na minha LG?", a: "O MAC costuma estar em Configurações, Conexão ou Sobre a TV. Como o menu varia por modelo, orientamos você em tempo real pelo WhatsApp." },
    { q: "Precisa levar a TV até vocês?", a: "Não. O atendimento é remoto pelo WhatsApp. Você mantém a TV em casa e recebe orientação passo a passo." },
    { q: "Quanto custa o suporte para LG?", a: "O valor cobre apenas o serviço técnico contratado. É informado antes de iniciarmos o atendimento pelo WhatsApp." },
    { q: "Vocês são a LG?", a: "Não. Somos um serviço independente e usamos o nome LG apenas para descrever compatibilidade técnica dos aplicativos que instalamos." },
    { q: "É legal usar esses aplicativos na minha TV?", a: "Os aplicativos são de compatibilidade pública. A responsabilidade pelo conteúdo consumido é sempre do cliente." },
    { q: "Consigo ativação imediata?", a: "Na maioria dos casos, sim. Muitas ativações são concluídas em poucos minutos com nossa orientação." },
  ],
  source: "iptv-smart-tv-lg",
};

const IptvSmartTvLg = () => <AdLandingPage config={config} />;

export default IptvSmartTvLg;
