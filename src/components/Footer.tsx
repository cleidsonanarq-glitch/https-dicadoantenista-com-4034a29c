import { useState } from "react";
import { MessageCircle, Clock, Calendar } from "lucide-react";
import logoUrl from "@/assets/logo-dica-antenista.png";
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
      <div className="container flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="flex max-w-sm flex-col items-center gap-3 md:items-start">
          <img
            src={logoUrl}
            alt="Dica do Antenista - Consultoria para Smart TVs e conectividade residencial"
            width="160"
            height="50"
            loading="lazy"
            decoding="async"
            className="h-12 w-auto object-contain"
          />
          <p className="text-sm font-semibold text-foreground">Dica do Antenista</p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Consultoria e orientação especializada para conectividade residencial, redes Wi-Fi e configuração de aparelhos de TV.
          </p>
          <p className="text-xs text-muted-foreground">
            Responsável: <span className="text-foreground">Cleidson Ferreira Teixeira</span>
          </p>
          <p className="text-xs text-muted-foreground">
            Suporte de verdade, 24h por dia no seu WhatsApp.
          </p>
        </div>

        <nav className="flex flex-col items-center gap-2 text-sm md:items-start">
          <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Institucional
          </span>
          <button
            onClick={() => setOpen("privacy")}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Política de Privacidade (resumo)
          </button>
          <a
            href="/politica-de-privacidade"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Política de Privacidade
          </a>
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

        <p className="text-xs text-muted-foreground md:self-end">
          © {new Date().getFullYear()} Dica do Antenista.
        </p>
      </div>

      <div className="container mt-8">
        <p className="mx-auto max-w-4xl rounded-2xl border border-border/60 bg-secondary/40 p-4 text-center text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Aviso Legal:</strong> Somos um serviço independente de consultoria e suporte para conectividade doméstica. Não possuímos vínculo, afiliação, representação ou autorização oficial com fabricantes de televisores, desenvolvedores de sistemas operacionais ou provedores de mídia. Marcas e nomes citados pertencem a seus respectivos proprietários e são usados exclusivamente para fins descritivos.
        </p>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Dica do Antenista • Consultoria e Suporte para Conectividade Residencial
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
              Serviço destinado à orientação e consultoria para conectividade
              residencial e configuração de aparelhos de TV conectados.
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
              <span>WhatsApp: <strong>+55 71 99972-9281</strong></span>
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
