import { lazy, Suspense, useEffect, useState } from "react";
import {
  Zap,
  Tv,
  MonitorSmartphone,
  ShieldCheck,
  Languages,
  FolderKanban,
  Wrench,
  HelpCircle,
} from "lucide-react";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import LazyOnVisible from "@/components/LazyOnVisible";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = lazy(() => import("@/components/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

const HERO_BENEFITS = [
  "Orientação para Smart TVs e aparelhos homologados",
  "Passo a passo simplificado para instalar e configurar reprodutores",
  "Ajuda com lentidão, tela preta e erros de conexão",
  "Suporte técnico humanizado em tempo real",
];

const INSTALL_CARDS = [
  {
    icon: ShieldCheck,
    title: "Instalação Segura",
    desc: "Localize os aplicativos oficiais direto das lojas de apps autorizadas.",
  },
  {
    icon: Languages,
    title: "Ajuste de Idioma e Interface",
    desc: "Deixe o aplicativo organizado, com menus e legendas configurados.",
  },
  {
    icon: FolderKanban,
    title: "Organização de Conteúdo",
    desc: "Aprenda a manusear pastas, categorias e favoritos dentro do reprodutor.",
  },
];

const TECH_PROBLEMS = [
  "Tela preta ou travamento ao iniciar o aplicativo",
  "Erros de rede, DNS ou tempo limite de carregamento",
  "Falha na sincronização de dados e menus desorganizados",
  "Incompatibilidade de resolução ou proporção de tela",
];

const FAQS = [
  {
    q: "Vocês vendem canais de TV fechada ou filmes?",
    a: "Não. Não comercializamos, hospedamos nem distribuímos nenhum sinal de canal de TV, filmes ou conteúdos protegidos. Nosso serviço é estritamente de suporte técnico e consultoria para configuração de softwares reprodutores de mídia de terceiros.",
  },
  {
    q: "Como recebo o atendimento técnico?",
    a: "O suporte é realizado diretamente com um técnico via WhatsApp, com instruções passo a passo em texto, áudio ou imagens para você aplicar diretamente no seu aparelho.",
  },
  {
    q: "Serve para qualquer modelo de TV?",
    a: "Atendemos Smart TVs com sistemas Android TV, Google TV, Tizen, webOS, Fire OS e aparelhos compatíveis homologados.",
  },
  {
    q: "O suporte é imediato?",
    a: "Sim, nossos especialistas respondem rapidamente pelo WhatsApp para guiar sua configuração.",
  },
];

const Index = () => {
  const [showWidgets, setShowWidgets] = useState(false);

  useEffect(() => {
    let done = false;
    const trigger = () => {
      if (done) return;
      done = true;
      cleanup();
      setShowWidgets(true);
    };
    const events = ["scroll", "pointerdown", "touchstart", "keydown"] as const;
    const opts: AddEventListenerOptions = { once: true, passive: true, capture: true };
    events.forEach((e) => window.addEventListener(e, trigger, opts));
    const timeoutId = window.setTimeout(trigger, 4000);
    const cleanup = () => {
      window.clearTimeout(timeoutId);
      events.forEach((e) => window.removeEventListener(e, trigger, opts));
    };
    return cleanup;
  }, []);

  useEffect(() => {
    document.title = "Suporte e Configuração de Aplicativos para Smart TV | Dica do Antenista";
    const desc = document.querySelector('meta[name="description"]');
    desc?.setAttribute(
      "content",
      "Ajuda especializada para instalar e configurar aplicativos e reprodutores de mídia em Smart TVs e dispositivos Android. Atendimento rápido via WhatsApp."
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
          <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 hidden h-96 w-96 rounded-full bg-primary/15 blur-3xl sm:block" />
          <div aria-hidden className="pointer-events-none absolute top-20 right-0 hidden h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl sm:block" />

          <div className="container relative max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-accent" />
              Suporte Especializado para Smart TV e Reprodutores de Mídia
            </div>

            <h1 className="font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Ajuda Especializada para{" "}
              <span className="relative inline-block">
                <span className="text-gradient-accent inline-block">Instalar e Configurar</span>
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-accent opacity-60" />
              </span>{" "}
              seu Aplicativo na TV
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
              Orientação técnica passo a passo para configurar reprodutores multimídia e players em Smart TVs e aparelhos Android compatíveis. Atendimento rápido e sem complicações via WhatsApp.
            </p>

            <ul className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-2 text-left text-sm text-foreground sm:grid-cols-2 sm:text-base">
              {HERO_BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span aria-hidden className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-3">
              <WhatsAppButton
                label="Falar com Suporte no WhatsApp"
                message="Olá, preciso de ajuda para instalar e configurar um aplicativo na minha TV."
                source="hero"
              />
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span><strong className="text-foreground">+5 mil</strong> clientes atendidos</span>
                <span className="hidden h-4 w-px bg-border sm:block" />
                <span><strong className="text-foreground">⭐ 4.9/5.0</strong> avaliação média</span>
              </div>
            </div>
          </div>
        </section>

        {/* SMART TV */}
        <section id="smart-tv" className="relative scroll-mt-24 py-16 sm:py-24">
          <div className="container grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-cta text-primary-foreground shadow-glow lg:mx-0">
              <Tv className="h-10 w-10" strokeWidth={2} />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Configuração de Aplicativos em <span className="text-gradient-primary">Smart TV</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-none">
                Auxiliamos na busca, instalação e configuração dos principais reprodutores de mídia nas lojas oficiais da sua Smart TV (sistemas Tizen, webOS e Android TV). Evite dores de cabeça e configure seu app com assistência técnica especializada.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <WhatsAppButton
                  variant="ghost"
                  label="Configurar na Minha Smart TV"
                  message="Olá, quero configurar um aplicativo na minha Smart TV."
                  source="smart-tv"
                />
              </div>
            </div>
          </div>
        </section>

        {/* DISPOSITIVOS ANDROID */}
        <section id="dispositivos-android" className="relative scroll-mt-24 py-16 sm:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-1/3 h-64 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container relative grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-cta text-primary-foreground shadow-glow lg:mx-0">
              <MonitorSmartphone className="h-10 w-10" strokeWidth={2} />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Suporte para <span className="text-gradient-primary">Dispositivos Android</span> e Reprodutores
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-none">
                Tem um dispositivo ou dongle Android compatível e não sabe como colocar o aplicativo para funcionar? Nossa equipe te orienta na escolha e configuração correta de players leves e estáveis para o seu aparelho.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <WhatsAppButton
                  variant="ghost"
                  label="Suporte para Dispositivo Android"
                  message="Olá, preciso de suporte para configurar um aplicativo no meu dispositivo Android."
                  source="dispositivos-android"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INSTALAÇÃO */}
        <section id="instalacao-players" className="relative scroll-mt-24 py-16 sm:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Passo a passo</span>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                Guia de <span className="text-gradient-primary">Instalação e Ajustes Finos</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {INSTALL_CARDS.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="glass-card group relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-cta text-primary-foreground shadow-glow">
                      <Icon className="h-7 w-7" strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{c.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center">
              <WhatsAppButton
                label="Quero Ajuda na Instalação"
                message="Olá, quero ajuda para instalar um aplicativo na minha TV."
                source="instalacao-players"
              />
            </div>
          </div>
        </section>

        {/* SUPORTE TÉCNICO */}
          <section id="suporte-tecnico" className="relative scroll-mt-24 py-16 sm:py-24">
            <div className="container max-w-4xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-cta text-primary-foreground shadow-glow">
                <Wrench className="h-8 w-8" strokeWidth={2.2} />
              </div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                Seu Aplicativo Apresentou <span className="text-gradient-accent">Falhas ou Travamentos?</span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Problemas comuns que ajudamos a resolver via suporte remoto:
              </p>

              <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
                {TECH_PROBLEMS.map((p) => (
                  <li key={p} className="glass-card flex items-start gap-3 rounded-2xl p-4">
                    <span aria-hidden className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
                    <span className="text-sm text-foreground sm:text-base">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex justify-center">
                <WhatsAppButton
                  label="Resolver Travamentos no WhatsApp"
                  message="Olá, meu aplicativo está travando ou com erro e preciso de suporte técnico."
                  source="suporte-tecnico"
                />
              </div>
            </div>
          </section>

        {/* FAQ */}
          <section id="faq-ajuda" className="relative scroll-mt-24 py-16 sm:py-24">
            <div className="container max-w-3xl">
              <div className="text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
                  <HelpCircle className="h-3.5 w-3.5 text-accent" />
                  Perguntas frequentes
                </div>
                <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  Perguntas <span className="text-gradient-accent">Frequentes</span>
                </h2>
              </div>

              <div className="mt-10 rounded-3xl border border-border/70 bg-gradient-card p-2 shadow-card-soft sm:p-4">
                <Accordion type="single" collapsible className="w-full">
                  {FAQS.map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/60 last:border-b-0">
                      <AccordionTrigger className="px-4 text-left text-base font-semibold hover:no-underline sm:text-lg">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

        {/* ATENDIMENTO / CTA FINAL */}
          <section id="atendimento" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
            <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
            <div className="container relative max-w-3xl text-center">
              <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Pronto para <span className="text-gradient-accent">Configurar seu Aplicativo</span> na TV?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Fale com um especialista agora mesmo e configure seu reprodutor sem perder tempo.
              </p>
              <div className="mt-8 flex justify-center">
                <WhatsAppButton
                  label="Chamar no WhatsApp Agora"
                  message="Olá, quero configurar meu aplicativo na TV agora."
                  source="atendimento"
                />
              </div>
            </div>
          </section>
      </main>

      <LazyOnVisible minHeight={200}>
        <Footer />
      </LazyOnVisible>
      {showWidgets && (
        <Suspense fallback={null}>
          <FloatingWhatsApp />
        </Suspense>
      )}
    </div>
  );
};

export default Index;
