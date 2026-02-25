"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { divisions } from "@/lib/divisions";

const divisionImages: Record<string, string> = {
  "information-technology":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=85&auto=format&fit=crop",
  "agricultural-business":
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=85&auto=format&fit=crop",
  "real-estate":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85&auto=format&fit=crop",
  "machinery-manufacturing":
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=85&auto=format&fit=crop",
  "construction-infrastructure":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85&auto=format&fit=crop",
  "general-trading":
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=85&auto=format&fit=crop",
  "oil-gas-services":
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=85&auto=format&fit=crop",
  "business-consulting":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=85&auto=format&fit=crop",
  "forensic-financial-services":
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=85&auto=format&fit=crop",
  "automotive":
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=85&auto=format&fit=crop",
  "research-development":
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&q=90&auto=format&fit=crop",
  "renewable-energy":
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=85&auto=format&fit=crop",
};

const divisionCategories = [
  { label: "All", slugs: divisions.map((d) => d.slug) },
  { label: "Technology", slugs: ["information-technology"] },
  { label: "Agriculture", slugs: ["agricultural-business"] },
  {
    label: "Built Environment",
    slugs: [
      "real-estate",
      "machinery-manufacturing",
      "construction-infrastructure",
      "automotive",
    ],
  },
  {
    label: "Energy",
    slugs: ["oil-gas-services", "renewable-energy"],
  },
  {
    label: "Governance",
    slugs: [
      "general-trading",
      "business-consulting",
      "forensic-financial-services",
      "research-development",
    ],
  },
];

export default function DivisionsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const activeSlugs =
    divisionCategories.find((c) => c.label === activeFilter)?.slugs ??
    divisions.map((d) => d.slug);
  const filtered = divisions.filter((d) => activeSlugs.includes(d.slug));

  function updateArrows() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }

  function scroll(dir: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 360 : -360, behavior: "smooth" });
  }

  function handleFilter(label: string) {
    setActiveFilter(label);
    setTimeout(() => {
      scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
      updateArrows();
    }, 50);
  }

  return (
    <section className="bg-[var(--bg-alt)] py-18 border-t border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header row */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs text-[#E8500A] tracking-[0.3em] uppercase font-medium mb-4">
                Our Divisions
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--fg)] leading-tight max-w-xl">
                12 specialised divisions,
                <br className="hidden sm:block" /> one unified strategy.
              </h2>
            </div>

            {/* Arrow nav */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="w-11 h-11 flex items-center justify-center border border-[var(--border)] text-[var(--fg-muted)] hover:border-[#E8500A] hover:text-[#E8500A] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="w-11 h-11 flex items-center justify-center border border-[var(--border)] text-[var(--fg-muted)] hover:border-[#E8500A] hover:text-[#E8500A] disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.08}>
          <div className="flex items-center gap-2 flex-wrap mb-10">
            {divisionCategories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => handleFilter(cat.label)}
                className={`h-8 px-4 text-xs font-semibold tracking-[0.12em] uppercase border transition-all duration-200 ${
                  activeFilter === cat.label
                    ? "bg-[#E8500A] border-[#E8500A] text-white"
                    : "border-[var(--border)] text-[var(--fg-muted)] hover:border-[#E8500A] hover:text-[#E8500A]"
                }`}
              >
                {cat.label}
                {cat.label !== "All" && (
                  <span className="ml-1.5 opacity-60">
                    {cat.slugs.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="flex gap-5 overflow-x-auto pb-4 scroll-smooth no-scrollbar snap-carousel"
        >
          {filtered.map((div, i) => (
            <motion.div
              key={div.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              style={{ scrollSnapAlign: "start" }}
              className="shrink-0 w-[300px] sm:w-[340px]"
            >
              <Link
                href={`/divisions/${div.slug}`}
                className="group flex flex-col h-full bg-[var(--bg)] border border-[var(--border)] hover:border-[#E8500A] hover:shadow-xl transition-all duration-300 overflow-hidden rounded-sm"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-[var(--bg-card)]">
                  <Image
                    src={
                      divisionImages[div.slug] ??
                      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85&auto=format&fit=crop"
                    }
                    alt={div.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 300px, 340px"
                  />
                  {/* Number badge */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 bg-[#0e0d0c]/65 backdrop-blur-sm text-white text-[10px] font-semibold tracking-[0.2em] tabular-nums">
                    {String(div.id).padStart(2, "0")}
                  </span>
                  {/* Orange bottom line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#E8500A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-6 pt-5 pb-4 gap-2">
                  <h3 className="text-base font-bold text-[var(--fg)] leading-snug group-hover:text-[#E8500A] transition-colors duration-200">
                    {div.name}
                  </h3>
                  <p className="text-xs text-[var(--fg-muted)] font-medium tracking-wide leading-relaxed">
                    {div.tagline}
                  </p>
                </div>

                {/* Footer CTA */}
                <div className="border-t border-[var(--border)] px-6 py-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--fg-faint)] tracking-[0.1em] uppercase group-hover:text-[#E8500A] transition-colors duration-200">
                    Explore division
                  </span>
                  <span className="text-[#E8500A] group-hover:translate-x-1 transition-transform duration-200 text-sm">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <FadeIn delay={0.2}>
          <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <p className="text-sm text-[var(--fg-muted)] leading-7 max-w-lg">
              Each division operates with dedicated leadership and deep sector expertise —
              integrated under one parent company and a unified governance framework.
            </p>
            <Link
              href="/divisions"
              className="inline-flex h-11 px-8 items-center bg-[#E8500A] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#ff6b2b] transition-colors duration-300 shrink-0"
            >
              All 12 Divisions
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
