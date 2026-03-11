import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function SustainabilityCommitmentSection() {
  return (
    <section className="bg-(--bg) py-24 border-t border-(--border)">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <div className="p-10 border border-(--border) bg-(--bg-alt) h-full">
              <div className="w-8 h-0.5 bg-orange mb-6" />
              <h3 className="text-xl font-bold text-(--fg) mb-4">
                Commitment to Communities
              </h3>
              <p className="text-sm text-(--fg-muted) leading-8">
                We engage communities early in project planning, prioritise local
                employment and procurement, and support education, health, and
                infrastructure initiatives in every area where we operate. Our
                projects are designed to leave lasting positive footprints.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="p-10 border border-(--border) bg-(--bg-alt) h-full">
              <div className="w-8 h-0.5 bg-orange mb-6" />
              <h3 className="text-xl font-bold text-(--fg) mb-4">
                Environmental Stewardship
              </h3>
              <p className="text-sm text-(--fg-muted) leading-8">
                We integrate environmental impact assessments into every major
                project, promote circular economy principles where feasible, and
                actively drive renewable energy adoption across our own operations
                and client engagements — reducing carbon intensity with each
                project.
              </p>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.15}>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 px-10 items-center bg-orange text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-orange-hover transition-colors duration-300"
            >
              Partner with Us on Impact
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
