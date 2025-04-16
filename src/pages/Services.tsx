
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHeroSection from "@/components/services/HeroSection";
import MainServicesSection from "@/components/services/MainServicesSection";
import AdditionalServicesSection from "@/components/services/AdditionalServicesSection";
import ProcessSection from "@/components/services/ProcessSection";
import CTASection from "@/components/services/CTASection";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Services = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "Our Services - Walker Insurance";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ServicesHeroSection />
        <MainServicesSection />
        <AdditionalServicesSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
