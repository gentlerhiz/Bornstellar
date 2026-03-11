import FadeIn from "@/components/FadeIn";

const governancePillars = [
  {
    id: "01",
    title: "Board of Directors",
    description:
      "Responsible for overall strategy, oversight, and fiduciary duties. Committees for audit, risk, investment, and remuneration ensure comprehensive governance coverage.",
  },
  {
    id: "02",
    title: "Annual General Meetings",
    description:
      "Documented shareholder engagement and annual general meetings ensure transparency, accountability, and stakeholder alignment at the highest level.",
  },
  {
    id: "03",
    title: "Conflict of Interest Controls",
    description:
      "Documented policies on conflicts of interest, decision-making, and record-keeping, with clear reporting lines and delegated authorities across all divisions.",
  },
  {
    id: "04",
    title: "Legal Compliance",
    description:
      "Full compliance with Nigerian corporate law, CAMA 2020, and sector-specific regulations across technology, agriculture, energy, financial services, and construction.",
  },
];

export default function GovernancePillarsSection() {
  return (
    <section className="bg-(--bg) py-24 border-t border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-orange" />
            <p className="text-xs text-orange tracking-[0.35em] uppercase font-semibold">
              Corporate Governance
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-(--fg) leading-tight mb-14 max-w-xl">
            A governance framework designed for long-term integrity.
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-5">
          {governancePillars.map((pillar, i) => (
            <FadeIn key={pillar.id} delay={i * 0.08}>
              <div className="group p-8 border border-(--border) hover:border-orange/30 bg-(--bg-alt) rounded-sm transition-all duration-300 h-full">
                <span className="text-[10px] text-orange tracking-[0.3em] font-bold tabular-nums block mb-4">
                  {pillar.id}
                </span>
                <h3 className="text-base font-bold text-(--fg) mb-4 group-hover:text-orange transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-sm text-(--fg-muted) leading-7">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
