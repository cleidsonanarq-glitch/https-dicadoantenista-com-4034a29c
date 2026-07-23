import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { KeyRound, ShieldCheck, Settings, Headphones, Zap, Search, LifeBuoy, AlertCircle, ListChecks, MessageCircle } from "lucide-react";

const WA = "Olá! Preciso ativar o IPTV Smarters Pro.";

const TRANSPARENCIA =
  "Prestamos um serviço independente de instalação, configuração e ativação de aplicativos compatíveis com Smart TVs. Não somos desenvolvedores, representantes ou parceiros oficiais dos aplicativos ou fabricantes mencionados. As marcas citadas pertencem aos seus respectivos proprietários e são utilizadas apenas para identificar compatibilidade. O serviço não inclui fornecimento de listas de reprodução, canais, filmes, séries ou qualquer conteúdo audiovisual. O cliente é responsável pelos conteúdos e serviços que utilizar.";

const config: AdLandingConfig = {
  path: "/ativar-iptv-smarters-pro",
  title: "Ativar IPTV Smarters Pro | Suporte para Ativação Remota",
  description:
    "Suporte técnico para ativar o IPTV Smarters Pro na sua Smart TV. Orientação para localizar o MAC, informar dados e concluir a ativação. Não fornecemos listas.",
  eyebrow: "Ativação do Smarters Pro • WhatsApp",
  heroPre: "Suporte para",
  heroAccent: "ativar o IPTV Smarters Pro",
  heroPost: "com atendimento humano",
  heroSubtitle: (
    <>
      Conduzimos toda a <strong className="text-foreground">ativação</strong> do IPTV Smarters Pro,
      da localização do MAC Address até a confirmação final. O serviço é apenas técnico —
      não fornecemos listas nem conteúdo.
    </>
  ),
  heroTrustLine: "Ativação em Smart TV Samsung, LG, Roku TV e Android TV",
  heroQuickBenefits: [
    "Ativação passo a passo pelo WhatsApp",
    "Ajuda para localizar o MAC Address",
    "Verificação de dados antes de ativar",
    "Suporte até o aplicativo funcionar",
  ],
  heroImageAlt: "Ativação do IPTV Smarters Pro em Smart TV com atendimento remoto",
  heroBadgeTitle: "Ativação assistida",
  heroBadgeDesc: "Smarters Pro • Suporte humano",
  ctaLabel: "Falar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Ativação remota • Serviço técnico • Sem venda de listas",
  benefitsEyebrow: "Ativação sem complicação",
  benefitsTitlePre: "Vantagens do",
  benefitsTitleAccent: "suporte de ativação",
  benefits: [
    { icon: KeyRound, title: "Ativação assistida", desc: "Conduzimos cada tela da ativação do IPTV Smarters Pro para evitar dados incorretos ou passos ignorados." },
    { icon: Search, title: "Localização do MAC", desc: "Ensinamos como encontrar o MAC Address da sua TV, dado que costuma ser exigido por servidores que trabalham com o Smarters Pro." },
    { icon: ListChecks, title: "Checagem de dados", desc: "Verificamos com você as informações antes de enviar, reduzindo tentativas erradas e bloqueios temporários." },
    { icon: AlertCircle, title: "Correção de erros", desc: "Quando aparecem mensagens de erro na ativação, identificamos a causa e aplicamos a solução correta." },
    { icon: Headphones, title: "Atendimento humano", desc: "Você fala com um especialista real, sem robôs, e sem depender de tutoriais genéricos." },
    { icon: ShieldCheck, title: "Escopo claro", desc: "Serviço 100% técnico. Não fornecemos listas IPTV, canais, filmes, séries ou qualquer conteúdo audiovisual." },
  ],
  section2: {
    title: "Quando a ativação é necessária?",
    text: "Nem toda instalação exige ativação. Explicamos os cenários mais comuns para você entender o que se aplica ao seu caso.",
    cards: [
      { icon: Zap, title: "Servidor exige MAC", desc: "Quando o servidor libera o acesso apenas para o MAC Address da sua TV, a ativação é obrigatória." },
      { icon: KeyRound, title: "Aplicativo com licença", desc: "Algumas versões do aplicativo pedem código de ativação. Nesses casos, também conduzimos o processo." },
      { icon: Settings, title: "Reinstalação", desc: "Após reinstalar o aplicativo, pode ser preciso reativá-lo. Ajudamos a evitar retrabalho." },
      { icon: LifeBuoy, title: "Erro de ativação", desc: "Se o Smarters Pro exibiu um erro de ativação, identificamos a causa antes de tentar de novo." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Como ativar o",
      h2Accent: "IPTV Smarters Pro",
      paragraphs: [
        "Para ativar o IPTV Smarters Pro, é comum precisar do MAC Address da sua Smart TV, dos dados de acesso fornecidos pelo próprio cliente e da confirmação de compatibilidade do aparelho.",
        "Nosso suporte cuida de cada etapa em tempo real pelo WhatsApp: localizamos o MAC junto com você, orientamos o preenchimento dos campos e verificamos o funcionamento após a ativação.",
        TRANSPARENCIA,
      ],
      ctaLabel: "Quero ativar agora",
      ctaMessage: "Quero ativar meu IPTV Smarters Pro agora.",
      source: "ativar-smarters-pro-servico",
    },
    {
      h2Pre: "Informações necessárias",
      h2Accent: "para a ativação",
      paragraphs: [
        "Antes de iniciar, é útil ter em mãos o modelo da sua Smart TV, o MAC Address (quando exigido) e os dados de acesso ao servidor que você já contratou de terceiros.",
        "Não solicitamos senhas de e-mail, dados bancários ou informações pessoais além do necessário para conduzir a ativação técnica.",
      ],
      ctaLabel: "Enviar minhas informações",
      ctaMessage: "Vou enviar meu modelo de TV e o MAC para iniciar a ativação.",
      source: "ativar-smarters-pro-dados",
    },
    {
      h2Pre: "Suporte remoto",
      h2Accent: "após a ativação",
      paragraphs: [
        "Depois de ativar o IPTV Smarters Pro, podem surgir dúvidas sobre organização das listas do próprio cliente, ajuste de EPG e alterações de qualidade.",
        "Ficamos disponíveis pelo WhatsApp para orientar essas dúvidas técnicas, sempre sem envolver o fornecimento ou a venda de conteúdo.",
      ],
      ctaLabel: "Pedir suporte",
      ctaMessage: "Já ativei o Smarters Pro e preciso de suporte técnico.",
      source: "ativar-smarters-pro-suporte",
    },
    {
      h2Pre: "Aviso importante",
      h2Accent: "sobre o serviço",
      paragraphs: [
        "Não somos desenvolvedores do IPTV Smarters Pro nem representantes de fabricantes de TV. Utilizamos essas marcas apenas para descrever compatibilidade técnica.",
        "Todo o conteúdo consumido dentro do aplicativo é escolhido e mantido pelo cliente, único responsável pelas listas e serviços utilizados.",
      ],
      ctaLabel: "Tirar dúvidas antes",
      ctaMessage: "Quero tirar dúvidas antes de contratar a ativação do Smarters Pro.",
      source: "ativar-smarters-pro-aviso",
    },
  ],
  faqTitleAccent: "sobre ativação",
  faqs: [
    { q: "Quando a ativação do Smarters Pro é obrigatória?", a: "Quando o servidor libera acesso somente ao MAC Address da TV, quando a versão do aplicativo pede código ou quando ele é reinstalado após alguma pane." },
    { q: "Quais informações preciso ter?", a: "Modelo da TV, MAC Address (quando exigido) e os dados de acesso ao servidor que você já contratou. Orientamos como reunir tudo antes de iniciar." },
    { q: "Vocês fornecem lista IPTV?", a: "Não. Nunca fornecemos, indicamos ou vendemos listas. Nosso serviço é exclusivamente técnico." },
    { q: "Ativam em qualquer Smart TV?", a: "Atendemos principalmente Samsung, LG, Roku TV e Android TV, adaptando as instruções ao seu modelo." },
    { q: "É seguro ativar de forma remota?", a: "Sim. Você mantém a TV em casa e executa as ações que orientamos pelo WhatsApp. Não usamos acesso remoto ao aparelho." },
    { q: "Não achei o MAC, e agora?", a: "Ficamos com você em tempo real até localizar o MAC no menu da sua TV. Cada modelo tem um caminho um pouco diferente." },
    { q: "A ativação demora?", a: "Na maioria dos casos, a ativação é feita em poucos minutos após termos os dados corretos em mãos." },
    { q: "Se der erro, vocês resolvem?", a: "Sim. Identificamos a causa do erro de ativação e realizamos as correções necessárias antes de tentar de novo." },
  ],
  source: "ativar-iptv-smarters-pro",
};

const AtivarIptvSmartersPro = () => <AdLandingPage config={config} />;

export default AtivarIptvSmartersPro;
