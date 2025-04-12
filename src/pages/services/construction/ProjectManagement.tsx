
import Layout from "@/components/layout/Layout";
import { HardHat, CheckCircle2, FileText, Clock, Users, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const ProjectManagement = () => {
  const services = [
    {
      title: "Construction Planning & Scheduling",
      description: "Detailed planning and scheduling services to ensure your project progresses smoothly from start to finish.",
      icon: <Clock className="text-buildease-yellow" size={36} />,
      features: [
        "Comprehensive project timelines",
        "Critical path analysis",
        "Resource allocation planning",
        "Milestone tracking",
        "Schedule optimization"
      ]
    },
    {
      title: "Budget Development & Monitoring",
      description: "Expert financial planning and monitoring to keep your project on budget and identify cost-saving opportunities.",
      icon: <FileText className="text-buildease-yellow" size={36} />,
      features: [
        "Detailed cost estimating",
        "Value engineering",
        "Cash flow projections",
        "Change order management",
        "Financial reporting"
      ]
    },
    {
      title: "Contractor Coordination",
      description: "Seamless management and coordination of all contractors and subcontractors working on your project.",
      icon: <Users className="text-buildease-yellow" size={36} />,
      features: [
        "Subcontractor selection assistance",
        "Work coordination",
        "Performance monitoring",
        "Conflict resolution",
        "Safety compliance oversight"
      ]
    },
    {
      title: "Quality Control & Inspection",
      description: "Thorough quality control processes to ensure all work meets or exceeds industry standards and specifications.",
      icon: <ClipboardCheck className="text-buildease-yellow" size={36} />,
      features: [
        "Quality assurance planning",
        "Regular site inspections",
        "Material testing coordination",
        "Code compliance verification",
        "Deficiency tracking and resolution"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We meet with you to understand your project goals, requirements, and expectations."
    },
    {
      title: "Project Planning",
      description: "We develop a comprehensive plan including schedules, budgets, and resource requirements."
    },
    {
      title: "Team Assembly",
      description: "We assemble the right team of professionals for your specific project needs."
    },
    {
      title: "Execution & Oversight",
      description: "We manage day-to-day operations, ensuring quality work and addressing issues promptly."
    },
    {
      title: "Monitoring & Reporting",
      description: "Regular updates and reports keep you informed of progress, budgets, and any challenges."
    },
    {
      title: "Completion & Handover",
      description: "Final inspections, documentation, and a smooth transition to the operational phase."
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
              <HardHat size={48} className="text-buildease-black" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Construction Project Management</h1>
              <p className="text-xl text-white/80 max-w-3xl mb-8">
                Comprehensive construction project management services to ensure your project stays on time, within budget, and meets all quality standards.
              </p>
              <Button asChild className="bg-buildease-yellow text-buildease-black hover:bg-buildease-yellow/80 text-lg py-6 px-8">
                <Link to="/book-now">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Project Management Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start space-x-2">
                        <CheckCircle2 size={18} className="text-buildease-yellow mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-buildease-lightgray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Project Management Process</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-buildease-yellow w-10 h-10 rounded-full flex items-center justify-center mb-4 text-buildease-black font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Professional Project Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-xl text-center">
              <h3 className="font-semibold mb-3">Time Efficiency</h3>
              <p className="text-gray-600">Avoid delays with expert scheduling and proactive problem-solving</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl text-center">
              <h3 className="font-semibold mb-3">Cost Control</h3>
              <p className="text-gray-600">Stay on budget with careful financial oversight and value engineering</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl text-center">
              <h3 className="font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">Ensure the highest standards with regular inspections and quality control</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl text-center">
              <h3 className="font-semibold mb-3">Reduced Stress</h3>
              <p className="text-gray-600">Let professionals handle the complex details of your construction project</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl text-center">
              <h3 className="font-semibold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">Navigate permits and inspections with experienced guidance</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl text-center">
              <h3 className="font-semibold mb-3">Single Point of Contact</h3>
              <p className="text-gray-600">Simplify communication with one project manager coordinating everything</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-buildease-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ensure Your Project's Success?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our project management team is ready to take your construction project to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild className="bg-buildease-yellow text-buildease-black hover:bg-buildease-yellow/80">
              <Link to="/book-now">Schedule a Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectManagement;
