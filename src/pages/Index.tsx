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
const ChatBot = lazy(() => import("@/components/ChatBot"));

const Index = () => {
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
          <ChatBot />
        </Suspense>
      )}
    </div>
  );
};

export default Index;
