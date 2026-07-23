import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, ShieldCheck, Settings, Headphones, MessageCircle, Zap, Info, Search, KeyRound, LifeBuoy } from "lucide-react";

const WA = "Olá! Preciso de suporte para configurar o aplicativo na minha Smart TV Samsung.";

const TRANSPARENCIA =
  "Prestamos um serviço independente de instalação, configuração e ativação de aplicativos compatíveis com Smart TVs. Não somos desenvolvedores, representantes ou parceiros oficiais dos aplicativos ou fabricantes mencionados. As marcas citadas pertencem aos seus respectivos proprietários e são utilizadas apenas para identificar compatibilidade. O serviço não inclui fornecimento de listas de reprodução, canais, filmes, séries ou qualquer conteúdo audiovisual. O cliente é responsável pelos conteúdos e serviços que utilizar.";

const config: AdLandingConfig = {
  path: "/iptv-smart-tv-samsung",
  title: "IPTV Smart TV Samsung | Instalação, Configuração e Suporte",
  description:
    "Suporte remoto para instalar, configurar e ativar aplicativos de IPTV em Smart TV Samsung. Atendimento humano pelo WhatsApp, sem fornecimento de listas ou conteúdo.",
  eyebrow: "Smart TV Samsung • Suporte WhatsApp",
  heroPre: "Suporte para",
  heroAccent: "IPTV em Smart TV Samsung",
  heroPost: "com atendimento humano",
  heroSubtitle: (
    <>
      Ajudamos você a <strong className="text-foreground">instalar</strong>,{" "}
      <strong className="text-foreground">configurar</strong> e ativar aplicativos compatíveis com a sua Samsung.
      Não fornecemos listas nem conteúdo — apenas o serviço técnico.
    </>
  ),
  heroTrustLine: "Compatível com Smart TVs Samsung com sistema Tizen",
  heroQuickBenefits: [
    "Instalação assistida do aplicativo",
    "Configuração inicial passo a passo",
    "Ajuda para localizar o MAC Address",
    "Suporte remoto via WhatsApp",
  ],
  heroImageAlt: "Suporte para IPTV em Smart TV Samsung com aplicativo instalado e configurado",
  heroBadgeTitle: "Samsung Tizen",
  heroBadgeDesc: "Instalação • Configuração • Ativação",
  ctaLabel: "Falar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Atendimento humano • Serviço técnico • Sem venda de conteúdo",
  benefitsEyebrow: "Serviço técnico especializado",
  benefitsTitlePre: "Suporte completo para",
  benefitsTitleAccent: "sua Samsung",
  benefits: [
    { icon: Tv, title: "Compatibilidade Samsung", desc: "Trabalhamos com modelos Samsung que rodam sistema Tizen e suportam aplicativos de reprodução via lista própria do cliente." },
    { icon: Settings, title: "Instalação e configuração", desc: "Orientamos a instalação do aplicativo escolhido e a configuração inicial na sua Smart TV Samsung." },
    { icon: KeyRound, title: "Ativação quando aplicável", desc: "Alguns aplicativos exigem ativação por licença ou MAC Address. Explicamos e conduzimos o processo com você." },
    { icon: Search, title: "Localização do MAC Address", desc: "Ensinamos passo a passo como encontrar o MAC Address da sua Samsung, informação frequentemente necessária." },
    { icon: Headphones, title: "Suporte remoto humano", desc: "Um especialista acompanha você em tempo real pelo WhatsApp até o aplicativo estar funcionando." },
    { icon: ShieldCheck, title: "Serviço transparente", desc: "Prestamos apenas o serviço técnico. Não vendemos listas, canais, filmes, séries ou qualquer conteúdo." },
  ],
  section2: {
    title: "Como funciona o suporte em Smart TV Samsung",
    text: "Nosso trabalho é técnico e cobre quatro etapas principais para deixar o aplicativo compatível pronto para uso no seu aparelho Samsung.",
    cards: [
      { icon: Zap, title: "1. Instalação", desc: "Buscamos o aplicativo compatível na loja da Samsung ou orientamos alternativas quando ele não estiver disponível." },
      { icon: Settings, title: "2. Configuração", desc: "Ajustamos idioma, resolução e as opções iniciais necessárias para o aplicativo abrir corretamente." },
      { icon: KeyRound, title: "3. Ativação", desc: "Quando o aplicativo pede ativação, orientamos o preenchimento e o envio das informações corretas." },
      { icon: LifeBuoy, title: "4. Suporte", desc: "Após tudo funcionar, você segue com nosso contato caso precise de novo atendimento." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "IPTV em Smart TV Samsung:",
      h2Accent: "o que fazemos e o que não fazemos",
      paragraphs: [
        "Se você procura suporte para IPTV em Smart TV Samsung, o nosso serviço é 100% técnico: instalamos aplicativos compatíveis com o sistema Tizen, configuramos as opções iniciais e ajudamos na ativação quando o aplicativo exige.",
        "Não vendemos, indicamos nem fornecemos listas IPTV, listas M3U, canais, filmes, séries, futebol, transmissões ou qualquer tipo de conteúdo audiovisual. A lista utilizada dentro do aplicativo é de responsabilidade do próprio cliente.",
        TRANSPARENCIA,
      ],
      ctaLabel: "Quero suporte para minha Samsung",
      ctaMessage: "Quero suporte técnico para configurar o aplicativo na minha Samsung.",
      source: "iptv-smart-tv-samsung-servico",
    },
    {
      h2Pre: "Como localizar o",
      h2Accent: "MAC Address na Samsung",
      paragraphs: [
        "O MAC Address é um código único do seu aparelho e costuma ser exigido por aplicativos que precisam de ativação. Nas TVs Samsung, o caminho geralmente passa por Configurações, Geral, Rede e Status da Rede.",
        "Como o menu varia por modelo e ano, orientamos você pelo WhatsApp em tempo real, indicando exatamente onde tocar até chegar na tela que mostra o MAC.",
      ],
      ctaLabel: "Preciso encontrar o MAC",
      ctaMessage: "Preciso de ajuda para localizar o MAC Address da minha Samsung.",
      source: "iptv-smart-tv-samsung-mac",
    },
    {
      h2Pre: "Como pedir",
      h2Accent: "suporte remoto",
      paragraphs: [
        "O suporte é feito por WhatsApp, de forma remota. Você não precisa levar a TV a lugar nenhum nem instalar programas complicados.",
        "Ao iniciar a conversa, informe o modelo da sua Samsung e qual aplicativo pretende utilizar. Um especialista responde em minutos e acompanha cada etapa com você.",
      ],
      ctaLabel: "Iniciar atendimento",
      ctaMessage: "Quero iniciar um atendimento de suporte para minha Samsung.",
      source: "iptv-smart-tv-samsung-suporte",
    },
    {
      h2Pre: "Aviso de",
      h2Accent: "independência e responsabilidade",
      paragraphs: [
        "Este site não é oficial e não possui vínculo com a Samsung ou com qualquer desenvolvedor de aplicativos. Utilizamos os nomes das marcas apenas para descrever compatibilidade técnica.",
        "O cliente é o único responsável pelas listas e conteúdos que utilizar dentro dos aplicativos. Nosso trabalho começa e termina no serviço técnico contratado.",
      ],
      ctaLabel: "Tirar dúvidas",
      ctaMessage: "Quero tirar uma dúvida sobre o serviço de suporte.",
      source: "iptv-smart-tv-samsung-aviso",
    },
  ],
  faqTitleAccent: "sobre Samsung",
  faqs: [
    { q: "O que vocês fazem em Smart TV Samsung?", a: "Instalamos, configuramos e ajudamos na ativação de aplicativos compatíveis com Smart TV Samsung. Também orientamos a localização do MAC Address e prestamos suporte remoto pelo WhatsApp." },
    { q: "Vocês fornecem lista de IPTV?", a: "Não. Não fornecemos, vendemos ou indicamos listas IPTV, listas M3U, canais, filmes, séries ou qualquer conteúdo. Nosso serviço é exclusivamente técnico." },
    { q: "Funciona em qualquer Samsung?", a: "A maioria das Smart TVs Samsung com sistema Tizen é compatível. Antes de iniciar, confirmamos o modelo do seu aparelho pelo WhatsApp." },
    { q: "Preciso do MAC Address da minha TV?", a: "Alguns aplicativos exigem o MAC para ativação. Se for o caso, orientamos passo a passo como localizar essa informação na sua Samsung." },
    { q: "Como funciona o atendimento?", a: "Todo o atendimento é remoto, pelo WhatsApp, com um especialista que acompanha cada etapa até o aplicativo estar funcionando na sua TV." },
    { q: "Vocês são a Samsung ou representantes oficiais?", a: "Não. Somos um serviço independente. Utilizamos o nome Samsung apenas para descrever compatibilidade técnica dos aplicativos." },
    { q: "Consigo assistir canais pagando pelo suporte?", a: "Não. Nosso pagamento cobre apenas o serviço técnico de instalação, configuração e ativação. Qualquer conteúdo é responsabilidade do cliente." },
    { q: "Quanto tempo leva o atendimento?", a: "Na maioria dos casos, a instalação e configuração são concluídas em poucos minutos após iniciarmos o atendimento." },
  ],
  source: "iptv-smart-tv-samsung",
};

const IptvSmartTvSamsung = () => <AdLandingPage config={config} />;

export default IptvSmartTvSamsung;
