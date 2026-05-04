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
    "https://images.unsplash.com/photo-1700469919563-ef267d459da5?w=900&q=85&auto=format&fit=crop",
  "machinery-manufacturing":
    "https://images.unsplash.com/photo-1764114903065-4cc137dd303b?w=900&q=85&auto=format&fit=crop",
  "construction-infrastructure":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85&auto=format&fit=crop",
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

const categories = [
  { label: "Technology & Digital", slugs: ["information-technology", "research-development"] },
  { label: "Food & Agriculture", slugs: ["agricultural-business"] },
  {
    label: "Built Environment",
    slugs: ["real-estate", "construction-infrastructure", "machinery-manufacturing", "automotive"],
  },
  { label: "Energy & Resources", slugs: ["renewable-energy", "oil-gas-services"] },
  {
    label: "Capital & Advisory",
    slugs: ["business-consulting", "forensic-financial-services", "general-trading"],
  },
  { label: "Media & Communications", slugs: ["media-digital-management"] },
];

export default function DivisionsCategoriesSection() {
  return (
    <>
      {categories.map((cat, ci) => {
        const catDivisions = divisions.filter((d) => cat.slugs.includes(d.slug));
        return (
          <section
            key={cat.label}
            className={`py-20 border-t border-(--border) ${
              ci % 2 === 0 ? "bg-(--bg)" : "bg-(--bg-alt)"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <FadeIn>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-8 h-px bg-orange" />
                  <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold">
                    {cat.label}
                  </p>
                </div>
              </FadeIn>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {catDivisions.map((division, i) => (
                  <FadeIn key={division.slug} delay={i * 0.07}>
                    <Link
                      href={`/divisions/${division.slug}`}
                      className="group relative flex flex-col overflow-hidden border border-(--border) hover:border-orange/40 bg-(--bg-card) transition-all duration-300 rounded-sm"
                    >
                      <div className="relative aspect-video overflow-hidden bg-[#0e0d0c]">
                        <Image
                          src={
                            divisionImages[division.slug] ??
                            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=85&auto=format&fit=crop"
                          }
                          alt={division.name}
                          fill
                          className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0e0d0c]/60 to-transparent" />
                        <div className="absolute top-4 left-4 text-[10px] text-orange tracking-[0.3em] font-bold tabular-nums">
                          {String(division.id).padStart(2, "0")}
                        </div>
                      </div>
                      <div className="flex flex-col flex-1 p-5 gap-3">
                        <h3 className="text-sm font-bold text-(--fg) leading-snug group-hover:text-orange transition-colors duration-200">
                          {division.name}
                        </h3>
                        {division.slug === "media-digital-management" && (
                          <p className="text-[10px] text-(--fg-faint) tracking-[0.1em] uppercase font-medium">
                            Zenith Multipurposes
                          </p>
                        )}
                        <div className="flex items-center gap-2 text-[10px] text-orange tracking-[0.15em] uppercase font-semibold pt-2 border-t border-(--border) mt-auto">
                          Learn more
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
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
      })}
    </>
  );
}
