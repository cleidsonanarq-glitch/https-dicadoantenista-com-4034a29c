import { lazy, Suspense, useEffect, useState } from "react";
import { Tv, Zap, HelpCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Problems from "@/components/Problems";
import WhatsAppButton from "@/components/WhatsAppButton";
import LazyOnVisible from "@/components/LazyOnVisible";
import heroTV from "@/assets/hero-tv.webp";
import heroTVMobile from "@/assets/hero-tv-720.webp";

const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

export interface LandingVariantConfig {
  eyebrow: string;
  headlinePre: string;
  headlineAccent: string;
  headlinePost: string;
  subheadline: React.ReactNode;
  heroAlt: string;
  heroStatusTitle: string;
  heroStatusDesc: string;
  benefitsEyebrow: string;
  benefitsTitlePre: string;
  benefitsTitleAccent: string;
  benefits: { icon: LucideIcon; title: string; desc: string }[];
  faqTitleAccent: string;
  faqs: { q: string; a: string }[];
  ctaMicrocopy: string;
}

const LandingVariant = ({ config }: { config: LandingVariantConfig }) => {
  const [showWidgets, setShowWidgets] = useState(false);

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
                {config.headlinePre}{" "}
                <span className="relative inline-block">
                  <span className="text-gradient-accent inline-block">{config.headlineAccent}</span>
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-accent opacity-60" />
                </span>{" "}
                {config.headlinePost}
              </h1>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
                {config.subheadline}
              </p>

              <div className="mt-7 flex flex-col items-center gap-3 lg:items-start">
                <WhatsAppButton label="Falar com o suporte agora" source="hero" />
                <span className="text-center text-xs uppercase tracking-wider text-muted-foreground lg:text-left">
                  {config.ctaMicrocopy}
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
                <picture>
                  <source media="(max-width: 640px)" srcSet={heroTVMobile} type="image/webp" />
                  <img
                    src={heroTV}
                    alt={config.heroAlt}
                    width={1280}
                    height={1280}
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </picture>
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xs">
                  <div className="glass-card flex items-center gap-3 rounded-2xl p-4">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20">
                      <Tv className="h-5 w-5 text-primary" />
                      <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-card bg-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">{config.heroStatusTitle}</p>
                      <p className="truncate text-xs text-muted-foreground">{config.heroStatusDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Problems />

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

            <div className="grid gap-5 md:grid-cols-2">
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
              <WhatsAppButton label="Falar com o suporte agora" source="benefits" />
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {config.ctaMicrocopy}
              </span>
            </div>
          </div>
        </section>

        <LazyOnVisible minHeight={600}>
          <HowItWorks />
        </LazyOnVisible>

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

export default LandingVariant;
