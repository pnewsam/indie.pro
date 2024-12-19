import { DemoSection } from "@/components/DemoSection";
import { HeroSection } from "@/components/HeroSection";
import { MarketingNavbar } from "@/components/MarketingNavbar";

export default function Home() {
  return (
    <div className="">
      <MarketingNavbar />
      <main>
        <HeroSection />
        <DemoSection />
      </main>
    </div>
  );
}
