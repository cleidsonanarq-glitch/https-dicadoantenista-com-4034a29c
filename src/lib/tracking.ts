// Eventos de tracking para Meta Pixel + Google Ads/Analytics
// Compatível com fbq (Meta) e gtag (Google) — silencioso se não carregados.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    GADS_CONVERSION_ID?: string;
  }
}

type EventName = "click_whatsapp" | "lead" | "cta_click";

export function trackEvent(name: EventName, params: Record<string, unknown> = {}) {
  try {
    // Google Analytics / Google Ads — evento custom
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, params);

      // Conversão de Google Ads em cliques de WhatsApp / CTA
      const conv = window.GADS_CONVERSION_ID;
      if (conv && !conv.includes("GOOGLE_ADS_ID") && (name === "click_whatsapp" || name === "lead")) {
        window.gtag("event", "conversion", {
          send_to: conv,
          ...params,
        });
      }
    }
    // dataLayer (GTM)
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: name, ...params });
    }
    // Meta Pixel
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      if (name === "lead") {
        window.fbq("track", "Lead", params);
      } else if (name === "click_whatsapp") {
        window.fbq("track", "Contact", params);
        window.fbq("trackCustom", "ClickWhatsApp", params);
      } else if (name === "cta_click") {
        window.fbq("trackCustom", "CTAClick", params);
      }
    }
    if (import.meta.env.DEV) {
      console.info("[track]", name, params);
    }
  } catch (err) {
    console.warn("[track] erro:", err);
  }
}
