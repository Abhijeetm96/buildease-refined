
import ServicePage from "@/components/services/ServicePage";
import { Shield } from "lucide-react";

const Maintenance = () => {
  const features = [
    { text: "Regular home maintenance inspections" },
    { text: "Preventive maintenance programs" },
    { text: "Seasonal property maintenance" },
    { text: "HVAC system maintenance" },
    { text: "Gutter cleaning and repair" },
    { text: "Property management services" },
    { text: "Small repairs and handyman services" },
    { text: "Scheduled maintenance contracts" }
  ];

  return (
    <ServicePage
      title="Maintenance Services"
      description="Regular maintenance to keep your property in top condition and prevent costly problems. Our comprehensive maintenance services help extend the life of your home systems and structures."
      features={features}
      image="/placeholder.svg"
      icon={<Shield size={48} className="text-buildease-black" />}
    />
  );
};

export default Maintenance;
