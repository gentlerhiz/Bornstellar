import Image from "next/image";
import FadeIn from "@/components/FadeIn";

interface Props {
  divisionName: string;
  images: string[];
}

export default function DivisionShowcaseSection({ divisionName, images }: Props) {
  if (images.length < 2) return null;

  const [primary, secondary, tertiary] = images;

  return (
    <section className="bg-(--bg-alt) py-24 border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="flex flex-col gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-orange" />
              <p className="text-sm text-orange tracking-[0.35em] uppercase font-semibold">
                Division Showcase
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-(--fg) leading-tight max-w-3xl">
              {divisionName} in action
            </h2>
            <p className="text-sm text-(--fg-muted) leading-7 max-w-2xl">
              A visual snapshot of project environments, operations, and field delivery across this division.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr] lg:aspect-2/1">
          <FadeIn>
            <div className="group relative isolate overflow-hidden rounded-sm border border-(--border) bg-[#0e0d0c] min-h-75 transition-all duration-500 hover:-translate-y-1 lg:min-h-0 lg:h-full">
              <Image
                src={primary}
                alt={`${divisionName} showcase image 1`}
                fill
                className="object-cover transition-transform duration-900 ease-out group-hover:scale-[1.08] group-hover:rotate-[0.35deg]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0e0d0c]/55 via-transparent to-transparent" />
              <div className="pointer-events-none absolute -inset-y-12 -left-1/3 w-1/2 rotate-12 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />
            </div>
          </FadeIn>

          <div className="grid gap-5 grid-rows-2 lg:h-full">
            <FadeIn delay={0.08}>
              <div className="group relative isolate overflow-hidden rounded-sm border border-(--border) bg-[#0e0d0c] min-h-55 transition-all duration-500 hover:-translate-y-1 lg:min-h-0 lg:h-full">
                <Image
                  src={secondary}
                  alt={`${divisionName} showcase image 2`}
                  fill
                  className="object-cover transition-transform duration-900 ease-out group-hover:scale-[1.08]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0e0d0c]/45 via-transparent to-transparent" />
                <div className="pointer-events-none absolute -inset-y-10 -left-1/3 w-1/2 rotate-12 bg-linear-to-r from-transparent via-white/18 to-transparent opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />
              </div>
            </FadeIn>

            <FadeIn delay={0.14}>
              <div className="group relative isolate overflow-hidden rounded-sm border border-(--border) bg-[#0e0d0c] min-h-55 transition-all duration-500 hover:-translate-y-1 lg:min-h-0 lg:h-full">
                <Image
                  src={tertiary ?? secondary}
                  alt={`${divisionName} showcase image ${tertiary ? "3" : "2"}`}
                  fill
                  className="object-cover transition-transform duration-900 ease-out group-hover:scale-[1.08]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0e0d0c]/45 via-transparent to-transparent" />
                <div className="pointer-events-none absolute -inset-y-10 -left-1/3 w-1/2 rotate-12 bg-linear-to-r from-transparent via-white/18 to-transparent opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
