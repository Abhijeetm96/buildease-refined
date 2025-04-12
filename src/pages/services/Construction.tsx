
import ServicePage from "@/components/services/ServicePage";
import { Building, Home, Store, HardHat, Wrench } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Construction = () => {
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

  return (
    <>
      <ServicePage
        title="General Construction"
        description="Professional construction services for residential and commercial projects, delivered on time and on budget. Our expert team handles everything from planning to completion."
        features={features}
        image="/placeholder.svg"
        icon={<Building size={48} className="text-buildease-black" />}
      />
      
      {/* Subcategories Section */}
      <section className="py-16 bg-buildease-lightgray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Construction Service Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore our specialized construction services to find the perfect solution for your specific project needs
            </p>
          </div>
          
          <Tabs defaultValue="residential" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto mb-8">
              {subcategories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-buildease-yellow data-[state=active]:text-black py-3"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {subcategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:w-1/3">
                      <div className="flex flex-col items-center md:items-start">
                        {category.icon}
                        <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                        <p className="text-gray-600 mb-6">{category.description}</p>
                        <Button asChild className="bg-buildease-yellow text-buildease-black hover:bg-buildease-yellow/80">
                          <Link to={`/services/construction/${category.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h4 className="font-semibold mb-4 text-lg">Included Services:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {category.services.map((service, index) => (
                          <div 
                            key={index}
                            className="flex items-center p-3 bg-gray-50 rounded-lg"
                          >
                            <Building size={16} className="text-buildease-yellow mr-2" />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-12 text-center">
            <p className="mb-6">Not sure what construction service you need?</p>
            <Button asChild variant="outline" className="mr-4">
              <Link to="/contact">Contact Our Experts</Link>
            </Button>
            <Button asChild>
              <Link to="/book-now">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Construction;
