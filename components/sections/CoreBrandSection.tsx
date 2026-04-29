"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function CoreBrandSection() {
  const facts = [
    { k: "Founded", v: "2025" },
    { k: "Headquarters", v: "Ibadan, Oyo State" },
    { k: "Divisions", v: "12 specialised divisions" },
    { k: "Businesses served", v: "30+" },
    // { k: "Sectors", v: "Technology, Agriculture, Energy, Infrastructure +" },
  ];

  return (
    <section className="bg-[var(--bg-alt)] border-t border-[var(--border)] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="max-w-2xl">
                <p className="text-sm text-[#E8500A] tracking-[0.32em] uppercase font-normal mb-4">
                  Who We Are
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--fg)] leading-tight mb-6">
                  Bornstellar Limited
                </h2>
              </div>

              <div className="prose prose-invert text-[var(--fg-muted)] max-w-2xl prose-p:leading-8 prose-p:font-normal prose-p:text-[15px] lg:prose-p:text-base">
                <p>
                  Bornstellar Limited is a Nigeria-incorporated, privately held company established in 2025 as a diversified, multi-division platform designed to deliver integrated solutions across Africa’s most critical sectors. Headquartered in Ibadan, Oyo State, the company operates through specialized divisions spanning information technology, agriculture, real estate, manufacturing, construction, trading, energy, automotive, research, consulting, and forensic services.
                </p>
                <p>
                  The company was formed through the consolidation of two existing businesses—AFTRACON and Zenith Multipurposes—which now function as core divisions within the Bornstellar structure. Since inception, Bornstellar has served over 30 businesses across both B2B and B2C segments, establishing a foundation for scalable growth.
                </p>
                <p>
                  Bornstellar is structured as a corporate integrator, combining technology, capital, and execution capabilities to address real economy challenges. Our operating model emphasizes end-to-end delivery, enabling us to conceptualize, finance, develop, and manage projects that create measurable economic value.
                </p>
                <p>
                  With an African-first strategy, our mission is to contribute meaningfully to the continent’s development by providing locally driven, value-added products and services that meet fundamental needs. We are committed to fostering industrialization, supporting local capacity development, and building sustainable partnerships with governments, private sector stakeholders, development institutions, and communities.
                </p>
                <p>
                  Our long-term objective is to evolve into a leading African conglomerate by expanding across strategic sectors, driving innovation, and delivering solutions at scale that enhance economic resilience and improve quality of life.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="inline-flex h-11 px-5 items-center rounded-full bg-[#E8500A] text-white text-sm font-medium tracking-[0.12em] uppercase shadow-lg shadow-orange/20 ring-1 ring-[#E8500A]/25 transition-all duration-200 hover:bg-[#ff6b2b] hover:-translate-y-0.5">
                  Our Story
                </Link>
                <Link href="/divisions" className="inline-flex h-11 px-5 items-center rounded-full border border-white/25 bg-white text-[#0f1112] text-sm font-medium tracking-[0.12em] uppercase shadow-sm transition-all duration-200 hover:bg-[#f5f5f5] hover:-translate-y-0.5">
                  Explore Divisions
                </Link>
              </div>
            </FadeIn>
          </div>

          <aside className="lg:col-span-5">
            <FadeIn>
              <div className="rounded-3xl border border-white/10 bg-[#111316] p-6 lg:p-8 shadow-2xl shadow-black/20">
                <div className="mb-5">
                  <div className="h-56 lg:h-72 w-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#081018] via-[#111827] to-[#0b0a0b] flex items-center justify-center p-6">
                    <Image
                      src="/logotestwhitetext.png"
                      alt="Bornstellar logo"
                      width={520}
                      height={180}
                      className="h-auto w-full max-w-[420px] object-contain"
                      priority
                    />
                    {/**
                    <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden>
                      <defs>
                        <linearGradient id="g2" x1="0" x2="1">
                          <stop offset="0%" stopColor="#E8500A" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#FFB88C" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                      <rect x="44" y="172" width="68" height="140" rx="10" fill="#1e293b" />
                      <rect x="136" y="138" width="68" height="174" rx="10" fill="#111827" />
                      <rect x="228" y="92" width="76" height="220" rx="12" fill="url(#g2)" />
                      <rect x="326" y="154" width="70" height="158" rx="10" fill="#0f766e" opacity="0.72" />
                      <circle cx="444" cy="124" r="56" fill="#f97316" opacity="0.14" />
                      <path d="M48 286 H386" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="2" />
                    </svg>
                    */}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {facts.map((f) => (
                    <div
                      key={f.k}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08]"
                    >
                      <div className="text-base font-normal leading-snug text-white/95">
                        {f.v}
                      </div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/45">
                        {f.k}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm leading-7 text-white/65 mb-4">
                  Bornstellar operates through specialized divisions and partnerships to deliver integrated, locally-driven solutions across the continent.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex h-11 px-5 items-center rounded-full bg-white text-[#0f1112] text-sm font-medium tracking-[0.12em] uppercase transition-all duration-200 hover:bg-[#f5f5f5] hover:-translate-y-0.5">
                    Contact Us
                  </Link>
                  <Link href="/divisions" className="inline-flex h-11 px-5 items-center rounded-full border border-[#E8500A]/40 bg-[#E8500A]/10 text-[#ffb38a] text-sm font-medium tracking-[0.12em] uppercase transition-all duration-200 hover:border-[#E8500A]/60 hover:bg-[#E8500A]/15 hover:-translate-y-0.5">
                    View Divisions
                  </Link>
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>
    </section>
  );
}
