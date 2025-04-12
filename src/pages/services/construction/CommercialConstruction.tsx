
import Layout from "@/components/layout/Layout";
import { Store, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const CommercialConstruction = () => {
  const services = [
    {
      title: "Office Building Construction",
      description: "Complete construction services for office buildings of all sizes, from small professional offices to multi-story corporate headquarters.",
      features: [
        "Custom office design and layout",
        "Modern infrastructure integration",
        "Energy-efficient building systems",
        "ADA compliance and accessibility",
        "Flexible workspace solutions"
      ]
    },
    {
      title: "Retail & Restaurant Buildouts",
      description: "Specialized construction for retail spaces and restaurants that prioritize customer experience and operational efficiency.",
      features: [
        "Storefront design and construction",
        "Commercial kitchen installations",
        "Display and merchandising spaces",
        "Customer flow optimization",
        "Brand-specific design elements"
      ]
    },
    {
      title: "Industrial Facility Construction",
      description: "Purpose-built industrial spaces designed for manufacturing, production, and distribution with a focus on efficiency and safety.",
      features: [
        "Heavy-duty structural systems",
        "Specialized utility installations",
        "Loading dock and logistics areas",
        "Clean room construction",
        "OSHA-compliant safety features"
      ]
    },
    {
      title: "Medical & Healthcare Facilities",
      description: "Construction services for healthcare facilities that meet strict regulatory requirements while creating healing environments for patients.",
      features: [
        "Medical office buildings",
        "Specialty clinics and surgical centers",
        "Hospital renovations and additions",
        "Medical gas and specialty systems",
        "Infection control measures"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-buildease-black text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: `url(/placeholder.svg)` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-buildease-black to-buildease-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="bg-buildease-yellow rounded-full p-6 mb-4 md:mb-0">
              <Store size={48} className="text-buildease-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Commercial Construction</h1>
              <p className="text-xl text-white/80 max-w-3xl mb-8">
                Full-service commercial construction for retail spaces, offices, and industrial facilities with minimal disruption to business operations.
              </p>
              <Button asChild className="bg-buildease-yellow text-buildease-black hover:bg-buildease-yellow/80 text-lg py-6 px-8">
                <Link to="/book-now">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Commercial Construction Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start space-x-2">
                          <CheckCircle2 size={18} className="text-buildease-yellow mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-buildease-lightgray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Commercial Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Commercial Project {item}</h3>
                  <p className="text-gray-600 text-sm mb-4">Modern office complex with sustainable design elements.</p>
                  <Button variant="outline" size="sm" className="w-full">View Project</Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Commercial Project?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our team of commercial construction experts is ready to help you build a space that meets your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild className="bg-buildease-yellow text-buildease-black hover:bg-buildease-yellow/80">
              <Link to="/book-now">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommercialConstruction;
