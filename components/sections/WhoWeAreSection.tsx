"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const whoWeAreTabs = [
  {
    id: 0,
    tab: "Technology & Digital",
    headline: "Building Africa's digital backbone, institution by institution.",
    description:
      "We design and deploy the systems that power modern African organisations — custom software, cloud architecture, cybersecurity and digital transformation strategies built for local realities.",
    cta: { label: "Explore Division", href: "/divisions/information-technology" },
    image: "/Africa2.jpeg",
  },
  {
    id: 1,
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
    tab: "Built Environment",
    headline: "The physical foundations of Africa's economic transformation.",
    description:
      "Real estate, construction, machinery and automotive — our built-environment divisions lay the structures, roads, and mobility systems that connect people, industries, and opportunity.",
    cta: { label: "Explore Division", href: "/divisions/construction-infrastructure" },
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    const step = (60 / WHO_TAB_DURATION) * 100;
    const id = setInterval(() => setProgress((p) => Math.min(p + step, 100)), 60);
    return () => {
      clearInterval(id);
      setProgress(0);
    };
  }, [current, paused]);

  const tab = whoWeAreTabs[current];

  return (
    <section
      className="bg-(--bg) py-24 border-t border-(--border)"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-3xl">
            <p className="text-sm text-orange tracking-[0.3em] uppercase font-medium mb-4">
              Who We Are
            </p>
            <p className="text-lg text-black leading-8 max-w-2xl font-semibold">
              As a diversified conglomerate with operations across Africa&apos;s most critical sectors, our reach across multiple industries reflects our commitment to delivering solutions that meet fundamental needs.
            </p>
          </div>
          <Link
            href="/about"
            className="text-xs text-(--fg-muted) tracking-[0.15em] uppercase font-medium hover:text-orange transition-colors duration-200 shrink-0"
          >
            Our Full Story →
          </Link>
        </div>

        {/* Single full-width image panel */}
        <div className="border border-(--border)">

          {/* Image panel — full width */}
          <div className="relative overflow-hidden min-h-[420px] sm:min-h-[520px] lg:min-h-[580px] bg-[#0e0d0c]">
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
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0e0d0c]/80 via-[#0e0d0c]/20 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-[#0e0d0c]/30" />
              </motion.div>
            </AnimatePresence>

            {/* Caption overlay — bottom left. Tab indicators moved inside for better mobile layout */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 lg:p-12 relative lg:top-[75%] lg:bottom-auto lg:translate-y-[200px]">
              <div className="max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`caption-${tab.id}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-3 sm:mb-4">
                      {tab.headline}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 leading-7 mb-4 sm:mb-6 max-w-lg">
                      {tab.description}
                    </p>
                    <Link
                      href={tab.cta.href}
                      className="inline-flex items-center gap-2 h-10 px-5 sm:px-6 bg-orange text-white text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase hover:bg-orange-hover transition-colors duration-300"
                    >
                      {tab.cta.label} →
                    </Link>

                    {/* Tab indicators — placed inside caption to avoid overlap on narrow screens (hidden on lg) */}
                    <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 items-center justify-start sm:justify-end lg:hidden">
                      {whoWeAreTabs.map((t, i) => (
                        <button
                          key={t.id}
                          type="button"
                          aria-label={`Go to ${t.tab}`}
                          onClick={() => goTo(i)}
                          className="flex flex-col sm:items-end items-start gap-1.5 group"
                        >
                          <span className="sr-only">{t.tab}</span>
                          <div className="sr-only">{i === current ? "Active" : "Inactive"}</div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right-side vertical tab indicators for large screens — positioned relative to caption */}
              <div className="hidden lg:flex absolute top-1/2 right-6 lg:right-12 transform -translate-y-1/2 z-10 flex-col items-end gap-4">
                {whoWeAreTabs.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    aria-label={`Go to ${t.tab}`}
                    onClick={() => goTo(i)}
                    className="flex flex-col items-end gap-1.5 group"
                  >
                    <span className="sr-only">{t.tab}</span>
                    <div className="sr-only">{i === current ? "Active" : "Inactive"}</div>
                  </button>
                ))}
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}
