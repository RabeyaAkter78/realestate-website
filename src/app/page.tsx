import { MainFooter } from "@/components/main-footer";
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { TailoredExperienceSection } from "@/components/home/tailored-experience-section";
import PlatformManage from "@/components/home/platformManage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <TailoredExperienceSection />
        <PlatformManage />
      </main>
      <MainFooter />
    </div>
  );
}
