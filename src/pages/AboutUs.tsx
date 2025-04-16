
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import AboutHeroSection from "@/components/about/HeroSection";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import CTASection from "@/components/about/CTASection";

const AboutUs = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "About Us - Walker Insurance";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AboutHeroSection />
        <StorySection />
        <ValuesSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
