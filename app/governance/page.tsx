import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import GovernanceDirectorStandardsSection from "@/components/sections/GovernanceDirectorStandardsSection";
import LeadershipTeamSection from "@/components/sections/LeadershipTeamSection";

export const metadata: Metadata = {
  title: "Leadership & Governance — Bornstellar Limited",
  description:
    "Bornstellar Limited is led by a team of seasoned professionals with deep expertise across industry, finance, and operations.",
};

export default function GovernancePage() {
  return (
    <>
      <PageHero
        overline="Leadership & Governance"
        title="Leadership Built on Integrity. Governance Anchored in Purpose."
        subtitle="Bornstellar Limited is led by a team of seasoned professionals with deep expertise across industry, finance, and operations. Our governance structure is designed to ensure accountability, strategic discipline, and sustainable value creation across all divisions and stakeholder relationships."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Leadership" },
        ]}
      />
      <LeadershipTeamSection />
      <GovernanceDirectorStandardsSection />
      <CtaSection />
    </>
  );
}
