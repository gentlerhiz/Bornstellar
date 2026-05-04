import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const leaders = [
  {
    name: "Sijuade Henry Oluwatimilehin",
    role: "Chairman & Chief Executive Officer",
    image: "/ceoImage.png",
    bio: "Sijuade Henry Oluwatimilehin is the founder and Chief Executive Officer of Bornstellar Limited, a diversified and fast-growing conglomerate headquartered in Ibadan, Oyo State, Nigeria. Since its establishment in 2025, Bornstellar has rapidly expanded into a structured, multi-division platform with growing operations spanning technology, agriculture, real estate, energy, manufacturing, construction, and several other critical sectors across Africa.",
  },
  {
    name: "Daniel Sijuade",
    role: "Vice Chairman / Group Executive Director",
    image: "/Daniel_Sijuade.png",
    bio: "Daniel Sijuade is a results-driven executive with over seven years of experience in content strategy and digital communications. He has led the development and execution of high-impact content initiatives that have generated millions of views and strong engagement for both local and international brands. As Vice Chairman and Group Executive Director at Bornstellar, he provides strategic oversight across key business areas, leveraging a data-driven and insight-led approach to communication.",
  },
];

export default function LeadershipTeamSection() {
  return (
    <section className="bg-[var(--bg)] py-24 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#E8500A]" />
            <p className="text-sm text-[#E8500A] tracking-[0.35em] uppercase font-semibold">
              Our Leadership
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--fg)] leading-tight mb-16 max-w-2xl">
            The people steering Bornstellar&apos;s vision.
          </h2>
        </FadeIn>

        {/* Team grid — narrower cards, centered */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          {leaders.map((person, i) => (
            <FadeIn key={person.name} delay={i * 0.12}>
              <div className="group flex flex-col">

                {/* Photo — tall portrait */}
                <div className="relative w-full overflow-hidden rounded-2xl bg-[#0e0d0c] mb-6"
                  style={{ aspectRatio: "3/4" }}>
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c]/30 to-transparent pointer-events-none" />
                </div>

                {/* Text — no background, clean */}
                <div className="w-6 h-[2px] bg-[#E8500A] mb-4" />

                <h3 className="text-xl font-bold text-[var(--fg)] leading-snug mb-1">
                  {person.name}
                </h3>

                <p className="text-[11px] text-[#E8500A] tracking-[0.2em] uppercase font-semibold mb-4">
                  {person.role}
                </p>

                <div className="w-full h-px bg-[var(--border)] mb-4" />

                <p className="text-sm text-[var(--fg-muted)] leading-[1.85]">
                  {person.bio}
                </p>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
