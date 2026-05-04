export default function DivisionsStatsSection() {
  return (
    <section className="bg-(--bg) border-b border-(--border) py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-3 gap-px bg-(--border)">
          {[
            { value: "13", label: "Specialised Divisions" },
            { value: "6", label: "Thematic Clusters" },
            { value: "1", label: "Integrated Platform" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-(--bg) px-8 py-6 flex flex-col gap-1"
            >
              <span className="text-4xl font-bold text-orange">{s.value}</span>
              <span className="text-xs text-(--fg-muted) tracking-[0.15em] uppercase font-medium">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
