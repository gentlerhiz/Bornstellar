import FadeIn from "@/components/FadeIn";

const talentAreas = [
  { area: "Technology & Engineering", icon: "💻" },
  { area: "Agriculture & Agribusiness Operations", icon: "🌾" },
  { area: "Construction, Manufacturing & Project Management", icon: "🏗️" },
  { area: "Finance, Accounting & Forensic Services", icon: "📊" },
  { area: "Consulting, Research & Policy Analysis", icon: "🔬" },
  { area: "Legal, Risk & Compliance", icon: "⚖️" },
  { area: "Human Resources & Administration", icon: "👥" },
  { area: "Procurement & Supply Chain", icon: "📦" },
];

export default function CareersTalentAreasSection() {
  return (
    <section className="bg-(--bg-alt) py-24 border-t border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-orange" />
                <p className="text-xs text-orange tracking-[0.35em] uppercase font-semibold">
                  Talent Areas
                </p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-(--fg) leading-tight max-w-lg">
                We recruit across every discipline we operate in.
              </h2>
            </div>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {talentAreas.map((item, i) => (
            <FadeIn key={item.area} delay={i * 0.06}>
              <div className="group flex items-start gap-4 p-6 border border-(--border) bg-(--bg) hover:border-orange/40 rounded-sm transition-all duration-300">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <p className="text-xs font-semibold text-(--fg) leading-5 group-hover:text-orange transition-colors duration-200">
                  {item.area}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
