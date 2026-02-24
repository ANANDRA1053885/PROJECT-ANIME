import HeroSection from "@/components/home/HeroSection";
import TrendingSection from "@/components/home/TrendingSection";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <HeroSection />
      <TrendingSection />
    </div>
  );
}