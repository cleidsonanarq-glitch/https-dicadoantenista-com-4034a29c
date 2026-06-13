// Configuração central do WhatsApp da Dica do Antenista
export const WHATSAPP_PHONE = "5571999729281";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, gostaria de ajuda para configurar o IBO Player.";

export function buildWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
}
