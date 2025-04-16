
import { useEffect, useRef } from "react";

const ServicesHeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-walkerblue-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center scroll-animation">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Insurance Services
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Comprehensive insurance solutions tailored to protect what matters most to you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
