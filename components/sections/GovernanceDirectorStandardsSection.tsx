import FadeIn from "@/components/FadeIn";

export default function GovernanceDirectorStandardsSection() {
  return (
    <section className="bg-(--bg) py-24 border-t border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-orange" />
              <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold">
                Director &amp; Officer Standards
              </p>
              <div className="w-8 h-px bg-orange" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-(--fg) leading-tight mb-8">
              Honesty, diligence, and the best interests of the company — always.
            </h2>
            <p className="text-base text-(--fg-muted) leading-8">
              Directors and senior managers are expected to act with honesty,
              due diligence, and in the best interests of the company and its
              stakeholders, in strict accordance with Nigerian corporate law and
              international best practices in governance.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
