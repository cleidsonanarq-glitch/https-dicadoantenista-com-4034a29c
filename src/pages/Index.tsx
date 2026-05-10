import { lazy, Suspense, useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

// Only floating widgets stay deferred — they are fixed/positioned and
// don't influence document flow, so they can't cause CLS.
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
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
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
