"use client";

import FadeIn from "@/components/FadeIn";

const priorities = [
  {
    id: "01",
    category: "Economic",
    description:
      "Support inclusive growth, job creation, and local value addition through agriculture, manufacturing, infrastructure, and technology.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M4 24 L10 16 L16 19 L22 10 L28 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6 L28 6 L28 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "02",
    category: "Social",
    description:
      "Invest in skills, safety, and community partnerships around our projects and operations.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M8 26 C8 21.582 11.582 18 16 18 C20.418 18 24 21.582 24 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 24 C2 21 3.5 19 6 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="26" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M30 24 C30 21 28.5 19 26 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "03",
    category: "Environmental",
    description:
      "Promote resource efficiency, clean energy, and sustainable practices across divisions.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M16 28 C16 28 6 22 6 14 C6 9.582 10.582 6 16 6 C21.418 6 26 9.582 26 14 C26 22 16 28 16 28Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M16 28 L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 18 C16 18 20 16 22 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        <path d="M16 22 C16 22 12 20 10 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "04",
    category: "Governance",
    description:
      "Uphold strong corporate governance, forensic rigor, and transparent reporting.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-6 h-6" aria-hidden="true">
        <path d="M16 4 L26 8 L26 16 C26 21.523 21.523 26.77 16 28 C10.477 26.77 6 21.523 6 16 L6 8 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M11 16 L14.5 19.5 L21 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function PrioritiesSection() {
  return (
    <section className="py-12 lg:py-16 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs text-[#E8500A] tracking-[0.35em] uppercase font-medium mb-4">
                Our Priorities
              </p>
              
            </div>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed max-w-xs sm:text-right">
              Across every division and project, Bornstellar is guided by four interconnected commitments.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {priorities.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <div className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 flex items-start gap-5 hover:border-[#E8500A]/30 transition-colors duration-400">

                {/* Icon badge */}
                <div className="w-10 h-10 rounded-xl bg-[#E8500A]/10 text-[#E8500A] flex items-center justify-center shrink-0 group-hover:bg-[#E8500A] group-hover:text-white transition-all duration-300">
                  {p.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-bold text-[var(--fg)] group-hover:text-[#E8500A] transition-colors duration-300">
                    {p.category}
                  </h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-6">
                    {p.description}
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
