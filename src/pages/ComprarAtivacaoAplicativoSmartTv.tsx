import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { KeyRound, Tv, Settings, Download, MessageCircle, Headphones } from "lucide-react";
import { smartTvLinks, SMARTTV_DISCLAIMER } from "./smartTvAppLinks";

const WA = "Olá! Quero comprar uma ativação para Smart TV.";

const config: AdLandingConfig = {
  path: "/comprar-ativacao-aplicativo-smart-tv",
  title: "Comprar Ativação de Aplicativo Smart TV | R$ 19,99/mês",
  description:
    "Comprar ativação de aplicativo Smart TV por R$ 19,99/mês: ativação rápida, compatibilidade verificada com a sua TV e suporte pelo WhatsApp durante a configuração.",
  eyebrow: "Ativação assistida • Aplicativos para Smart TV",
  heroPre: "Comprar ativação de",
  heroAccent: "aplicativo Smart TV",
  heroPost: "por R$ 19,99/mês",
  heroSubtitle: (
    <>
      Ative seu <strong className="text-foreground">aplicativo compatível com Smart TV</strong> com ativação rápida,
      compatibilidade verificada antes e suporte pelo WhatsApp durante toda a configuração.
    </>
  ),
  heroTrustLine: "Compatibilidade verificada antes da ativação — sem surpresa depois.",
  heroQuickBenefits: [
    "R$ 19,99/mês",
    "Ativação rápida",
    "Suporte pelo WhatsApp",
    "Compatibilidade com Smart TV",
    "Experiência estável",
  ],
  heroImageAlt: "Smart TV com tela de ativação de aplicativo em destaque",
  heroBadgeTitle: "Ativação assistida",
  heroBadgeDesc: "Atendimento e orientação por WhatsApp",
  heroPriceCard: {
    label: "Plano mensal",
    price: "R$ 19,99/mês",
    lines: [
      "Ativação rápida do aplicativo",
      "Compatibilidade com Smart TV verificada antes",
      "Configuração orientada passo a passo",
      "Suporte pelo WhatsApp",
    ],
  },
  ctaLabel: "Quero Ativar Agora",
  ctaMessage: WA,
  ctaMicrocopy: "R$ 19,99/mês • Ou fale no WhatsApp para tirar dúvidas antes",
  benefitsEyebrow: "O que está incluído",
  benefitsTitlePre: "Ativação com",
  benefitsTitleAccent: "suporte de verdade",
  benefits: [
    { icon: Tv, title: "Checagem de compatibilidade", desc: "Antes de qualquer ativação, confirmamos se o aplicativo é compatível com o modelo e o sistema da sua TV." },
    { icon: KeyRound, title: "Ativação do aplicativo", desc: "Conduzimos a etapa de ativação exigida pelo aplicativo, explicando cada informação solicitada." },
    { icon: Settings, title: "Configuração orientada", desc: "Depois da ativação, ajustamos a configuração junto com você até o app iniciar corretamente." },
    { icon: Download, title: "Ajuda na instalação", desc: "Se o aplicativo ainda não estiver instalado, orientamos a instalação no seu aparelho." },
    { icon: MessageCircle, title: "Atendimento direto", desc: "Você fala com uma pessoa pelo WhatsApp, sem robôs e sem formulários longos." },
    { icon: Headphones, title: "Suporte durante o processo", desc: "Acompanhamos do início ao fim do procedimento, esclarecendo dúvidas no caminho." },
  ],
  steps: {
    title: "Como funciona?",
    items: [
      { title: "Você informa o aplicativo", desc: "Diga qual aplicativo pretende ativar na sua Smart TV." },
      { title: "Informe o modelo da Smart TV", desc: "Marca, modelo e, se possível, o sistema do aparelho." },
      { title: "Verificamos a compatibilidade", desc: "Confirmamos se o aplicativo é compatível antes de seguir com a ativação." },
      { title: "Orientamos a ativação e configuração", desc: "Conduzimos o procedimento e acompanhamos até o app configurado." },
    ],
  },
  compatibility: {
    title: "Antes de ativar, verifique a compatibilidade",
    text: "A ativação só faz sentido em um aparelho compatível. A compatibilidade depende do aplicativo escolhido e do modelo/sistema da sua Smart TV — um mesmo app pode estar disponível em uma TV e indisponível em outra, até da mesma marca. Por isso a verificação vem sempre antes: se não houver compatibilidade, avisamos com clareza em vez de seguir adiante.",
    devices: [
      "Smart TVs com sistema Tizen",
      "Smart TVs com sistema webOS",
      "Android TV",
      "Google TV",
      "TV Box Android",
      "Media players compatíveis",
    ],
  },
  seoBlocks: [
    {
      h2Pre: "O que você contrata ao comprar a",
      h2Accent: "ativação do aplicativo",
      paragraphs: [
        "O serviço é técnico: verificação de compatibilidade, ativação do aplicativo compatível e orientação de configuração na sua Smart TV, com acompanhamento por WhatsApp.",
        "Não vendemos, fornecemos ou indicamos conteúdo audiovisual, canais ou programação. O valor pago corresponde exclusivamente ao serviço de ativação, configuração e suporte técnico do aplicativo.",
      ],
      ctaLabel: "Falar no WhatsApp",
      ctaMessage: WA,
      source: "comprar-ativacao-servico",
    },
    {
      h2Pre: "Ativação em Smart TV",
      h2Accent: "passo a passo",
      paragraphs: [
        "Cada aplicativo solicita informações próprias no momento da ativação. Explicamos exatamente onde encontrá-las no seu aparelho e o que preencher, evitando erros de digitação pelo controle.",
        "Concluída a ativação, revisamos a configuração para confirmar que o aplicativo está funcionando de forma estável na TV.",
      ],
      ctaLabel: "Quero ativar meu aplicativo",
      ctaMessage: "Olá! Quero comprar a ativação do meu aplicativo para Smart TV.",
      source: "comprar-ativacao-passos",
    },
  ],
  faqTitleAccent: "frequentes",
  faqs: [
    { q: "Como funciona a ativação do aplicativo?", a: "Primeiro verificamos a compatibilidade com a sua TV. Em seguida, conduzimos a etapa de ativação exigida pelo aplicativo e revisamos a configuração junto com você." },
    { q: "O aplicativo funciona na minha Smart TV?", a: "Depende do modelo e do sistema do aparelho. Informe marca e modelo no WhatsApp e verificamos antes de qualquer ativação." },
    { q: "Como saber se minha TV é compatível?", a: "Pelo modelo exato da TV, disponível no menu de informações ou na etiqueta traseira. Ajudamos a localizar esse dado." },
    { q: "Preciso informar o modelo da TV?", a: "Sim. Sem essa informação não é possível confirmar a compatibilidade nem realizar a ativação com segurança." },
    { q: "Vocês ajudam na instalação e configuração?", a: "Sim. Se o aplicativo ainda não estiver instalado, orientamos a instalação, e a configuração é feita com acompanhamento." },
    { q: "O atendimento é pelo WhatsApp?", a: "Sim. Todo o processo de ativação e suporte acontece por WhatsApp." },
    { q: "Todos os aplicativos podem ser ativados em qualquer TV?", a: "Não. A disponibilidade varia por fabricante, modelo e sistema, por isso fazemos a verificação antes." },
    { q: "A ativação inclui canais, filmes ou conteúdo?", a: "Não. O serviço é exclusivamente técnico: ativação, configuração e suporte do aplicativo compatível." },
  ],
  internalLinks: smartTvLinks("/comprar-ativacao-aplicativo-smart-tv"),
  disclaimer: SMARTTV_DISCLAIMER,
  breadcrumbName: "Comprar ativação de aplicativo Smart TV",
  source: "comprar-ativacao-aplicativo-smart-tv",
};

const ComprarAtivacaoAplicativoSmartTv = () => <AdLandingPage config={config} />;

export default ComprarAtivacaoAplicativoSmartTv;
