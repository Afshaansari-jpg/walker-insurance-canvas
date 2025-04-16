
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AboutUs = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "About Us - Walker Insurance";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
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

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 scroll-animation">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80" 
                    alt="Walker Insurance team" 
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-walkerblue bg-opacity-10 rounded-lg"></div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="scroll-animation" style={{ transitionDelay: "200ms" }}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Our Story
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Founded in 2003, Walker Insurance was established with a simple mission: to provide Canadians with honest, straightforward insurance advice and coverage that truly meets their needs.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    What began as a small office with just two advisors has grown into a trusted brokerage serving clients across the country. Throughout our growth, we've maintained our commitment to personalized service and building long-term relationships with our clients.
                  </p>
                  <p className="text-lg text-gray-600 mb-8">
                    Today, we're proud to help Canadians protect what matters most to them through a wide range of insurance solutions tailored to their unique circumstances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
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
              <div className="bg-white p-8 rounded-lg shadow-md scroll-animation" style={{ transitionDelay: "100ms" }}>
                <div className="w-16 h-16 bg-walkerblue-light rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users size={32} className="text-walkerblue" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Client-First Approach</h3>
                <p className="text-gray-600 text-center">
                  We prioritize our clients' needs above all else, taking the time to understand their unique situations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md scroll-animation" style={{ transitionDelay: "200ms" }}>
                <div className="w-16 h-16 bg-walkerblue-light rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award size={32} className="text-walkerblue" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Excellence</h3>
                <p className="text-gray-600 text-center">
                  We strive for excellence in every interaction, recommendation, and service we provide.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md scroll-animation" style={{ transitionDelay: "300ms" }}>
                <div className="w-16 h-16 bg-walkerblue-light rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield size={32} className="text-walkerblue" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Integrity</h3>
                <p className="text-gray-600 text-center">
                  We conduct our business with honesty and transparency, building trust with every client.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md scroll-animation" style={{ transitionDelay: "400ms" }}>
                <div className="w-16 h-16 bg-walkerblue-light rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Clock size={32} className="text-walkerblue" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Responsiveness</h3>
                <p className="text-gray-600 text-center">
                  We understand that insurance needs can be urgent, and we pride ourselves on our quick response times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16 scroll-animation">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to serving your insurance needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="scroll-animation" style={{ transitionDelay: "100ms" }}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="James Walker, CEO" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">James Walker</h3>
                    <p className="text-walkerblue mb-4">Chief Executive Officer</p>
                    <p className="text-gray-600">
                      With over 20 years of experience in the insurance industry, James founded Walker Insurance to provide transparent, client-focused service.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="scroll-animation" style={{ transitionDelay: "200ms" }}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Sarah Johnson, COO" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                    <p className="text-walkerblue mb-4">Chief Operations Officer</p>
                    <p className="text-gray-600">
                      Sarah ensures our operations run smoothly while maintaining our high standards of service and client satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="scroll-animation" style={{ transitionDelay: "300ms" }}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Michael Chen, Director of Client Services" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                    <p className="text-walkerblue mb-4">Director of Client Services</p>
                    <p className="text-gray-600">
                      Michael leads our client services team, ensuring every client receives personalized attention and expert advice.
                    </p>
                  </div>
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
                Ready to Experience the Walker Difference?
              </h2>
              <p className="text-xl mb-8">
                Contact us today to learn how we can help protect what matters most to you.
              </p>
              <Button 
                size="lg"
                className="bg-white text-walkerblue hover:bg-gray-100 text-lg px-8"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
