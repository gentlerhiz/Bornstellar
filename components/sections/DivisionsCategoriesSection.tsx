import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { divisions } from "@/lib/divisions";

const divisionImages: Record<string, string> = {
  "information-technology":
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=85&auto=format&fit=crop",
  "agricultural-business":
    "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900&q=85&auto=format&fit=crop",
  "real-estate":
    "https://images.unsplash.com/photo-1685266325553-56094896ce47?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "machinery-manufacturing":
    "https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?q=80&w=1225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "construction-infrastructure":
    "/construction.jpeg",
  "general-trading":
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=85&auto=format&fit=crop",
  "oil-gas-services":
    "https://images.unsplash.com/photo-1678984236460-2ed63ae1c983?w=900&q=85&auto=format&fit=crop",
  "business-consulting":
    "https://images.unsplash.com/photo-1573164574511-73c773193279?w=900&q=85&auto=format&fit=crop",
  "forensic-financial-services":
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=85&auto=format&fit=crop",
  automotive:
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=85&auto=format&fit=crop",
  "research-development":
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=900&q=90&auto=format&fit=crop",
  "renewable-energy":
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=85&auto=format&fit=crop",
  "media-digital-management":
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=85&auto=format&fit=crop",
};

export default function DivisionsCategoriesSection() {
  return (
    <section className="py-20 border-t border-(--border) bg-(--bg)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-orange" />
            <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold">
              Divisions
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr]">
          {divisions.map((division, i) => (
            <FadeIn key={division.slug} delay={i * 0.05}>
              <Link
                href={`/divisions/${division.slug}`}
                className="group relative block overflow-hidden bg-[#0e0d0c] border border-(--border) transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={
                      divisionImages[division.slug] ??
                      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=85&auto=format&fit=crop"
                    }
                    alt={division.name}
                    fill
                    className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0e0d0c]/70 via-[#0e0d0c]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="absolute bottom-6 left-6 flex items-center justify-center w-12 h-12 rounded-full bg-white/95 text-[#0e0d0c] text-2xl font-semibold shadow-lg ring-1 ring-white/30 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  +
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 pb-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-xl font-semibold text-white leading-snug">
                    {division.name}
                  </h3>
                  {division.slug === "media-digital-management" && (
                    <p className="mt-1 text-[11px] text-white/70 tracking-[0.12em] uppercase font-semibold">
                      Operating as: Zenith Multipurposes
                    </p>
                  )}
                  <p className="mt-3 text-sm text-white/80 leading-6 line-clamp-3">
                    {division.tagline}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
