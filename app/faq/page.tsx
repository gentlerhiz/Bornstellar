import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordionSection from "@/components/sections/FaqAccordionSection";

export const metadata: Metadata = {
  title: "FAQ — Bornstellar Limited",
  description:
    "Frequently asked questions about Bornstellar, our divisions, partnerships, and careers.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        // overline="FAQ"
        title="Frequently asked questions."
        subtitle="Answers to the most common questions about Bornstellar, our divisions, partnerships, and careers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <FaqAccordionSection />
    </>
  );
}
