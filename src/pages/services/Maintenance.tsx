
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
    { text: "Emergency maintenance response" }
  ];

  return (
    <ServicePage
      title="Maintenance & Repairs"
      description="Regular maintenance and quick repairs to keep your property in top condition. Our comprehensive maintenance services help prevent costly problems and extend the life of your home."
      features={features}
      image="/placeholder.svg"
      icon={<Shield size={48} className="text-buildease-black" />}
    />
  );
};

export default Maintenance;
