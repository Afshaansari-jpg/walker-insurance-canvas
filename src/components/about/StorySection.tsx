
const StorySection = () => {
  return (
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
  );
};

export default StorySection;
