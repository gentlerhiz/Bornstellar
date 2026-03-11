import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { divisions } from "@/lib/divisions";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/sections/CtaSection";
import DivisionHeroBannerSection from "@/components/sections/DivisionHeroBannerSection";
import DivisionOverviewSection from "@/components/sections/DivisionOverviewSection";
import DivisionRelatedSection from "@/components/sections/DivisionRelatedSection";

const divisionImages: Record<string, string> = {
  "information-technology":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=85&auto=format&fit=crop",
  "agricultural-business":
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1400&q=85&auto=format&fit=crop",
  "real-estate":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=85&auto=format&fit=crop",
  "machinery-manufacturing":
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=85&auto=format&fit=crop",
  "construction-infrastructure":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85&auto=format&fit=crop",
  "general-trading":
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1400&q=85&auto=format&fit=crop",
  "oil-gas-services":
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&q=85&auto=format&fit=crop",
  "business-consulting":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&q=85&auto=format&fit=crop",
  "forensic-financial-services":
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=85&auto=format&fit=crop",
  automotive:
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=85&auto=format&fit=crop",
  "research-development":
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=1400&q=90&auto=format&fit=crop",
  "renewable-energy":
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=85&auto=format&fit=crop",
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
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=85&auto=format&fit=crop";

  const otherDivisions = divisions.filter((d) => d.slug !== slug).slice(0, 4);

  return (
    <>
      <PageHero
        overline={division.icon + " " + division.name}
        title={division.tagline}
        subtitle={division.overview.slice(0, 160) + "..."}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Divisions", href: "/divisions" },
          { label: division.name },
        ]}
      />
      <DivisionHeroBannerSection division={division} img={img} />
      <DivisionOverviewSection division={division} />
      <DivisionRelatedSection otherDivisions={otherDivisions} />
      <CtaSection />
    </>
  );
}