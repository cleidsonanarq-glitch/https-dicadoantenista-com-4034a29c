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
const WA_MSG = "Olá! Quero configurar o IBO Player na minha TV.";

const benefits = [
  { icon: Tv, title: "Compatível com Samsung Smart TV", desc: "IBO Player roda fluído em Smart TVs Samsung com Tizen, com acesso direto pela loja de apps." },
  { icon: Tv, title: "Compatível com LG Smart TV", desc: "Funciona em Smart TVs LG com webOS, com configuração guiada e estável." },
  { icon: Monitor, title: "Compatível com Android TV", desc: "Aplicativo IBO Player otimizado para Android TV, leve e rápido para abrir." },
  { icon: Cast, title: "Compatível com TV Box", desc: "Funciona em TV Box Android, MXQ, BTV e similares com acesso à internet." },
  { icon: Zap, title: "Configuração rápida e simples", desc: "Em poucos minutos seu IBO Player está instalado, ativado e pronto para usar." },
  { icon: Settings2, title: "Instalação guiada", desc: "Passo a passo simplificado, sem complicação técnica e sem dor de cabeça." },
  { icon: Headphones, title: "Suporte especializado via WhatsApp", desc: "Resposta humana em minutos, direto no WhatsApp, sem robô e sem espera." },
  { icon: Sparkles, title: "Atendimento humanizado", desc: "Equipe que conhece o IBO Player e resolve qualquer dúvida com agilidade." },
  { icon: CheckCircle2, title: "Streaming estável em HD", desc: "Transmissão contínua, sem travamentos e com experiência premium em alta qualidade." },
];

const devices = [
  { icon: Tv, name: "Samsung Smart TV" },
  { icon: Tv, name: "LG Smart TV" },
  { icon: Monitor, name: "Android TV" },
  { icon: Cast, name: "TV Box" },
  { icon: Cast, name: "Fire TV Stick" },
  { icon: Smartphone, name: "Celulares Android" },
  { icon: Smartphone, name: "iPhone" },
  { icon: Tablet, name: "iPad" },
];

const faqs = [
  { q: "O IBO Player funciona na TV Samsung?", a: "Sim. O IBO Player é compatível com diversos modelos de Smart TVs Samsung com Tizen, que possuem acesso à loja de aplicativos e conexão com a internet." },
  { q: "O IBO Player funciona na TV LG?", a: "Sim. O aplicativo pode ser utilizado em Smart TVs LG (webOS) compatíveis, com instalação simples e configuração guiada pelo nosso suporte no WhatsApp." },
  { q: "Posso usar o IBO Player na Android TV?", a: "Sim. O aplicativo funciona em Android TV e dispositivos compatíveis, com aplicativo leve e rápido para abrir." },
  { q: "Preciso de ajuda para configurar?", a: "Oferecemos suporte especializado para auxiliar durante toda a instalação e configuração do IBO Player na sua TV." },
  { q: "Como falar com o suporte?", a: "Basta clicar no botão do WhatsApp e falar diretamente com nossa equipe. Resposta humana em poucos minutos." },
  { q: "Funciona em TV Box?", a: "Sim. O IBO Player é compatível com TV Box Android, incluindo modelos populares como MXQ e BTV." },
  { q: "Precisa de internet muito rápida?", a: "Não. O aplicativo é leve e roda estável mesmo em conexões medianas. Para HD ideal, recomendamos pelo menos 10 Mbps." },
  { q: "A configuração é difícil?", a: "Não. Você não precisa entender de tecnologia — nosso suporte humano configura tudo com você pelo WhatsApp em poucos minutos." },
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

const IboPlayer = () => {
  const [showWidgets, setShowWidgets] = useState(false);

  useEffect(() => {
    document.title = "IBO Player para Samsung, LG e Android TV | Instalação e Suporte";
    const desc = document.querySelector('meta[name="description"]');
    const descContent = "Instale e configure o IBO Player na sua Smart TV Samsung, LG, Android TV ou TV Box com suporte especializado e atendimento rápido pelo WhatsApp.";
    if (desc) desc.setAttribute("content", descContent);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const prevCanonical = canonical.href;
    canonical.href = `${window.location.origin}/ibo-player`;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "iboplayer-faq-jsonld";
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
                IBO Player • Samsung • LG • Android TV
              </div>

              <h1 className="font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                IBO Player para Samsung, LG e{" "}
                <span className="relative inline-block">
                  <span className="text-gradient-accent inline-block">Android TV</span>
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-accent opacity-60" />
                </span>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
                Instale e configure o <span className="font-semibold text-foreground">IBO Player</span> na sua Smart TV com{" "}
                <span className="font-semibold text-foreground">suporte especializado</span>. Compatível com Samsung, LG, Android TV e TV Box, com{" "}
                <span className="font-semibold text-primary">atendimento direto pelo WhatsApp</span>.
              </p>

              <div className="mt-7 flex flex-col items-center gap-3 lg:items-start">
                <WhatsAppButton label="Configurar Meu IBO Player Agora" source="iboplayer-hero" message={WA_MSG} />
                <span className="text-center text-xs uppercase tracking-wider text-muted-foreground lg:text-left">
                  Resposta rápida • Configuração simples • Samsung, LG, Android TV
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
                  alt="IBO Player instalado em Smart TV Samsung, LG e Android TV com streaming estável em HD"
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
                      <p className="text-sm font-semibold text-foreground">IBO Player ativo</p>
                      <p className="truncate text-xs text-muted-foreground">Samsung • LG • Android TV • HD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AUTORIDADE */}
        <section className="relative py-12 sm:py-16">
          <div className="container max-w-4xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Autoridade no IBO Player
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Suporte Especializado para <span className="text-gradient-primary">IBO Player</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Se você precisa instalar, configurar ou ativar o IBO Player na sua Smart TV, nossa equipe pode ajudar.
              Atendemos usuários de <strong className="text-foreground">Samsung, LG, Android TV e TV Box</strong>,
              oferecendo suporte rápido para deixar o aplicativo funcionando corretamente.
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="relative py-16 sm:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-1/3 h-64 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="container relative">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Por que usar IBO Player com a gente
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                IBO Player com{" "}
                <span className="text-gradient-primary">configuração simples</span>
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
              <WhatsAppButton label="Configurar Meu IBO Player Agora" source="iboplayer-benefits" message={WA_MSG} />
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
                  Como instalar o <span className="text-gradient-accent">IBO Player na TV Samsung</span>
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    O IBO Player é compatível com diversas Smart TVs Samsung com sistema Tizen. Após instalar o aplicativo
                    na televisão pela loja de apps, basta realizar a configuração para começar a utilizar com streaming
                    estável em HD.
                  </p>
                  <p>
                    Conecte sua TV Samsung à internet, acesse a loja de aplicativos e busque por{" "}
                    <strong className="text-foreground">IBO Player</strong>. Caso tenha dúvidas durante o processo, oferecemos
                    suporte especializado para auxiliar na instalação e configuração passo a passo via WhatsApp.
                  </p>
                </div>
                <div className="mt-6">
                  <WhatsAppButton variant="ghost" label="Quero instalar na minha Samsung" source="iboplayer-seo-samsung" message="Quero instalar o IBO Player na minha TV Samsung." />
                </div>
              </article>

              <article>
                <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                  Como instalar o <span className="text-gradient-accent">IBO Player na TV LG</span>
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    Usuários de Smart TVs LG com webOS podem instalar e configurar o IBO Player de forma simples. Nossa
                    equipe auxilia em todas as etapas para garantir uma configuração rápida e sem complicações.
                  </p>
                  <p>
                    Acesse a LG Content Store pelo controle remoto, busque por <strong className="text-foreground">IBO Player</strong> e
                    inicie a instalação. Em caso de dúvida, chame nosso WhatsApp e fazemos juntos a configuração completa
                    do aplicativo na sua TV LG.
                  </p>
                </div>
                <div className="mt-6">
                  <WhatsAppButton variant="ghost" label="Quero instalar na minha LG" source="iboplayer-seo-lg" message="Quero instalar o IBO Player na minha TV LG." />
                </div>
              </article>

              <article>
                <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                  Como instalar o <span className="text-gradient-accent">IBO Player na Android TV</span>
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p>
                    O IBO Player também é compatível com Android TV e TV Box, oferecendo aplicativo leve, rápido para abrir
                    e com streaming estável em HD mesmo em conexões medianas.
                  </p>
                  <p>
                    A instalação na Android TV é feita pela Play Store ou através de configuração assistida. Nossa equipe
                    realiza todo o processo com você pelo WhatsApp, garantindo que o IBO Player rode fluído na sua TV.
                  </p>
                </div>
                <div className="mt-6">
                  <WhatsAppButton variant="ghost" label="Quero instalar na minha Android TV" source="iboplayer-seo-androidtv" message="Quero instalar o IBO Player na minha Android TV." />
                </div>
              </article>
            </div>
          </section>
        </LazyOnVisible>

        {/* DISPOSITIVOS COMPATÍVEIS */}
        <LazyOnVisible minHeight={400}>
          <section className="py-16 sm:py-24">
            <div className="container max-w-5xl">
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  IBO Player em qualquer tela
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Dispositivos <span className="text-gradient-primary">Compatíveis</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {devices.map((d) => {
                  const Icon = d.icon;
                  return (
                    <div
                      key={d.name}
                      className="glass-card flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" strokeWidth={2.2} />
                      </div>
                      <span className="text-sm font-semibold text-foreground sm:text-base">{d.name}</span>
                    </div>
                  );
                })}
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
                  Perguntas <span className="text-gradient-accent">sobre o IBO Player</span>
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
                Precisa de Ajuda com o <span className="text-gradient-accent">IBO Player?</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Fale agora com nossa equipe e receba suporte para instalar e configurar o IBO Player na sua Smart TV.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <WhatsAppButton label="Falar com o Suporte no WhatsApp" source="iboplayer-final" message={WA_MSG} />
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Atendimento humano • Samsung • LG • Android TV • TV Box
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

export default IboPlayer;
