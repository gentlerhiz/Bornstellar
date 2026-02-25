"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const whoWeAreTabs = [
  {
    id: 0,
    number: "01",
    tab: "Technology & Digital",
    headline: "Building Africa's digital backbone, institution by institution.",
    description:
      "We design and deploy the systems that power modern African organisations — custom software, cloud architecture, cybersecurity and digital transformation strategies built for local realities.",
    cta: { label: "Explore Division", href: "/divisions/information-technology" },
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1400&q=90&auto=format&fit=crop",
  },
  {
    id: 1,
    number: "02",
    tab: "Energy & Resources",
    headline: "Powering Africa's future — cleanly, reliably, now.",
    description:
      "From utility-scale solar to off-grid hybrid systems and petroleum logistics — our energy divisions accelerate Africa's transition to affordable, resilient, and sustainable power.",
    cta: { label: "Explore Division", href: "/divisions/renewable-energy" },
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=90&auto=format&fit=crop",
  },
  {
    id: 2,
    number: "03",
    tab: "Food & Agriculture",
    headline: "From the farm to the market — feeding Africa's ambition.",
    description:
      "Commercial farming, agri-input supply, food processing and cold-chain logistics — we boost productivity and create lasting connections between African producers and regional markets.",
    cta: { label: "Explore Division", href: "/divisions/agricultural-business" },
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1400&q=90&auto=format&fit=crop",
  },
  {
    id: 3,
    number: "04",
    tab: "Built Environment",
    headline: "The physical foundations of Africa's economic transformation.",
    description:
      "Real estate, construction, machinery and automotive — our built-environment divisions lay the structures, roads, and mobility systems that connect people, industries, and opportunity.",
    cta: { label: "Explore Division", href: "/divisions/construction-infrastructure" },
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=90&auto=format&fit=crop",
  },
];

const WHO_TAB_DURATION = 6000;

export default function WhoWeAreSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % whoWeAreTabs.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, WHO_TAB_DURATION);
    return () => clearInterval(id);
  }, [current, paused, next]);

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const step = (60 / WHO_TAB_DURATION) * 100;
    const id = setInterval(() => setProgress((p) => Math.min(p + step, 100)), 60);
    return () => clearInterval(id);
  }, [current, paused]);

  const tab = whoWeAreTabs[current];

  return (
    <section
      className="bg-[var(--bg)] py-24 border-t border-[var(--border)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs text-[#E8500A] tracking-[0.3em] uppercase font-medium mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--fg)] leading-tight">
              Built for Africa's complexity.
            </h2>
          </div>
          <Link
            href="/about"
            className="text-xs text-[var(--fg-muted)] tracking-[0.15em] uppercase font-medium hover:text-[#E8500A] transition-colors duration-200 shrink-0"
          >
            Our Full Story →
          </Link>
        </div>

        {/* Two-panel layout */}
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-0 border border-[var(--border)]">

          {/* Left — image panel */}
          <div className="relative overflow-hidden min-h-[420px] lg:min-h-[560px] bg-[#0e0d0c]">
            <AnimatePresence mode="sync">
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={tab.image}
                  alt={tab.tab}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c]/80 via-[#0e0d0c]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0e0d0c]/30" />
              </motion.div>
            </AnimatePresence>

            {/* Caption overlay — bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`caption-${tab.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-4 max-w-lg">
                    {tab.headline}
                  </h3>
                  <p className="text-sm text-white/60 leading-7 max-w-md mb-6">
                    {tab.description}
                  </p>
                  <Link
                    href={tab.cta.href}
                    className="inline-flex items-center gap-2 h-10 px-6 bg-[#E8500A] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#ff6b2b] transition-colors duration-300"
                  >
                    {tab.cta.label} →
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right — tab stack */}
          <div className="flex flex-col divide-y divide-[var(--border)] border-l border-[var(--border)] bg-[var(--bg)]">
            {whoWeAreTabs.map((t, i) => {
              const isActive = i === current;
              return (
                <button
                  key={t.id}
                  type="button"
                  aria-label={`View ${t.tab}`}
                  onClick={() => goTo(i)}
                  className={`group relative flex flex-col text-left px-8 py-7 transition-colors duration-300 ${
                    isActive ? "bg-[#0e0d0c]" : "hover:bg-[var(--bg-alt)]"
                  }`}
                >
                  {/* Progress bar — left edge */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--border)]">
                    {isActive && (
                      <motion.div
                        className="absolute top-0 left-0 right-0 bg-[#E8500A]"
                        style={{ height: `${progress}%` }}
                      />
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] tracking-[0.3em] font-semibold transition-colors duration-300 ${
                      isActive ? "text-[#E8500A]" : "text-[var(--fg-faint)] group-hover:text-[#E8500A]/60"
                    }`}>
                      {t.number}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8500A]" />
                    )}
                  </div>

                  <span className={`text-base font-semibold leading-snug transition-colors duration-300 ${
                    isActive ? "text-white" : "text-[var(--fg)] group-hover:text-[var(--fg)]"
                  }`}>
                    {t.tab}
                  </span>

                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-xs text-white/50 mt-2 leading-6"
                    >
                      {t.headline}
                    </motion.p>
                  )}
                </button>
              );
            })}

            {/* Bottom — counter + nav */}
            <div className="mt-auto px-8 py-6 flex items-center justify-between border-t border-[var(--border)]">
              <span className="text-xs text-[var(--fg-faint)] tabular-nums tracking-widest">
                {String(current + 1).padStart(2, "0")} / {String(whoWeAreTabs.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                {whoWeAreTabs.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`w-6 h-[2px] transition-all duration-300 ${
                      i === current ? "bg-[#E8500A]" : "bg-[var(--border)] hover:bg-[var(--fg-faint)]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

