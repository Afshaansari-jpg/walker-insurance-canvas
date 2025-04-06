
import { Shield, Heart, Stethoscope } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const serviceCards = [
  {
    title: "Term Life",
    description: "Protect your family's financial future with affordable term life insurance coverage.",
    icon: Shield,
    color: "bg-walkerblue text-white",
  },
  {
    title: "Critical Illness",
    description: "Financial protection when you're diagnosed with a serious illness covered by your policy.",
    icon: Heart,
    color: "bg-walkerblue-light text-walkerblue",
  },
  {
    title: "Health & Dental",
    description: "Comprehensive coverage for health and dental expenses not covered by provincial plans.",
    icon: Stethoscope,
    color: "bg-walkergreen-light text-green-700",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = sectionRef.current?.querySelectorAll('.scroll-animation');
            animatedElements?.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Insurance Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive insurance solutions tailored to your needs and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <Card key={service.title} className="shadow-card overflow-hidden scroll-animation">
              <CardHeader className={`${service.color} p-6`}>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-20 mb-4">
                  <service.icon size={24} />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="text-gray-700 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  variant="outline" 
                  className="border-walkerblue text-walkerblue hover:bg-walkerblue hover:text-white transition-all duration-300"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
