
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServiceCategories from "@/components/home/ServiceCategories";
import TopProfessionals from "@/components/home/TopProfessionals";
import HowItWorks from "@/components/home/HowItWorks";
import QuickBooking from "@/components/home/QuickBooking";
import { Button } from "@/components/ui/button";
import { Shield, Star, Clock, Award } from "lucide-react";

const Index = () => {
  const [showQuickBooking, setShowQuickBooking] = useState(false);
  
  const features = [
    { 
      icon: <Shield size={36} className="text-buildease-yellow" />,
      title: "Vetted Professionals", 
      description: "All professionals are thoroughly vetted and background-checked." 
    },
    { 
      icon: <Star size={36} className="text-buildease-yellow" />,
      title: "Quality Guaranteed", 
      description: "We stand behind the quality of work provided by our professionals." 
    },
    { 
      icon: <Clock size={36} className="text-buildease-yellow" />,
      title: "Quick Response", 
      description: "Get connected with professionals within minutes, not days." 
    },
    { 
      icon: <Award size={36} className="text-buildease-yellow" />,
      title: "Satisfaction Assured", 
      description: "Your satisfaction is our top priority, guaranteed." 
    },
  ];
  
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Service Categories */}
      <ServiceCategories />
      
      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-buildease-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Whether you need help with a small repair or a complete renovation project, 
            our professionals are here to help you get the job done right.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              className="btn-primary text-lg py-6 px-8"
              onClick={() => setShowQuickBooking(true)}
            >
              Book a Service Now
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg py-6 px-8"
            >
              Browse Services
            </Button>
          </div>
        </div>
      </section>
      
      {/* Top Professionals Section */}
      <TopProfessionals />
      
      {showQuickBooking && <QuickBooking />}
    </Layout>
  );
};

export default Index;
