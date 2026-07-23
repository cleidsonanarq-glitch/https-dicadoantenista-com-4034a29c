import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, ShieldCheck, Settings, Headphones, Zap, Search, KeyRound, LifeBuoy, AlertCircle, Download } from "lucide-react";

const WA = "Olá! Preciso de suporte para instalar e configurar o IPTV Smarters Pro na minha Samsung.";

const TRANSPARENCIA =
  "Prestamos um serviço independente de instalação, configuração e ativação de aplicativos compatíveis com Smart TVs. Não somos desenvolvedores, representantes ou parceiros oficiais dos aplicativos ou fabricantes mencionados. As marcas citadas pertencem aos seus respectivos proprietários e são utilizadas apenas para identificar compatibilidade. O serviço não inclui fornecimento de listas de reprodução, canais, filmes, séries ou qualquer conteúdo audiovisual. O cliente é responsável pelos conteúdos e serviços que utilizar.";

const config: AdLandingConfig = {
  path: "/iptv-smarters-samsung",
  title: "IPTV Smarters Samsung | Instalar, Configurar e Ativar",
  description:
    "Suporte remoto para instalar, configurar e ativar o IPTV Smarters Pro em Smart TV Samsung. Serviço técnico, atendimento humano no WhatsApp. Não fornecemos listas.",
  eyebrow: "IPTV Smarters Pro • Samsung",
  heroPre: "Instalar e configurar o",
  heroAccent: "IPTV Smarters em Samsung",
  heroPost: "com suporte especializado",
  heroSubtitle: (
    <>
      Ajudamos você a colocar o <strong className="text-foreground">IPTV Smarters Pro</strong> em funcionamento na sua
      Smart TV Samsung. Prestamos apenas o serviço técnico — nenhuma lista ou conteúdo é fornecido.
    </>
  ),
  heroTrustLine: "Atendimento para Samsung com sistema Tizen",
  heroQuickBenefits: [
    "Instalação do IPTV Smarters Pro",
    "Configuração inicial completa",
    "Auxílio na ativação e MAC Address",
    "Solução de problemas comuns",
  ],
  heroImageAlt: "IPTV Smarters Pro instalado e configurado em Smart TV Samsung",
  heroBadgeTitle: "Smarters Pro",
  heroBadgeDesc: "Samsung • Suporte técnico",
  ctaLabel: "Falar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Serviço técnico • Atendimento humano • Sem venda de listas",
  benefitsEyebrow: "Serviço técnico especializado",
  benefitsTitlePre: "Suporte para o",
  benefitsTitleAccent: "Smarters Pro em Samsung",
  benefits: [
    { icon: Download, title: "Instalação do aplicativo", desc: "Instalamos o IPTV Smarters Pro na Samsung ou indicamos o método correto quando ele não estiver disponível na loja Tizen." },
    { icon: Settings, title: "Configuração inicial", desc: "Ajustamos idioma, parâmetros e a inserção das informações de login fornecidas pelo próprio cliente." },
    { icon: KeyRound, title: "Ativação e MAC", desc: "Quando exigido, orientamos a ativação do aplicativo e a localização do MAC Address da sua Samsung." },
    { icon: AlertCircle, title: "Solução de problemas", desc: "Resolvemos travamentos, buffer, EPG ausente, login recusado e outros erros comuns do Smarters Pro." },
    { icon: Headphones, title: "Atendimento humano", desc: "Um especialista conduz o atendimento pelo WhatsApp em tempo real, sem robôs." },
    { icon: ShieldCheck, title: "Escopo transparente", desc: "Serviço 100% técnico. Não fornecemos listas IPTV, canais, filmes, séries ou qualquer conteúdo." },
  ],
  section2: {
    title: "Etapas para o Smarters Pro rodar na Samsung",
    text: "O IPTV Smarters Pro exige alguns passos específicos em Samsung. Nosso atendimento cuida de cada etapa com você.",
    cards: [
      { icon: Zap, title: "Instalação", desc: "Instalação do IPTV Smarters Pro compatível com o Tizen da sua Samsung." },
      { icon: Settings, title: "Configuração", desc: "Configuração inicial e ajustes de idioma, formato e servidor." },
      { icon: KeyRound, title: "Ativação", desc: "Ativação quando o aplicativo exigir, com base no MAC ou dados de acesso." },
      { icon: LifeBuoy, title: "Solução de erros", desc: "Correção de erros comuns como login inválido, buffer, EPG e travamentos." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "IPTV Smarters em Samsung:",
      h2Accent: "o que está incluso",
      paragraphs: [
        "Se você procura IPTV Smarters em Samsung, prestamos o serviço técnico para deixar o aplicativo pronto para uso: instalação, configuração e ativação quando necessária.",
        "Não vendemos ou fornecemos listas IPTV, listas M3U, canais, filmes, séries, futebol ou qualquer transmissão. A lista utilizada dentro do IPTV Smarters Pro é sempre do próprio cliente.",
        TRANSPARENCIA,
      ],
      ctaLabel: "Iniciar atendimento",
      ctaMessage: "Quero iniciar o atendimento para o IPTV Smarters Pro na minha Samsung.",
      source: "iptv-smarters-samsung-servico",
    },
    {
      h2Pre: "Como localizar o",
      h2Accent: "MAC Address da Samsung",
      paragraphs: [
        "Muitos servidores exigem o MAC Address da TV para liberar o acesso do IPTV Smarters Pro. Nas TVs Samsung, o MAC pode aparecer em Configurações, Geral, Rede e Status da Rede.",
        "Como o caminho varia entre modelos e anos, guiamos você em tempo real pelo WhatsApp até identificar o código correto.",
      ],
      ctaLabel: "Achar o MAC",
      ctaMessage: "Preciso localizar o MAC Address da minha Samsung para o Smarters Pro.",
      source: "iptv-smarters-samsung-mac",
    },
    {
      h2Pre: "Solução de",
      h2Accent: "problemas frequentes",
      paragraphs: [
        "Erros comuns do IPTV Smarters Pro em Samsung envolvem login recusado, listas que não carregam, EPG ausente, imagem travando e aplicativo fechando sozinho.",
        "Analisamos a causa e aplicamos o ajuste correto, seja no aplicativo, na rede ou nas configurações da TV, sempre de forma remota pelo WhatsApp.",
      ],
      ctaLabel: "Resolver meu problema",
      ctaMessage: "Meu IPTV Smarters Pro na Samsung está com erro. Podem ajudar?",
      source: "iptv-smarters-samsung-erros",
    },
    {
      h2Pre: "Independência e",
      h2Accent: "responsabilidade do cliente",
      paragraphs: [
        "Não somos os desenvolvedores do IPTV Smarters Pro nem representantes da Samsung. Usamos as marcas apenas para descrever compatibilidade técnica.",
        "As listas e o conteúdo utilizados dentro do aplicativo são de responsabilidade exclusiva do cliente.",
      ],
      ctaLabel: "Tirar dúvida",
      ctaMessage: "Quero tirar uma dúvida antes de contratar o suporte.",
      source: "iptv-smarters-samsung-aviso",
    },
  ],
  faqTitleAccent: "sobre Smarters em Samsung",
  faqs: [
    { q: "Vocês instalam o IPTV Smarters Pro na Samsung?", a: "Sim. Instalamos o IPTV Smarters Pro quando ele estiver disponível para o modelo da sua Samsung ou orientamos alternativas compatíveis." },
    { q: "Precisa do MAC Address?", a: "Alguns servidores exigem o MAC para liberar o acesso. Se for o caso, orientamos você a localizar o código na sua Samsung." },
    { q: "Vocês fornecem lista?", a: "Não. Não fornecemos lista, canais, filmes ou séries. Nosso serviço cobre apenas a parte técnica: instalação, configuração e ativação." },
    { q: "Meu Smarters está com buffer, dá para ajustar?", a: "Sim. Analisamos o problema e realizamos ajustes no aplicativo e na rede que costumam reduzir travamentos." },
    { q: "É seguro fazer isso remotamente?", a: "Sim. O atendimento é feito pelo WhatsApp e você segue todas as instruções na sua TV, sem qualquer acesso remoto ao aparelho." },
    { q: "Vocês têm ligação com a marca Smarters ou Samsung?", a: "Não. Somos um serviço independente e as marcas são citadas apenas para identificar compatibilidade técnica." },
    { q: "Quanto custa?", a: "O valor cobre apenas o serviço técnico e é informado antes do início do atendimento pelo WhatsApp." },
    { q: "Consigo assistir esporte?", a: "Não fornecemos conteúdo de esporte, filmes, séries ou canais. Isso depende exclusivamente da lista utilizada pelo cliente." },
  ],
  source: "iptv-smarters-samsung",
};

const IptvSmartersSamsung = () => <AdLandingPage config={config} />;

export default IptvSmartersSamsung;
