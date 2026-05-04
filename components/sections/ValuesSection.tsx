"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import QuickFactsSection from "@/components/sections/QuickFactsSection";

const values = [
  {
    number: "01",
    title: "Integrity",
    description:
      "We conduct every business with transparency, honesty, and accountability — earning the trust of our clients, partners, and the communities we serve.",
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "We embrace bold thinking and technology-driven solutions to solve Africa's real-world challenges at scale.",
  },
  {
    number: "03",
    title: "Excellence",
    description:
      "We commit to the highest standards of quality across every division, every project, and every delivery — no exceptions.",
  },
  {
    number: "04",
    title: "Impact",
    description:
      "Every decision we make is measured against the value it creates — for people, businesses, and the broader African economy.",
  },
  {
    number: "05",
    title: "Sustainability",
    description:
      "We build for the long term. Our projects are designed to remain economically viable, environmentally responsible, and socially beneficial for generations.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-(--bg) py-18 border-t border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div>
              <p className="text-sm text-orange tracking-[0.3em] uppercase font-medium mb-4">
                OUR CORE VALUES
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-(--fg) leading-tight max-w-lg">
                Core principles that guide every decision.
              </h2>
            </div>
            <Link
              href="/about#values"
              className="text-xs text-(--fg-muted) tracking-[0.15em] uppercase font-medium hover:text-orange transition-colors duration-200 shrink-0"
            >
              About Our Culture →
            </Link>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v, i) => {
            const isDark = i % 2 === 1;
            return (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div
                  className={`p-8 flex flex-col gap-6 h-full group rounded-sm border ${
                    isDark
                      ? "bg-[#0e0d0c] border-[#2a2926]"
                      : "bg-(--bg) border-(--border)"
                  }`}
                >
                  <span
                    className={`text-4xl font-bold select-none leading-none transition-colors duration-300 ${
                      isDark
                        ? "text-white/10 group-hover:text-orange/30"
                        : "text-(--border) group-hover:text-orange/20"
                    }`}
                  >
                    {v.number}
                  </span>
                  <div>
                    <h3
                      className={`text-base font-semibold mb-3 group-hover:text-orange transition-colors duration-300 ${
                        isDark ? "text-white" : "text-(--fg)"
                      }`}
                    >
                      {v.title}
                    </h3>
                    <p
                      className={`text-sm leading-7 ${
                        isDark ? "text-white/50" : "text-(--fg-muted)"
                      }`}
                    >
                      {v.description}
                    </p>
                  </div>
                  {/* Bottom accent line on hover */}
                  <div className="mt-auto h-0.5 w-0 bg-orange group-hover:w-8 transition-all duration-400" />
                </div>
              </FadeIn>
            );
          })}

        </div>

        
      </div>
    </section>
  );
}
