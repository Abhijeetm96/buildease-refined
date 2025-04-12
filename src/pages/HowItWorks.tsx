
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Calendar, UserCheck, Wrench } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search size={48} className="text-buildease-yellow" />,
      title: "1. Find Your Service",
      description: "Browse through our extensive list of services or use the search function to find exactly what you need."
    },
    {
      icon: <UserCheck size={48} className="text-buildease-yellow" />,
      title: "2. Choose a Professional",
      description: "View profiles, ratings, and portfolios to select the perfect professional for your project."
    },
    {
      icon: <Calendar size={48} className="text-buildease-yellow" />,
      title: "3. Book an Appointment",
      description: "Select a convenient date and time that works for you using our simple booking system."
    },
    {
      icon: <Wrench size={48} className="text-buildease-yellow" />,
      title: "4. Get the Job Done",
      description: "Your chosen professional will arrive on schedule and complete the work to your satisfaction."
    }
  ];

  const faqs = [
    {
      question: "How do you screen your professionals?",
      answer: "All professionals undergo thorough background checks, license verification, and skills assessment before joining our platform. We also continuously monitor reviews and ratings."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a satisfaction guarantee. If you're not happy with the service, we'll work with you to make it right, which may include arranging for another professional or providing a refund."
    },
    {
      question: "How quickly can I book a service?",
      answer: "Depending on availability, you can book services as soon as same-day or schedule them weeks in advance."
    },
    {
      question: "Are the professionals insured?",
      answer: "Yes, all professionals on our platform are required to carry insurance to protect against any potential damages or accidents."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-buildease-black text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Connect with qualified professionals in just a few simple steps
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Explainer Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">See How We Connect You With The Best</h2>
          <div className="max-w-3xl mx-auto aspect-video bg-gray-300 rounded-xl flex items-center justify-center">
            <p className="text-gray-600">Video Explainer Placeholder</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-buildease-black text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who have found the perfect professionals for their projects.
          </p>
          <Button asChild className="btn-primary text-lg py-6 px-8">
            <Link to="/book-now">Book a Professional Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
