"use client";

import FadeIn from "@/components/FadeIn";

const quickFacts = [
  { number: "12", label: "Core Divisions", sub: "under one parent company" },
  { number: "2025", label: "Year Founded", sub: "Incorporated Jan 23, 2025" },
  { number: "NGN", label: "Jurisdiction", sub: "CAMA 2020, Nigeria" },
  { number: "5+", label: "Sectors", sub: "Tech, Agri, Energy, Infrastructure, Finance" },
  { number: "3", label: "African Regions", sub: "West, East & Southern Africa focus" },
];

export default function QuickFactsSection() {
  return (
    <section className="bg-[#0e0d0c] border-t border-white/8 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs text-[#E8500A] tracking-[0.3em] uppercase font-medium mb-12 text-center">
            Quick Facts
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/8">
          {quickFacts.map((fact, i) => (
            <FadeIn key={fact.label} delay={i * 0.07}>
              <div className="bg-[#141311] px-6 py-8 flex flex-col gap-2 text-center group hover:bg-[#1a1916] transition-colors duration-300">
                <span className="text-3xl lg:text-4xl font-bold text-white group-hover:text-[#E8500A] transition-colors duration-300">
                  {fact.number}
                </span>
                <span className="text-xs font-semibold text-white/60 tracking-[0.1em] uppercase">
                  {fact.label}
                </span>
                <span className="text-xs text-white/25 leading-5">
                  {fact.sub}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
