import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import FeaturesSection from "./components/FeaturesSection";
import WorkflowSection from "./components/WorkflowSection";
import { CTASection, Footer } from "./components/CTAAndFooter";
 
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <CTASection />
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <WorkflowSection />
      <Footer />
    </main>
  );
}