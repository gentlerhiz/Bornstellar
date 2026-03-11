import FadeIn from "@/components/FadeIn";

const regions = [
  {
    region: "West Africa",
    desc: "Primary base of operations. Nigeria headquarters with regional coverage.",
    status: "Active",
  },
  {
    region: "East Africa",
    desc: "Strategic focus area aligned with infrastructure corridors and trade lanes.",
    status: "Expanding",
  },
  {
    region: "Southern Africa",
    desc: "Targeted expansion through trade integration initiatives and partnerships.",
    status: "Expanding",
  },
];

export default function ContactRegionalSection() {
  return (
    <section className="bg-[#0e0d0c] py-20 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <p className="text-xs text-orange tracking-[0.35em] uppercase font-semibold mb-4">
            Regional Presence
          </p>
          <h2 className="text-3xl font-bold text-white mb-10 max-w-xl leading-tight">
            Headquartered in Ibadan, expanding across Africa.
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-4">
          {regions.map((r, i) => (
            <FadeIn key={r.region} delay={i * 0.07}>
              <div className="border border-white/10 p-8 bg-white/3">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-bold text-white">{r.region}</p>
                  <span
                    className={`text-[10px] tracking-[0.2em] uppercase font-semibold px-2 py-0.5 ${
                      r.status === "Active"
                        ? "bg-orange/20 text-orange"
                        : "bg-white/10 text-white/40"
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
                <p className="text-xs text-white/40 leading-6">{r.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
