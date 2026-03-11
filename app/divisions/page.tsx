import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import DivisionsStatsSection from "@/components/sections/DivisionsStatsSection";
import DivisionsCategoriesSection from "@/components/sections/DivisionsCategoriesSection";

export const metadata: Metadata = {
  title: "Our Divisions — Bornstellar Limited",
  description:
    "Bornstellar operates through 12 specialised divisions, each with clear sector focus and technical capabilities, integrated under a unified strategy.",
};

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        overline="Our Divisions"
        title="Twelve divisions. One integrated strategy."
        subtitle="Each division operates as a focused business unit with dedicated sector expertise, unified under Bornstellar's overarching strategy, shared services, and governance framework."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Divisions" }]}
      />
      <DivisionsStatsSection />
      <DivisionsCategoriesSection />
      <CtaSection />
    </>
  );
}
