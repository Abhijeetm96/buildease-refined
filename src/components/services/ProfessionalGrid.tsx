
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, MapPin, Award, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface Professional {
  id: string;
  name: string;
  specialty: string;
  categories: string[];
  subcategories: string[];
  rating: number;
  reviews: number;
  image: string;
  experience: number;
  badges: string[];
  location?: string;
  price?: string;
}

interface ProfessionalGridProps {
  category: string;
  subcategory: string;
}

const ProfessionalGrid = ({ category, subcategory }: ProfessionalGridProps) => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [shortlisted, setShortlisted] = useState<string[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call filtered by category and subcategory
    // For now, we'll simulate with some mock data
    setIsLoading(true);
    
    // Simulate API call delay
    const fetchTimeout = setTimeout(() => {
      const mockProfessionals: Professional[] = [
        {
          id: "1",
          name: "John Carpenter",
          specialty: `${subcategory} Specialist`,
          categories: ["General Construction"],
          subcategories: ["Residential Construction", "Commercial Construction"],
          rating: 4.9,
          reviews: 124,
          image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
          experience: 15,
          badges: ["Licensed", "Verified", "Insured"],
          location: "New York, NY",
          price: "$75-120/hr"
        },
        {
          id: "2",
          name: "Maria Rodriguez",
          specialty: `${subcategory} Expert`,
          categories: ["General Construction", "Renovation"],
          subcategories: ["Residential Construction", "Project Management"],
          rating: 4.8,
          reviews: 97,
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
          experience: 12,
          badges: ["Licensed", "Verified", "Insured"],
          location: "Chicago, IL",
          price: "$85-130/hr"
        },
        {
          id: "3",
          name: "David Chen",
          specialty: `${subcategory} Professional`,
          categories: ["General Construction", "Electrical"],
          subcategories: ["Commercial Construction", "Specialty Construction"],
          rating: 5.0,
          reviews: 88,
          image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
          experience: 10,
          badges: ["Licensed", "Verified"],
          location: "San Francisco, CA",
          price: "$90-150/hr"
        },
        {
          id: "4",
          name: "Sarah Johnson",
          specialty: `${subcategory} Consultant`,
          categories: ["Renovation", "Interior Design"],
          subcategories: ["Project Management", "Residential Construction"],
          rating: 4.7,
          reviews: 76,
          image: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600",
          experience: 8,
          badges: ["Verified", "Insured"],
          location: "Boston, MA",
          price: "$70-110/hr"
        },
      ];

      // Filter professionals based on category and subcategory
      // In a real app, this filtering would happen on the server
      const filteredProfessionals = mockProfessionals.filter(pro => 
        pro.categories.includes(category) && pro.subcategories.includes(subcategory)
      );
      
      setProfessionals(filteredProfessionals);
      setIsLoading(false);
      
      // Show toast notification when professionals are loaded
      if (filteredProfessionals.length > 0) {
        toast.success(`Found ${filteredProfessionals.length} professionals for ${subcategory}`);
      }
    }, 1000);

    return () => {
      clearTimeout(fetchTimeout);
    };
  }, [category, subcategory]);

  const toggleShortlist = (id: string) => {
    setShortlisted(prev => {
      if (prev.includes(id)) {
        toast.info("Removed from shortlist");
        return prev.filter(item => item !== id);
      } else {
        toast.success("Added to shortlist");
        return [...prev, id];
      }
    });
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <Card key={i} className="overflow-hidden">
            <div className="h-48 bg-gray-200 animate-pulse"></div>
            <CardContent className="p-6">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-3 animate-pulse"></div>
              <div className="flex gap-2 mb-4">
                <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
              <div className="flex justify-between mt-6">
                <div className="h-9 w-28 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-9 w-28 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (professionals.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-4">No professionals found</h3>
        <p className="text-gray-600 mb-6">
          We couldn't find any professionals for {subcategory} at the moment.
        </p>
        <Button asChild>
          <Link to="/book-now">Request This Service</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {professionals.map((professional) => (
        <Card key={professional.id} className="overflow-hidden hover:shadow-lg transition-all">
          <div className="relative h-56">
            <img 
              src={professional.image} 
              alt={professional.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-buildease-yellow text-buildease-black text-xs font-semibold px-2 py-1 rounded-full flex items-center">
              <Clock size={14} className="mr-1" />
              {professional.experience}+ Years
            </div>
            <button 
              onClick={() => toggleShortlist(professional.id)}
              className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label={shortlisted.includes(professional.id) ? "Remove from shortlist" : "Add to shortlist"}
            >
              <Heart 
                size={18} 
                className={shortlisted.includes(professional.id) ? "fill-red-500 text-red-500" : "text-gray-500"} 
              />
            </button>
          </div>
          
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-buildease-black">{professional.name}</h3>
              <div className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                <Star className="text-buildease-yellow fill-buildease-yellow w-4 h-4 mr-1" />
                <span className="text-sm font-medium">{professional.rating}</span>
                <span className="text-xs text-gray-500 ml-1">({professional.reviews})</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-3">{professional.specialty}</p>
            
            {professional.location && (
              <div className="flex items-center text-gray-500 mb-3 text-sm">
                <MapPin size={14} className="mr-1" />
                <span>{professional.location}</span>
              </div>
            )}
            
            {professional.price && (
              <div className="mb-4 flex items-center">
                <span className="text-buildease-yellow font-semibold">{professional.price}</span>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mb-4">
              {professional.badges.map((badge, index) => (
                <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center">
                  {badge === "Verified" && <Award size={12} className="mr-1 text-buildease-yellow" />}
                  {badge}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center gap-2 mt-4">
              <Button asChild variant="default" className="flex-1 bg-buildease-yellow text-buildease-black hover:bg-buildease-yellow/90">
                <Link to={`/professionals/${professional.id}`}>View Profile</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 text-buildease-black border-buildease-yellow hover:bg-buildease-yellow/10">
                <Link to={`/book-now?pro=${professional.id}`}>Book Now</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProfessionalGrid;
