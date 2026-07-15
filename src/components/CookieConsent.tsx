import { useEffect, useState } from "react";

const STORAGE_KEY = "dda_cookie_consent_v1";
const EXPIRY_DAYS = 365;

const hasValidConsent = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as { accepted: boolean; expiresAt: number };
    return parsed.accepted && Date.now() < parsed.expiresAt;
  } catch {
    return false;
  }
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasValidConsent()) {
      const id = window.setTimeout(() => setVisible(true), 800);
      return () => window.clearTimeout(id);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          accepted: true,
          expiresAt: Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000,
        })
      );
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 sm:px-4 sm:pb-4"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-border/60 bg-background/95 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Utilizamos cookies para melhorar sua experiência, analisar o desempenho do site e medir campanhas de publicidade. Ao clicar em "Aceitar", você concorda com nossa{" "}
            <a
              href="/politica-de-privacidade"
              className="font-semibold text-primary underline underline-offset-2 hover:opacity-80"
            >
              Política de Privacidade
            </a>
            .
          </p>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
            <a
              href="/politica-de-privacidade"
              className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Política de Privacidade
            </a>
            <button
              type="button"
              onClick={accept}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
