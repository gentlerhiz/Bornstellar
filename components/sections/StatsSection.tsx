"use client";

import FadeIn from "@/components/FadeIn";
import { stats } from "@/lib/divisions";

export default function StatsSection() {
  return (
    <section className="bg-[#E8500A] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/20">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col items-center justify-center py-12 px-6 bg-[#E8500A] text-center">
                <span className="text-5xl lg:text-6xl font-bold text-white mb-3">
                  {stat.value}
                </span>
                <span className="text-xs text-white/70 tracking-[0.2em] uppercase font-medium">
                  {stat.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
