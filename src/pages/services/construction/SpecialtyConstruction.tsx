
import Layout from "@/components/layout/Layout";
import { Wrench, CheckCircle2, Leaf, Building, Shield, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SpecialtyConstruction = () => {
  const specialtyAreas = [
    {
      id: "sustainable",
      title: "Green & Sustainable",
      icon: <Leaf size={32} className="mb-2 text-buildease-yellow" />,
      description: "Environmentally responsible construction practices that minimize ecological impact and promote energy efficiency.",
      services: [
        {
          title: "LEED Certified Construction",
          description: "Building projects that meet the rigorous standards of Leadership in Energy and Environmental Design certification.",
          features: [
            "Sustainable site development",
            "Water savings and efficiency",
            "Energy efficiency and renewable energy",
            "Materials selection and resource conservation",
            "Indoor environmental quality"
          ]
        },
        {
          title: "Net-Zero Energy Buildings",
          description: "Buildings that produce as much energy as they consume through renewable energy systems and high-efficiency design.",
          features: [
            "Advanced insulation systems",
            "Solar PV integration",
            "Energy storage solutions",
            "Smart energy management systems",
            "Passive design strategies"
          ]
        }
      ]
    },
    {
      id: "historic",
      title: "Historic Restoration",
      icon: <Building size={32} className="mb-2 text-buildease-yellow" />,
      description: "Specialized restoration services to preserve historic structures while updating them for modern use.",
      services: [
        {
          title: "Architectural Preservation",
          description: "Meticulous restoration of historic architectural elements to their original condition.",
          features: [
            "Historical material matching",
            "Period-appropriate techniques",
            "Ornamental detail restoration",
            "Facade preservation",
            "Heritage conservation compliance"
          ]
        },
        {
          title: "Adaptive Reuse",
          description: "Transforming historic buildings for new purposes while preserving their architectural significance.",
          features: [
            "Code-compliant modernization",
            "Infrastructure upgrading",
            "Space reconfiguration",
            "Historic tax credit assistance",
            "Preservation of character-defining features"
          ]
        }
      ]
    },
    {
      id: "disaster-resistant",
      title: "Disaster Resistant",
      icon: <Shield size={32} className="mb-2 text-buildease-yellow" />,
      description: "Construction designed to withstand extreme weather events and natural disasters.",
      services: [
        {
          title: "Hurricane & Storm Resistant Construction",
          description: "Building techniques and materials designed to withstand high winds, flooding, and storm impacts.",
          features: [
            "Impact-resistant windows and doors",
            "Reinforced roof systems",
            "Elevated foundations",
            "Water-resistant materials",
            "Storm water management systems"
          ]
        },
        {
          title: "Earthquake Resistant Design",
          description: "Specialized construction to improve building performance during seismic events.",
          features: [
            "Seismic retrofitting",
            "Base isolation systems",
            "Structural reinforcement",
            "Flexible utility connections",
            "Ductile framing systems"
          ]
        }
      ]
    },
    {
      id: "smart-building",
      title: "Smart Building Technology",
      icon: <Cpu size={32} className="mb-2 text-buildease-yellow" />,
      description: "Integration of advanced technology systems for automated, efficient, and secure buildings.",
      services: [
        {
          title: "Integrated Building Systems",
          description: "Comprehensive technology integration for streamlined building management and enhanced user experience.",
          features: [
            "Centralized building management systems",
            "Automated HVAC optimization",
            "Smart lighting controls",
            "Occupancy and usage analytics",
            "Remote monitoring capabilities"
          ]
        },
        {
          title: "IoT & Smart Home Integration",
          description: "Incorporation of Internet of Things devices and systems for enhanced functionality and convenience.",
          features: [
            "Voice-controlled environments",
            "Smart security systems",
            "Automated shade and climate control",
            "Energy usage monitoring",
            "Wireless device integration"
          ]
        }
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
              <Wrench size={48} className="text-buildease-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Specialty Construction</h1>
              <p className="text-xl text-white/80 max-w-3xl mb-8">
                Specialized construction services for unique requirements and challenging projects requiring specialized expertise and innovative solutions.
              </p>
              <Button asChild className="bg-buildease-yellow text-buildease-black hover:bg-buildease-yellow/80 text-lg py-6 px-8">
                <Link to="/book-now">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Areas Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Specialty Construction Areas</h2>
          
          <Tabs defaultValue="sustainable" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto mb-8">
              {specialtyAreas.map((area) => (
                <TabsTrigger 
                  key={area.id}
                  value={area.id}
                  className="data-[state=active]:bg-buildease-yellow data-[state=active]:text-black py-3"
                >
                  <div className="flex flex-col items-center">
                    {area.icon}
                    <span>{area.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {specialtyAreas.map((area) => (
              <TabsContent key={area.id} value={area.id}>
                <div className="bg-buildease-lightgray rounded-xl p-8">
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">{area.title} Construction</h3>
                    <p className="text-gray-600 max-w-3xl mx-auto">{area.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {area.services.map((service, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <CardContent className="p-0">
                          <div className="p-6">
                            <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Specialty Construction Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Net-Zero Energy Office Building",
                category: "Sustainable Construction",
                description: "A commercial office building that produces as much energy as it consumes through solar panels and energy-efficient design."
              },
              {
                title: "Historic Theater Restoration",
                category: "Historic Preservation",
                description: "Careful restoration of a 1920s theater while updating electrical, HVAC, and safety systems to modern standards."
              },
              {
                title: "Smart Home Showcase",
                category: "Smart Building Technology",
                description: "Luxury residence featuring integrated automation systems for climate, security, lighting, and entertainment."
              }
            ].map((study, index) => (
              <div key={index} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-video bg-gray-200"></div>
                <div className="p-6">
                  <div className="text-sm text-buildease-yellow font-medium mb-2">{study.category}</div>
                  <h3 className="text-lg font-semibold mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Button variant="outline" size="sm" className="w-full">View Case Study</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-buildease-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Specialized Construction Need?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our team of experts specializes in unique and challenging construction projects. Let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild className="bg-buildease-yellow text-buildease-black hover:bg-buildease-yellow/80">
              <Link to="/book-now">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Our Specialists</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpecialtyConstruction;
