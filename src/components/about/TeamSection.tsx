
import TeamMemberCard from "./TeamMemberCard";

const TeamSection = () => {
  return (
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
          <TeamMemberCard 
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            name="James Walker"
            title="Chief Executive Officer"
            description="With over 20 years of experience in the insurance industry, James founded Walker Insurance to provide transparent, client-focused service."
            delay="100ms"
          />
          
          <TeamMemberCard 
            image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            name="Sarah Johnson"
            title="Chief Operations Officer"
            description="Sarah ensures our operations run smoothly while maintaining our high standards of service and client satisfaction."
            delay="200ms"
          />
          
          <TeamMemberCard 
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            name="Michael Chen"
            title="Director of Client Services"
            description="Michael leads our client services team, ensuring every client receives personalized attention and expert advice."
            delay="300ms"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
