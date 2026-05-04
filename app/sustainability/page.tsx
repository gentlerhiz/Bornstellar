import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PrioritiesSection from "@/components/sections/PrioritiesSection";
import CtaSection from "@/components/sections/CtaSection";
import SustainabilityOverviewSection from "@/components/sections/SustainabilityOverviewSection";
import SustainabilityImpactSection from "@/components/sections/SustainabilityImpactSection";
import SustainabilityCommitmentSection from "@/components/sections/SustainabilityCommitmentSection";

export const metadata: Metadata = {
  title: "Sustainability & Impact — Bornstellar Limited",
  description:
    "Bornstellar views sustainability as both a responsibility and a competitive advantage in building Africa's future.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        // overline="Sustainability & Impact"
        title="Responsibility as competitive advantage."
        subtitle="Bornstellar views sustainability not as a compliance obligation, but as a core driver of long-term value creation across all 12 divisions and every community we touch."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sustainability" },
        ]}
      />
      <SustainabilityOverviewSection />
      <PrioritiesSection />
      <SustainabilityImpactSection />
      <SustainabilityCommitmentSection />
      <CtaSection />
    </>
  );
}
