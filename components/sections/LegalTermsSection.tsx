import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function LegalTermsSection() {
  return (
    <section id="terms" className="bg-(--bg-alt) py-24 border-t border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-orange" />
              <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold">
                Terms of Engagement
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-(--fg) leading-tight mb-8">
              Every relationship governed by written agreement.
            </h2>
            <p className="text-base text-(--fg-muted) leading-8 mb-8">
              All business relationships with Bornstellar Limited are governed by
              written contracts, service agreements, or memoranda of understanding
              that clearly define scope, responsibilities, pricing, timelines, and
              dispute resolution mechanisms.
            </p>
            <p className="text-base text-(--fg-muted) leading-8 mb-10">
              We do not enter into informal arrangements. This commitment to
              documented agreements protects all parties and ensures clarity,
              accountability, and legal enforceability in every engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 px-8 items-center border border-orange text-orange text-xs font-semibold tracking-[0.15em] uppercase hover:bg-orange hover:text-white transition-all duration-300"
            >
              Start a Formal Enquiry
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
