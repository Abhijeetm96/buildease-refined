
import React, { useState, useEffect } from "react";
import { Star, ChevronRight, ChevronLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Extending ProfessionalCardProps to include style
interface ProfessionalCardProps {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
  experience: number;
  className?: string;
  style?: React.CSSProperties;
}

const ProfessionalCard = ({ 
  name, 
  specialty, 
  rating, 
  reviews, 
  image, 
  experience,
  className = "",
  style
}: ProfessionalCardProps) => {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row ${className}`}
      style={style}
    >
      <div className="md:w-1/3 relative h-48 md:h-auto">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-buildease-yellow text-buildease-black text-xs font-semibold px-2 py-1 rounded-full">
          {experience}+ Years
        </div>
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-buildease-black">{name}</h3>
            <div className="flex items-center">
              <Star className="text-buildease-yellow fill-buildease-yellow w-4 h-4 mr-1" />
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-xs text-gray-500 ml-1">({reviews})</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{specialty}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="badge">Licensed</span>
            <span className="badge">Verified</span>
            <span className="badge">Insured</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm" className="text-buildease-black border-buildease-yellow hover:bg-buildease-yellow/10">
            View Profile
          </Button>
          <Button variant="ghost" size="sm">
            <ExternalLink size={16} className="mr-1" />
            Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};

const TopProfessionals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const professionals = [
    {
      name: "John Carpenter",
      specialty: "Home Renovation & Construction",
      rating: 4.9,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
      experience: 15
    },
    {
      name: "Maria Rodriguez",
      specialty: "Interior Design & Decoration",
      rating: 4.8,
      reviews: 97,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
      experience: 12
    },
    {
      name: "David Chen",
      specialty: "Electrical Engineering & Installation",
      rating: 5.0,
      reviews: 88,
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
      experience: 10
    },
    {
      name: "Sarah Johnson",
      specialty: "Landscape Design & Gardening",
      rating: 4.7,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
      experience: 8
    },
    {
      name: "Michael Lee",
      specialty: "Plumbing & Water Systems",
      rating: 4.6,
      reviews: 65,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
      experience: 18
    },
  ];
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? professionals.length - (isMobile ? 1 : 2) : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= professionals.length - (isMobile ? 1 : 2) ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-buildease-black">Top Professionals</h2>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="border-buildease-yellow text-buildease-black hover:bg-buildease-yellow/10"
            >
              <ChevronLeft size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleNext}
              className="border-buildease-yellow text-buildease-black hover:bg-buildease-yellow/10"
            >
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / (isMobile ? 1 : 2))}%)` }}
          >
            {professionals.map((professional, index) => (
              <ProfessionalCard
                key={index}
                name={professional.name}
                specialty={professional.specialty}
                rating={professional.rating}
                reviews={professional.reviews}
                image={professional.image}
                experience={professional.experience}
                className="min-w-[100%] md:min-w-[calc(50%-1rem)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button className="btn-primary">
            View All Professionals
          </Button>
        </div>
      </div>
      
      <style jsx>{`
        .badge {
          background-color: #f0f0f0;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #333;
        }
      `}</style>
    </section>
  );
};

export default TopProfessionals;
