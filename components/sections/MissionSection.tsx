"use client";

import FadeIn from "@/components/FadeIn";

const missionPoints = [
  "Provide integrated, world-class solutions across technology, real assets, energy, and professional services.",
  "Anchor investments and partnerships that deepen industrialization and value addition in Africa.",
  "Develop African talent and leadership through structured training, knowledge transfer, and responsible governance.",
  "Uphold rigorous standards of integrity, transparency, and risk management in every engagement.",
];

export default function MissionSection() {
  return (
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
          <div className="flex flex-col divide-y divide-white/8 border-y border-white/8">
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
  );
}
