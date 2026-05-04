import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Division } from "@/lib/divisions";

interface Props {
  division: Division;
}

export default function DivisionOverviewSection({ division }: Props) {
  const narrative = division.approach ?? division.howWeWork;

  return (
    <section className="bg-(--bg) py-24 border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-start">

          {/* Left — overview + narrative */}
          <FadeIn>
            {/* Business name badge (Media division only) */}
            {division.businessName && (
              <p className="text-xs text-(--fg-faint) tracking-[0.25em] uppercase font-medium mb-4">
                Operating as: {division.businessName}
              </p>
            )}

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-orange" />
              <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold">
                Overview
              </p>
            </div>

            <p className="text-xl text-(--fg) leading-9 mb-8">{division.overview}</p>

            {/* Approach / How We Work narrative */}
            {narrative && (
              <div className="border-l-2 border-orange/40 pl-6 mb-8">
                <p className="text-sm text-(--fg-muted) leading-7 italic">{narrative}</p>
              </div>
            )}

            {/* Sector categories as pills */}
            {division.sectorCategories && division.sectorCategories.length > 0 && (
              <div className="border-t border-(--border) pt-8 mt-8">
                <p className="text-xs text-(--fg-faint) tracking-[0.25em] uppercase font-medium mb-4">
                  {division.id === 11
                    ? "Collaboration Partners"
                    : division.id === 9
                    ? "Clients Served"
                    : division.id === 8
                    ? "Client Segments"
                    : "Focus Areas"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {division.sectorCategories.map((cat) => (
                    <span
                      key={cat}
                      className="inline-flex items-center px-3 py-1 text-[11px] font-medium tracking-[0.08em] border border-(--border) text-(--fg-muted) bg-(--bg-alt) rounded-sm"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </FadeIn>

          {/* Right — core services */}
          <FadeIn delay={0.12}>
            <div className="bg-(--bg-alt) border border-(--border) p-8 rounded-sm">
              <p className="text-xs text-orange tracking-[0.35em] uppercase font-semibold mb-6">
                Core Services
              </p>
              <ul className="flex flex-col divide-y divide-(--border)">
                {division.services.map((service, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="text-[10px] text-orange tracking-[0.2em] font-bold tabular-nums mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-(--fg-muted) leading-6">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex gap-4">
              <Link
                href="/contact"
                className="flex-1 inline-flex h-12 items-center justify-center bg-orange text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-orange-hover transition-colors duration-300"
              >
                Enquire Now
              </Link>
              <Link
                href="/divisions"
                className="flex-1 inline-flex h-12 items-center justify-center border border-(--border) text-xs text-(--fg-muted) font-semibold tracking-[0.15em] uppercase hover:border-orange hover:text-orange transition-all duration-200"
              >
                All Divisions
              </Link>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
