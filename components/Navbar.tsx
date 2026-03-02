"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/divisions", label: "Divisions" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/governance", label: "Governance" },
  { href: "/careers", label: "Careers" },
  { href: "/newsroom", label: "Newsroom" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // White text over dark hero → warm dark text once scrolled over light body
  const linkClass = scrolled
    ? "text-[#1a1916]/60 hover:text-[#1a1916]"
    : "text-white/80 hover:text-white";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          backgroundColor: scrolled ? "var(--nav-scrolled-bg)" : "transparent",
          borderBottomColor: scrolled ? "var(--nav-scrolled-border)" : "transparent",
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-sm border-b"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logotest.png"
              alt="Bornstellar"
              style={{ height: "40px", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs transition-colors duration-200 tracking-[0.15em] uppercase font-medium ${linkClass}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex h-10 px-6 items-center border border-[#E8500A] text-[#E8500A] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#E8500A] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-px w-6 transition-all duration-300 ${
                    scrolled ? "bg-[#1a1916]" : "bg-white"
                  } ${
                    i === 0 && menuOpen ? "rotate-45 translate-y-2" :
                    i === 1 && menuOpen ? "opacity-0" :
                    i === 2 && menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#fafaf8] flex flex-col"
          >
            {/* Top bar */}
            <div className="h-20 flex items-center justify-between px-6">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-bold text-lg tracking-[0.25em] uppercase text-[#1a1916]"
              >
                <span className="text-[#E8500A]">Born</span>stellar
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center text-[#1a1916]/40 hover:text-[#1a1916] transition-colors"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#1a1916]/8 mx-6" />

            {/* Nav items */}
            <nav className="flex-1 flex flex-col justify-center px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between py-4 border-b border-[#1a1916]/8 last:border-0"
                  >
                    <span className="text-base font-medium text-[#1a1916]/60 group-hover:text-[#1a1916] transition-colors duration-200">
                      {link.label}
                    </span>
                    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-[#1a1916]/20 group-hover:text-[#E8500A] group-hover:translate-x-1 transition-all duration-200">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="px-6 pb-10"
            >
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center h-12 w-full bg-[#E8500A] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#ff6b2b] transition-colors duration-200"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
