import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const developmentItems = [
  "Industry certifications and technical programmes",
  "Cross-divisional rotation opportunities",
  "Structured mentorship and leadership tracks",
  "Partnerships with universities across Africa",
  "Internal knowledge-sharing and research platforms",
];

const applicationSteps = [
  {
    step: "01",
    label: "Submit your CV & cover letter",
    desc: "Through our careers portal or via careers@bornstellar.com",
  },
  {
    step: "02",
    label: "Application review",
    desc: "We review applications on a rolling basis — no hard cutoffs",
  },
  {
    step: "03",
    label: "Shortlisting & interviews",
    desc: "Shortlisted candidates are contacted for interviews and assessments",
  },
  {
    step: "04",
    label: "Offer & onboarding",
    desc: "Successful candidates receive formal offers and structured onboarding",
  },
];

export default function CareersGrowthSection() {
  return (
    <section className="bg-[#0e0d0c] py-24 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Development */}
          <FadeIn>
            <p className="text-xs text-orange tracking-[0.35em] uppercase font-semibold mb-6">
              Development &amp; Growth
            </p>
            <h2 className="text-3xl font-bold text-white leading-tight mb-8">
              We invest in you — continuously.
            </h2>
            <p className="text-sm text-white/55 leading-8 mb-8">
              Bornstellar invests in continuous professional development through
              training programmes, industry certifications, cross-divisional
              rotations, and partnerships with leading educational institutions.
            </p>
            <div className="flex flex-col gap-3">
              {developmentItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                  <span className="text-sm text-white/50">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Application */}
          <FadeIn delay={0.1}>
            <p className="text-xs text-orange tracking-[0.35em] uppercase font-semibold mb-6">
              Application Process
            </p>
            <h2 className="text-3xl font-bold text-white leading-tight mb-8">
              Simple. Merit-based. Rolling.
            </h2>
            <div className="flex flex-col gap-0 divide-y divide-white/8 border-y border-white/8 mb-10">
              {applicationSteps.map((s) => (
                <div key={s.step} className="flex items-start gap-6 py-6">
                  <span className="text-[10px] text-orange tracking-[0.3em] font-bold tabular-nums mt-1 shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      {s.label}
                    </p>
                    <p className="text-xs text-white/40 leading-5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="mailto:careers@bornstellar.com"
              className="inline-flex h-12 px-8 items-center bg-orange text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-orange-hover transition-colors duration-300"
            >
              Apply Now →
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
