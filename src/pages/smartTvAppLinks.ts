// Linkagem interna entre as landing pages de aplicativos para Smart TV
export const SMARTTV_DISCLAIMER =
  "Prestamos suporte técnico independente para instalação, configuração e ativação de aplicativos compatíveis com Smart TVs. Não somos afiliados a fabricantes de TV nem a desenvolvedores de aplicativos e não fornecemos conteúdo audiovisual, canais ou listas.";

const SMARTTV_PAGES = [
  {
    href: "/aplicativo-para-smart-tv",
    label: "Aplicativo para Smart TV",
    desc: "Ativação e configuração de aplicativos compatíveis com a sua Smart TV.",
  },
  {
    href: "/app-para-assistir-tv-na-smart-tv",
    label: "App para assistir TV na Smart TV",
    desc: "Ajuda quando o app não abre, não instala ou pede ativação.",
  },
  {
    href: "/aplicativo-de-tv-para-smart-tv",
    label: "Aplicativo de TV para Smart TV",
    desc: "Verificação de compatibilidade por modelo e sistema da TV.",
  },
  {
    href: "/player-para-smart-tv",
    label: "Player para Smart TV",
    desc: "Instalação e configuração orientada de players compatíveis.",
  },
  {
    href: "/stream-player-smart-tv",
    label: "Stream Player para Smart TV",
    desc: "Suporte para instalação, configuração e ativação de players.",
  },
  {
    href: "/comprar-ativacao-aplicativo-smart-tv",
    label: "Comprar ativação de aplicativo Smart TV",
    desc: "Atendimento para ativar o aplicativo compatível com a sua TV.",
  },
  {
    href: "/app-iptv-smartv-samsung",
    label: "App para Smart TV Samsung",
    desc: "Compatibilidade, ativação e configuração em TVs Samsung.",
  },
];

export function smartTvLinks(currentPath: string) {
  return {
    title: "Outras páginas de suporte para Smart TV",
    links: SMARTTV_PAGES.filter((p) => p.href !== currentPath),
  };
}
