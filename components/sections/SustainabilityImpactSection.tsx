import FadeIn from "@/components/FadeIn";

const impactThemes = [
  {
    id: "01",
    title: "Food Security & Livelihoods",
    description:
      "Strengthening agricultural value chains, improving farmer incomes, and reducing post-harvest losses across West Africa and beyond.",
  },
  {
    id: "02",
    title: "Digital Inclusion",
    description:
      "Expanding access to digital tools, platforms, and skills that enable economic participation for communities across Africa.",
  },
  {
    id: "03",
    title: "Sustainable Infrastructure & Mobility",
    description:
      "Building roads, facilities, and transport systems that connect markets and communities — designed for long-term resilience.",
  },
  {
    id: "04",
    title: "Energy Transition",
    description:
      "Accelerating access to affordable, reliable, and clean energy through solar deployment, off-grid systems, and smart energy advisory.",
  },
  {
    id: "05",
    title: "Institutional Strength & Integrity",
    description:
      "Supporting governance, transparency, and financial systems that build trust, attract investment, and protect public resources.",
  },
];

export default function SustainabilityImpactSection() {
  return (
    <section className="bg-[#0e0d0c] py-24 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-orange" />
            <p className="text-xs text-orange tracking-[0.35em] uppercase font-semibold">
              Impact Themes
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-14 max-w-xl">
            Five areas where we move the needle most.
          </h2>
        </FadeIn>
        <div className="flex flex-col divide-y divide-white/8 border-y border-white/8">
          {impactThemes.map((theme, i) => (
            <FadeIn key={theme.id} delay={i * 0.08}>
              <div className="group flex items-start gap-8 py-8 hover:bg-white/[0.03] transition-colors duration-300 px-2">
                <span className="text-[10px] text-orange tracking-[0.3em] font-bold tabular-nums mt-1 shrink-0 w-6">
                  {theme.id}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange transition-colors duration-300">
                    {theme.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-7">
                    {theme.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
