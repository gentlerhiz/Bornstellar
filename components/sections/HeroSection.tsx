"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1800&q=85&auto=format&fit=crop",
    overline: "Multi-Division Platform · Ibadan, Nigeria",
    headline: ["Future-ready", "solutions for", "Africa's growth."],
    sub: "12 specialised divisions. One integrated strategy. Built for the continent's next century.",
    cta: { label: "Discover Bornstellar", href: "/about" },
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1800&q=85&auto=format&fit=crop",
    overline: "Energy & Natural Resources",
    headline: ["Clean power", "for Africa's", "energy future."],
    sub: "From solar deployments to off-grid hybrid systems — accelerating Africa's clean energy transition.",
    cta: { label: "Explore Energy", href: "/divisions/renewable-energy" },
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1800&q=85&auto=format&fit=crop",
    overline: "Food & Agricultural Systems",
    headline: ["Strengthening", "Africa's food", "value chains."],
    sub: "From primary production to market access — building resilient food systems across the continent.",
    cta: { label: "Explore Agriculture", href: "/divisions/agricultural-business" },
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=85&auto=format&fit=crop",
    overline: "Built Environment & Mobility",
    headline: ["Infrastructure", "that connects", "markets & people."],
    sub: "Real estate, construction, and mobility solutions that drive connectivity and economic productivity.",
    cta: { label: "Explore Infrastructure", href: "/divisions/construction-infrastructure" },
  },
];

const SLIDE_DURATION = 6000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % heroSlides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(intervalRef.current!);
  }, [current, paused, next]);

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const step = (60 / SLIDE_DURATION) * 100;
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 60);
    return () => clearInterval(progressRef.current!);
  }, [current, paused]);

  const slide = heroSlides[current];

  return (
    <section
      className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#0e0d0c]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Fullscreen background images (cross-fade) ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.headline.join(" ")}
            fill
            priority={slide.id === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c]/90 via-[#0e0d0c]/40 to-[#0e0d0c]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0d0c]/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Orange top accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#E8500A] z-20"
      />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="flex items-end justify-between gap-8">

            {/* Left — text + CTAs */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.p
                  key={`overline-${slide.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-xs text-[#E8500A] tracking-[0.35em] uppercase font-medium mb-6"
                >
                  {slide.overline}
                </motion.p>
              </AnimatePresence>

              <div className="mb-7">
                <AnimatePresence mode="wait">
                  {slide.headline.map((line, i) => (
                    <div key={`${slide.id}-${i}`} className="overflow-hidden">
                      <motion.h1
                        initial={{ y: "105%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-105%", opacity: 0 }}
                        transition={{ duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className={`block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] tracking-tight ${
                          i === 2 ? "text-[#E8500A]" : "text-white"
                        }`}
                      >
                        {line}
                      </motion.h1>
                    </div>
                  ))}
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${slide.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className="text-sm sm:text-base text-white/55 leading-relaxed max-w-lg mb-10"
                >
                  {slide.sub}
                </motion.p>
              </AnimatePresence>

              {/* CTAs + arrows on the same row */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`cta-${slide.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link
                    href={slide.cta.href}
                    className="inline-flex h-12 px-8 items-center bg-[#E8500A] text-white text-sm font-semibold tracking-[0.12em] uppercase hover:bg-[#ff6b2b] transition-colors duration-300"
                  >
                    {slide.cta.label}
                  </Link>
                  <Link
                    href="/divisions"
                    className="inline-flex h-12 px-8 items-center border border-white/25 text-white/70 text-sm font-semibold tracking-[0.12em] uppercase hover:border-white/60 hover:text-white transition-all duration-300"
                  >
                    Our Divisions
                  </Link>

                  {/* Prev / Next — inline with CTAs */}
                  <div className="flex items-center gap-2 ml-2">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous slide"
                      className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-white/60 hover:text-white transition-all duration-200"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next slide"
                      className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:border-white/60 hover:text-white transition-all duration-200"
                    >
                      →
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — vertical slide indicators */}
            <div className="hidden sm:flex flex-col items-center gap-5 shrink-0 pb-1">
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-[2px] h-8 bg-white/15 overflow-hidden">
                    {i === current ? (
                      <motion.div className="w-full bg-[#E8500A]" style={{ height: `${progress}%` }} />
                    ) : i < current ? (
                      <div className="w-full h-full bg-white/40" />
                    ) : null}
                  </div>
                  <span
                    className={`text-[10px] tabular-nums font-semibold tracking-widest transition-colors duration-300 ${
                      i === current ? "text-white" : "text-white/25 group-hover:text-white/55"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-6 lg:left-10 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
