import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import BrandPurposeSection from "@/components/sections/BrandPurposeSection";
import LeadershipQuoteSection from "@/components/sections/LeadershipQuoteSection";
import QuickFactsSection from "@/components/sections/QuickFactsSection";
import ThematicBlocksSection from "@/components/sections/ThematicBlocksSection";
import DivisionsSection from "@/components/sections/DivisionsSection";
import ValuesSection from "@/components/sections/ValuesSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import CtaSection from "@/components/sections/CtaSection";
import NewsroomSection from "@/components/sections/NewsroomSection";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <BrandPurposeSection />
      <LeadershipQuoteSection />
      <QuickFactsSection />
      <ThematicBlocksSection />
      <DivisionsSection />
      <ValuesSection />
      <WhoWeAreSection />
      <CtaSection />
      <NewsroomSection />
      <Newsletter />
    </>
  );
}
