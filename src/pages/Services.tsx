
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Heart, Stethoscope, Briefcase, Home, Umbrella, Car, Building } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Services = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "Our Services - Walker Insurance";
  }, []);

  const mainServices = [
    {
      title: "Term Life",
      description: "Protect your family's financial future with affordable term life insurance coverage that provides a tax-free lump sum payment to your beneficiaries.",
      icon: Shield,
      color: "bg-walkerblue text-white",
    },
    {
      title: "Critical Illness",
      description: "Receive financial protection when you're diagnosed with a serious illness covered by your policy, allowing you to focus on recovery rather than finances.",
      icon: Heart,
      color: "bg-walkerblue-light text-walkerblue",
    },
    {
      title: "Health & Dental",
      description: "Get comprehensive coverage for health and dental expenses not covered by provincial plans, including prescription drugs, vision care, and dental treatments.",
      icon: Stethoscope,
      color: "bg-walkergreen-light text-green-700",
    },
  ];

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

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
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

        {/* Main Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12 scroll-animation">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Core Insurance Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most popular insurance products designed to meet your essential protection needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <Card key={service.title} className="shadow-lg overflow-hidden scroll-animation">
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

        {/* Additional Services Section */}
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

        {/* Insurance Process Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 scroll-animation">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Insurance Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We make getting the right insurance coverage simple and straightforward.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative scroll-animation" style={{ transitionDelay: "100ms" }}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="w-12 h-12 bg-walkerblue text-white rounded-full flex items-center justify-center mb-6 text-xl font-bold">1</div>
                  <h3 className="text-xl font-semibold mb-4">Initial Consultation</h3>
                  <p className="text-gray-600">
                    We take the time to understand your needs, goals, and budget through a personalized consultation.
                  </p>
                </div>
                <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 w-16 h-2 bg-walkerblue-light z-10"></div>
              </div>
              
              <div className="relative scroll-animation" style={{ transitionDelay: "200ms" }}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="w-12 h-12 bg-walkerblue text-white rounded-full flex items-center justify-center mb-6 text-xl font-bold">2</div>
                  <h3 className="text-xl font-semibold mb-4">Custom Recommendations</h3>
                  <p className="text-gray-600">
                    We provide tailored insurance options based on your specific situation and requirements.
                  </p>
                </div>
                <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 w-16 h-2 bg-walkerblue-light z-10"></div>
              </div>
              
              <div className="relative scroll-animation" style={{ transitionDelay: "300ms" }}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="w-12 h-12 bg-walkerblue text-white rounded-full flex items-center justify-center mb-6 text-xl font-bold">3</div>
                  <h3 className="text-xl font-semibold mb-4">Application & Approval</h3>
                  <p className="text-gray-600">
                    We guide you through the application process and work to secure the best possible rates.
                  </p>
                </div>
                <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 w-16 h-2 bg-walkerblue-light z-10"></div>
              </div>
              
              <div className="scroll-animation" style={{ transitionDelay: "400ms" }}>
                <div className="bg-white p-8 rounded-lg shadow-md h-full">
                  <div className="w-12 h-12 bg-walkerblue text-white rounded-full flex items-center justify-center mb-6 text-xl font-bold">4</div>
                  <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
                  <p className="text-gray-600">
                    Our relationship continues after your policy is in place with regular reviews and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>
      <Footer />
    </div>
  );
};

export default Services;
