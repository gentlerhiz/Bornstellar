import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CoreBrandSection from "@/components/sections/CoreBrandSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import ValuesSection from "@/components/sections/ValuesSection";
import StatsSection from "@/components/sections/StatsSection";
import LeadershipQuoteSection from "@/components/sections/LeadershipQuoteSection";
import CtaSection from "@/components/sections/CtaSection";
import AfricaFocusSection from "@/components/sections/AfricaFocusSection";
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
        overline="About Bornstellar"
        title="Built for Africa's complexity."
        subtitle="Bornstellar Limited is a Nigeria-incorporated multi-division platform delivering end-to-end solutions across Africa's most critical sectors — from digital transformation and food systems to infrastructure, energy, and governance."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
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
