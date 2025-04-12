
import ServicePage from "@/components/services/ServicePage";
import { TreePine } from "lucide-react";

const Landscaping = () => {
  const features = [
    { text: "Landscape design and planning" },
    { text: "Hardscaping including patios and walkways" },
    { text: "Lawn installation and maintenance" },
    { text: "Garden installation and plant selection" },
    { text: "Irrigation system installation and repair" },
    { text: "Outdoor lighting design and installation" },
    { text: "Water features and fountains" },
    { text: "Retaining walls and erosion control" }
  ];

  return (
    <ServicePage
      title="Landscaping"
      description="Transform your outdoor spaces with professional landscaping services. From initial design to ongoing maintenance, we create beautiful and functional landscapes."
      features={features}
      image="/placeholder.svg"
      icon={<TreePine size={48} className="text-buildease-black" />}
    />
  );
};

export default Landscaping;
