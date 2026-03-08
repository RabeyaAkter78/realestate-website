import { MainFooter } from "@/components/main-footer";
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { TailoredExperienceSection } from "@/components/home/tailored-experience-section";
import { OrderAnywhereSection } from "@/components/home/order-anywhere-section";
import { ScalableOperationsSection } from "@/components/home/scalable-operations-section";
import { RevenueStreamSection } from "@/components/home/revenue-stream-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <TailoredExperienceSection />
        <OrderAnywhereSection />
        <ScalableOperationsSection />
        <RevenueStreamSection />
      </main>
      <MainFooter />
    </div>
  );
}
