
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Paintbrush, Wrench, House, Droplets, Zap, Shield, TreePine } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => {
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

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-4">{service.description}</p>
                
                {/* Subcategories Accordion */}
                <Accordion type="single" collapsible className="mb-4">
                  <AccordionItem value="subcategories" className="border-none">
                    <AccordionTrigger className="py-2 text-sm font-medium text-buildease-black hover:no-underline">
                      View Subcategories
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1 mt-1">
                        {service.subcategories.map((subcategory, subIdx) => (
                          <li key={subIdx}>
                            <Link 
                              to={subcategory.link} 
                              className="text-gray-600 hover:text-buildease-yellow flex items-center py-1 text-sm"
                            >
                              <ChevronRight size={14} className="mr-1" />
                              {subcategory.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="text-center">
                  <Button asChild variant="outline" className="transition-colors">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
