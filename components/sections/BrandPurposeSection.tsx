"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function BrandPurposeSection() {
  return (
    <section className="bg-[var(--bg)] py-24 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <FadeIn>
            {/* Overline */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#E8500A]" />
              <p className="text-xs text-[#E8500A] tracking-[0.35em] uppercase font-semibold">
                Brand Purpose
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--fg)] leading-[1.08] tracking-tight mb-8">
              Transforming Africa's potential into enduring prosperity.
            </h2>

            {/* Divider */}
            <div className="w-12 h-[2px] bg-[#E8500A] mb-8" />

            {/* Body */}
            <p className="text-base text-[var(--fg-muted)] leading-8 mb-10">
              We partner with businesses, governments, and communities to design
              and execute solutions that create jobs, enable inclusive growth,
              and strengthen Africa's position in global value chains.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/about"
                className="inline-flex h-12 px-8 items-center bg-[#E8500A] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#ff6b2b] transition-colors duration-300"
              >
                Our Story
              </Link>
              <Link
                href="/divisions"
                className="inline-flex items-center gap-2 text-xs text-[var(--fg-muted)] hover:text-[#E8500A] font-semibold tracking-[0.12em] uppercase transition-colors duration-200"
              >
                Explore Divisions
                <span className="text-[#E8500A]">→</span>
              </Link>
            </div>
          </FadeIn>

          {/* Right — image */}
          <FadeIn delay={0.15} className="relative overflow-hidden rounded-sm aspect-[4/3] lg:aspect-[5/4]">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=85&auto=format&fit=crop"
              alt="Earth from space with Africa in view — global connectivity"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle warm overlay */}
            <div className="absolute inset-0 bg-[#E8500A]/8 mix-blend-multiply" />
            {/* Bottom caption strip */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-[#0e0d0c]/70 backdrop-blur-sm flex items-center gap-3">
              <div className="w-1 h-6 bg-[#E8500A] shrink-0" />
              <p className="text-xs text-white/70 leading-snug tracking-wide">
                African-first. Globally competitive. Built for the continent's next century.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
