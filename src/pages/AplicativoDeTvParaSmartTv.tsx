import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Tv, MonitorPlay, Cast, Settings, Download, Headphones } from "lucide-react";
import { smartTvLinks, SMARTTV_DISCLAIMER } from "./smartTvAppLinks";

const WA = "Olá! Quero verificar um aplicativo de TV para minha Smart TV.";

const config: AdLandingConfig = {
  path: "/aplicativo-de-tv-para-smart-tv",
  title: "Aplicativo de TV para Smart TV | Instalação, Configuração e Ativação",
  description:
    "Ajuda para instalar, configurar e ativar aplicativos de TV compatíveis com a sua Smart TV. Verificação de compatibilidade por modelo e suporte pelo WhatsApp.",
  eyebrow: "Suporte técnico • Aplicativos de TV",
  heroPre: "Aplicativo de TV para",
  heroAccent: "Smart TV",
  heroSubtitle: (
    <>
      Ajuda para instalar, configurar e ativar <strong className="text-foreground">aplicativos de TV compatíveis</strong> com
      a sua Smart TV, com verificação de compatibilidade antes de começar.
    </>
  ),
  heroTrustLine: "Compatibilidade confirmada pelo modelo da TV antes de qualquer procedimento.",
  heroQuickBenefits: [
    "Checagem de modelo e sistema da TV",
    "Orientação de instalação e configuração",
    "Ativação assistida quando necessária",
  ],
  heroImageAlt: "Smart TV em uma sala mostrando ícones de aplicativos de TV",
  heroBadgeTitle: "Compatibilidade",
  heroBadgeDesc: "Verificada por modelo e sistema",
  ctaLabel: "Falar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Informe o modelo da TV • Verificação antes de iniciar",
  benefitsEyebrow: "O que fazemos",
  benefitsTitlePre: "Serviço técnico para",
  benefitsTitleAccent: "aplicativos de TV",
  benefits: [
    { icon: Tv, title: "Verificação de compatibilidade", desc: "Confirmamos se o aplicativo de TV desejado é compatível com o seu modelo antes de qualquer etapa." },
    { icon: Download, title: "Instalação orientada", desc: "Mostramos onde o aplicativo pode ser encontrado no seu aparelho e acompanhamos a instalação." },
    { icon: Settings, title: "Configuração assistida", desc: "Inserção correta dos dados de configuração e ajustes de preferências junto com você." },
    { icon: MonitorPlay, title: "Ativação quando exigida", desc: "Quando o aplicativo trabalha com período de teste e pede ativação, conduzimos essa etapa." },
    { icon: Cast, title: "Diferentes sistemas de TV", desc: "Atendemos TVs com sistemas distintos, sempre respeitando o que cada aparelho permite instalar." },
    { icon: Headphones, title: "Suporte durante o processo", desc: "Acompanhamento pelo WhatsApp até a configuração ser concluída." },
  ],
  compatibility: {
    title: "Compatibilidade com sua Smart TV",
    text: "A compatibilidade de um aplicativo de TV varia conforme o modelo, o ano de fabricação e o sistema operacional do aparelho. Um mesmo aplicativo pode estar disponível em uma TV e indisponível em outra da mesma marca. Por isso não afirmamos que todos os aplicativos funcionam em todas as Smart TVs: verificamos caso a caso e informamos com honestidade quando não há compatibilidade.",
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
      h2Pre: "Como confirmar se o aplicativo de TV é",
      h2Accent: "compatível",
      paragraphs: [
        "O primeiro passo é identificar o modelo exato da Smart TV, disponível no menu de informações do aparelho ou na etiqueta traseira. Com esse dado, verificamos a disponibilidade do aplicativo para aquele sistema.",
        "Se o aplicativo desejado não for compatível, informamos claramente. Preferimos avisar antes do que iniciar um atendimento em um aparelho que não suporta o app.",
      ],
      ctaLabel: "Verificar compatibilidade no WhatsApp",
      ctaMessage: "Olá! Quero verificar a compatibilidade de um aplicativo de TV com a minha Smart TV.",
      source: "app-de-tv-verificar",
    },
    {
      h2Pre: "Instalação, configuração e",
      h2Accent: "suporte técnico",
      paragraphs: [
        "Nosso serviço é técnico: orientamos a instalação, realizamos a configuração junto com você e acompanhamos a ativação quando o aplicativo exige essa etapa.",
        "Não fornecemos conteúdo audiovisual, canais ou programação. O que oferecemos é o suporte para que o aplicativo compatível fique instalado e configurado corretamente na sua TV.",
      ],
      ctaLabel: "Falar no WhatsApp",
      ctaMessage: WA,
      source: "app-de-tv-servico",
    },
  ],
  faqTitleAccent: "frequentes",
  faqs: [
    { q: "O aplicativo de TV funciona na minha Smart TV?", a: "Depende do modelo e do sistema do aparelho. Informe marca e modelo no WhatsApp para que possamos verificar a compatibilidade." },
    { q: "Como saber se minha TV é compatível?", a: "Pelo modelo exato da TV. Explicamos onde encontrar essa informação e confirmamos a compatibilidade a partir dela." },
    { q: "Vocês ajudam na instalação?", a: "Sim. Orientamos o caminho de instalação disponível no seu aparelho, usando os recursos da própria TV." },
    { q: "Vocês ajudam na configuração?", a: "Sim. A configuração é feita passo a passo com acompanhamento durante o atendimento." },
    { q: "Preciso informar o modelo da TV?", a: "Sim, é indispensável para confirmar compatibilidade e indicar o procedimento adequado." },
    { q: "Como funciona a ativação?", a: "Alguns aplicativos exigem ativação após o período de teste. Quando é o caso, explicamos o que o app solicita e conduzimos a etapa." },
    { q: "Todos os aplicativos funcionam em qualquer TV?", a: "Não. A disponibilidade varia por fabricante, modelo e sistema. Por isso a verificação prévia é parte do atendimento." },
    { q: "O atendimento é pelo WhatsApp?", a: "Sim, todo o suporte é feito por WhatsApp." },
  ],
  internalLinks: smartTvLinks("/aplicativo-de-tv-para-smart-tv"),
  disclaimer: SMARTTV_DISCLAIMER,
  breadcrumbName: "Aplicativo de TV para Smart TV",
  source: "aplicativo-de-tv-para-smart-tv",
};

const AplicativoDeTvParaSmartTv = () => <AdLandingPage config={config} />;

export default AplicativoDeTvParaSmartTv;
