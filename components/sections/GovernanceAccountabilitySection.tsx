import FadeIn from "@/components/FadeIn";

const accountabilityItems = [
  "Regular board meetings and documented decision records",
  "Internal audit and forensic financial oversight",
  "External audit by reputable independent firms",
  "Clear reporting lines and delegated authorities",
  "Whistleblower protection and ethics hotline",
];

const sharedServicesFunctions = [
  "Finance & Treasury",
  "Legal & Compliance",
  "Risk Management",
  "Human Resources",
  "Group Technology & IT",
];

export default function GovernanceAccountabilitySection() {
  return (
    <section className="bg-[#0e0d0c] py-24 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Accountability */}
          <FadeIn>
            <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold mb-6">
              Accountability &amp; Transparency
            </p>
            <h2 className="text-3xl font-bold text-white mb-10 leading-tight">
              We hold ourselves to the standards we set for others.
            </h2>
            <div className="flex flex-col divide-y divide-white/8 border-y border-white/8">
              {accountabilityItems.map((item, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className="flex items-start gap-5 py-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0 mt-2" />
                    <p className="text-sm text-white/65 leading-7">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Management Structure */}
          <FadeIn delay={0.1}>
            <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold mb-6">
              Management Structure
            </p>
            <h2 className="text-3xl font-bold text-white mb-8 leading-tight">
              Coordinated execution across all 12 divisions.
            </h2>
            <p className="text-sm text-white/55 leading-8 mb-8">
              Executive management leads each division, with shared services for
              finance, legal, risk, human resources, and technology ensuring
              consistency, efficiency, and control across the organisation.
            </p>
            <div className="border border-white/10 p-8 bg-white/3">
              <p className="text-sm text-orange tracking-[0.2em] uppercase font-semibold mb-5">
                Shared Services Functions
              </p>
              <ul className="flex flex-col gap-3">
                {sharedServicesFunctions.map((fn) => (
                  <li key={fn} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-orange shrink-0" />
                    <span className="text-sm text-white/50">{fn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
