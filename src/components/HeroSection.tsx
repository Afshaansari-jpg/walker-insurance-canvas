
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              The better way to buy insurance.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Affordable, fast, and reliable insurance solutions for Canadians.
            </p>
            <Button 
              className="quote-btn text-lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Quote
            </Button>
          </div>
          <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1529500931463-68fec5e596ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Canadian family enjoying peace of mind with insurance coverage" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-walkerblue bg-opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
