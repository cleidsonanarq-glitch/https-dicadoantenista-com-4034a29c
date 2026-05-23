import { lazy, Suspense, useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Benefits from "@/components/Benefits";
import LazyOnVisible from "@/components/LazyOnVisible";

// Below-the-fold sections — split into separate chunks, mounted on scroll.
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const Footer = lazy(() => import("@/components/Footer"));

// Floating widgets — fixed position, no CLS impact, mounted on idle.
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

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
    // Fallback: garante exibição mesmo sem interação, mas bem depois do LCP
    const timeoutId = window.setTimeout(trigger, 4000);
    const cleanup = () => {
      window.clearTimeout(timeoutId);
      events.forEach((e) => window.removeEventListener(e, trigger, opts));
    };
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Benefits />
        <LazyOnVisible minHeight={600}>
          <HowItWorks />
        </LazyOnVisible>
        <LazyOnVisible minHeight={600}>
          <Testimonials />
        </LazyOnVisible>
        <LazyOnVisible minHeight={500}>
          <FAQ />
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

export default Index;
