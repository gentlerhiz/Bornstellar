"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function CoreBrandSection() {
  return (
    <section className="bg-[var(--bg-alt)] border-t border-[var(--border)]">
      <div className="grid lg:grid-cols-2 min-h-[640px]">
        {/* Left — text panel */}
        <div className="flex flex-col justify-center px-10 lg:px-16 py-24 lg:py-0">
          <FadeIn>
            <p className="text-xs text-[#E8500A] tracking-[0.3em] uppercase font-medium mb-6">
              Who We Are
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--fg)] leading-tight mb-8 max-w-lg">
              We build African platforms, not just businesses.
            </h2>
            <p className="text-base text-[var(--fg-muted)] leading-8 max-w-md mb-6">
              Bornstellar Limited is a Nigeria-incorporated multi-division
              platform delivering end-to-end solutions across Africa's most
              critical sectors — from digital transformation and food systems to
              infrastructure, energy, and governance.
            </p>
            <p className="text-base text-[var(--fg-muted)] leading-8 max-w-md mb-10">
              With an African-first strategy, we operate as a corporate
              integrator: aligning technology, capital, and execution
              capability to solve real-economy challenges at scale.
            </p>
            <Link
              href="/about"
              className="inline-flex h-11 px-8 items-center border border-[#E8500A] text-[#E8500A] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#E8500A] hover:text-white transition-all duration-300 self-start"
            >
              Our Full Story
            </Link>
          </FadeIn>
        </div>

        {/* Right — image panel */}
        <FadeIn delay={0.2} className="relative overflow-hidden min-h-[420px] lg:min-h-0">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=85&auto=format&fit=crop"
            alt="Africa infrastructure and development"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-alt)]/60 to-transparent" />
          {/* Vision quote */}
          <div className="absolute bottom-8 left-8 right-8">
            <blockquote className="text-sm text-white/70 italic leading-7 max-w-xs bg-[#0e0d0c]/60 backdrop-blur-sm p-5 border-l-2 border-[#E8500A]">
              "To be a leading African corporate platform that builds the
              infrastructure, institutions, and innovations powering the
              continent's next century of growth."
              <cite className="block mt-3 text-xs text-white/40 not-italic tracking-wider uppercase">
                — Bornstellar Vision
              </cite>
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
