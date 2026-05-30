import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CoreBrandSection from "@/components/sections/CoreBrandSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import ValuesSection from "@/components/sections/ValuesSection";
import CtaSection from "@/components/sections/CtaSection";
import GoalsSection from "@/components/sections/GoalsSection";
import QuickFactsSection from "@/components/sections/QuickFactsSection";

export const metadata: Metadata = {
  title: "About Bornstellar — Nigeria's Multi-Division Corporate Platform",
  description:
    "Learn about Bornstellar Limited — our vision, mission, core values, and Africa-first strategy across 12 specialised divisions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        // overline="About Bornstellar"
        title="The partner your business needs across every sector that matters."
        subtitle="We are a multi-division company delivering Solutions from digital transformation and Agriculture to infrastructure, energy, and advisory services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        bgImage="/Information.jpeg"
      />
      <CoreBrandSection />
      <GoalsSection />
      <VisionMissionSection />
      <ValuesSection />
      
      {/* <AfricaFocusSection /> */}
      
      <QuickFactsSection />
      {/* <StatsSection /> */}
      {/* <LeadershipQuoteSection /> */}
      <CtaSection />
    </>
  );
}
