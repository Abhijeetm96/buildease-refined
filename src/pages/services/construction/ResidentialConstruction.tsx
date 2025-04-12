
import Layout from "@/components/layout/Layout";
import { Home, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const ResidentialConstruction = () => {
  const services = [
    {
      title: "Custom Home Building",
      description: "Design and build your dream home from the ground up with our expert team guiding you through every step of the process.",
      features: [
        "Personalized architectural design",
        "High-quality materials and craftsmanship",
        "Energy-efficient building options",
        "Smart home technology integration",
        "Regular progress updates and inspections"
      ]
    },
    {
      title: "Home Additions & Extensions",
      description: "Expand your living space with seamlessly integrated additions that match your home's style and increase its value.",
      features: [
        "Second story additions",
        "Room extensions",
        "In-law suites",
        "Sunrooms and enclosed porches",
        "Garage conversions and additions"
      ]
    },
    {
      title: "Major Structural Renovations",
      description: "Transform your existing home with comprehensive structural renovations that improve functionality and modernize your space.",
      features: [
        "Open concept conversions",
        "Load-bearing wall modifications",
        "Foundation repairs and upgrades",
        "Structural reinforcement",
        "Complete interior reconfiguration"
      ]
    },
    {
      title: "Sustainable Home Construction",
      description: "Build an environmentally responsible home with sustainable materials and energy-efficient systems that reduce your carbon footprint.",
      features: [
        "LEED certification guidance",
        "Solar panel integration",
        "High-performance insulation",
        "Geothermal heating/cooling systems",
        "Sustainable material sourcing"
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
              <Home size={48} className="text-buildease-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Residential Construction</h1>
              <p className="text-xl text-white/80 max-w-3xl mb-8">
                Expert home construction services from custom builds to major renovations, designed to bring your dream home to life with quality craftsmanship and attention to detail.
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Residential Construction Services</h2>
          
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
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Residential Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">Custom Home Project {item}</h3>
                  <p className="text-gray-600 text-sm mb-4">Modern custom home with 4 bedrooms and sustainable features.</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Start Building Your Dream Home?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our team of residential construction experts is ready to bring your vision to life.
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

export default ResidentialConstruction;
