import { lazy, Suspense, useEffect, useState } from "react";
import { Zap, Tv, HelpCircle, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import LazyOnVisible from "@/components/LazyOnVisible";

const Testimonials = lazy(() => import("@/components/Testimonials"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

const heroTV = "/img/hero-tv.webp";

export interface AdLandingConfig {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  heroAccent: string;
  heroPre: string;
  heroPost?: string;
  heroSubtitle: React.ReactNode;
  heroTrustLine?: string;
  heroQuickBenefits?: string[];
  heroImageAlt: string;
  heroBadgeTitle: string;
  heroBadgeDesc: string;
  ctaLabel: string;
  ctaMessage: string;
  ctaMicrocopy: string;
  benefitsEyebrow: string;
  benefitsTitlePre: string;
  benefitsTitleAccent: string;
  benefits: { icon: LucideIcon; title: string; desc: string }[];
  section2?: { title: string; text: string; cards: { icon: LucideIcon; title: string; desc: string }[] };
  seoBlocks: { h2Pre: string; h2Accent: string; paragraphs: string[]; ctaLabel: string; ctaMessage: string; source: string }[];
  faqTitleAccent: string;
  faqs: { q: string; a: string }[];
  source: string;
}

const AdLandingPage = ({ config }: { config: AdLandingConfig }) => {
  const [showWidgets, setShowWidgets] = useState(false);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = config.title;

    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute("content") ?? "";
    desc?.setAttribute("content", config.description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const created = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const prevCanonical = canonical.href;
    canonical.href = `${window.location.origin}${config.path}`;

    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: config.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "adlanding-faq-jsonld";
    script.text = JSON.stringify(faqLd);
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      if (desc) desc.setAttribute("content", prevDesc);
      if (canonical) {
        if (created) canonical.remove();
        else canonical.href = prevCanonical;
      }
      script.remove();
    };
  }, [config]);

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
                {config.eyebrow}
              </div>

              <h1 className="font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {config.heroPre}{" "}
                <span className="relative inline-block">
                  <span className="text-gradient-accent inline-block">{config.heroAccent}</span>
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-accent opacity-60" />
                </span>
                {config.heroPost ? <> {config.heroPost}</> : null}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
                {config.heroSubtitle}
              </p>

              <div className="mt-7 flex flex-col items-center gap-3 lg:items-start">
                <WhatsAppButton label={config.ctaLabel} source={`${config.source}-hero`} message={config.ctaMessage} />
                <span className="text-center text-xs uppercase tracking-wider text-muted-foreground lg:text-left">
                  {config.ctaMicrocopy}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground sm:gap-x-8 lg:justify-start">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-foreground sm:text-2xl">+5 mil</span> clientes atendidos
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
                  alt={config.heroImageAlt}
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
                      <p className="text-sm font-semibold text-foreground">{config.heroBadgeTitle}</p>
                      <p className="truncate text-xs text-muted-foreground">{config.heroBadgeDesc}</p>
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
                {config.benefitsEyebrow}
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                {config.benefitsTitlePre}{" "}
                <span className="text-gradient-primary">{config.benefitsTitleAccent}</span>
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {config.benefits.map((b) => {
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
              <WhatsAppButton label={config.ctaLabel} source={`${config.source}-benefits`} message={config.ctaMessage} />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Atendimento humano • Resposta em minutos
              </span>
            </div>
          </div>
        </section>

        {/* SEO BLOCKS */}
        <LazyOnVisible minHeight={600}>
          <section className="py-16 sm:py-24">
            <div className="container max-w-4xl space-y-12">
              {config.seoBlocks.map((b) => (
                <article key={b.h2Pre + b.h2Accent}>
                  <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                    {b.h2Pre}{" "}
                    <span className="text-gradient-accent">{b.h2Accent}</span>
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {b.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <div className="mt-6">
                    <WhatsAppButton variant="ghost" label={b.ctaLabel} source={b.source} message={b.ctaMessage} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </LazyOnVisible>

        {/* GARANTIA */}
        <section className="relative py-12">
          <div className="container max-w-4xl">
            <div className="glass-card rounded-3xl p-7 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold sm:text-2xl">
                    Garantia de atendimento até funcionar
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Nosso suporte acompanha você até o IBO Player estar 100% funcional na sua TV.
                    Se algo travar, seguimos com você no WhatsApp até resolver — sem robô, sem espera e sem custo surpresa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LazyOnVisible minHeight={600}>
          <Testimonials />
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
                  Perguntas <span className="text-gradient-accent">{config.faqTitleAccent}</span>
                </h2>
              </div>

              <div className="mt-10 rounded-3xl border border-border/70 bg-gradient-card p-2 shadow-card-soft sm:p-4">
                <Accordion type="single" collapsible className="w-full">
                  {config.faqs.map((item, i) => (
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

        <LazyOnVisible minHeight={400}>
          <FinalCTA />
        </LazyOnVisible>
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

export default AdLandingPage;
