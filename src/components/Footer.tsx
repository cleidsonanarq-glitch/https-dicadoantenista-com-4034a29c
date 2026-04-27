import { Tv } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-cta">
            <Tv className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-base font-bold">
            Digital<span className="text-primary">Net</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Digital Net. Suporte rápido para sua TV.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
