import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import CareersWhyJoinSection from "@/components/sections/CareersWhyJoinSection";
import CareersTalentAreasSection from "@/components/sections/CareersTalentAreasSection";
import CareersGrowthSection from "@/components/sections/CareersGrowthSection";

export const metadata: Metadata = {
  title: "Careers — Bornstellar Limited",
  description:
    "Build an impactful career across multiple sectors while remaining on the African continent. Explore opportunities at Bornstellar Limited.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        // overline="Careers"
        title="Build Africa's future. Build yours."
        subtitle="Bornstellar offers high-calibre professionals the opportunity to build impactful careers across multiple sectors while remaining on the African continent — where the opportunity is largest."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />
      <CareersWhyJoinSection />
      <CareersTalentAreasSection />
      <CareersGrowthSection />
      <CtaSection />
    </>
  );
}
