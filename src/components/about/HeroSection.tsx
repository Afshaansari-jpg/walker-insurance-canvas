
import { Button } from "@/components/ui/button";

const AboutHeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-walkerblue-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center scroll-animation">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Walker Insurance
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            A Canadian insurance brokerage built on trust, transparency, and exceptional service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
