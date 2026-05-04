import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import DivisionsCategoriesSection from "@/components/sections/DivisionsCategoriesSection";

export const metadata: Metadata = {
  title: "Our Divisions — Bornstellar Limited",
  description:
    "Bornstellar operates through 13 specialised divisions, each with clear sector focus and technical capabilities, integrated under a unified strategy.",
};

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        overline="Our Divisions"
        title="Driving growth across Africa's most critical industries."
        subtitle="At Bornstellar, our divisions operate as focused business units with dedicated sector expertise, unified by shared strategy, governance, and a commitment to sustainable growth and value creation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Divisions" }]}
        bgImage="/africa1.jpeg"
      />
      <DivisionsCategoriesSection />
      <CtaSection />
    </>
  );
}
