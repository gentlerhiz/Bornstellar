"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function GoalsSection() {
  return (
    <section className="bg-[var(--bg)] py-20 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#E8500A]" />
            <p className="text-sm text-[#E8500A] tracking-[0.35em] uppercase font-semibold">Our Goals for Africa</p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <FadeIn>
              <h3 className="text-xl font-bold text-[var(--fg)]">Drive Industrialization and Local Production</h3>
              <p className="text-[var(--fg-muted)]">Build and scale local manufacturing and production capacity to reduce import dependence, strengthen value chains, and retain economic value within Africa.</p>
            </FadeIn>

            <FadeIn>
              <h3 className="text-xl font-bold text-[var(--fg)]">Deliver Integrated, Technology-Enabled Solutions</h3>
              <p className="text-[var(--fg-muted)]">Leverage technology, capital, and execution expertise to solve critical challenges across sectors such as agriculture, infrastructure, energy, and services.</p>
            </FadeIn>
          </div>

          <div className="space-y-6">
            <FadeIn>
              <h3 className="text-xl font-bold text-[var(--fg)]">Create Jobs and Develop Human Capital</h3>
              <p className="text-[var(--fg-muted)]">Generate sustainable employment opportunities while investing in skills development to empower a productive and competitive African workforce.</p>
            </FadeIn>

            <FadeIn>
              <h3 className="text-xl font-bold text-[var(--fg)]">Foster Sustainable Economic Growth and Partnerships</h3>
              <p className="text-[var(--fg-muted)]">Collaborate with governments, private sector actors, and development institutions to deliver projects that drive long-term economic resilience and improve living standards.</p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
