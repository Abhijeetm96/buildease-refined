
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled ? "bg-buildease-black py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-buildease-yellow font-poppins text-2xl font-bold">
            Buildease
          </span>
          <span className="hidden md:inline-block text-white text-sm">
            | Instant Connect
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/how-it-works" className="nav-link">How It Works</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/login" className="text-white hover:text-buildease-yellow transition-colors">
            Login
          </Link>
          <Button className="btn-primary">Book Now</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 right-0 bg-buildease-black border-t border-gray-800 animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-buildease-yellow transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-buildease-yellow transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-white hover:text-buildease-yellow transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/blog" 
              className="text-white hover:text-buildease-yellow transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-buildease-yellow transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <hr className="border-gray-700" />
            <div className="flex flex-col space-y-3">
              <Link 
                to="/login" 
                className="text-white hover:text-buildease-yellow transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Button className="btn-primary w-full" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
