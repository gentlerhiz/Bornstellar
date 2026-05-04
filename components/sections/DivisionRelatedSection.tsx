import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Division } from "@/lib/divisions";

interface Props {
  otherDivisions: Division[];
}

export default function DivisionRelatedSection({ otherDivisions }: Props) {
  return (
    <section className="bg-(--bg-alt) py-20 border-t border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold mb-2">
                Explore More
              </p>
              <h2 className="text-2xl font-bold text-(--fg)">Other Divisions</h2>
            </div>
            <Link
              href="/divisions"
              className="text-xs text-(--fg-muted) tracking-[0.15em] uppercase hover:text-orange transition-colors duration-200 hidden sm:block"
            >
              View All 13 →
            </Link>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherDivisions.map((d, i) => (
            <FadeIn key={d.slug} delay={i * 0.07}>
              <Link
                href={`/divisions/${d.slug}`}
                className="group flex flex-col gap-3 p-5 border border-(--border) hover:border-orange/40 bg-(--bg-card) hover:bg-(--bg) rounded-sm transition-all duration-300"
              >
                <span className="text-[10px] text-orange tracking-[0.3em] font-bold tabular-nums">
                  {String(d.id).padStart(2, "0")}
                </span>
                <h3 className="text-xs font-bold text-(--fg) leading-snug group-hover:text-orange transition-colors duration-200">
                  {d.name}
                </h3>
                <p className="text-xs text-(--fg-faint) leading-5">{d.tagline}</p>
                <span className="text-[10px] text-orange tracking-[0.15em] uppercase font-semibold group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
