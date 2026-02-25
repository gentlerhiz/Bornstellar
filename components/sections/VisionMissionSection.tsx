"use client";

import FadeIn from "@/components/FadeIn";

const missionPoints = [
  "Provide integrated, world-class solutions across technology, real assets, energy, and professional services.",
  "Anchor investments and partnerships that deepen industrialization and value addition in Africa.",
  "Develop African talent and leadership through structured training, knowledge transfer, and responsible governance.",
  "Uphold rigorous standards of integrity, transparency, and risk management in every engagement.",
];

export default function VisionMissionSection() {
  return (
    <>
      {/* ── VISION ── */}
      <section className="relative bg-[#0e0d0c] overflow-hidden">
        {/* Orange left border accent */}
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#E8500A]" />

        {/* Decorative background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60vw] h-full bg-gradient-to-l from-[#E8500A]/8 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <FadeIn>
            <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-20 items-start">

              {/* Left label */}
              <div className="flex flex-col gap-4">
                <p className="text-xs text-[#E8500A] tracking-[0.35em] uppercase font-semibold">
                  Our Vision
                </p>
                <div className="w-8 h-[2px] bg-[#E8500A]" />
                <p className="text-xs text-white/30 tracking-wide leading-6">
                  The north star that guides every decision across all 12 divisions.
                </p>
              </div>

              {/* Right — vision statement */}
              <div>
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-white leading-[1.12] tracking-tight">
                  To be a leading African corporate platform that builds the{" "}
                  <span className="text-[#E8500A]">infrastructure, institutions,</span>{" "}
                  and innovations powering the continent's next century of growth.
                </p>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="bg-[#0e0d0c] border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-20 items-start">

            {/* Left label */}
            <FadeIn>
              <div className="flex flex-col gap-4">
                <p className="text-xs text-[#E8500A] tracking-[0.35em] uppercase font-semibold">
                  Our Mission
                </p>
                <div className="w-8 h-[2px] bg-[#E8500A]" />
                <p className="text-xs text-white/30 tracking-wide leading-6">
                  How we deliver on our vision — every day, across every division.
                </p>
              </div>
            </FadeIn>

            {/* Right — mission points */}
            <div className="flex flex-col gap-0 divide-y divide-white/8 border-y border-white/8">
              {missionPoints.map((point, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group flex items-start gap-6 py-7 hover:bg-white/[0.03] transition-colors duration-300 px-2">
                    <span className="text-[10px] text-[#E8500A] tracking-[0.3em] font-semibold tabular-nums mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base sm:text-lg text-white/75 leading-8 group-hover:text-white transition-colors duration-300">
                      {point}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
