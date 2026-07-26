import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

const emailContacts = [
  { label: "General", email: "Bornstellarltd@gmail.com" },
  // { label: "Partnerships & Corporate", email: "partnerships@bornstellar.com" },
  // { label: "Media & Investor Relations", email: "media@bornstellar.com" },
  // { label: "Careers", email: "careers@bornstellar.com" },
  // { label: "Ethics & Compliance", email: "ethics@bornstellar.com" },
];

export default function ContactMainSection() {
  return (
    <section className="bg-(--bg) py-24 border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-start">
          {/* Left — form */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-orange" />
              <p className="text-xs text-orange tracking-[0.35em] uppercase font-semibold">
                Send Us a Message
              </p>
            </div>
            <h2 className="text-3xl font-bold text-(--fg) leading-tight mb-10">
              We respond to every serious enquiry.
            </h2>
            <ContactForm />
          </FadeIn>

          {/* Right — info */}
          <FadeIn delay={0.12}>
            <div className="flex flex-col gap-6">
              {/* Head Office */}
              <div className="p-8 border border-(--border) bg-(--bg-alt) rounded-sm">
                <p className="text-xs text-orange tracking-[0.35em] uppercase font-semibold mb-5">
                  Head Office
                </p>
                <div className="flex flex-col gap-2 text-sm text-(--fg-muted) leading-7">
                  <p className="font-semibold text-(--fg)">Bornstellar Limited</p>
                  <p>Oluyole Estate, Ibadan, Oyo State, Nigeria</p>
                  <p className="text-xs text-(--fg-faint)">
                    Registered under the Companies and Allied Matters Act, 2020
                  </p>
                  <p className="text-xs text-(--fg-faint)">
                    Incorporated: January 23, 2025
                  </p>
                </div>
              </div>

              {/* Email contacts */}
              <div className="p-8 border border-(--border) bg-(--bg-alt) rounded-sm">
                <p className="text-xs text-orange tracking-[0.35em] uppercase font-semibold mb-5">
                  Business Enquiries
                </p>
                <div className="flex flex-col gap-4">
                  {emailContacts.map((item) => (
                    <div key={item.email} className="flex flex-col gap-0.5">
                      <span className="text-[10px] text-(--fg-faint) tracking-[0.15em] uppercase">
                        {item.label}
                      </span>
                      <a
                        href={`mailto:${item.email}`}
                        className="text-sm text-(--fg-muted) hover:text-orange transition-colors duration-200"
                      >
                        {item.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
