
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [count, setCount] = useState(0);
  const targetCount = 500;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
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
  }, [animated]);
  
  useEffect(() => {
    if (animated) {
      const duration = 2000; // ms
      const interval = 10; // ms
      const steps = duration / interval;
      const increment = targetCount / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetCount) {
          setCount(targetCount);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [animated]);
  
  return (
    <section id="about" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-8 scroll-animation">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Walker Insurance team members" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-walkerblue bg-opacity-10 rounded-lg"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="scroll-animation">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Walker Insurance: A Canadian Approach to Coverage
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded on the principles of trust, transparency, and exceptional service, Walker Insurance provides Canadians with customized insurance solutions that truly meet their needs.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experienced advisors takes the time to understand your unique situation, ensuring you get the protection you need at a price you can afford.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 scroll-animation" style={{ transitionDelay: "200ms" }}>
              <div className="text-center">
                <div className="text-walkerblue text-4xl font-bold mb-2">20+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              
              <div className="text-center">
                <div className="text-walkerblue text-4xl font-bold mb-2">{count}+</div>
                <p className="text-gray-600">Families Covered</p>
              </div>
              
              <div className="text-center">
                <div className="text-walkerblue text-4xl font-bold mb-2">95%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
