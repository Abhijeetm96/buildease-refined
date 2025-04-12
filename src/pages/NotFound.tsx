
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-buildease-lightgray px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-buildease-black mb-4">404</h1>
        <h2 className="text-2xl mb-6 text-buildease-black">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          We couldn't find the page you're looking for. It might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button className="btn-primary flex items-center space-x-2 w-full sm:w-auto">
              <Home size={16} />
              <span>Back to Home</span>
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="outline" className="flex items-center space-x-2 w-full sm:w-auto">
              <Search size={16} />
              <span>Browse Services</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
