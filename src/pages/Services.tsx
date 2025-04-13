
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Paintbrush, Wrench, House, Droplets, Zap, Shield, TreePine } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ProfessionalGrid from "@/components/services/ProfessionalGrid";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  
  const serviceCategories = [
    {
      title: "General Construction",
      icon: <Building size={40} className="text-buildease-yellow" />,
      description: "Professional construction services for residential and commercial projects.",
      link: "/services/construction",
      subcategories: [
        { name: "Residential Construction", link: "/services/construction/residential" },
        { name: "Commercial Construction", link: "/services/construction/commercial" },
        { name: "Project Management", link: "/services/construction/project-management" },
        { name: "Specialty Construction", link: "/services/construction/specialty-construction" }
      ]
    },
    {
      title: "Renovation",
      icon: <Paintbrush size={40} className="text-buildease-yellow" />,
      description: "Transform your space with our expert renovation services.",
      link: "/services/renovation",
      subcategories: [
        { name: "Kitchen Renovation", link: "/services/renovation" },
        { name: "Bathroom Renovation", link: "/services/renovation" },
        { name: "Full Home Renovation", link: "/services/renovation" }
      ]
    },
    {
      title: "Repair Services",
      icon: <Wrench size={40} className="text-buildease-yellow" />,
      description: "Quick and reliable repair services for your home or business.",
      link: "/services/repair",
      subcategories: [
        { name: "Emergency Repairs", link: "/services/repair" },
        { name: "Structural Repairs", link: "/services/repair" },
        { name: "Maintenance Repairs", link: "/services/repair" }
      ]
    },
    {
      title: "Interior Design",
      icon: <House size={40} className="text-buildease-yellow" />,
      description: "Create beautiful and functional spaces with our design expertise.",
      link: "/services/interior-design",
      subcategories: [
        { name: "Residential Design", link: "/services/interior-design" },
        { name: "Commercial Design", link: "/services/interior-design" },
        { name: "Space Planning", link: "/services/interior-design" }
      ]
    },
    {
      title: "Plumbing",
      icon: <Droplets size={40} className="text-buildease-yellow" />,
      description: "Professional plumbing services for any water or drainage need.",
      link: "/services/plumbing",
      subcategories: [
        { name: "Installation", link: "/services/plumbing" },
        { name: "Repairs & Maintenance", link: "/services/plumbing" },
        { name: "Emergency Services", link: "/services/plumbing" }
      ]
    },
    {
      title: "Electrical",
      icon: <Zap size={40} className="text-buildease-yellow" />,
      description: "Safe and reliable electrical services by certified professionals.",
      link: "/services/electrical",
      subcategories: [
        { name: "Residential Electrical", link: "/services/electrical" },
        { name: "Commercial Electrical", link: "/services/electrical" },
        { name: "Safety & Compliance", link: "/services/electrical" },
        { name: "Specialty Services", link: "/services/electrical" }
      ]
    },
    {
      title: "Painting & Finishing",
      icon: <Paintbrush size={40} className="text-buildease-yellow" />,
      description: "Quality painting and finishing services for interior and exterior.",
      link: "/services/painting",
      subcategories: [
        { name: "Interior Painting", link: "/services/painting" },
        { name: "Exterior Painting", link: "/services/painting" },
        { name: "Special Finishes", link: "/services/painting" }
      ]
    },
    {
      title: "Landscaping",
      icon: <TreePine size={40} className="text-buildease-yellow" />,
      description: "Transform your outdoor spaces with professional landscaping services.",
      link: "/services/landscaping",
      subcategories: [
        { name: "Garden Design", link: "/services/landscaping" },
        { name: "Hardscaping", link: "/services/landscaping" },
        { name: "Maintenance", link: "/services/landscaping" }
      ]
    },
    {
      title: "Maintenance Services",
      icon: <Shield size={40} className="text-buildease-yellow" />,
      description: "Regular maintenance to keep your property in top condition.",
      link: "/services/maintenance",
      subcategories: [
        { name: "Preventative Maintenance", link: "/services/maintenance" },
        { name: "Seasonal Services", link: "/services/maintenance" },
        { name: "Inspection Services", link: "/services/maintenance" }
      ]
    }
  ];

  const handleSubcategoryClick = (categoryTitle: string, subcategoryName: string) => {
    setSelectedCategory(categoryTitle);
    setSelectedSubcategory(subcategoryName);
    // Scroll to professionals section
    document.getElementById('professionals-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-buildease-black text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            We offer a comprehensive range of construction and home improvement services tailored to meet your specific needs.
          </p>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="py-12 bg-buildease-lightgray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select a service category to explore subcategories and find the perfect professional for your project.
            </p>
          </div>
          
          <Tabs defaultValue={serviceCategories[0].title} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center mb-8">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.title} 
                  value={category.title}
                  onClick={() => setSelectedCategory(category.title)}
                  className="px-4 py-2 m-1"
                >
                  <span className="flex items-center gap-2">
                    {category.icon}
                    <span className="hidden md:inline">{category.title}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {serviceCategories.map((category) => (
              <TabsContent key={category.title} value={category.title}>
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title} Subcategories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.subcategories.map((subcategory) => (
                    <Card 
                      key={subcategory.name}
                      className="hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => handleSubcategoryClick(category.title, subcategory.name)}
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="h-12 w-12 bg-buildease-yellow/20 rounded-full flex items-center justify-center mb-4">
                          <ChevronRight size={24} className="text-buildease-yellow" />
                        </div>
                        <h4 className="font-medium mb-2">{subcategory.name}</h4>
                        <Button asChild variant="link" className="p-0 h-auto text-buildease-yellow hover:text-buildease-yellow/80">
                          <Link to={subcategory.link}>View Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
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
              category={selectedCategory} 
              subcategory={selectedSubcategory} 
            />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-buildease-black text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our team of professionals is ready to help bring your vision to life.
          </p>
          <Button asChild className="btn-primary text-lg py-6 px-8 text-buildease-black">
            <Link to="/book-now">Book a Service Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
