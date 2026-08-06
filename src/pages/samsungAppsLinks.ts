// Linkagem interna entre as landing pages de aplicativos para TV Samsung
export const SAMSUNG_DISCLAIMER =
  "Prestamos suporte técnico independente para instalação, configuração e ativação de aplicativos compatíveis. Não somos afiliados nem representantes oficiais da Samsung ou de desenvolvedores de aplicativos.";

const SAMSUNG_PAGES = [
  {
    href: "/aplicativo-para-tv-samsung",
    label: "Aplicativo para TV Samsung",
    desc: "Visão geral do suporte técnico para instalar e configurar aplicativos compatíveis.",
  },
  {
    href: "/samsung-apps-tv",
    label: "Samsung Apps TV",
    desc: "Como funciona a loja de aplicativos da Samsung e o que fazer quando o app não aparece.",
  },
  {
    href: "/aplicativo-tv-samsung",
    label: "Aplicativo TV Samsung",
    desc: "Orientação para escolher e preparar o aplicativo certo para o seu modelo.",
  },
  {
    href: "/samsung-apps-smart-tv",
    label: "Samsung Apps Smart TV",
    desc: "Atualização, reinstalação e organização dos aplicativos na sua Smart TV.",
  },
  {
    href: "/instalar-aplicativo-tv-samsung",
    label: "Instalar aplicativo na TV Samsung",
    desc: "Passo a passo assistido de instalação em TVs Samsung com sistema Tizen.",
  },
  {
    href: "/configurar-aplicativo-tv-samsung",
    label: "Configurar aplicativo na TV Samsung",
    desc: "Ajustes finais, ativação quando necessária e verificação de funcionamento.",
  },
];

const OTHER_PAGES = [
  {
    href: "/ibo-player",
    label: "IBO Player",
    desc: "Suporte técnico para instalar, configurar e ativar o IBO Player.",
  },
  {
    href: "/smarters-player",
    label: "Smarters Player",
    desc: "Ativação da licença pelo MAC Address e configuração assistida.",
  },
  {
    href: "/ativar-stream-player",
    label: "Stream Player",
    desc: "Ativação e configuração do Stream Player com acompanhamento remoto.",
  },
];

export const samsungLinks = (current: string) => ({
  title: "Continue navegando pelo suporte para TV Samsung",
  links: [...SAMSUNG_PAGES.filter((l) => l.href !== current), ...OTHER_PAGES],
});
