import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Clock, KeyRound, ShieldCheck, Headphones, CalendarClock, Receipt, RefreshCw, Search, Settings, MonitorSmartphone } from "lucide-react";
import { SMARTERS_DISCLAIMER, smartersLinks } from "./smartersPlayerLinks";

const WA = "Olá! Quero informações sobre a licença do Smarters Player.";

const config: AdLandingConfig = {
  path: "/licenca-smarters-player",
  breadcrumbName: "Licença Smarters Player",
  title: "Licença Smarters Player | R$ 17,99 Válida por 1 Ano",
  description:
    "Licença do Smarters Player por R$ 17,99, válida por 1 ano e vinculada ao MAC Address. Ativação e suporte técnico remoto pelo WhatsApp, sem taxas extras.",
  eyebrow: "Licença anual • Valor transparente",
  heroPre: "Licença do",
  heroAccent: "Smarters Player",
  heroPost: "com valor claro e prazo definido",
  heroSubtitle: (
    <>
      A licença é vinculada ao <strong className="text-foreground">MAC Address</strong> do aparelho e tem
      validade de 1 ano. A ativação é feita por nós, com suporte remoto incluído.
    </>
  ),
  heroTrustLine: "Sem mensalidade surpresa: você sabe o valor e a data de renovação desde o início",
  heroQuickBenefits: [
    "Valor único de R$ 17,99",
    "Validade de 12 meses",
    "Licença vinculada ao seu aparelho",
    "Suporte técnico durante a ativação",
  ],
  heroPriceCard: {
    label: "Ativação da licença",
    price: "R$ 17,99",
    lines: ["Licença válida por 1 ano.", "Suporte técnico remoto durante todo o processo."],
  },
  heroImageAlt: "Licença anual do Smarters Player ativada em Smart TV",
  heroBadgeTitle: "Licença de 1 ano",
  heroBadgeDesc: "Vinculada ao MAC Address",
  ctaLabel: "Quero minha licença",
  ctaMessage: WA,
  ctaMicrocopy: "Valor único • Sem taxas escondidas",
  benefitsEyebrow: "O que está incluído",
  benefitsTitlePre: "Vantagens da",
  benefitsTitleAccent: "licença com suporte",
  benefits: [
    { icon: Receipt, title: "Preço transparente", desc: "R$ 17,99 pela ativação da licença, informado antes de qualquer procedimento." },
    { icon: Clock, title: "Válida por 1 ano", desc: "Doze meses de licença ativa, com a data de renovação combinada com você." },
    { icon: KeyRound, title: "Vinculada ao seu aparelho", desc: "A licença é registrada no MAC Address do dispositivo que você utiliza." },
    { icon: Headphones, title: "Suporte remoto incluído", desc: "O acompanhamento pelo WhatsApp faz parte do serviço, sem cobrança adicional." },
    { icon: CalendarClock, title: "Aviso de renovação", desc: "Perto do vencimento, orientamos como proceder para manter a licença ativa." },
    { icon: ShieldCheck, title: "Escopo definido", desc: "Serviço técnico de instalação, configuração e ativação do aplicativo compatível." },
  ],
  steps: {
    title: "Como obter sua licença",
    items: [
      { title: "Localize o MAC Address do aplicativo", desc: "É o identificador que receberá a licença. Ele fica visível no aplicativo ou no menu de rede." },
      { title: "Entre em contato pelo WhatsApp", desc: "Informe que deseja a licença anual e qual aparelho será utilizado." },
      { title: "Informe o MAC Address", desc: "Validamos o código para registrar a licença no aparelho correto." },
      { title: "Realizamos a ativação da licença", desc: "A licença passa a valer por 1 ano e você recebe a confirmação da ativação." },
      { title: "Você recebe suporte durante todo o processo", desc: "Continuamos disponíveis para dúvidas sobre uso, ajustes e renovação." },
    ],
  },
  compatibility: {
    title: "Aparelhos compatíveis com a licença",
    text: "A licença pode ser ativada nos aparelhos compatíveis abaixo, sempre a partir do MAC Address de cada dispositivo.",
    devices: ["Samsung Smart TV", "LG Smart TV", "Android TV", "Google TV", "TV Box compatíveis"],
  },
  section2: {
    title: "Entenda o ciclo da licença",
    text: "Da ativação à renovação, o processo é simples e sempre acompanhado pelo nosso suporte.",
    cards: [
      { icon: Search, title: "Identificação", desc: "Localizamos e conferimos o MAC Address do aparelho." },
      { icon: KeyRound, title: "Ativação", desc: "A licença é registrada e passa a valer imediatamente." },
      { icon: Settings, title: "Uso", desc: "Durante 12 meses você conta com o suporte para ajustes." },
      { icon: RefreshCw, title: "Renovação", desc: "Ao final do período, orientamos a renovação da licença." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "Como funciona a",
      h2Accent: "licença do Smarters Player",
      paragraphs: [
        "A licença do Smarters Player é o registro que libera o uso do aplicativo em um aparelho específico. Ela é vinculada ao MAC Address, ou seja, ao identificador de rede do dispositivo onde o aplicativo está instalado.",
        "No nosso serviço, a ativação custa R$ 17,99 e tem validade de 1 ano. O valor inclui o suporte técnico remoto durante todo o processo, feito por WhatsApp.",
        "Não há mensalidade nem cobrança adicional durante a vigência: o próximo pagamento só ocorre se você optar por renovar ao fim dos 12 meses.",
      ],
      ctaLabel: "Falar sobre a licença",
      ctaMessage: "Quero contratar a licença do Smarters Player por R$ 17,99.",
      source: "licenca-smarters-servico",
    },
    {
      h2Pre: "Vinculação ao",
      h2Accent: "MAC Address do aparelho",
      paragraphs: [
        "Como a licença fica atrelada ao MAC Address, o dado precisa estar correto. Cada Smart TV, Android TV, Google TV ou TV Box possui o seu próprio identificador.",
        "Se houver mais de um aparelho na casa, cada um exige uma licença própria. Explicamos essa diferença antes da ativação, para você decidir com clareza.",
      ],
      ctaLabel: "Tirar dúvida sobre o MAC",
      ctaMessage: "Tenho dúvidas sobre o MAC Address e a licença do Smarters Player.",
      source: "licenca-smarters-mac",
    },
    {
      h2Pre: "Renovação e",
      h2Accent: "suporte durante a vigência",
      paragraphs: [
        "Durante os 12 meses, você pode acionar nosso suporte para dúvidas de configuração, reinstalação do aplicativo ou verificação de compatibilidade.",
        "Próximo ao vencimento, orientamos o procedimento de renovação para que a licença siga ativa sem interrupções desnecessárias.",
      ],
      ctaLabel: "Consultar renovação",
      ctaMessage: "Quero saber como renovar a licença do Smarters Player.",
      source: "licenca-smarters-renovacao",
    },
  ],
  faqTitleAccent: "sobre a licença",
  faqs: [
    { q: "Quanto custa a licença do Smarters Player?", a: "A ativação da licença custa R$ 17,99, com suporte técnico remoto incluído." },
    { q: "Quanto tempo dura a licença?", a: "A licença é válida por 1 ano a partir da data de ativação." },
    { q: "A licença é vinculada a quê?", a: "Ao MAC Address do aparelho onde o aplicativo está instalado." },
    { q: "Existe mensalidade?", a: "Não. O valor é único pela ativação anual; a próxima cobrança só ocorre em caso de renovação." },
    { q: "Como ativar a licença?", a: "Envie o MAC Address pelo WhatsApp; conferimos o dado e realizamos a ativação no mesmo atendimento." },
    { q: "Onde localizar o MAC Address?", a: "Na tela inicial do aplicativo ou no menu de informações de rede do aparelho. Orientamos caso não encontre." },
    { q: "Em quais TVs a licença pode ser ativada?", a: "Samsung Smart TV, LG Smart TV, Android TV, Google TV e TV Box compatíveis." },
    { q: "Posso usar a mesma licença em duas TVs?", a: "Não. Como o vínculo é pelo MAC Address, cada aparelho precisa da sua própria licença." },
    { q: "Como funciona a renovação?", a: "Perto do vencimento, você entra em contato pelo WhatsApp e orientamos o procedimento de renovação." },
    { q: "Como recebo suporte durante a vigência?", a: "Pelo mesmo WhatsApp do atendimento, sempre com atendimento humano." },
    { q: "Vocês vendem o aplicativo?", a: "Não. Prestamos serviço técnico de instalação, configuração e ativação de aplicativos compatíveis." },
    { q: "Vocês têm vínculo com o desenvolvedor?", a: "Não. O suporte é independente, sem afiliação ou representação oficial." },
  ],
  internalLinks: smartersLinks("/licenca-smarters-player"),
  disclaimer: SMARTERS_DISCLAIMER,
  guarantee: {
    title: "Clareza no valor e no prazo",
    text: "Você sabe quanto paga, por quanto tempo a licença vale e a quem recorrer durante os 12 meses de vigência.",
  },
  source: "licenca-smarters-player",
};

const LicencaSmartersPlayer = () => <AdLandingPage config={config} />;

export default LicencaSmartersPlayer;
