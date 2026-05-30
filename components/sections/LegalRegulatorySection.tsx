import FadeIn from "@/components/FadeIn";

const regulations = [
  "Companies and Allied Matters Act (CAMA), 2020",
  "Sector-specific regulations for agriculture, construction, energy, financial services, and technology",
  "Corporate governance best practices aligned with Nigerian and international standards",
  "Anti-money laundering and counter-terrorism financing regulations",
  "Data protection and privacy legislation",
];

const corporateInfo = [
  { field: "Company Name", value: "Bornstellar Limited" },
  { field: "Legal Structure", value: "Private company limited by shares" },
  { field: "Jurisdiction", value: "Federal Republic of Nigeria" },
  { field: "Registered Office", value: "Oluyole Estate, Ibadan, Oyo State, Nigeria" },
  { field: "Date of Incorporation", value: "January 23, 2025" },
  {
    field: "Objects",
    value:
      "As defined in Memorandum and Articles of Association filed with the Corporate Affairs Commission",
  },
];

export default function LegalRegulatorySection() {
  return (
    <section id="regulatory" className="bg-(--bg) py-24 border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-orange" />
              <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold">
                Regulatory Framework
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-(--fg) leading-tight mb-10">
              Fully compliant. Across every sector.
            </h2>
            <div className="flex flex-col divide-y divide-(--border) border-y border-(--border)">
              {regulations.map((reg, i) => (
                <div key={i} className="flex items-start gap-5 py-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0 mt-2" />
                  <p className="text-sm text-(--fg-muted) leading-7">{reg}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div id="corporate" className="border border-(--border) bg-(--bg-alt) p-8 rounded-sm">
              <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold mb-6">
                Corporate Information
              </p>
              <div className="flex flex-col divide-y divide-(--border)">
                {corporateInfo.map((item) => (
                  <div key={item.field} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
                    <span className="text-[10px] text-(--fg-faint) tracking-[0.2em] uppercase">
                      {item.field}
                    </span>
                    <span className="text-sm text-(--fg) font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
