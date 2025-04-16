
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-walkerblue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get the Coverage You Need Today
          </h2>
          <p className="text-xl mb-8">
            Contact us for a free, no-obligation consultation and insurance quote.
          </p>
          <Button 
            size="lg"
            className="bg-white text-walkerblue hover:bg-gray-100 text-lg px-8"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
