"use client";

import FadeIn from "@/components/FadeIn";

export default function VisionSection() {
  return (
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
  );
}
