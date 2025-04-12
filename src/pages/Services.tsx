
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Paintbrush, House, Droplets, Zap, Shield, TreePine } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "General Construction",
      icon: <Wrench size={40} className="text-buildease-yellow" />,
      description: "Professional construction services for residential and commercial projects.",
      link: "/services/construction"
    },
    {
      title: "Renovation",
      icon: <Paintbrush size={40} className="text-buildease-yellow" />,
      description: "Transform your space with our expert renovation services.",
      link: "/services/renovation"
    },
    {
      title: "Repair & Maintenance",
      icon: <Shield size={40} className="text-buildease-yellow" />,
      description: "Quick and reliable repair services for your home or business.",
      link: "/services/repair"
    },
    {
      title: "Interior Design",
      icon: <House size={40} className="text-buildease-yellow" />,
      description: "Create beautiful and functional spaces with our design expertise.",
      link: "/services/interior-design"
    },
    {
      title: "Plumbing",
      icon: <Droplets size={40} className="text-buildease-yellow" />,
      description: "Professional plumbing services for any water or drainage need.",
      link: "/services/plumbing"
    },
    {
      title: "Electrical",
      icon: <Zap size={40} className="text-buildease-yellow" />,
      description: "Safe and reliable electrical services by certified professionals.",
      link: "/services/electrical"
    },
    {
      title: "Painting & Finishing",
      icon: <Paintbrush size={40} className="text-buildease-yellow" />,
      description: "Quality painting and finishing services for interior and exterior.",
      link: "/services/painting"
    },
    {
      title: "Landscaping",
      icon: <TreePine size={40} className="text-buildease-yellow" />,
      description: "Transform your outdoor spaces with professional landscaping services.",
      link: "/services/landscaping"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
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
