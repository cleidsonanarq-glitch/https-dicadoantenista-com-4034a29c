import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Headphones, Settings, Clock, ShieldCheck, MonitorSmartphone, Wifi, Cpu, Tv, RefreshCw } from "lucide-react";
import { SAMSUNG_DISCLAIMER, samsungLinks } from "./samsungAppsLinks";

const WA = "Olá! Preciso de ajuda com os aplicativos da minha TV Samsung.";

const config: AdLandingConfig = {
  path: "/samsung-apps-tv",
  breadcrumbName: "Samsung Apps TV",
  title: "Samsung Apps TV | Ajuda com Aplicativos e Suporte Remoto",
  description:
    "Ajuda técnica com Samsung Apps na TV: aplicativo que não aparece, não abre ou não instala. Suporte remoto pelo WhatsApp para instalar, configurar e ativar.",
  eyebrow: "Samsung Apps • Atendimento remoto",
  heroPre: "Problemas com",
  heroAccent: "Samsung Apps na TV",
  heroPost: "resolvidos com você",
  heroSubtitle: (
    <>
      App que não aparece na loja, não abre ou some depois de atualizar?{" "}
      <strong className="text-foreground">Diagnosticamos e resolvemos</strong> pelo WhatsApp.
    </>
  ),
  heroTrustLine: "Suporte para Samsung Smart TV, Samsung Tizen, Android TV, Google TV e TV Box compatíveis",
  heroQuickBenefits: [
    "Aplicativo que não aparece na loja",
    "Instalação travando ou incompleta",
    "Ativação quando o app exigir",
    "Configuração final revisada",
  ],
  heroImageAlt: "Tela de aplicativos de uma Smart TV Samsung durante atendimento técnico",
  heroBadgeTitle: "Diagnóstico rápido",
  heroBadgeDesc: "Samsung Apps • Loja e instalação",
  ctaLabel: "Chamar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Suporte independente • Atendimento humano",
  benefitsEyebrow: "O que você ganha",
  benefitsTitlePre: "Atendimento pensado para",
  benefitsTitleAccent: "resolver de primeira",
  benefits: [
    { icon: Headphones, title: "Suporte técnico especializado", desc: "Sabemos onde a loja da Samsung esconde cada opção em cada versão do sistema." },
    { icon: Settings, title: "Configuração assistida", desc: "Depois de instalar, revisamos os ajustes para o app abrir sem erro." },
    { icon: Wifi, title: "Atendimento online", desc: "Nada de deslocamento: resolvemos com você a distância." },
    { icon: Tv, title: "Especialistas em Smart TVs", desc: "Experiência com linhas Samsung antigas e recentes." },
    { icon: RefreshCw, title: "Atendimento remoto", desc: "Reinstalação, limpeza de cache e atualização orientadas em tempo real." },
    { icon: Clock, title: "Processo rápido", desc: "Diagnóstico em poucas mensagens, sem enrolação." },
  ],
  steps: {
    title: "Como funciona o suporte",
    items: [
      { title: "Instale o aplicativo compatível", desc: "Confirmamos qual app é compatível com o seu modelo antes de instalar." },
      { title: "Entre em contato pelo WhatsApp", desc: "Conte o que aparece na tela: mensagem de erro, tela preta ou app ausente." },
      { title: "Receba orientação", desc: "Enviamos o caminho exato dos menus da sua TV, passo por passo." },
      { title: "Caso necessário, realizamos a ativação", desc: "Se o aplicativo exigir ativação, executamos esse passo com você." },
      { title: "Finalizamos toda a configuração", desc: "Testamos a abertura do app e ajustamos o que faltar." },
    ],
  },
  compatibility: {
    title: "Compatibilidade",
    text: "Trabalhamos com os aparelhos mais comuns nas casas brasileiras, respeitando as diferenças de cada sistema.",
    devices: ["Samsung Smart TV", "Samsung Tizen", "Android TV", "Google TV", "TV Box compatíveis"],
  },
  section2: {
    title: "Os quatro pilares do nosso serviço",
    text: "Sem promessas de conteúdo: apenas trabalho técnico bem feito.",
    cards: [
      { icon: MonitorSmartphone, title: "Instalação", desc: "Do download até o ícone aparecendo na tela inicial." },
      { icon: Cpu, title: "Ativação", desc: "Executada quando o aplicativo pede esse passo." },
      { icon: Settings, title: "Configuração", desc: "Ajustes de idioma, aparência e preferências." },
      { icon: ShieldCheck, title: "Suporte", desc: "Canal aberto para dúvidas depois do atendimento." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Por que um app não aparece em",
      h2Accent: "Samsung Apps",
      paragraphs: [
        "A loja Samsung Apps mostra aplicativos diferentes conforme o país cadastrado na TV, a versão do sistema Tizen e o ano do aparelho. É por isso que um aplicativo visível em uma TV pode simplesmente não existir em outra.",
        "No atendimento verificamos essas três variáveis e indicamos um caminho compatível com o seu aparelho, sem procedimentos arriscados.",
      ],
      ctaLabel: "Meu app não aparece",
      ctaMessage: "O aplicativo não aparece na loja da minha TV Samsung.",
      source: "samsung-apps-tv-loja",
    },
    {
      h2Pre: "Quando reinstalar",
      h2Accent: "resolve o problema",
      paragraphs: [
        "Aplicativos que abrem e fecham sozinhos, travam na tela de carregamento ou perdem as configurações costumam voltar ao normal com uma reinstalação feita na ordem correta.",
        "Orientamos você a remover, reiniciar o aparelho e instalar novamente sem perder os ajustes que importam, e refazemos a configuração ao final.",
      ],
      ctaLabel: "Quero reinstalar com ajuda",
      ctaMessage: "Preciso reinstalar um aplicativo na minha TV Samsung.",
      source: "samsung-apps-tv-reinstalar",
    },
    {
      h2Pre: "O que nosso serviço",
      h2Accent: "não inclui",
      paragraphs: [
        "Não fornecemos conteúdo, canais, listas ou programação. Nosso trabalho é técnico e se limita a instalar, configurar, ativar e dar suporte a aplicativos compatíveis.",
        "Somos um suporte independente, sem qualquer vínculo oficial com a Samsung ou com desenvolvedores de aplicativos.",
      ],
      ctaLabel: "Entender o serviço",
      ctaMessage: "Quero entender o que está incluído no suporte para Samsung Apps.",
      source: "samsung-apps-tv-escopo",
    },
  ],
  faqTitleAccent: "sobre Samsung Apps na TV",
  faqs: [
    { q: "O que é Samsung Apps?", a: "É a loja de aplicativos das TVs Samsung, de onde você baixa e atualiza os aplicativos compatíveis com o sistema Tizen." },
    { q: "Por que não encontro um aplicativo na loja?", a: "A disponibilidade varia conforme o país configurado na TV, a versão do sistema e o ano do modelo. Verificamos isso no atendimento." },
    { q: "Meu app abre e fecha sozinho. Tem solução?", a: "Na maioria dos casos sim, com reinstalação e reconfiguração feitas na ordem correta. Orientamos passo a passo." },
    { q: "Preciso atualizar o sistema da TV?", a: "Às vezes é o que resolve. Se for necessário, explicamos como fazer a atualização com segurança." },
    { q: "Vocês acessam minha TV remotamente?", a: "Não. Você segue as instruções pelo controle e nós acompanhamos por mensagem." },
    { q: "Quanto tempo dura o atendimento?", a: "Costuma ser rápido: alguns minutos de conversa resolvem a maioria dos casos." },
    { q: "Vocês instalam aplicativos fora da loja?", a: "Trabalhamos apenas com aplicativos compatíveis e caminhos permitidos pelo próprio aparelho." },
    { q: "Precisa de ativação?", a: "Alguns aplicativos exigem. Quando for o caso, realizamos a ativação com o identificador exibido na tela." },
    { q: "Vocês fornecem conteúdo ou listas?", a: "Não. Prestamos apenas suporte técnico de instalação, configuração e ativação." },
    { q: "Como falo com vocês?", a: "Pelo WhatsApp, tocando em qualquer botão desta página. O atendimento é humano." },
  ],
  internalLinks: samsungLinks("/samsung-apps-tv"),
  disclaimer: SAMSUNG_DISCLAIMER,
  guarantee: {
    title: "Ficamos com você até o app abrir",
    text: "Acompanhamos o atendimento até o aplicativo abrir normalmente na sua TV Samsung, sem custo surpresa e sem fila de espera.",
  },
  source: "samsung-apps-tv",
};

const SamsungAppsTv = () => <AdLandingPage config={config} />;

export default SamsungAppsTv;
