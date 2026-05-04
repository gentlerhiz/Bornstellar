"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const goals = [
  {
    title: "Agricultural Productivity & Food Security",
    description:
      "Scaling commercial farming, agri-input supply, and cold-chain logistics to feed Africa's growing population and capture export markets.",
    img: "/agriculture2.jpeg",
  },
  {
    title: "Digital Transformation & Knowledge Industries",
    description:
      "Delivering the IT systems, platforms, and talent that power modern African institutions and digital economies.",
    img: "/Information.jpeg",
  },
  {
    title: "Housing, Urbanisation & Core Infrastructure",
    description:
      "Building the real estate, roads, bridges, and facilities that underpin Africa's rapid urbanisation and economic growth.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85&auto=format&fit=crop",
  },
  {
    title: "Local Manufacturing & Industrial Capacity",
    description:
      "Manufacturing context-appropriate machinery and automotive solutions that reduce import dependence and create lasting industrial jobs.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=85&auto=format&fit=crop",
  },
  {
    title: "Energy Security & Transition",
    description:
      "Deploying solar, hybrid, and off-grid systems alongside oil & gas support services for a pragmatic and just energy transition.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=85&auto=format&fit=crop",
  },
  {
    title: "Governance, Transparency & Financial Integrity",
    description:
      "Providing forensic, consulting, and advisory services that build investor confidence and strengthen African institutions.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=85&auto=format&fit=crop",
  },
];

export default function GoalsSection() {
  return (
    <section className="bg-[var(--bg)] py-24 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#E8500A]" />
                <p className="text-sm text-[#E8500A] tracking-[0.35em] uppercase font-semibold">
                  Our Goals for Africa
                </p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--fg)] leading-tight max-w-xl">
                What we are building toward.
              </h2>
            </div>
            <p className="text-sm text-[var(--fg-muted)] leading-8 max-w-sm lg:text-right">
              Every division, every project, and every partnership is oriented
              around these six long-term commitments to the continent.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07}>
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-[#0e0d0c]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay — deepens on hover to keep text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c] via-[#0e0d0c]/30 to-transparent group-hover:via-[#0e0d0c]/50 transition-all duration-500" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                  <div className="w-6 h-[2px] bg-[#E8500A]" />
                  <h3 className="text-sm font-bold text-white leading-snug tracking-tight">
                    {item.title}
                  </h3>
                  {/* Description — hidden by default, revealed on hover */}
                  <p className="text-xs text-white/60 leading-[1.8] overflow-hidden max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
