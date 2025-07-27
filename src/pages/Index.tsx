import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DemoSection from "@/components/DemoSection";
import ProductivityCycle from "@/components/ProductivityCycle";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <DemoSection />
      <ProductivityCycle />
      <Footer />
    </div>
  );
};

export default Index;
