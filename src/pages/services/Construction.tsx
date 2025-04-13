
import { useState } from "react";
import ServicePage from "@/components/services/ServicePage";
import { Building, Home, Store, HardHat, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import ProfessionalGrid from "@/components/services/ProfessionalGrid";

const Construction = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  
  const features = [
    { text: "Complete building construction for residential and commercial projects" },
    { text: "Foundation and structural work by certified professionals" },
    { text: "Custom home building and design-build services" },
    { text: "Commercial construction and tenant improvements" },
    { text: "Project management and construction supervision" },
    { text: "Permits and regulatory compliance management" },
    { text: "Green building and sustainable construction options" },
    { text: "Quality materials and craftsmanship guarantee" }
  ];

  const subcategories = [
    {
      id: "residential",
      title: "Residential Construction",
      icon: <Home size={32} className="mb-2 text-buildease-yellow" />,
      description: "Expert home construction services from custom builds to major renovations, designed to bring your dream home to life.",
      services: [
        "Custom home building",
        "Home additions and extensions",
        "Major structural renovations",
        "Basement and foundation work",
        "Multi-family residential buildings",
        "Sustainable home construction"
      ]
    },
    {
      id: "commercial",
      title: "Commercial Construction",
      icon: <Store size={32} className="mb-2 text-buildease-yellow" />,
      description: "Full-service commercial construction for retail spaces, offices, and industrial facilities with minimal disruption to business operations.",
      services: [
        "Office building construction",
        "Retail and restaurant buildouts",
        "Industrial facility construction",
        "Warehouse and storage facilities",
        "Medical and healthcare facilities",
        "Educational institution construction"
      ]
    },
    {
      id: "project-management",
      title: "Project Management",
      icon: <HardHat size={32} className="mb-2 text-buildease-yellow" />,
      description: "Comprehensive construction project management services to ensure your project stays on time, within budget, and meets all quality standards.",
      services: [
        "Construction scheduling and planning",
        "Budget development and monitoring",
        "Contractor coordination",
        "Quality control inspections",
        "Regulatory compliance management",
        "Project documentation and reporting"
      ]
    },
    {
      id: "specialty-construction",
      title: "Specialty Construction",
      icon: <Wrench size={32} className="mb-2 text-buildease-yellow" />,
      description: "Specialized construction services for unique requirements and challenging projects requiring specialized expertise.",
      services: [
        "Green and sustainable construction",
        "Historic building restoration",
        "Disaster resistant construction",
        "Smart building technology integration",
        "Energy-efficient building systems",
        "Modular and prefabricated construction"
      ]
    }
  ];

  const handleSubcategoryClick = (subcategoryName: string) => {
    setSelectedSubcategory(subcategoryName);
    // Scroll to professionals section
    document.getElementById('professionals-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ServicePage
        title="General Construction"
        description="Professional construction services for residential and commercial projects, delivered on time and on budget. Our expert team handles everything from planning to completion."
        features={features}
        image="/placeholder.svg"
        icon={<Building size={48} className="text-buildease-black" />}
      />
      
      {/* Subcategories Grid Section */}
      <section className="py-16 bg-buildease-lightgray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Construction Service Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore our specialized construction services to find the perfect solution for your specific project needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subcategories.map((category) => (
              <Card 
                key={category.id}
                className="overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleSubcategoryClick(category.title)}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="bg-buildease-yellow/10 p-4 rounded-full mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{category.description}</p>
                  <Button 
                    variant="outline" 
                    className="border-buildease-yellow text-buildease-black hover:bg-buildease-yellow/10"
                  >
                    View Professionals
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Professionals Grid Section - Shows when a subcategory is selected */}
      {selectedSubcategory && (
        <section id="professionals-section" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-6">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-center">{selectedSubcategory} Professionals</h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Connect with our verified professionals specializing in {selectedSubcategory.toLowerCase()} projects.
              </p>
            </div>
            
            <ProfessionalGrid 
              category="General Construction" 
              subcategory={selectedSubcategory}
            />
          </div>
        </section>
      )}
      
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact our team of construction professionals today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild className="bg-buildease-yellow text-buildease-black hover:bg-buildease-yellow/80">
              <Link to="/book-now">Book Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Construction;
