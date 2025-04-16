
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: string;
}

const ValueCard = ({ icon: Icon, title, description, delay }: ValueCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md scroll-animation" style={{ transitionDelay: delay }}>
      <div className="w-16 h-16 bg-walkerblue-light rounded-full flex items-center justify-center mb-6 mx-auto">
        <Icon size={32} className="text-walkerblue" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
