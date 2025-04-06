
import { useEffect, useRef } from "react";
import { MessageSquare, Clock, Users } from "lucide-react";

const features = [
  {
    title: "Tailored Advice",
    description: "We take the time to understand your specific needs and provide personalized insurance recommendations.",
    icon: MessageSquare,
  },
  {
    title: "Fast Approvals",
    description: "Our streamlined application process means you can get coverage quickly when you need it most.",
    icon: Clock,
  },
  {
    title: "Independent & Transparent",
    description: "As an independent broker, we work for you, not the insurance companies, ensuring unbiased recommendations.",
    icon: Users,
  },
];

const WhyChooseUsSection = () => {
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
    <section id="why-us" className="py-16 md:py-24 bg-walkerblue text-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Walker Insurance is the Preferred Choice
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We deliver an insurance experience that puts your needs first.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-white/10 rounded-lg p-8 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 scroll-animation"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
