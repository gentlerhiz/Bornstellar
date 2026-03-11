import FadeIn from "@/components/FadeIn";

const whyJoin = [
  {
    id: "01",
    title: "Cross-Sector Exposure",
    description:
      "Work on complex, cross-sector projects spanning technology, infrastructure, energy, agriculture, and financial services — all under one roof.",
  },
  {
    id: "02",
    title: "Structured Development",
    description:
      "Benefit from structured learning, mentorship, leadership development programmes, and cross-divisional rotations designed to accelerate your growth.",
  },
  {
    id: "03",
    title: "Culture of Integrity",
    description:
      "Join a team guided by strong values of integrity, excellence, and collaboration — where doing the right thing is non-negotiable.",
  },
  {
    id: "04",
    title: "Africa-focused Impact",
    description:
      "Contribute directly to Africa's economic transformation. Your work here creates jobs, builds institutions, and improves lives on the continent.",
  },
];

export default function CareersWhyJoinSection() {
  return (
    <section className="bg-(--bg) py-24 border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-orange" />
            <p className="text-xs text-orange tracking-[0.35em] uppercase font-semibold">
              Why Join Bornstellar
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-(--fg) leading-tight mb-14 max-w-xl">
            Where expertise meets continental ambition.
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyJoin.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08}>
              <div className="flex flex-col gap-5 p-8 border border-(--border) bg-(--bg-alt) h-full rounded-sm">
                <span className="text-[10px] text-orange tracking-[0.3em] font-bold tabular-nums">
                  {item.id}
                </span>
                <h3 className="text-sm font-bold text-(--fg) leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-(--fg-muted) leading-6 flex-1">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
