
import { useRef } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Search for:", searchRef.current?.value);
  };
  
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with improved styling */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 bg-fixed" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3')",
          backgroundPosition: "center 30%",
          filter: "contrast(1.1) brightness(0.9)"
        }}
      />
      
      {/* Overlay with gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 z-10"></div>
      
      {/* Content - adjusted padding to prevent navbar overlap */}
      <div className="container mx-auto px-6 relative z-20 pt-24 md:pt-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white mb-6 animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold">
            Connect with Trusted Construction Professionals Instantly
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 animate-fade-in">
            Find reliable, verified professionals for all your building, renovation, 
            and home service needs in minutes.
          </p>
          
          {/* Search Bar */}
          <form 
            onSubmit={handleSearch}
            className="relative max-w-2xl mx-auto mb-8 animate-fade-in"
          >
            <input
              type="text"
              ref={searchRef}
              placeholder="What service do you need?"
              className="w-full py-4 pl-6 pr-16 rounded-xl border-none focus:ring-2 focus:ring-buildease-yellow focus:outline-none shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-buildease-yellow text-buildease-black rounded-lg hover:bg-amber-400 transition-colors"
            >
              <Search size={24} />
              <span className="sr-only">Search</span>
            </button>
          </form>
          
          {/* Call to Action Buttons - Updated How It Works button color */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
            <Button className="btn-primary text-lg py-6 px-8 animate-bounce">
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="text-black border-white bg-white hover:bg-white/80 transition-colors text-lg py-6 px-8"
            >
              How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
