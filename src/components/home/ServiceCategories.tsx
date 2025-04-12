
import { Building, Wrench, Home, Zap, Droplet, Palette, TreePine, Shield } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCategory = ({ icon, title, description, link }: ServiceCategoryProps) => {
  return (
    <Link to={link} className="service-card group">
      <div className="mb-4 text-buildease-yellow group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

const ServiceCategories = () => {
  const categories = [
    {
      icon: <Building size={48} />,
      title: "Construction & Structural",
      description: "Complete building construction and structural work by certified professionals.",
      link: "/services/construction"
    },
    {
      icon: <Wrench size={48} />,
      title: "Renovation & Remodeling",
      description: "Transform your space with expert renovation and remodeling services.",
      link: "/services/renovation"
    },
    {
      icon: <Home size={48} />,
      title: "Interior Design",
      description: "Create stunning interior spaces with professional designers.",
      link: "/services/interior-design"
    },
    {
      icon: <Zap size={48} />,
      title: "Electrical",
      description: "Certified electricians for all your electrical needs, big or small.",
      link: "/services/electrical"
    },
    {
      icon: <Droplet size={48} />,
      title: "Plumbing",
      description: "Expert plumbing solutions from repairs to complete installations.",
      link: "/services/plumbing"
    },
    {
      icon: <Palette size={48} />,
      title: "Painting & Finishing",
      description: "Quality painting and finishing services for interior and exterior.",
      link: "/services/painting"
    },
    {
      icon: <TreePine size={48} />,
      title: "Landscaping",
      description: "Transform your outdoor spaces with professional landscaping services.",
      link: "/services/landscaping"
    },
    {
      icon: <Shield size={48} />,
      title: "Maintenance & Repairs",
      description: "Regular maintenance and quick repairs to keep your property in top condition.",
      link: "/services/maintenance"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-buildease-lightgray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Service Categories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Browse through our comprehensive range of services and find the perfect 
            professional for your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <ServiceCategory
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
