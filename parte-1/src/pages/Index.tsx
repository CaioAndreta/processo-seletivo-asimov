import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyLogos from "@/components/CompanyLogos";
import ServicesSection from "@/components/ServicesSection";
import CtaBanner from "@/components/CtaBanner";
import CaseStudiesSection from "@/components/CaseStudiesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1240px] mx-auto px-6">
        <Header />
        <HeroSection />

        <div className="-mx-6 sm:mx-0">
          <CompanyLogos />
        </div>

        <ServicesSection />
        <CtaBanner />

        <div className="-mx-6 sm:mx-0">
          <CaseStudiesSection />
        </div>
        
      </div>
    </div>
  );
};

export default Index;
