"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const priorities = [
  {
    category: "Economic",
    description: "Support inclusive growth, job creation, and local value addition through agriculture, manufacturing, infrastructure, and technology.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M4 24 L10 16 L16 19 L22 10 L28 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6 L28 6 L28 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    category: "Social",
    description: "Invest in skills, safety, and community partnerships around our projects and operations.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M8 26 C8 21.582 11.582 18 16 18 C20.418 18 24 21.582 24 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    category: "Environmental",
    description: "Promote resource efficiency, clean energy, and sustainable practices across divisions.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M16 28 C16 28 6 22 6 14 C6 9.582 10.582 6 16 6 C21.418 6 26 9.582 26 14 C26 22 16 28 16 28Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M16 28 L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    category: "Governance",
    description: "Uphold strong corporate governance, forensic rigor, and transparent reporting.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M16 4 L26 8 L26 16 C26 21.523 21.523 26.77 16 28 C10.477 26.77 6 21.523 6 16 L6 8 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M11 16 L14.5 19.5 L21 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const values = [
  {
    number: "01",
    title: "Stewardship",
    description:
      "We take a long-term view, building assets, institutions, and capabilities that will outlive current generations and strengthen African economies.",
  },
  {
    number: "02",
    title: "Integrity",
    description:
      "We operate with strict ethical standards, sound governance, and robust compliance — especially in regulated sectors and financial services.",
  },
  {
    number: "03",
    title: "Excellence",
    description:
      "We commit to technical depth, operational discipline, and continuous improvement across all 12 divisions.",
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "We break silos to deliver integrated solutions and co-create value with partners, clients, and communities across sectors.",
  },
  {
    number: "05",
    title: "Innovation with Purpose",
    description:
      "We invest in research and new business models that respond to Africa's unique development context — not blindly copied models.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-[var(--bg)] py-18 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs text-[#E8500A] tracking-[0.3em] uppercase font-medium mb-4">
                Our Values
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--fg)] leading-tight max-w-lg">
                Five principles that guide every decision.
              </h2>
            </div>
            <Link
              href="/about#values"
              className="text-xs text-[var(--fg-muted)] tracking-[0.15em] uppercase font-medium hover:text-[#E8500A] transition-colors duration-200 shrink-0"
            >
              About Our Culture →
            </Link>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v, i) => {
            const isDark = i % 2 === 1;
            return (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div
                  className={`p-8 flex flex-col gap-6 h-full group rounded-sm border ${
                    isDark
                      ? "bg-[#0e0d0c] border-[#2a2926]"
                      : "bg-[var(--bg)] border-[var(--border)]"
                  }`}
                >
                  <span
                    className={`text-4xl font-bold select-none leading-none transition-colors duration-300 ${
                      isDark
                        ? "text-white/10 group-hover:text-[#E8500A]/30"
                        : "text-[var(--border)] group-hover:text-[#E8500A]/20"
                    }`}
                  >
                    {v.number}
                  </span>
                  <div>
                    <h3
                      className={`text-base font-semibold mb-3 group-hover:text-[#E8500A] transition-colors duration-300 ${
                        isDark ? "text-white" : "text-[var(--fg)]"
                      }`}
                    >
                      {v.title}
                    </h3>
                    <p
                      className={`text-sm leading-7 ${
                        isDark ? "text-white/50" : "text-[var(--fg-muted)]"
                      }`}
                    >
                      {v.description}
                    </p>
                  </div>
                  {/* Bottom accent line on hover */}
                  <div className="mt-auto h-[2px] w-0 bg-[#E8500A] group-hover:w-8 transition-all duration-400" />
                </div>
              </FadeIn>
            );
          })}

          {/* 6th cell — Africa focus */}
          <FadeIn delay={0.45}>
            <div className="bg-[#0e0d0c] border border-[#2a2926] rounded-sm p-8 flex flex-col justify-between h-full min-h-[260px] group">
              <p className="text-xs text-[#E8500A] tracking-[0.25em] uppercase font-medium">
                African-first
              </p>
              <div>
                <p className="text-2xl font-bold text-white leading-snug mb-4">
                  Built for Africa.<br />Starting from Nigeria.
                </p>
                <Link
                  href="/about#africa-focus"
                  className="text-xs text-white/50 hover:text-[#E8500A] transition-colors tracking-[0.15em] uppercase font-medium"
                >
                  Our Africa Focus →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Priorities — merged */}
        <FadeIn>
          <div className="mt-16 border-t border-[var(--border)] pt-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <p className="text-xs text-[#E8500A] tracking-[0.35em] uppercase font-medium">
                Our Priorities
              </p>
              <p className="text-xs text-[var(--fg-muted)] max-w-sm">
                Four interconnected commitments that guide how we operate across every division and community.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {priorities.map((p) => (
                <div
                  key={p.category}
                  className="group flex items-start gap-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-sm p-5 hover:border-[#E8500A]/30 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-md bg-[#E8500A]/10 text-[#E8500A] flex items-center justify-center shrink-0 group-hover:bg-[#E8500A] group-hover:text-white transition-all duration-300">
                    {p.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--fg)] mb-1.5 group-hover:text-[#E8500A] transition-colors duration-300">
                      {p.category}
                    </p>
                    <p className="text-xs text-[var(--fg-muted)] leading-5">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
