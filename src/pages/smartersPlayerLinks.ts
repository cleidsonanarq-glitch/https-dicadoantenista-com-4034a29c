// Linkagem interna entre as landing pages do Smarters Player
export const SMARTERS_DISCLAIMER =
  "Prestamos suporte técnico independente para instalação, configuração e ativação de aplicativos compatíveis. Não somos afiliados nem representantes oficiais do desenvolvedor. O usuário é responsável pelo conteúdo utilizado no aplicativo.";

const ALL = [
  {
    href: "/smarters-player",
    label: "Smarters Player",
    desc: "Visão geral do suporte técnico para instalar, configurar e ativar o aplicativo.",
  },
  {
    href: "/ativar-smarters-player",
    label: "Ativar Smarters Player",
    desc: "Ativação assistida pelo MAC Address, com acompanhamento pelo WhatsApp.",
  },
  {
    href: "/licenca-smarters-player",
    label: "Licença Smarters Player",
    desc: "Como funciona a licença de 1 ano, o valor e a renovação.",
  },
  {
    href: "/configurar-smarters-player",
    label: "Configurar Smarters Player",
    desc: "Ajustes do aplicativo após a ativação, com orientação remota.",
  },
  {
    href: "/smarters-player-samsung",
    label: "Smarters Player Samsung",
    desc: "Instalação, MAC Address e ativação em Smart TV Samsung.",
  },
  {
    href: "/smarters-player-lg",
    label: "Smarters Player LG",
    desc: "Instalação, MAC Address e ativação em Smart TV LG com webOS.",
  },
];

export const smartersLinks = (current: string) => ({
  title: "Continue navegando pelo suporte Smarters Player",
  links: ALL.filter((l) => l.href !== current),
});
