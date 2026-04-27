// Eventos de tracking para Meta Pixel + Google Ads/Analytics
// Compatível com fbq (Meta) e gtag (Google) — silencioso se não carregados.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type EventName = "click_whatsapp" | "lead";

export function trackEvent(name: EventName, params: Record<string, unknown> = {}) {
  try {
    // Google Analytics / Google Ads
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, params);
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
        window.fbq("trackCustom", "ClickWhatsApp", params);
      }
    }
    // Log local em dev
    if (import.meta.env.DEV) {
      console.info("[track]", name, params);
    }
  } catch (err) {
    console.warn("[track] erro:", err);
  }
}
