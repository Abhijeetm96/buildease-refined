
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProfessionalCardProps {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
  experience: number;
  className?: string;
}

const ProfessionalCard = ({ name, specialty, rating, reviews, image, experience, className }: ProfessionalCardProps) => {
  return (
    <div className={cn("professional-card", className)}>
      <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden group">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold">{name}</h3>
            <div className="flex items-center bg-buildease-lightgray px-2 py-1 rounded-full">
              <Star size={16} className="text-buildease-yellow mr-1" fill="#FFD700" />
              <span className="font-medium">{rating.toFixed(1)}</span>
              <span className="text-sm text-gray-500 ml-1">({reviews})</span>
            </div>
          </div>
          <p className="text-buildease-black font-medium mb-2">{specialty}</p>
          <p className="text-gray-600 mb-4">{experience} years of experience</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Licensed</span>
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Insured</span>
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Background Checked</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="outline" className="border-buildease-yellow text-buildease-black hover:bg-buildease-yellow/10">
            View Profile
          </Button>
          <Button className="btn-primary">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const TopProfessionals = () => {
  const professionals = [
    {
      name: "Robert Johnson",
      specialty: "General Contractor",
      rating: 4.9,
      reviews: 187,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&w=400",
      experience: 15
    },
    {
      name: "Sarah Williams",
      specialty: "Interior Designer",
      rating: 4.8,
      reviews: 132,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&w=400",
      experience: 10
    },
    {
      name: "Michael Chen",
      specialty: "Electrical Engineer",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&w=400",
      experience: 12
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4">Top-Rated Professionals</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            These highly-rated professionals have consistently delivered quality work
            and excellent customer service.
          </p>
        </div>
        
        <div className="space-y-8">
          {professionals.map((professional, index) => (
            <ProfessionalCard
              key={index}
              name={professional.name}
              specialty={professional.specialty}
              rating={professional.rating}
              reviews={professional.reviews}
              image={professional.image}
              experience={professional.experience}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-buildease-yellow text-buildease-black hover:bg-buildease-yellow/10">
            View All Professionals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TopProfessionals;
