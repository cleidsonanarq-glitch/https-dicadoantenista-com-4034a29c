import { lazy, Suspense, useEffect, useState } from "react";
import {
  Settings,
  Wifi,
  Headphones,
  Network,
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
  "Configuração de redes Wi-Fi em Smart TVs e dispositivos Android",
  "Ajustes de conexão, DNS e comunicação do equipamento",
  "Diagnóstico de lentidão, desconexões e falhas de acesso",
  "Assistência técnica humanizada em tempo real",
];

const INSTALL_CARDS = [
  {
    icon: Settings,
    title: "Configuração Segura",
    desc: "Ajuste as funções essenciais do equipamento com orientação técnica passo a passo.",
  },
  {
    icon: Wifi,
    title: "Ajustes de Rede Wi-Fi",
    desc: "Revise conexão, DNS e comunicação para melhorar o acesso à internet no aparelho.",
  },
  {
    icon: Headphones,
    title: "Diagnóstico Técnico",
    desc: "Identifique falhas de conectividade e receba instruções adequadas ao seu dispositivo.",
  },
];

const TECH_PROBLEMS = [
  "Wi-Fi conectado, mas sem acesso à internet",
  "Erros de rede, DNS ou tempo limite de carregamento",
  "Quedas frequentes ou sinal instável no equipamento",
  "Dificuldade de comunicação entre roteador e dispositivo",
];

const FAQS = [
  {
    q: "Quais problemas de conectividade vocês atendem?",
    a: "Ajudamos com configuração de Wi-Fi, DNS, acesso à internet, instabilidade de sinal e comunicação entre o roteador e dispositivos compatíveis.",
  },
  {
    q: "Como recebo o atendimento técnico?",
    a: "O suporte é realizado diretamente com um técnico via WhatsApp, com instruções passo a passo em texto, áudio ou imagens para você aplicar diretamente no seu aparelho.",
  },
  {
    q: "O atendimento serve para qualquer modelo de Smart TV?",
    a: "Atendemos Smart TVs Samsung, LG, Android TV, Google TV e dispositivos Android compatíveis. A orientação considera o modelo e o sistema de cada aparelho.",
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
    document.title = "Assistência Técnica para Conectividade e Configuração de Redes em Smart TVs Samsung, LG e Android";
    const desc = document.querySelector('meta[name="description"]');
    desc?.setAttribute(
      "content",
      "Assistência técnica para Wi-Fi, DNS e configuração de redes em Smart TVs Samsung, LG e Android. Atendimento especializado pelo WhatsApp."
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
              <Settings className="h-3.5 w-3.5 text-accent" />
              Assistência Técnica para Smart TVs e Dispositivos Android
            </div>

            <h1 className="font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Assistência Técnica para Conectividade e{" "}
              <span className="relative inline-block">
                <span className="text-gradient-accent inline-block">Configuração de Redes</span>
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-accent opacity-60" />
              </span>{" "}
              em Smart TVs Samsung, LG e Android
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
              Orientação especializada para configurar Wi-Fi, DNS e conexões de rede em Smart TVs Samsung, LG e dispositivos Android. Atendimento rápido e sem complicações pelo WhatsApp.
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
                message="Olá, preciso de assistência técnica para configurar a conectividade da minha Smart TV."
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
              <Wifi className="h-10 w-10" strokeWidth={2} />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Configuração de Rede em <span className="text-gradient-primary">Smart TV</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-none">
                Auxiliamos nos ajustes de Wi-Fi, DNS e acesso à internet em Smart TVs Samsung, LG e Android. A configuração considera o sistema e o modelo do equipamento para oferecer uma orientação técnica adequada.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <WhatsAppButton
                  variant="ghost"
                  label="Configurar Rede da Minha Smart TV"
                  message="Olá, quero ajuda para configurar a rede da minha Smart TV."
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
              <Network className="h-10 w-10" strokeWidth={2} />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Conectividade para <span className="text-gradient-primary">Dispositivos Android</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-none">
                Seu dispositivo Android não conecta ou apresenta instabilidade? Nossa equipe orienta os ajustes de Wi-Fi, DNS e comunicação com o roteador de acordo com as características do aparelho.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <WhatsAppButton
                  variant="ghost"
                  label="Suporte para Conectividade Android"
                  message="Olá, preciso de suporte para configurar a conexão do meu dispositivo Android."
                  source="dispositivos-android"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INSTALAÇÃO */}
        <section id="configuracao-redes" className="relative scroll-mt-24 py-16 sm:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Passo a passo</span>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                 Guia de <span className="text-gradient-primary">Configuração de Rede</span>
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
                label="Quero Ajuda na Configuração"
                message="Olá, quero ajuda para configurar a rede do meu equipamento."
                source="configuracao-redes"
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
                 Sua Conexão Apresenta <span className="text-gradient-accent">Falhas ou Instabilidade?</span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                 Problemas comuns que ajudamos a diagnosticar por assistência remota:
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
                  label="Resolver Problemas de Conexão"
                  message="Olá, minha conexão está instável e preciso de assistência técnica."
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
                 Precisa de Ajuda com a <span className="text-gradient-accent">Conectividade</span> da sua Smart TV?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                 Fale com um especialista e receba orientação para configurar a rede do seu equipamento.
              </p>
              <div className="mt-8 flex justify-center">
                <WhatsAppButton
                  label="Chamar no WhatsApp Agora"
                  message="Olá, quero assistência para configurar a conectividade da minha Smart TV."
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
