
import { Award, Users, Clock, Shield } from "lucide-react";
import ValueCard from "./ValueCard";

const ValuesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at Walker Insurance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard 
            icon={Users} 
            title="Client-First Approach" 
            description="We prioritize our clients' needs above all else, taking the time to understand their unique situations." 
            delay="100ms" 
          />
          
          <ValueCard 
            icon={Award} 
            title="Excellence" 
            description="We strive for excellence in every interaction, recommendation, and service we provide." 
            delay="200ms" 
          />
          
          <ValueCard 
            icon={Shield} 
            title="Integrity" 
            description="We conduct our business with honesty and transparency, building trust with every client." 
            delay="300ms" 
          />
          
          <ValueCard 
            icon={Clock} 
            title="Responsiveness" 
            description="We understand that insurance needs can be urgent, and we pride ourselves on our quick response times." 
            delay="400ms" 
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
