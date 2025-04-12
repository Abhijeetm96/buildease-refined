
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookNow = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    location: "",
    date: "",
    time: "",
    description: "",
    name: "",
    email: "",
    phone: ""
  });

  const services = [
    "General Construction",
    "Renovation",
    "Repair & Maintenance",
    "Interior Design",
    "Plumbing",
    "Electrical"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.service || !formData.location) {
        toast({
          title: "Required Fields",
          description: "Please select a service and enter your location.",
          variant: "destructive"
        });
        return;
      }
    } else if (step === 2) {
      if (!formData.date || !formData.time) {
        toast({
          title: "Required Fields",
          description: "Please select a date and time for your appointment.",
          variant: "destructive"
        });
        return;
      }
    }
    
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Required Fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    console.log("Booking submitted:", formData);
    
    toast({
      title: "Booking Confirmed!",
      description: "Your service has been booked successfully. You'll receive a confirmation email shortly.",
    });
    
    // Reset form and go back to step 1
    setFormData({
      service: "",
      location: "",
      date: "",
      time: "",
      description: "",
      name: "",
      email: "",
      phone: ""
    });
    setStep(1);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-buildease-black text-white py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Book a Service</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Complete the form below to connect with our professionals
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-buildease-yellow' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-buildease-yellow text-black' : 'bg-gray-200'}`}>
                    1
                  </div>
                  <span className="mt-2">Service</span>
                </div>
                <div className={`h-1 flex-1 mx-4 ${step > 1 ? 'bg-buildease-yellow' : 'bg-gray-200'}`}></div>
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-buildease-yellow' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-buildease-yellow text-black' : 'bg-gray-200'}`}>
                    2
                  </div>
                  <span className="mt-2">Schedule</span>
                </div>
                <div className={`h-1 flex-1 mx-4 ${step > 2 ? 'bg-buildease-yellow' : 'bg-gray-200'}`}></div>
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-buildease-yellow' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-buildease-yellow text-black' : 'bg-gray-200'}`}>
                    3
                  </div>
                  <span className="mt-2">Details</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="service" className="block mb-2 font-medium">
                      Service Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-buildease-yellow focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block mb-2 font-medium">
                      Your Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-buildease-yellow focus:outline-none"
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-8">
                    <Button 
                      type="button" 
                      onClick={nextStep} 
                      className="btn-primary flex items-center gap-2"
                    >
                      Next <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Schedule */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="date" className="block mb-2 font-medium">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-buildease-yellow focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block mb-2 font-medium">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-buildease-yellow focus:outline-none"
                      >
                        <option value="">Select a time</option>
                        <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
                        <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                        <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block mb-2 font-medium">
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-buildease-yellow focus:outline-none"
                      placeholder="Please describe your project or issue in detail..."
                    />
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <Button 
                      type="button" 
                      onClick={prevStep} 
                      variant="outline"
                    >
                      Back
                    </Button>
                    <Button 
                      type="button" 
                      onClick={nextStep} 
                      className="btn-primary flex items-center gap-2"
                    >
                      Next <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-buildease-yellow focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-buildease-yellow focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-buildease-yellow focus:outline-none"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div className="mt-8">
                    <div className="p-4 bg-gray-50 rounded-lg mb-6">
                      <h3 className="font-semibold text-lg mb-2">Booking Summary</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Service:</span> {formData.service}</p>
                        <p><span className="font-medium">Location:</span> {formData.location}</p>
                        <p><span className="font-medium">Date:</span> {formData.date}</p>
                        <p><span className="font-medium">Time:</span> {formData.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button 
                        type="button" 
                        onClick={prevStep} 
                        variant="outline"
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit" 
                        className="btn-primary"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookNow;
