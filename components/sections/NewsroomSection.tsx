"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const newsItems = [
  {
    category: "Corporate",
    date: "Feb 2026",
    title: "Bornstellar Limited Launches Operations Across Four Divisions",
    excerpt:
      "The company formally commences operations in Information Technology, Agricultural Business, Renewable Energy, and Business Consulting — marking the start of active service delivery.",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80&auto=format&fit=crop",
    href: "/newsroom/bornstellar-launches-operations",
  },
  {
    category: "Energy",
    date: "Feb 2026",
    title: "Renewable Energy Division Targets Rural Electrification in Oyo State",
    excerpt:
      "Bornstellar's Renewable Energy Solutions arm announces its first off-grid solar pilot targeting underserved farming communities in Oyo State, Nigeria.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80&auto=format&fit=crop",
    href: "/newsroom/renewable-energy-oyo-state",
  },
  {
    category: "Agriculture",
    date: "Jan 2026",
    title: "Agricultural Business Division Initiates Outgrower Scheme Consultations",
    excerpt:
      "Conversations are underway with smallholder farmer groups across Southwestern Nigeria to design an outgrower scheme linking production to regional markets.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80&auto=format&fit=crop",
    href: "/newsroom/agricultural-outgrower-scheme",
  },
];

export default function NewsroomSection() {
  return (
    <section className="bg-[var(--bg)] py-16 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs text-[#E8500A] tracking-[0.3em] uppercase font-medium mb-4">
                Newsroom
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--fg)] leading-tight max-w-lg">
                Latest from Bornstellar.
              </h2>
            </div>
            <Link
              href="/newsroom"
              className="inline-flex h-10 px-6 items-center border border-[var(--border)] text-[var(--fg-muted)] text-xs font-semibold tracking-[0.15em] uppercase hover:border-[#E8500A] hover:text-[#E8500A] transition-all duration-300 shrink-0"
            >
              All News
            </Link>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <Link href={item.href} className="group flex flex-col h-full">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] bg-[var(--bg-card)] mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category chip */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#E8500A] text-white text-[10px] font-semibold tracking-[0.15em] uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1">
                  <span className="text-xs text-[var(--fg-faint)] tracking-wider">
                    {item.date}
                  </span>
                  <h3 className="text-base font-semibold text-[var(--fg)] leading-snug group-hover:text-[#E8500A] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-7 flex-1">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-[#E8500A] tracking-[0.15em] uppercase font-medium">
                      Read More
                    </span>
                    <span className="text-[#E8500A] text-sm group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
