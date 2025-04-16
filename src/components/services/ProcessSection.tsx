
const ProcessSection = () => {
  return (
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
  );
};

export default ProcessSection;
