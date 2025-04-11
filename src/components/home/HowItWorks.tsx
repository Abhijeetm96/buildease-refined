
import { FileSearch, Calendar, UserCheck, CheckCircle } from "lucide-react";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

const Step = ({ icon, title, description, number }: StepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-20 h-20 bg-buildease-yellow rounded-full flex items-center justify-center mb-6">
          {icon}
        </div>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-buildease-black text-white rounded-full flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileSearch size={36} className="text-buildease-black" />,
      title: "Select Your Service",
      description: "Browse through our extensive range of services and choose the one you need.",
      number: 1
    },
    {
      icon: <Calendar size={36} className="text-buildease-black" />,
      title: "Schedule an Appointment",
      description: "Choose a date and time that works best for you.",
      number: 2
    },
    {
      icon: <UserCheck size={36} className="text-buildease-black" />,
      title: "Get Matched with Professionals",
      description: "We'll connect you with qualified professionals in your area.",
      number: 3
    },
    {
      icon: <CheckCircle size={36} className="text-buildease-black" />,
      title: "Service Completion & Review",
      description: "Once the job is done, review the service and share your experience.",
      number: 4
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Buildease makes finding and booking construction professionals simple and hassle-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              number={step.number}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
