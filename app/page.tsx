import Navigation from "@/components/landing-page-sections/Navigation";
import HeroSection from "@/components/landing-page-sections/hero";
import ChipPerformanceSection from "@/components/landing-page-sections/chip-performance";
import FeaturedGamesSection from "@/components/landing-page-sections/featured-games";
import EmulatorsSection from "@/components/landing-page-sections/emulators-consoles";
import CredibilitySection from "@/components/landing-page-sections/credibility";
import ToolsTeaserSection from "@/components/landing-page-sections/tools";
import CommunitySection from "@/components/landing-page-sections/community";
import Footer from "@/components/landing-page-sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ChipPerformanceSection />
      <FeaturedGamesSection />
      <EmulatorsSection />
      <CredibilitySection />
      <ToolsTeaserSection />
      <CommunitySection />
    </>
  );
}
