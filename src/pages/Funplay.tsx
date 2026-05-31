import { lazy, Suspense, useEffect, useState } from "react";
import {
  Tv,
  Zap,
  HelpCircle,
  CheckCircle2,
  Headphones,
  Settings2,
  Sparkles,
  Smartphone,
  Tablet,
  Monitor,
  Cast,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import LazyOnVisible from "@/components/LazyOnVisible";

const Footer = lazy(() => import("@/components/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

const heroTV = "/img/hero-tv.webp";

const benefits = [
  { icon: Tv, title: "Compatível com Samsung Smart TV", desc: "Fun Play roda fluído em Smart TVs Samsung modernas com Tizen e acesso à loja de apps." },
  { icon: Tv, title: "Compatível com LG Smart TV", desc: "Funciona em Smart TVs LG com webOS, com configuração guiada e estável." },
  { icon: Cast, title: "Compatível com Roku TV", desc: "Instalação simples do Fun Play em Roku TV, com streaming sem travamentos." },
  { icon: Monitor, title: "Compatível com Android TV", desc: "Aplicativo Fun Play otimizado para Android TV, leve e rápido para abrir." },
  { icon: Cast, title: "Compatível com TV Box", desc: "Funciona em TV Box Android, MXQ, BTV e similares com acesso à internet." },
  { icon: Zap, title: "Instalação rápida", desc: "Em poucos minutos seu Fun Play está instalado e pronto para usar." },
  { icon: Settings2, title: "Configuração simples", desc: "Passo a passo simplificado, sem complicação técnica e sem dor de cabeça." },
  { icon: Headphones, title: "Atendimento via WhatsApp", desc: "Resposta humana em poucos minutos, direto no WhatsApp, sem robô." },
  { icon: Sparkles, title: "Suporte especializado", desc: "Equipe que conhece o Fun Play e resolve qualquer dúvida com agilidade." },
];

const devices = [
  { icon: Tv, name: "Samsung Smart TV" },
  { icon: Tv, name: "LG Smart TV" },
  { icon: Cast, name: "Roku TV" },
  { icon: Monitor, name: "Android TV" },
  { icon: Cast, name: "TV Box" },
  { icon: Cast, name: "Fire TV Stick" },
  { icon: Smartphone, name: "Celulares Android" },
  { icon: Smartphone, name: "iPhone" },
  { icon: Tablet, name: "Tablets" },
];

const faqs = [
  { q: "O Fun Play funciona na TV Samsung?", a: "Sim. O Fun Play é compatível com Smart TVs Samsung modernas (Tizen) que possuem acesso à loja de aplicativos e conexão com a internet. A instalação é simples e feita com nosso suporte pelo WhatsApp." },
  { q: "Como instalar o Fun Play na TV LG?", a: "Para instalar o Fun Play na TV LG (webOS), basta acessar a loja de aplicativos, localizar o Fun Play e seguir o passo a passo. Nosso suporte te guia em poucos minutos via WhatsApp." },
  { q: "O Fun Play funciona na Roku TV?", a: "Sim. O Fun Play funciona em Roku TV através da configuração correta. Nossa equipe orienta o processo completo pelo WhatsApp para deixar tudo funcionando rápido." },
  { q: "Posso usar o Fun Play no celular?", a: "Sim. O aplicativo Fun Play funciona em celulares Android e iPhone, além de tablets, permitindo que você assista em qualquer lugar." },
  { q: "O Fun Play funciona em TV Box?", a: "Sim. O Fun Play é compatível com TV Box Android, incluindo modelos populares como MXQ e BTV, com instalação rápida e estável." },
  { q: "Preciso de suporte para configurar?", a: "Você não precisa, mas nós recomendamos. Nosso suporte humano configura tudo com você no WhatsApp, garantindo que o Fun Play funcione sem travar." },
  { q: "Como ativar o Fun Play?", a: "A ativação do Fun Play é feita com poucos passos após a instalação. Chamando nosso WhatsApp, fazemos a ativação junto com você em poucos minutos." },
  { q: "O Fun Play funciona em Android TV?", a: "Sim. O Fun Play é totalmente compatível com Android TV, oferecendo aplicativo leve, rápido e com streaming estável em HD." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Funplay = () => {
  const [showWidgets, setShowWidgets] = useState(false);

  useEffect(() => {
    document.title = "Fun Play para Smart TV | Samsung, LG, Roku TV e TV Box";
    const desc = document.querySelector('meta[name="description"]');
    const descContent = "Instale e configure o Fun Play na sua Smart TV Samsung, LG, Roku TV, Android TV ou TV Box com suporte especializado e atendimento rápido via WhatsApp.";
    if (desc) desc.setAttribute("content", descContent);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const prevCanonical = canonical.href;
    canonical.href = `${window.location.origin}/funplay`;

    // FAQ JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "funplay-faq-jsonld";
    script.text = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);

    return () => {
      script.remove();
      if (canonical && prevCanonical) canonical.href = prevCanonical;
    };
  }, []);

  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    const trigger = () => setShowWidgets(true);
    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(trigger, { timeout: 2500 });
    } else {
      const id = window.setTimeout(trigger, 1800);
      return () => window.clearTimeout(id);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24">
          <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 hidden h-96 w-96 rounded-full bg-primary/15 blur-3xl sm:block" />
          <div aria-hidden className="pointer-events-none absolute top-20 right-0 hidden h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl sm:block" />

          <div className="container relative grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Zap className="h-3.5 w-3.5 text-accent" />
                Fun Play • Samsung • LG • Roku TV
              </div>

              <h1 className="font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Fun Play para Smart TV:{" "}
                <span className="relative inline-block">
                  <span className="text-gradient-accent inline-block">instalação rápida</span>
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-accent opacity-60" />
                </span>{" "}
                e suporte especializado
              </h1>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
                Configure o <span className="font-semibold text-foreground">Fun Play</span> na sua Smart TV{" "}
                <span className="font-semibold text-foreground">Samsung, LG, Roku TV, Android TV ou TV Box</span> com{" "}
                <span className="font-semibold text-primary">suporte especializado</span> e ativação rápida.
              </p>

              <div className="mt-7 flex flex-col items-center gap-3 lg:items-start">
                <WhatsAppButton label="Instalar Fun Play agora" source="funplay-hero" message="Olá! Quero instalar o Fun Play na minha TV." />
                <span className="text-center text-xs uppercase tracking-wider text-muted-foreground lg:text-left">
                  Resposta rápida • Instalação guiada • Samsung, LG, Roku TV
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground sm:gap-x-8 lg:justify-start">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-foreground sm:text-2xl">+5 mil</span> clientes ativos
                </div>
                <div className="hidden h-4 w-px bg-border sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-foreground sm:text-2xl">⭐ 4.9/5.0</span> avaliação média
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div aria-hidden className="absolute -inset-4 hidden rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl sm:block" />
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-card-soft" style={{ aspectRatio: "1 / 1" }}>
                <img
                  src={heroTV}
                  alt="Fun Play instalado em Smart TV Samsung, LG e Roku TV com streaming estável em HD"
                  width={1280}
                  height={1280}
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs">
                  <div className="glass-card flex items-center gap-3 rounded-2xl p-4">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Tv className="h-5 w-5 text-primary" />
                      <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">Fun Play ativo</p>
                      <p className="truncate text-xs text-muted-foreground">Samsung • LG • Roku • Sem travamentos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="relative py-16 sm:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-1/3 h-64 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container relative">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Por que usar Fun Play com a gente
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                Fun Play com{" "}
                <span className="text-gradient-primary">suporte especializado</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="glass-card group relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                  >
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-100" />
                    <div className="relative flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-cta text-primary-foreground shadow-glow">
                        <Icon className="h-7 w-7" strokeWidth={2.2} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold sm:text-2xl">{b.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col items-center gap-2">
              <WhatsAppButton label="Falar com o suporte agora" source="funplay-benefits" message="Olá! Quero instalar o Fun Play na minha TV." />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Atendimento humano • Resposta em minutos
              </span>
            </div>
          </div>
        </section>

        {/* SEO SECTIONS */}
        <LazyOnVisible minHeight={600}>
          <section className="py-16 sm:py-24">
            <div className="container max-w-4xl space-y-12">
              <article>
                <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                  Como instalar o <span className="text-gradient-accent">Fun Play na TV Samsung</span>
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Instalar o Fun Play na TV Samsung é simples quando você sabe o caminho certo. As Smart TVs Samsung
                    com sistema Tizen permitem instalar o aplicativo Fun Play diretamente pela loja de apps ou através
                    de configuração assistida, garantindo streaming estável em HD em todos os canais e conteúdos do seu interesse.
                  </p>
                  <p>
                    Para começar, conecte sua TV Samsung à internet (preferencialmente cabo ou Wi-Fi 5GHz), acesse o menu
                    principal e localize a loja de aplicativos. Em seguida, busque por <strong className="text-foreground">Fun Play</strong>{" "}
                    e siga as orientações de instalação. Caso o app não esteja disponível diretamente no seu modelo, nosso
                    suporte especializado configura o Fun Play na sua Samsung Smart TV passo a passo, em poucos minutos via WhatsApp.
                  </p>
                  <p>
                    Após instalar, basta abrir o Fun Play, fazer a ativação com os dados que enviamos e aproveitar.
                    Se a TV travar, der erro ou pedir código, chame nosso atendimento — resolvemos rápido e sem complicação.
                  </p>
                </div>
                <div className="mt-6">
                  <WhatsAppButton variant="ghost" label="Quero instalar na minha Samsung" source="funplay-seo-samsung" message="Quero instalar o Fun Play na minha TV Samsung." />
                </div>
              </article>

              <article>
                <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                  Como instalar o <span className="text-gradient-accent">Fun Play na TV LG</span>
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    As Smart TVs LG utilizam o sistema webOS, que é leve, rápido e totalmente compatível com o aplicativo
                    Fun Play. Para instalar o Fun Play na TV LG, você precisa apenas de uma conexão estável com a internet
                    e seguir o passo a passo correto — algo que fazemos junto com você pelo WhatsApp, sem você precisar
                    se preocupar com termos técnicos.
                  </p>
                  <p>
                    Acesse a LG Content Store pelo controle remoto, busque por <strong className="text-foreground">Fun Play</strong> e
                    inicie a instalação. Caso o aplicativo não apareça, oferecemos uma alternativa segura usando o modo de
                    desenvolvedor da LG ou aplicativos compatíveis que reproduzem o Fun Play com a mesma qualidade e estabilidade.
                  </p>
                  <p>
                    Nosso suporte especializado entende todas as versões do webOS e garante que o Fun Play rode com fluidez,
                    sem travamentos, mesmo em modelos mais antigos da LG. Chame no WhatsApp e fazemos juntos.
                  </p>
                </div>
                <div className="mt-6">
                  <WhatsAppButton variant="ghost" label="Quero instalar na minha LG" source="funplay-seo-lg" message="Quero instalar o Fun Play na minha TV LG." />
                </div>
              </article>

              <article>
                <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                  Como instalar o <span className="text-gradient-accent">Fun Play na Roku TV</span>
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    A Roku TV é uma das plataformas mais populares para streaming no Brasil, e o Fun Play pode ser configurado
                    nela de forma simples com a orientação certa. Como o sistema Roku tem uma loja de canais própria,
                    a instalação do Fun Play em Roku TV exige um passo a passo específico — e é exatamente isso que nosso
                    suporte faz com você no WhatsApp.
                  </p>
                  <p>
                    Conectamos sua Roku TV à internet, configuramos o canal correto para reproduzir o Fun Play e validamos
                    a ativação. Em poucos minutos você já está assistindo com qualidade HD, sem travamentos e com toda
                    a estabilidade que a plataforma Roku oferece.
                  </p>
                  <p>
                    Se você tem Roku Express, Roku Stick ou uma Smart TV com Roku integrado, conseguimos te atender.
                    Basta chamar no WhatsApp para receber o atendimento humano e instalar o Fun Play hoje mesmo.
                  </p>
                </div>
                <div className="mt-6">
                  <WhatsAppButton variant="ghost" label="Quero instalar na minha Roku" source="funplay-seo-roku" message="Quero instalar o Fun Play na minha Roku TV." />
                </div>
              </article>
            </div>
          </section>
        </LazyOnVisible>

        {/* DEVICES */}
        <LazyOnVisible minHeight={500}>
          <section className="relative py-16 sm:py-24">
            <div className="container">
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Multiplataforma
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Dispositivos compatíveis com{" "}
                  <span className="text-gradient-primary">Fun Play</span>
                </h2>
                <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                  O Fun Play roda na maioria das Smart TVs, TV Boxes, celulares e tablets do mercado.
                </p>
              </div>

              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {devices.map((d) => {
                  const Icon = d.icon;
                  return (
                    <li
                      key={d.name}
                      className="glass-card flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cta text-primary-foreground shadow-glow">
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </div>
                      <span className="text-sm font-semibold text-foreground sm:text-base">
                        {d.name}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-12 flex flex-col items-center gap-2">
                <WhatsAppButton label="Configurar Fun Play no meu dispositivo" source="funplay-devices" message="Quero configurar o Fun Play no meu dispositivo." />
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Compatível com Samsung, LG, Roku, Android TV e TV Box
                </span>
              </div>
            </div>
          </section>
        </LazyOnVisible>

        {/* FAQ */}
        <LazyOnVisible minHeight={500}>
          <section id="faq" className="relative py-20 sm:py-28">
            <div className="container max-w-3xl">
              <div className="text-center">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
                  <HelpCircle className="h-3.5 w-3.5 text-accent" />
                  Perguntas frequentes
                </div>
                <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  Perguntas <span className="text-gradient-accent">sobre o Fun Play</span>
                </h2>
              </div>

              <div className="mt-10 rounded-3xl border border-border/70 bg-gradient-card p-2 shadow-card-soft sm:p-4">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border-b border-border/60 last:border-b-0"
                    >
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
        </LazyOnVisible>

        {/* FINAL CTA */}
        <LazyOnVisible minHeight={400}>
          <section className="relative overflow-hidden py-20 sm:py-28">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="container relative max-w-3xl text-center">
              <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Pronto para instalar o{" "}
                <span className="text-gradient-accent">Fun Play</span> na sua TV?
              </h2>
              <p className="mt-5 text-base text-muted-foreground sm:text-lg">
                Fale com nosso suporte especializado pelo WhatsApp e tenha o Fun Play funcionando em poucos minutos
                na sua Smart TV Samsung, LG, Roku TV, Android TV ou TV Box.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <WhatsAppButton label="Quero instalar o Fun Play agora" source="funplay-final" message="Quero instalar o Fun Play na minha TV agora!" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Resposta em minutos • Atendimento humano
                </span>
              </div>
            </div>
          </section>
        </LazyOnVisible>
      </main>

      <LazyOnVisible minHeight={200}>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </LazyOnVisible>

      {showWidgets && (
        <Suspense fallback={null}>
          <FloatingWhatsApp />
        </Suspense>
      )}
    </div>
  );
};

export default Funplay;
