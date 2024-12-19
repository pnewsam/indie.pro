import { MarketingNavbar } from "@/components/MarketingNavbar";
import { DemoSection } from "@/components/DemoSection";
import { HeroSection } from "@/components/HeroSection";

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
