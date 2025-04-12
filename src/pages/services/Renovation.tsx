
import ServicePage from "@/components/services/ServicePage";
import { Paintbrush } from "lucide-react";

const Renovation = () => {
  const features = [
    { text: "Full home renovations and remodeling" },
    { text: "Kitchen and bathroom renovations" },
    { text: "Basement finishing and conversions" },
    { text: "Room additions and extensions" },
    { text: "Historic building restoration" },
    { text: "Aging-in-place and accessibility modifications" },
    { text: "Energy-efficient upgrades and retrofits" },
    { text: "Custom cabinetry and built-ins" }
  ];

  return (
    <ServicePage
      title="Renovation"
      description="Transform your space with our expert renovation services. From kitchens and bathrooms to whole-home makeovers, we'll help you reimagine and revitalize your property."
      features={features}
      image="/placeholder.svg"
      icon={<Paintbrush size={48} className="text-buildease-black" />}
    />
  );
};

export default Renovation;
