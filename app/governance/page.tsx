import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LeadershipQuoteSection from "@/components/sections/LeadershipQuoteSection";
import CtaSection from "@/components/sections/CtaSection";
import GovernancePillarsSection from "@/components/sections/GovernancePillarsSection";
import GovernanceAccountabilitySection from "@/components/sections/GovernanceAccountabilitySection";
import GovernanceDirectorStandardsSection from "@/components/sections/GovernanceDirectorStandardsSection";

export const metadata: Metadata = {
  title: "Leadership & Governance — Bornstellar Limited",
  description:
    "Bornstellar is governed in line with the Companies and Allied Matters Act, 2020, with a board-led structure, clear delegation of authority, and rigorous accountability standards.",
};

export default function GovernancePage() {
  return (
    <>
      <PageHero
        overline="Leadership & Governance"
        title="Board-led. Ethics-driven. Built to last."
        subtitle="Bornstellar is governed in line with the Companies and Allied Matters Act, 2020, with a board-led structure, clear accountability frameworks, and zero tolerance for governance failures."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Governance" },
        ]}
      />
      <LeadershipQuoteSection />
      <GovernancePillarsSection />
      <GovernanceAccountabilitySection />
      <GovernanceDirectorStandardsSection />
      <CtaSection />
    </>
  );
}
