import AdLandingPage, { type AdLandingConfig } from "@/components/AdLandingPage";
import { Monitor, ShieldCheck, Settings, Headphones, Zap, Search, KeyRound, LifeBuoy, AlertCircle, Download } from "lucide-react";

const WA = "Olá! Preciso de suporte para instalar e configurar o IPTV Smarters Pro na minha LG.";

const TRANSPARENCIA =
  "Prestamos um serviço independente de instalação, configuração e ativação de aplicativos compatíveis com Smart TVs. Não somos desenvolvedores, representantes ou parceiros oficiais dos aplicativos ou fabricantes mencionados. As marcas citadas pertencem aos seus respectivos proprietários e são utilizadas apenas para identificar compatibilidade. O serviço não inclui fornecimento de listas de reprodução, canais, filmes, séries ou qualquer conteúdo audiovisual. O cliente é responsável pelos conteúdos e serviços que utilizar.";

const config: AdLandingConfig = {
  path: "/iptv-smarters-lg",
  title: "IPTV Smarters LG | Instalação, Ativação e Configuração",
  description:
    "Suporte técnico para instalar, ativar e configurar o IPTV Smarters Pro em Smart TV LG com webOS. Atendimento humano no WhatsApp. Não fornecemos listas ou conteúdo.",
  eyebrow: "IPTV Smarters Pro • LG webOS",
  heroPre: "Instalação e ativação do",
  heroAccent: "IPTV Smarters em LG",
  heroPost: "com atendimento humano",
  heroSubtitle: (
    <>
      Deixamos o <strong className="text-foreground">IPTV Smarters Pro</strong> pronto para uso na sua Smart TV LG.
      O serviço é exclusivamente técnico — nenhuma lista ou conteúdo é fornecido.
    </>
  ),
  heroTrustLine: "Feito para Smart TVs LG com sistema webOS",
  heroQuickBenefits: [
    "Instalação em Smart TV LG",
    "Ativação orientada pelo especialista",
    "Configuração para funcionar sem travamentos",
    "Correção de erros comuns de login e EPG",
  ],
  heroImageAlt: "IPTV Smarters Pro instalado e configurado em Smart TV LG",
  heroBadgeTitle: "Smarters Pro em LG",
  heroBadgeDesc: "Instalação • Ativação • Suporte",
  ctaLabel: "Falar no WhatsApp",
  ctaMessage: WA,
  ctaMicrocopy: "Serviço técnico • Sem venda de conteúdo • Atendimento humano",
  benefitsEyebrow: "Feito para LG webOS",
  benefitsTitlePre: "Suporte técnico para o",
  benefitsTitleAccent: "Smarters Pro em LG",
  benefits: [
    { icon: Download, title: "Instalação assistida", desc: "Instalamos o IPTV Smarters Pro na sua LG ou orientamos alternativas compatíveis quando ele não estiver na loja webOS." },
    { icon: KeyRound, title: "Ativação orientada", desc: "Quando o aplicativo exige ativação, conduzimos o passo a passo até você estar pronto para usar." },
    { icon: Settings, title: "Configuração estável", desc: "Ajustamos parâmetros para reduzir travamentos e melhorar a estabilidade em Smart TVs LG." },
    { icon: Monitor, title: "Compatibilidade LG", desc: "Trabalhamos com versões atuais do webOS e verificamos a compatibilidade do modelo antes de iniciar." },
    { icon: AlertCircle, title: "Erros comuns", desc: "Login inválido, lista em branco, EPG ausente, buffer e reinício de aplicativo — resolvemos os principais problemas." },
    { icon: ShieldCheck, title: "Escopo transparente", desc: "Prestamos apenas o serviço técnico. Não fornecemos listas, canais, filmes ou séries." },
  ],
  section2: {
    title: "Como conduzimos o serviço em LG",
    text: "O atendimento é dividido em etapas claras para você acompanhar o que está sendo feito na sua Smart TV LG.",
    cards: [
      { icon: Zap, title: "Instalação", desc: "Buscamos o IPTV Smarters Pro na loja da LG ou aplicamos o método compatível para o modelo." },
      { icon: KeyRound, title: "Ativação", desc: "Ativamos o aplicativo, quando necessário, com as informações e o MAC Address correto." },
      { icon: Settings, title: "Configuração", desc: "Configuramos o aplicativo para uso imediato com os dados de acesso fornecidos pelo cliente." },
      { icon: LifeBuoy, title: "Suporte", desc: "Ficamos disponíveis pelo WhatsApp para dúvidas técnicas após o atendimento." },
    ],
  },
  seoBlocks: [
    {
      h2Pre: "IPTV Smarters em LG:",
      h2Accent: "o que fazemos",
      paragraphs: [
        "Nosso serviço para IPTV Smarters em LG cobre instalação, ativação e configuração do aplicativo IPTV Smarters Pro no sistema webOS.",
        "Não fornecemos, indicamos ou vendemos listas IPTV, listas M3U, canais, filmes, séries, futebol ou qualquer conteúdo. A lista utilizada é sempre do próprio cliente.",
        TRANSPARENCIA,
      ],
      ctaLabel: "Contratar suporte LG",
      ctaMessage: "Quero contratar o suporte do Smarters Pro para minha LG.",
      source: "iptv-smarters-lg-servico",
    },
    {
      h2Pre: "Compatibilidade e",
      h2Accent: "instalação em LG",
      paragraphs: [
        "Nem todo modelo de LG traz o IPTV Smarters Pro diretamente na loja. Verificamos o webOS do seu aparelho e informamos se o aplicativo é instalável ou se há um caminho alternativo compatível.",
        "Se o aplicativo estiver disponível, fazemos a instalação e passamos direto para a ativação e configuração.",
      ],
      ctaLabel: "Verificar minha LG",
      ctaMessage: "Podem verificar se meu modelo LG suporta o IPTV Smarters Pro?",
      source: "iptv-smarters-lg-compat",
    },
    {
      h2Pre: "Erros comuns e",
      h2Accent: "como resolvemos",
      paragraphs: [
        "Em Smart TVs LG, o Smarters Pro pode apresentar login recusado, lista vazia, EPG desatualizado, buffer alto e travamentos ao trocar de faixa.",
        "Cada situação tem uma solução técnica específica. Analisamos o cenário pelo WhatsApp e conduzimos o ajuste que resolve.",
      ],
      ctaLabel: "Resolver erro na LG",
      ctaMessage: "Estou com erro no Smarters Pro na minha LG.",
      source: "iptv-smarters-lg-erros",
    },
    {
      h2Pre: "Independência e",
      h2Accent: "responsabilidade",
      paragraphs: [
        "Não temos vínculo oficial com a LG ou com o desenvolvedor do IPTV Smarters Pro. As marcas são citadas apenas para descrever compatibilidade.",
        "O conteúdo consumido dentro do aplicativo é escolhido e mantido pelo cliente, que é o único responsável pelas listas utilizadas.",
      ],
      ctaLabel: "Falar com atendente",
      ctaMessage: "Quero falar com atendente sobre o Smarters Pro em LG.",
      source: "iptv-smarters-lg-aviso",
    },
  ],
  faqTitleAccent: "sobre Smarters em LG",
  faqs: [
    { q: "Vocês instalam o Smarters Pro em qualquer LG?", a: "Depende do modelo e da versão do webOS. Verificamos a compatibilidade antes de iniciar e informamos você." },
    { q: "Preciso do MAC Address?", a: "Se o servidor exigir, orientamos você a localizar o MAC Address da sua LG. É uma etapa simples e rápida quando bem conduzida." },
    { q: "Vocês vendem lista?", a: "Não. Nunca fornecemos listas IPTV, listas M3U, canais, filmes ou séries. Apenas prestamos o serviço técnico." },
    { q: "É legal usar o aplicativo?", a: "O aplicativo é de compatibilidade pública. A responsabilidade pelo conteúdo utilizado dentro dele é do cliente." },
    { q: "Ficou dando erro de login, resolve?", a: "Sim. Erro de login é um dos problemas mais comuns e costuma ser resolvido em minutos durante o atendimento." },
    { q: "Vocês representam a LG?", a: "Não. Somos um serviço independente e não temos vínculo com a LG ou com os desenvolvedores dos aplicativos." },
    { q: "Como é feita a cobrança?", a: "Informamos o valor do serviço técnico pelo WhatsApp antes de iniciar. Só cobramos o serviço prestado." },
    { q: "É rápido?", a: "A maior parte dos atendimentos é concluída em minutos, dependendo do modelo e do problema apresentado." },
  ],
  source: "iptv-smarters-lg",
};

const IptvSmartersLg = () => <AdLandingPage config={config} />;

export default IptvSmartersLg;
