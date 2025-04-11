
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="btn-primary flex items-center space-x-2">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
