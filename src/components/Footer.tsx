import { useState } from "react";
import { MessageCircle, Clock, Calendar } from "lucide-react";
import logoAsset from "@/assets/logo-dica-antenista.png.asset.json";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ModalKey = "privacy" | "terms" | "contact" | null;

const Footer = () => {
  const [open, setOpen] = useState<ModalKey>(null);

  const close = () => setOpen(null);

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <img
            src={logoAsset.url}
            alt="Dica do Antenista - Suporte especializado para Smart TV, TV Box e aplicativos de streaming"
            width="160"
            height="50"
            loading="lazy"
            decoding="async"
            className="h-12 w-auto object-contain"
          />
          <p className="text-xs text-muted-foreground max-w-[260px]">
            Suporte de verdade, 24h por dia no seu WhatsApp.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <button
            onClick={() => setOpen("privacy")}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Política de Privacidade
          </button>
          <button
            onClick={() => setOpen("terms")}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Termos de Uso
          </button>
          <button
            onClick={() => setOpen("contact")}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Contato
          </button>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dica do Antenista.
        </p>
      </div>

      <Dialog open={open === "privacy"} onOpenChange={(v) => !v && close()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Política de Privacidade</DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-relaxed text-muted-foreground">
              Os dados enviados via WhatsApp são utilizados apenas para
              atendimento e suporte, sem compartilhamento com terceiros.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={open === "terms"} onOpenChange={(v) => !v && close()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Termos de Uso</DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-relaxed text-muted-foreground">
              Serviço destinado para entretenimento digital e suporte técnico ao
              cliente.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={open === "contact"} onOpenChange={(v) => !v && close()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Fale com a gente</DialogTitle>
            <DialogDescription className="pt-2">
              Atendimento humano e rápido pelos nossos canais oficiais.
            </DialogDescription>
          </DialogHeader>
          <ul className="mt-2 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span>WhatsApp: <strong>+55 88 99123-4567</strong></span>
            </li>
            <li className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Atendimento: Segunda a Sábado</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-primary" />
              <span>Horário: 08h às 22h</span>
            </li>
          </ul>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
