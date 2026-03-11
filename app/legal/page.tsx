import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LegalRegulatorySection from "@/components/sections/LegalRegulatorySection";
import LegalTermsSection from "@/components/sections/LegalTermsSection";
import LegalPrivacySection from "@/components/sections/LegalPrivacySection";

export const metadata: Metadata = {
  title: "Legal & Compliance — Bornstellar Limited",
  description:
    "Bornstellar Limited operates under the Companies and Allied Matters Act 2020, with full compliance across all regulated sectors.",
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        overline="Legal & Compliance"
        title="Operating with full transparency and legal rigour."
        subtitle="Bornstellar Limited is fully incorporated and compliant under Nigerian corporate law. We uphold the highest standards of regulatory adherence across every division and jurisdiction we operate in."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Legal & Compliance" }]}
      />
      <LegalRegulatorySection />
      <LegalTermsSection />
      <LegalPrivacySection />
    </>
  );
}
