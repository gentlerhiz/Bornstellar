import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactMainSection from "@/components/sections/ContactMainSection";
import ContactRegionalSection from "@/components/sections/ContactRegionalSection";

export const metadata: Metadata = {
  title: "Contact & Locations — Bornstellar Limited",
  description:
    "Get in touch with Bornstellar Limited. Whether you're a business, government institution, investor, or prospective partner  we want to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        // overline="Contact & Locations"
        title="Let's build something together."
        subtitle="Whether you're a business, government institution, investor, development partner, or prospective team member — we want to hear from you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactMainSection />
      <ContactRegionalSection />
    </>
  );
}
