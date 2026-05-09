import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Below-the-fold: loaded lazily to improve LCP/TTI on mobile
const Problems = lazy(() => import("@/components/Problems"));
const Benefits = lazy(() => import("@/components/Benefits"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));
const ChatBot = lazy(() => import("@/components/ChatBot"));

const SectionFallback = () => <div aria-hidden className="min-h-[280px]" />;

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Problems />
          <Benefits />
          <HowItWorks />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <FloatingWhatsApp />
        <ChatBot />
      </Suspense>
    </div>
  );
};

export default Index;
