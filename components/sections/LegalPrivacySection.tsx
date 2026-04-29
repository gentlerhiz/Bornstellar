import FadeIn from "@/components/FadeIn";

export default function LegalPrivacySection() {
  return (
    <section id="privacy" className="bg-(--bg) py-24 border-t border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-orange" />
              <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold">
                Privacy Policy
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-(--fg) leading-tight mb-8">
              Your data. Protected. Always.
            </h2>
            <p className="text-base text-(--fg-muted) leading-8 mb-6">
              Bornstellar Limited complies with applicable Nigerian data protection
              legislation and international best practices. We collect only the
              data necessary to respond to your enquiries and provide our services.
            </p>
            <p className="text-base text-(--fg-muted) leading-8">
              We do not sell, trade, or share personal data with third parties
              without explicit consent, except as required by law or as necessary
              to deliver services explicitly requested by the user. For
              privacy-related enquiries, contact{" "}
              <a href="mailto:info@bornstellar.com" className="text-orange hover:underline">
                info@bornstellar.com
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
