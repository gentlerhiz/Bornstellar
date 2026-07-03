import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Division } from "@/lib/divisions";

interface Props {
  division: Division;
}

export default function DivisionOverviewSection({ division }: Props) {
  const narrative = division.approach ?? division.howWeWork;
  const audiencePriority = (label: string) => {
    const normalized = label.toLowerCase();

    if (normalized.includes("business")) return 0;
    if (normalized.includes("investor")) return 1;
    if (normalized.includes("individual") || normalized.includes("person") || normalized.includes("consumer")) return 2;

    return 3;
  };

  const orderedAudiences = [...(division.audiences ?? [])].sort(
    (a, b) => audiencePriority(a.label) - audiencePriority(b.label),
  );

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

            {/* Optional narrative */}
            {narrative && (
              <div className="border-l-2 border-orange/40 pl-6 mb-8">
                <p className="text-sm text-(--fg-muted) leading-7 italic">{narrative}</p>
              </div>
            )}

            {orderedAudiences.length > 0 && (
              <div className="border-t border-(--border) pt-8 mt-8">
                <p className="text-xs text-(--fg-faint) tracking-[0.25em] uppercase font-medium mb-4">
                  Who We Serve
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {orderedAudiences.map((audience, index) => {
                    const isStandaloneLastCard = orderedAudiences.length === 3 && index === 2;

                    return (
                      <div
                        key={audience.label}
                        className={`group relative overflow-hidden rounded-sm border border-(--border) bg-(--bg-alt) p-5 min-h-44 transition-all duration-300 hover:border-orange/45 hover:bg-(--bg) ${
                          isStandaloneLastCard ? "md:col-span-2" : ""
                        }`}
                      >
                      <div className="absolute top-0 left-0 h-0.5 w-full bg-linear-to-r from-orange/80 via-orange/25 to-transparent opacity-70" />
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-sm font-semibold text-(--fg)">{audience.label}</p>
                        <span className="text-[10px] text-orange tracking-[0.18em] font-bold tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="text-sm text-(--fg-muted) leading-6">
                        {audience.description}
                      </p>
                    </div>
                    );
                  })}
                </div>
              </div>
            )}

            {division.whyItMatters && (
              <div className="mt-8 border-l-2 border-orange/40 pl-6">
                <p className="text-xs text-(--fg-faint) tracking-[0.25em] uppercase font-medium mb-3">
                  Why It Matters
                </p>
                <p className="text-sm text-(--fg-muted) leading-7">{division.whyItMatters}</p>
              </div>
            )}

            {division.brandLogoSrc && division.brandLink && (
              <div className="mt-8 flex flex-col gap-4 rounded-sm border border-(--border) bg-(--bg-alt) p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-(--border) bg-white p-1 shadow-sm">
                    <Image
                      src={division.brandLogoSrc}
                      alt={division.businessName ?? division.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="56px"
                    />
                  </div>
                  <span className="text-base font-semibold text-(--fg)">
                    Zenith Multipurposes
                  </span>
                </div>
                <Link
                  href={division.brandLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-fit items-center justify-center bg-orange px-5 text-xs font-semibold tracking-[0.15em] uppercase text-white transition-colors duration-300 hover:bg-orange-hover"
                >
                  Visit Website
                </Link>
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
