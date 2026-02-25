"use client";

const items = [
  "Information Technology",
  "Agricultural Business",
  "Real Estate & Land",
  "Machinery & Manufacturing",
  "Construction & Infrastructure",
  "General Trading",
  "Oil & Gas Services",
  "Business Consulting",
  "Forensic & Financial Services",
  "Automotive",
  "Research & Development",
  "Renewable Energy",
];

export default function MarqueeStrip() {
  return (
    <div className="relative border-t border-b border-white/10 bg-[#0e0d0c] py-3.5 overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-[#0e0d0c] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-[#0e0d0c] to-transparent" />

      <div className="flex items-center gap-0 w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-0 shrink-0">
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/35 px-8 whitespace-nowrap">
              {item}
            </span>
            <span className="text-[#E8500A] text-xs select-none">✦</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 36s linear infinite;
        }
      `}</style>
    </div>
  );
}
