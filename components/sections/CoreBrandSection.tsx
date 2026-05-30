"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const facts = [
  { k: "Founded", v: "2025" },
  { k: "Headquarters", v: "Oluyole Estate, Ibadan, Oyo State" },
  { k: "Divisions", v: "13" },
  { k: "Businesses Served", v: "30+" },
];

export default function CoreBrandSection() {
  return (
    <section className="bg-[var(--bg-alt)] border-t border-[var(--border)] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left — text */}
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="text-sm text-[#E8500A] tracking-[0.32em] uppercase font-medium mb-4">
                Who We Are
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--fg)] leading-tight mb-8">
                Bornstellar Limited
              </h2>

              <div className="flex flex-col gap-6 text-[var(--fg-muted)] text-[15px] leading-8">
                <p>
                  Bornstellar Limited is a Nigeria-incorporated, privately held company established in 2025 as a diversified, multi-division platform designed to deliver integrated solutions across Africa's most critical sectors. Headquartered in Oluyole Estate, Ibadan, Oyo State, the company operates through specialized divisions spanning information technology, agriculture, real estate, manufacturing, construction, trading, energy, automotive, research, consulting, and forensic services.
                </p>
                <p>
                  The company was formed through the consolidation of two existing businesses — AFTRACON and Zenith Multipurposes — which now function as core divisions within the Bornstellar structure. Since inception, Bornstellar has served over 30 businesses across both B2B and B2C segments, establishing a foundation for scalable growth.
                </p>
                <p>
                  Bornstellar is structured as a corporate integrator, combining technology, capital, and execution capabilities to address real economy challenges. Our operating model emphasizes end-to-end delivery, enabling us to conceptualize, finance, develop, and manage projects that create measurable economic value.
                </p>
                <p>
                  With an African-first strategy, our mission is to contribute meaningfully to the continent's development by providing locally driven, value-added products and services that meet fundamental needs.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/divisions"
                  className="inline-flex h-11 px-8 items-center bg-[#E8500A] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#ff6b2b] transition-colors duration-300"
                >
                  Explore Divisions
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 px-8 items-center border border-[var(--border)] text-xs text-[var(--fg-muted)] font-semibold tracking-[0.15em] uppercase hover:border-[#E8500A] hover:text-[#E8500A] transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right — clean stats */}
          <aside className="lg:col-span-5">
            <FadeIn delay={0.12}>
              <div className="grid grid-cols-2 gap-px bg-[var(--border)]">
                {facts.map((f) => (
                  <div
                    key={f.k}
                    className="bg-[var(--bg-alt)] px-6 py-8 flex flex-col gap-2"
                  >
                    <span className="text-3xl lg:text-4xl font-bold text-[#E8500A] leading-none">
                      {f.v}
                    </span>
                    <span className="text-xs text-[var(--fg-faint)] tracking-[0.18em] uppercase font-medium">
                      {f.k}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-px bg-[var(--border)]">
                <div className="bg-[var(--bg-alt)] px-6 py-8">
                  <p className="text-sm text-[var(--fg-muted)] leading-7">
                    Bornstellar operates through specialized divisions and partnerships to deliver integrated, locally-driven solutions across the continent.
                  </p>
                </div>
              </div>
            </FadeIn>
          </aside>

        </div>
      </div>
    </section>
  );
}
