import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import BrandPurposeSection from "@/components/sections/BrandPurposeSection";
import QuickFactsSection from "@/components/sections/QuickFactsSection";
import ThematicBlocksSection from "@/components/sections/ThematicBlocksSection";
import DivisionsSection from "@/components/sections/DivisionsSection";
import ValuesSection from "@/components/sections/ValuesSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import CtaSection from "@/components/sections/CtaSection";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <DivisionsSection />
      <BrandPurposeSection />
      <ValuesSection />
      <ThematicBlocksSection />
      <QuickFactsSection />
      <MarqueeStrip />
      <CtaSection />
      <Newsletter />
    </>
  );
}
