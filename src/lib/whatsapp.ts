// Configuração central do WhatsApp da Digital Net
export const WHATSAPP_PHONE = "5571999729281";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, vim pela landing page e quero suporte";

export function buildWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
