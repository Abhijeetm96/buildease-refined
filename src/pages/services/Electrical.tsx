
import ServicePage from "@/components/services/ServicePage";
import { Zap, Lightbulb, Power, Cable, Shield } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Electrical = () => {
  const features = [
    { text: "Electrical installations and upgrades" },
    { text: "Circuit breaker and panel replacements" },
    { text: "Wiring and rewiring services" },
    { text: "Lighting installation and repair" },
    { text: "Ceiling fan installation" },
    { text: "Outlet and switch installations" },
    { text: "Generator installation and maintenance" },
    { text: "Electrical safety inspections" }
  ];

  const subcategories = [
    {
      id: "residential",
      title: "Residential Electrical",
      icon: <Lightbulb size={32} className="mb-2 text-buildease-yellow" />,
      description: "Complete electrical solutions for homes and apartments including installations, upgrades, and troubleshooting.",
      services: [
        "Home wiring and rewiring",
        "Lighting fixture installation",
        "Outlet and switch installation",
        "Ceiling fan installation",
        "Smart home electrical integration",
        "Electrical panel upgrades"
      ]
    },
    {
      id: "commercial",
      title: "Commercial Electrical",
      icon: <Power size={32} className="mb-2 text-buildease-yellow" />,
      description: "Comprehensive electrical services for businesses, offices, and commercial properties with minimal disruption to operations.",
      services: [
        "Office and retail electrical systems",
        "Commercial lighting solutions",
        "Electrical system maintenance",
        "Code compliance upgrades",
        "Energy efficiency solutions",
        "Emergency backup systems"
      ]
    },
    {
      id: "safety",
      title: "Safety & Compliance",
      icon: <Shield size={32} className="mb-2 text-buildease-yellow" />,
      description: "Ensure your property meets all electrical safety codes with our inspection and compliance services.",
      services: [
        "Electrical safety inspections",
        "Code violation corrections",
        "GFCI installation",
        "Surge protection",
        "Electrical hazard assessment",
        "Fire safety electrical upgrades"
      ]
    },
    {
      id: "specialty",
      title: "Specialty Services",
      icon: <Cable size={32} className="mb-2 text-buildease-yellow" />,
      description: "Specialized electrical services for unique requirements and advanced electrical systems.",
      services: [
        "Generator installation & service",
        "EV charging station installation",
        "Solar panel electrical integration",
        "Home theater & audio wiring",
        "Outdoor lighting systems",
        "Telecommunications wiring"
      ]
    }
  ];

  return (
    <>
      <ServicePage
        title="Electrical Services"
        description="Safe and reliable electrical services by certified professionals. From minor repairs to complete electrical system installations, we ensure quality work that meets all safety codes."
        features={features}
        image="/placeholder.svg"
        icon={<Zap size={48} className="text-buildease-black" />}
      />
      
      {/* Subcategories Section */}
      <section className="py-16 bg-buildease-lightgray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Electrical Service Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore our specialized electrical services to find the perfect solution for your specific needs
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
                          <Link to="/book-now">Book This Service</Link>
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
                            <Zap size={16} className="text-buildease-yellow mr-2" />
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
            <p className="mb-6">Not sure what electrical service you need?</p>
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

export default Electrical;
