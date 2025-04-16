
import { Briefcase, Home, Umbrella, Car, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const additionalServices = [
  {
    title: "Disability Insurance",
    description: "Replace a portion of your income if you're unable to work due to illness or injury, helping you maintain your lifestyle while you recover.",
    icon: Briefcase,
  },
  {
    title: "Mortgage Insurance",
    description: "Ensure your mortgage is paid off in the event of your death, protecting your family from potential foreclosure.",
    icon: Home,
  },
  {
    title: "Travel Insurance",
    description: "Travel with peace of mind knowing you're covered for emergency medical expenses, trip cancellations, and other unforeseen events.",
    icon: Umbrella,
  },
  {
    title: "Auto Insurance",
    description: "Get comprehensive coverage for your vehicle, including liability, collision, and comprehensive protection tailored to your needs.",
    icon: Car,
  },
  {
    title: "Business Insurance",
    description: "Protect your business with coverage options including liability, property, business interruption, and key person insurance.",
    icon: Building,
  },
];

const AdditionalServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Additional Insurance Options
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of specialized insurance solutions to meet your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div 
              key={service.title} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 scroll-animation"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-walkerblue-light rounded-full flex items-center justify-center mb-6">
                <service.icon size={32} className="text-walkerblue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button 
                variant="ghost" 
                className="text-walkerblue hover:bg-walkerblue-light"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;
