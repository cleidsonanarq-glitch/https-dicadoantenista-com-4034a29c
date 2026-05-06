// Webhook do n8n para auto atendimento da Dica do Antenista
export const N8N_WEBHOOK_URL =
  "https://cleidsonteixeira.app.n8n.cloud/webhook-test/webvoice";

export interface WebhookPayload {
  source: string; // identificador do botão clicado
  message: string; // mensagem pré-preenchida do WhatsApp
  phone: string; // número de destino
  page: string; // página atual
  referrer?: string;
  userAgent?: string;
  timestamp: string;
}

/**
 * Dispara um POST para o webhook do n8n.
 * Usa keepalive para garantir o envio mesmo quando o usuário navega
 * para o WhatsApp em seguida. Falhas são silenciosas para não bloquear
 * o redirecionamento ao WhatsApp.
 */
export async function triggerWebhook(
  payload: Omit<WebhookPayload, "timestamp" | "page" | "referrer" | "userAgent">,
): Promise<void> {
  const body: WebhookPayload = {
    ...payload,
    page: typeof window !== "undefined" ? window.location.href : "",
    referrer: typeof document !== "undefined" ? document.referrer : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    timestamp: new Date().toISOString(),
  };

  try {
    await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (err) {
    // Silencioso: não impedir o fluxo do usuário para o WhatsApp
    console.warn("[n8n webhook] falha ao notificar:", err);
  }
}
