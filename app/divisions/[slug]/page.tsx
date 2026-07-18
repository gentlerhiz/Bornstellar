import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { divisions } from "@/lib/divisions";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import DivisionOverviewSection from "@/components/sections/DivisionOverviewSection";
// import DivisionShowcaseSection from "@/components/sections/DivisionShowcaseSection";
import DivisionRelatedSection from "@/components/sections/DivisionRelatedSection";

const divisionImages: Record<string, string> = {
  "information-technology":
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1400&q=85&auto=format&fit=crop",
  "agricultural-business":
    "/agriculture.jpeg",
  "real-estate":
    "https://images.unsplash.com/photo-1685266325553-56094896ce47?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "machinery-manufacturing":
    "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?q=80&w=1225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "construction-infrastructure":
    "/construction.jpeg",
  "general-trading":
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=85&auto=format&fit=crop",
  "oil-gas-services":
    "https://images.unsplash.com/photo-1678984236460-2ed63ae1c983?w=1400&q=85&auto=format&fit=crop",
  "business-consulting":
    "https://images.unsplash.com/photo-1573164574511-73c773193279?w=1400&q=85&auto=format&fit=crop",
  "forensic-financial-services":
    "/Money1.jpg",
  automotive:
    "/divisionsImages/Automotive%20Manufacturing%20%26%20Distribution/auto-assembly-line.jpg",
  "research-development":
    "/Droneguy1.jpeg",
  "renewable-energy":
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=85&auto=format&fit=crop",
  "media-digital-management":
    "/handsonlaptop.jpg",
};

export async function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const division = divisions.find((d) => d.slug === slug);
  if (!division) return {};
  return {
    title: `${division.name} — Bornstellar Limited`,
    description: division.overview,
  };
}

export default async function DivisionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const division = divisions.find((d) => d.slug === slug);
  if (!division) notFound();

  const img =
    divisionImages[division.slug] ??
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85&auto=format&fit=crop";

  const otherDivisions = divisions.filter((d) => d.slug !== slug).slice(0, 4);

  const heroOverline = division.businessName
    ? `${division.icon} ${division.businessName}`
    : undefined;

  return (
    <>
      <PageHero
        overline={heroOverline}
        title={division.tagline}
        subtitle={division.overview.slice(0, 180) + "…"}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Divisions", href: "/divisions" },
          { label: division.name },
        ]}
        bgImage={img}
      />
      <DivisionOverviewSection division={division} />
      {/* <DivisionShowcaseSection divisionName={division.name} images={showcaseImages} /> */}
      <DivisionRelatedSection otherDivisions={otherDivisions} />
      <CtaSection />
    </>
  );
}
