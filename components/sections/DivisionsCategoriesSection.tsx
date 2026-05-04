"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { divisions } from "@/lib/divisions";

const divisionImages: Record<string, string> = {
  "information-technology":
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=85&auto=format&fit=crop",
  "agricultural-business":
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=85&auto=format&fit=crop",
  "real-estate":
    "https://images.unsplash.com/photo-1685266325553-56094896ce47?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "machinery-manufacturing":
    "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?q=80&w=1225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "construction-infrastructure":
    "/construction.jpeg",
  "general-trading":
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=85&auto=format&fit=crop",
  "oil-gas-services":
    "https://images.unsplash.com/photo-1678984236460-2ed63ae1c983?w=900&q=85&auto=format&fit=crop",
  "business-consulting":
    "https://images.unsplash.com/photo-1573164574511-73c773193279?w=900&q=85&auto=format&fit=crop",
  "forensic-financial-services":
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=85&auto=format&fit=crop",
  automotive:
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=85&auto=format&fit=crop",
  "research-development":
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=900&q=90&auto=format&fit=crop",
  "renewable-energy":
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=85&auto=format&fit=crop",
  "media-digital-management":
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=85&auto=format&fit=crop",
};

export default function DivisionsCategoriesSection() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const target = document.elementFromPoint(event.clientX, event.clientY);
    const card = target?.closest("[data-division-slug]") as HTMLElement | null;
    const slug = card?.dataset.divisionSlug ?? null;
    setActiveSlug((current) => (slug && slug !== current ? slug : current));
  };

  return (
    <section className="py-20 border-t border-(--border) bg-(--bg)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-orange" />
            <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold">
              Divisions
            </p>
          </div>
        </FadeIn> */}

        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr]"
          onPointerMove={handlePointerMove}
        >
          {divisions.map((division, i) => (
            <FadeIn key={division.slug} delay={i * 0.05}>
              <div
                className="group relative block overflow-hidden bg-[#0e0d0c] border border-(--border) transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange/70"
                data-division-slug={division.slug}
                onMouseEnter={() => setActiveSlug(division.slug)}
                onFocus={() => setActiveSlug(division.slug)}
                onClick={() => setActiveSlug(division.slug)}
                tabIndex={0}
                role="button"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={
                      divisionImages[division.slug] ??
                      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=85&auto=format&fit=crop"
                    }
                    alt={division.name}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      activeSlug === division.slug
                        ? "opacity-100 scale-[1.03]"
                        : "opacity-85"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className={`pointer-events-none absolute inset-0 bg-orange/70 transition-opacity duration-500 ${
                      activeSlug === division.slug ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                <Link
                  href={`/divisions/${division.slug}`}
                  className={`absolute bottom-6 left-9 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/95 text-[#0e0d0c] text-2xl font-semibold shadow-lg border border-white/70 transition-all duration-300 hover:scale-105 hover:shadow-orange/40 focus-visible:scale-105 before:absolute before:-inset-3 before:rounded-full before:border before:border-white/50 before:transition-all before:duration-300 before:content-[''] hover:before:scale-105 hover:before:border-white/80 focus-visible:before:scale-105 focus-visible:before:border-white/80 ${
                    activeSlug === division.slug
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                  aria-label={`Open ${division.name}`}
                >
                  <span aria-hidden="true">+</span>
                </Link>

                <div
                  className={`pointer-events-none absolute inset-0 flex flex-col justify-end p-6 pb-24 transition-all duration-500 ${
                    activeSlug === division.slug
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white leading-snug">
                    {division.name}
                  </h3>
                  {division.slug === "media-digital-management" && (
                    <p className="mt-1 text-[11px] text-white/70 tracking-[0.12em] uppercase font-semibold">
                      Operating as: Zenith Multipurposes
                    </p>
                  )}
                  <p className="mt-3 text-sm text-white/80 leading-6 line-clamp-3">
                    {division.tagline}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
