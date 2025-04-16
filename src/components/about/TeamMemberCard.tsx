
interface TeamMemberProps {
  image: string;
  name: string;
  title: string;
  description: string;
  delay: string;
}

const TeamMemberCard = ({ image, name, title, description, delay }: TeamMemberProps) => {
  return (
    <div className="scroll-animation" style={{ transitionDelay: delay }}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img 
          src={image} 
          alt={`${name}, ${title}`} 
          className="w-full h-64 object-cover object-center"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-walkerblue mb-4">{title}</p>
          <p className="text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
