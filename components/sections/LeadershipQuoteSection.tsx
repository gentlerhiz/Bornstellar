"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function LeadershipQuoteSection() {
  return (
    <section className="bg-[#0e0d0c] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">

          {/* Left — quote */}
          <FadeIn>
            <div className="flex flex-col gap-8">
              {/* Large quote mark */}
              <svg viewBox="0 0 48 36" fill="none" className="w-10 h-8 text-[#E8500A]" aria-hidden="true">
                <path d="M0 36V22.5C0 13.5 5.25 6.375 15.75 1.125L18 4.875C13.125 7.5 10.125 11.25 9 16.125H18V36H0ZM30 36V22.5C30 13.5 35.25 6.375 45.75 1.125L48 4.875C43.125 7.5 40.125 11.25 39 16.125H48V36H30Z" fill="currentColor"/>
              </svg>

              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.18] tracking-tight">
                Bornstellar exists to prove that African institutions can be
                <span className="text-[#E8500A]"> world-class by design</span> — not by accident.
              </blockquote>

              <div className="h-px w-12 bg-[#E8500A]" />

              <div>
                <p className="text-sm font-semibold text-white tracking-[0.1em] uppercase">
                  Olawale Adeyemi
                </p>
                <p className="text-xs text-white/40 tracking-[0.15em] uppercase mt-1">
                  Chairman & Chief Executive Officer
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — portrait */}
          <FadeIn delay={0.15}>
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85&auto=format&fit=crop&crop=faces"
                alt="Chairman & CEO of Bornstellar Limited"
                fill
                className="object-cover object-top grayscale"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0e0d0c]/60 via-transparent to-transparent" />
              {/* Orange frame accent */}
              <div className="absolute bottom-0 left-0 w-[3px] h-1/3 bg-[#E8500A]" />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
