
import { ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

interface ServiceFeature {
  text: string;
}

interface ServicePageProps {
  title: string;
  description: string;
  features: ServiceFeature[];
  image: string;
  icon: ReactNode;
  callToAction?: string;
}

const ServicePage = ({
  title,
  description,
  features,
  image,
  icon,
  callToAction = "Book This Service",
}: ServicePageProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-buildease-black text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-buildease-black to-buildease-black/50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="bg-buildease-yellow rounded-full p-6 mb-4 md:mb-0">
              {icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
              <p className="text-xl text-white/80 max-w-3xl mb-8">
                {description}
              </p>
              <Button asChild className="btn-primary text-lg py-6 px-8 text-buildease-black">
                <Link to="/book-now">{callToAction}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 size={24} className="text-buildease-yellow flex-shrink-0 mt-1" />
                <p className="text-gray-700">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-buildease-lightgray py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Our team of professionals is ready to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild className="btn-primary text-lg py-6 px-8 text-buildease-black">
              <Link to="/book-now">Book Now</Link>
            </Button>
            <Button asChild variant="outline" className="border-buildease-black text-buildease-black hover:bg-buildease-black/10 text-lg py-6 px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Other Services You Might Need</h2>
          
          <div className="flex justify-center">
            <Button asChild variant="outline" className="border-buildease-yellow text-buildease-black hover:bg-buildease-yellow/10">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
