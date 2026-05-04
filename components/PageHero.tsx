"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  overline?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
  bgImage?: string;
}

export default function PageHero({
  overline,
  title,
  subtitle,
  breadcrumbs,
  children,
  bgImage,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#0e0d0c] overflow-hidden pt-40 pb-24">
      {/* Background image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      {/* Dark overlay — stronger when bg image is present */}
      <div className={`absolute inset-0 ${bgImage ? "bg-[#0e0d0c]/70" : ""}`} />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.025] hero-grid pointer-events-none" />
      {/* Bottom-right ambient glow */}
      <div className="absolute bottom-0 right-0 w-[60vw] h-[50vw] rounded-full bg-[#E8500A]/5 blur-[140px] pointer-events-none" />
      {/* Left orange accent bar */}
      <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-[#E8500A] via-[#E8500A]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 mb-10" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/20 text-xs">/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-xs text-white/40 hover:text-white/70 tracking-[0.15em] uppercase transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-xs text-[#E8500A] tracking-[0.15em] uppercase">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        <FadeIn>
          {overline && (
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#E8500A]" />
              <p className="text-xs text-[#E8500A] tracking-[0.35em] uppercase font-semibold">
                {overline}
              </p>
            </div>
          )}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.04] tracking-tight max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-8 text-base text-white/50 leading-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
