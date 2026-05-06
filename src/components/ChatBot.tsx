import { useState, useEffect, useRef } from "react";
import { Bot, Send, X, CheckCircle2 } from "lucide-react";
import { trackEvent } from "@/lib/tracking";
import { buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/whatsapp";

// 🔗 URL do webhook do n8n — edite aqui se precisar trocar
const WEBHOOK_URL =
  "https://cleidsonteixeira.app.n8n.cloud/webhook-test/webvoice";

type Status = "idle" | "sending" | "success" | "error";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [problema, setProblema] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const redirectTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (redirectTimer.current) window.clearTimeout(redirectTimer.current);
    };
  }, []);

  const reset = () => {
    setNome("");
    setProblema("");
    setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !problema.trim() || status === "sending") return;

    setStatus("sending");

    const payload = {
      nome: nome.trim().slice(0, 120),
      problema: problema.trim().slice(0, 1000),
      origem: "landing_page_dica_do_antenista",
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      trackEvent("lead", { source: "chatbot", nome: payload.nome });
      setStatus("success");

      // Redireciona para o WhatsApp após 2s
      const waMessage = `Olá! Sou ${payload.nome}. ${payload.problema}`;
      const url = buildWhatsAppUrl(waMessage);
      redirectTimer.current = window.setTimeout(() => {
        window.open(url, "_blank", "noopener,noreferrer");
      }, 2000);
    } catch (err) {
      console.warn("[chatbot] erro ao enviar:", err);
      setStatus("error");
    }
  };

  return (
    <>
      {/* Botão flutuante do chatbot — canto inferior esquerdo para não conflitar com o WhatsApp */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir chat de atendimento"
          className="fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-accent py-3 pl-3 pr-4 text-accent-foreground shadow-[0_15px_45px_-10px_hsl(var(--accent)/0.6)] transition-transform hover:scale-105 sm:bottom-7 sm:left-7"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
            <Bot className="relative h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="hidden text-sm font-bold sm:inline">Falar com atendente</span>
        </button>
      )}

      {/* Janela do chatbot */}
      {open && (
        <div className="fixed bottom-5 left-5 right-5 z-50 sm:bottom-7 sm:left-7 sm:right-auto sm:w-[22rem]">
          <div className="glass-card overflow-hidden rounded-2xl border border-border/70">
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-cta px-4 py-3 text-primary-foreground">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-tight">Atendimento Dica do Antenista</p>
                  <p className="text-[11px] opacity-90">Online agora • responde rápido</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  if (status === "success") reset();
                }}
                aria-label="Fechar chat"
                className="rounded-full p-1.5 transition-colors hover:bg-white/15"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-3 px-4 py-4">
              {status !== "success" ? (
                <>
                  <div className="flex gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-secondary/70 px-3 py-2 text-sm text-foreground">
                      Olá! 👋 Me diga qual problema você está enfrentando na sua TV.
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-2.5 pt-1">
                    <input
                      type="text"
                      required
                      maxLength={120}
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full rounded-xl border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <textarea
                      required
                      maxLength={1000}
                      rows={3}
                      value={problema}
                      onChange={(e) => setProblema(e.target.value)}
                      placeholder="Descreva o problema na sua TV…"
                      className="w-full resize-none rounded-xl border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-cta px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-glow transition-all hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <Send className="h-4 w-4" />
                      {status === "sending" ? "Enviando…" : "Enviar"}
                    </button>
                    {status === "error" && (
                      <p className="text-center text-xs text-destructive">
                        Não conseguimos enviar agora. Tente o WhatsApp diretamente.
                      </p>
                    )}
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    Recebemos suas informações!
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Em instantes você será atendido no WhatsApp.
                  </p>
                  <a
                    href={buildWhatsAppUrl(
                      `Olá! Sou ${nome}. ${problema || WHATSAPP_DEFAULT_MESSAGE}`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("click_whatsapp", { source: "chatbot-success" })}
                    className="mt-1 text-xs font-semibold text-primary underline-offset-2 hover:underline"
                  >
                    Abrir WhatsApp agora
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
