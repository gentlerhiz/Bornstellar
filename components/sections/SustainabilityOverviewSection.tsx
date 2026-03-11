import FadeIn from "@/components/FadeIn";

export default function SustainabilityOverviewSection() {
  return (
    <section className="bg-(--bg) py-24 border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-orange" />
              <p className="text-xs text-orange tracking-[0.35em] uppercase font-semibold">
                Our Approach
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-(--fg) leading-tight mb-8">
              Designed to create lasting value — not just returns.
            </h2>
            <p className="text-base text-(--fg-muted) leading-8 mb-6">
              Every division at Bornstellar operates with a mandate to deliver
              measurable impact alongside commercial performance. We integrate
              economic, social, environmental, and governance considerations
              into our strategy, projects, and partnerships from day one.
            </p>
            <p className="text-base text-(--fg-muted) leading-8">
              Our African-first philosophy means our impact is local, tangible,
              and enduring — creating jobs, building institutions, and improving
              lives across the communities we serve.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Economic Impact", desc: "Inclusive growth, jobs, local value addition" },
                { label: "Social Impact", desc: "Skills, safety, community partnerships" },
                { label: "Environmental", desc: "Clean energy, resource efficiency" },
                { label: "Governance", desc: "Transparency, forensic rigor, compliance" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 border border-(--border) bg-(--bg-alt) rounded-sm"
                >
                  <div className="w-5 h-0.5 bg-orange mb-4" />
                  <h3 className="text-xs font-bold text-(--fg) mb-2 tracking-wide uppercase">
                    {item.label}
                  </h3>
                  <p className="text-xs text-(--fg-muted) leading-5">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
