"use client";

import { useState } from "react";

const interests = [
  "Technology & Digital",
  "Agriculture",
  "Infrastructure",
  "Energy",
  "Consulting & Governance",
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function toggleInterest(item: string) {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to real email service (Mailchimp / ConvertKit / Resend)
    setSubmitted(true);
  }

  return (
    <section className="relative bg-[#0e0d0c] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] rounded-full bg-[#E8500A]/4 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <div>
            <p className="text-xs text-[#E8500A] tracking-[0.3em] uppercase font-medium mb-5">
              Stay Informed
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Africa's economic transformation,{" "}
              <span className="text-[#E8500A]">in your inbox.</span>
            </h2>
            <p className="text-base text-white/50 leading-8 max-w-md">
              Subscribe to the Bornstellar newsletter for quarterly updates,
              division spotlights, project milestones, and thought leadership
              on Africa's most critical sectors.
            </p>

            {/* Trust signals */}
            <div className="flex flex-col gap-3 mt-8">
              {[
                "Quarterly digest — no spam, ever",
                "Division-specific research briefs",
                "Project and partnership announcements",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8500A] shrink-0" />
                  <span className="text-sm text-white/40">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="border border-[#E8500A]/30 bg-[#E8500A]/5 p-10 text-center">
                <p className="text-2xl font-bold text-white mb-3">
                  You&apos;re in.
                </p>
                <p className="text-sm text-white/50">
                  Thank you for subscribing. Look out for your first update
                  from Bornstellar shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/40 tracking-[0.15em] uppercase font-medium">
                    Email Address <span className="text-[#E8500A]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@organization.com"
                    className="h-12 px-4 bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#E8500A] transition-colors duration-200"
                  />
                </div>

                {/* Interests */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs text-white/40 tracking-[0.15em] uppercase font-medium">
                    Sectors of Interest
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => {
                      const active = selected.includes(item);
                      return (
                        <button
                          type="button"
                          key={item}
                          onClick={() => toggleInterest(item)}
                          className={`px-4 py-2 text-xs font-medium tracking-wide border transition-all duration-200 ${
                            active
                              ? "bg-[#E8500A] border-[#E8500A] text-white"
                              : "border-white/15 text-white/40 hover:border-white/40 hover:text-white/70"
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="h-12 px-8 bg-[#E8500A] text-white text-sm font-semibold tracking-[0.15em] uppercase hover:bg-[#ff6b2b] transition-colors duration-300 self-start"
                >
                  Subscribe
                </button>

                <p className="text-xs text-white/25 leading-relaxed">
                  By subscribing you agree to receive our newsletter by email.
                  You can unsubscribe at any time. See our{" "}
                  <a
                    href="/legal#privacy"
                    className="underline hover:text-white/50 transition-colors"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
