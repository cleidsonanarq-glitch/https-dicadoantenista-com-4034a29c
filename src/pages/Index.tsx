import { lazy, Suspense, useEffect, useState } from "react";
import {
  Wifi,
  Plug,
  Navigation,
  MessageCircle,
  Settings,
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
  "Orientação para os principais modelos de Smart TV",
  "Passo a passo simples para aparelhos de televisão conectados",
  "Ajuda com redes Wi-Fi, conexão de internet e ajustes gerais",
  "Atendimento humanizado em tempo real pelo WhatsApp",
];

const SERVICE_CARDS = [
  {
    icon: Wifi,
    title: "Otimização de Rede e Sinal",
    desc: "Orientação para estabilizar sua conexão Wi-Fi ou cabo de rede, reduzindo travamentos na reprodução de mídia.",
  },
  {
    icon: Plug,
    title: "Ajustes e Conexões do Aparelho",
    desc: "Passo a passo para organizar os menus, entradas HDMI, áudio e configurações gerais da sua TV.",
  },
  {
    icon: Navigation,
    title: "Orientação de Uso e Navegação",
    desc: "Suporte para aprender a navegar pela interface da TV e organizar seus aplicativos de entretenimento favoritos.",
  },
];

const HOW_IT_WORKS = [
  {
    icon: MessageCircle,
    title: "1. Inicie a conversa",
    desc: "Você clica e inicia uma conversa no WhatsApp.",
  },
  {
    icon: HelpCircle,
    title: "2. Explique sua dúvida",
    desc: "Explica a sua dúvida sobre a configuração da sua TV.",
  },
  {
    icon: Settings,
    title: "3. Receba a orientação",
    desc: "Nosso consultor guia você com instruções passo a passo em tempo real.",
  },
];

const FAQS = [
  {
    q: "Como funciona a consultoria?",
    a: "Você fala com um consultor pelo WhatsApp e recebe orientação prática, em passo a passo por texto, áudio ou imagens, para ajustar a conexão e as configurações do seu aparelho de TV.",
  },
  {
    q: "Vocês atendem qualquer modelo de Smart TV?",
    a: "Trabalhamos com os principais modelos de Smart TV e sistemas de TV modernos. A orientação considera as características de cada aparelho conectado.",
  },
  {
    q: "Vocês vendem algum serviço ou assinatura?",
    a: "Não. Somos um serviço independente de consultoria e suporte para conectividade doméstica. Não comercializamos assinaturas nem qualquer tipo de conteúdo.",
  },
  {
    q: "O atendimento é rápido?",
    a: "Sim, nossos consultores respondem rapidamente pelo WhatsApp para guiar sua configuração sem complicação.",
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
    document.title = "Consultoria e Orientação Especializada para Smart TVs | Dica do Antenista";
    const desc = document.querySelector('meta[name="description"]');
    desc?.setAttribute(
      "content",
      "Auxílio prático em conectividade residencial, redes Wi-Fi e configuração de aparelhos de TV. Fale com um especialista no WhatsApp."
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
              Consultoria para Smart TVs e Aparelhos Conectados
            </div>

            <h1 className="font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Consultoria e Orientação{" "}
              <span className="relative inline-block">
                <span className="text-gradient-accent inline-block">Especializada</span>
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-accent opacity-60" />
              </span>{" "}
              para Smart TVs
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
              Auxílio prático em conectividade residencial, redes Wi-Fi e configuração de aparelhos de TV para você aproveitar o melhor da sua tela.
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
                label="Falar com um Especialista no WhatsApp"
                message="Olá! Quero falar com um especialista sobre a configuração da minha Smart TV."
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
                Conectividade Residencial em <span className="text-gradient-primary">Smart TV</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-none">
                Orientamos os ajustes de redes Wi-Fi e acesso à internet nos principais modelos de Smart TV. A orientação considera o sistema e as características de cada aparelho de televisão conectado.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <WhatsAppButton
                  variant="ghost"
                  label="Ajustar a Conexão da Minha Smart TV"
                  message="Olá! Quero orientação para ajustar a conectividade da minha Smart TV."
                  source="smart-tv"
                />
              </div>
            </div>
          </div>
        </section>

        {/* APARELHOS CONECTADOS */}
        <section id="dispositivos" className="relative scroll-mt-24 py-16 sm:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-1/3 h-64 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container relative grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-cta text-primary-foreground shadow-glow lg:mx-0">
              <Plug className="h-10 w-10" strokeWidth={2} />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Ajustes para <span className="text-gradient-primary">Aparelhos Conectados</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-none">
                Seu aparelho de TV não conecta ou apresenta instabilidade? Nossa equipe orienta os ajustes de Wi-Fi, conexão e configurações gerais de acordo com o equipamento.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                <WhatsAppButton
                  variant="ghost"
                  label="Orientação para Meu Aparelho"
                  message="Olá! Preciso de orientação para configurar meu aparelho de TV conectado."
                  source="dispositivos"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="relative scroll-mt-24 py-16 sm:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Serviços oferecidos</span>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                Como podemos <span className="text-gradient-primary">ajudar você</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {SERVICE_CARDS.map((c) => {
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
                label="Falar com um Especialista"
                message="Olá! Quero orientação sobre os serviços de consultoria para minha Smart TV."
                source="servicos"
              />
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="relative scroll-mt-24 py-16 sm:py-24">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Simples e rápido</span>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                Como <span className="text-gradient-accent">funciona</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {HOW_IT_WORKS.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="glass-card rounded-3xl p-7 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-cta text-primary-foreground shadow-glow">
                      <Icon className="h-7 w-7" strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{s.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center">
              <WhatsAppButton
                label="Falar com um Especialista no WhatsApp"
                message="Olá! Quero iniciar uma conversa com um consultor sobre minha TV."
                source="como-funciona"
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
              Pronto para aproveitar o <span className="text-gradient-accent">melhor da sua TV</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Fale com um especialista agora mesmo e receba orientação prática para sua Smart TV.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton
                label="Falar com um Especialista no WhatsApp"
                message="Olá! Quero falar com um especialista sobre a configuração da minha Smart TV."
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
