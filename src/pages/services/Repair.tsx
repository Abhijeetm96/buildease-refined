
import ServicePage from "@/components/services/ServicePage";
import { Wrench } from "lucide-react";

const Repair = () => {
  const features = [
    { text: "Emergency repair services available 24/7" },
    { text: "Structural repairs and reinforcements" },
    { text: "Water damage and storm damage repair" },
    { text: "Roof and siding repairs" },
    { text: "Door and window repairs and replacements" },
    { text: "Drywall and ceiling repairs" },
    { text: "Floor and tile repairs" },
    { text: "Deck and porch repairs" }
  ];

  return (
    <ServicePage
      title="Repair Services"
      description="Quick and reliable repair services for your home or business. Our skilled technicians can fix any issue, big or small, to keep your property in perfect condition."
      features={features}
      image="/placeholder.svg"
      icon={<Wrench size={48} className="text-buildease-black" />}
    />
  );
};

export default Repair;
