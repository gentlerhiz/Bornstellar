"use client";

import { useState } from "react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const faqs = [
  {
    category: "About Bornstellar",
    items: [
      {
        q: "What is Bornstellar?",
        a: "Bornstellar Limited is a Nigerian multi-division company providing integrated solutions across technology, agriculture, infrastructure, energy, manufacturing, and professional services — with a focus on the African continent.",
      },
      {
        q: "Where is Bornstellar headquartered?",
        a: "Our head office is in Oluyole Estate, Ibadan, Oyo State, Nigeria. We are incorporated under the Companies and Allied Matters Act (CAMA), 2020.",
      },
      {
        q: "How many divisions does Bornstellar operate?",
        a: "Bornstellar currently operates 12 specialised divisions covering IT, agriculture, real estate, machinery manufacturing, construction & infrastructure, general trading, oil & gas, business consulting, forensic financial services, automotive, R&D, and renewable energy.",
      },
      {
        q: "What makes Bornstellar different?",
        a: "Our integrated multi-division structure allows us to deliver comprehensive solutions across sectors, providing clients with coordinated expertise and execution capabilities under one corporate platform — rather than managing multiple fragmented vendors.",
      },
      {
        q: "When was Bornstellar incorporated?",
        a: "Bornstellar Limited was incorporated on January 23, 2025, under the Companies and Allied Matters Act (CAMA), 2020.",
      },
    ],
  },
  {
    category: "Working with Bornstellar",
    items: [
      {
        q: "How can my organisation work with Bornstellar?",
        a: "Contact us through our website with details of your project or requirements. Our team will assess the fit and respond with clear next steps. All business relationships are governed by formal written agreements.",
      },
      {
        q: "Do you work with international partners?",
        a: "Yes. We collaborate with international development institutions, investors, technology providers, and contractors on projects across Africa. We welcome partnerships that bring capital, technology, or expertise aligned with our African development mandate.",
      },
      {
        q: "What sectors do you operate in?",
        a: "We operate across 12 divisions covering IT, agriculture, real estate, manufacturing, construction, trading, oil & gas, consulting, forensic services, automotive, R&D, and renewable energy.",
      },
      {
        q: "Do you work with governments and public institutions?",
        a: "Yes. We work with public sector clients, government agencies, development institutions, and local communities alongside our private sector engagements. We have experience structuring PPP-based developments and public-sector advisory.",
      },
      {
        q: "What regions in Africa does Bornstellar cover?",
        a: "Our current focus is on West Africa (primary base), with strategic expansion into East Africa and Southern Africa, aligned with infrastructure corridors and trade integration initiatives.",
      },
    ],
  },
  {
    category: "Careers",
    items: [
      {
        q: "How do I apply for a position at Bornstellar?",
        a: "Visit our Careers page and submit your CV and cover letter via our online portal, or email careers@bornstellar.com. We review applications on a rolling basis.",
      },
      {
        q: "What qualifications does Bornstellar look for?",
        a: "We seek professionals with relevant technical expertise, integrity, a collaborative mindset, and a genuine commitment to Africa's development. Both experienced hires and graduate-level candidates are considered across all 12 division areas.",
      },
      {
        q: "Does Bornstellar offer internship or graduate programmes?",
        a: "We are building structured graduate and internship pipelines. Interested candidates should reach out to careers@bornstellar.com with relevant details about their background and interests.",
      },
    ],
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-(--border) last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span
          className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
            open ? "text-orange" : "text-(--fg) group-hover:text-orange"
          }`}
        >
          {q}
        </span>
        <span
          className={`shrink-0 w-5 h-5 flex items-center justify-center border rounded-full text-xs transition-all duration-300 ${
            open
              ? "border-orange text-orange rotate-45"
              : "border-(--border) text-(--fg-muted) group-hover:border-orange group-hover:text-orange"
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-6">
          <p className="text-sm text-(--fg-muted) leading-8">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqAccordionSection() {
  return (
    <section className="bg-(--bg) py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {faqs.map((section, si) => (
          <FadeIn key={section.category} delay={si * 0.08}>
            <div className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-orange" />
                <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold">
                  {section.category}
                </p>
              </div>
              <div className="border-t border-(--border)">
                {section.items.map((item) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={0.2}>
          <div className="mt-16 border border-(--border) bg-(--bg-alt) p-10 text-center rounded-sm">
            <div className="w-8 h-0.5 bg-orange mx-auto mb-6" />
            <h3 className="text-xl font-bold text-(--fg) mb-3">
              Still have a question?
            </h3>
            <p className="text-sm text-(--fg-muted) mb-8 max-w-sm mx-auto">
              Reach out directly and our team will get back to you within 2–3
              business days.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-11 px-8 items-center bg-orange text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-orange-hover transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
