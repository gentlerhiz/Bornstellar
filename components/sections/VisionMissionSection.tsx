"use client";

import FadeIn from "@/components/FadeIn";

const missionPoints = [
  "To conceptualize, finance, and execute integrated solutions across Africa's critical sectors by combining technology, capital, and local expertise — reducing dependency on imports, creating sustainable livelihoods, and driving measurable economic growth from the ground up.",
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
                <p className="text-sm text-[#E8500A] tracking-[0.35em] uppercase font-semibold">
                  Our Vision
                </p>
                <div className="w-8 h-[2px] bg-[#E8500A]" />
                
              </div>

              {/* Right — vision statement */}
              <div>
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-white leading-[1.12] tracking-tight">
                  To be Africa's leading integrated conglomerate — building industries, empowering communities, and delivering solutions that transform lives across the continent.
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
                <p className="text-sm text-[#E8500A] tracking-[0.35em] uppercase font-semibold">
                  Our Mission
                </p>
                <div className="w-8 h-[2px] bg-[#E8500A]" />
                
              </div>
            </FadeIn>

            {/* Right — mission points */}
            <div className="flex flex-col gap-0 divide-y divide-white/8 border-y border-white/8">
              {missionPoints.map((point, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="group flex items-start gap-6 py-7 hover:bg-white/[0.03] transition-colors duration-300 px-2">
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
