
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
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
}

interface ProfessionalGridProps {
  category: string;
  subcategory: string;
}

const ProfessionalGrid = ({ category, subcategory }: ProfessionalGridProps) => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
          badges: ["Licensed", "Verified", "Insured"]
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
          badges: ["Licensed", "Verified", "Insured"]
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
          badges: ["Licensed", "Verified"]
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
          badges: ["Verified", "Insured"]
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
        </div>
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
          <div className="h-48 relative">
            <img 
              src={professional.image} 
              alt={professional.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-buildease-yellow text-buildease-black text-xs font-semibold px-2 py-1 rounded-full">
              {professional.experience}+ Years
            </div>
          </div>
          
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-buildease-black">{professional.name}</h3>
              <div className="flex items-center">
                <Star className="text-buildease-yellow fill-buildease-yellow w-4 h-4 mr-1" />
                <span className="text-sm font-medium">{professional.rating}</span>
                <span className="text-xs text-gray-500 ml-1">({professional.reviews})</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{professional.specialty}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {professional.badges.map((badge, index) => (
                <span key={index} className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {badge}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <Button asChild variant="outline" size="sm" className="text-buildease-black border-buildease-yellow hover:bg-buildease-yellow/10">
                <Link to={`/professionals/${professional.id}`}>View Profile</Link>
              </Button>
              <Button variant="ghost" size="sm">
                <ExternalLink size={16} className="mr-1" />
                Portfolio
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProfessionalGrid;
