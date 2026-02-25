"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function CtaSection() {
  return (
    <section className="relative bg-[#0e0d0c] py-16 overflow-hidden">
      {/* subtle warm glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-[#E8500A]/5 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.02] hero-grid" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <FadeIn>
          <p className="text-xs text-[#E8500A] tracking-[0.3em] uppercase font-medium mb-6">
            Partner with Us
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white">
            Ready to build Africa&#39;s future together?
          </h2>
          <p className="text-base leading-8 max-w-xl mx-auto mb-12 text-white/50">
            Whether you are a business, government institution, investor, or
            development partner — we want to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex px-10 py-4 items-center bg-[#E8500A] text-white text-sm font-semibold tracking-[0.12em] uppercase hover:bg-[#ff6b2b] transition-colors duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href="/divisions"
              className="inline-flex px-10 py-4 items-center border border-white/20 text-white/60 text-sm font-semibold tracking-[0.12em] uppercase hover:border-white/60 hover:text-white transition-all duration-300"
            >
              Explore Divisions
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
