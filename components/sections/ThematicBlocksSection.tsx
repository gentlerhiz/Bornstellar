"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const pillars = [
  {
    number: "01",
    title: "Technology & Digital Infrastructure",
    description:
      "Future-proof IT services, platforms, and training that accelerate Africa's digital economy.",
    href: "/divisions/information-technology",
  },
  {
    number: "02",
    title: "Food & Agricultural Systems",
    description:
      "Integrated agriculture, livestock, and agro-trade capabilities that enhance food security and export competitiveness.",
    href: "/divisions/agricultural-business",
  },
  {
    number: "03",
    title: "Built Environment & Mobility",
    description:
      "Real estate, construction, machinery, and automotive solutions that connect people, markets, and industries.",
    href: "/divisions/construction-infrastructure",
  },
  {
    number: "04",
    title: "Energy & Natural Resources",
    description:
      "Renewables and oil & gas services that support a just and pragmatic energy transition in Africa.",
    href: "/divisions/renewable-energy",
  },
  {
    number: "05",
    title: "Capital, Governance & Assurance",
    description:
      "Business consulting and forensic financial services that strengthen institutions and investor confidence.",
    href: "/divisions/business-consulting",
  },
];

export default function ThematicBlocksSection() {
  return (
    <section className="bg-[var(--bg-alt)] py-14 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs text-[#E8500A] tracking-[0.3em] uppercase font-medium mb-4">
                What We Do
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--fg)] leading-tight max-w-xl">
                Five pillars. One integrated platform.
              </h2>
            </div>
            <Link
              href="/divisions"
              className="inline-flex h-10 px-6 items-center border border-[var(--border)] text-[var(--fg-muted)] text-xs font-semibold tracking-[0.15em] uppercase hover:border-[#E8500A] hover:text-[#E8500A] transition-all duration-300 shrink-0"
            >
              All 12 Divisions
            </Link>
          </div>
        </FadeIn>

        {/* Pillar rows */}
        <div className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {pillars.map((p, i) => (
            <FadeIn key={p.number} delay={i * 0.07}>
              <Link
                href={p.href}
                className="group grid grid-cols-[40px_1fr_auto] lg:grid-cols-[56px_1fr_1fr_auto] items-center gap-4 lg:gap-8 py-4 hover:bg-[var(--bg-card)] transition-colors duration-300 px-2"
              >
                {/* Number */}
                <span className="text-2xl font-bold text-[var(--border)] group-hover:text-[#E8500A]/25 transition-colors duration-300 select-none tabular-nums leading-none">
                  {p.number}
                </span>

                {/* Title */}
                <h3 className="text-sm font-semibold text-[var(--fg)] leading-snug group-hover:text-[#E8500A] transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Description — hidden on mobile, visible lg+ */}
                <p className="hidden lg:block text-xs text-[var(--fg-muted)] leading-6">
                  {p.description}
                </p>

                {/* Arrow */}
                <span className="text-[#E8500A] text-lg group-hover:translate-x-1 transition-transform duration-200 shrink-0">
                  →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
