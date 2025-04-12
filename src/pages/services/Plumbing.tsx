
import ServicePage from "@/components/services/ServicePage";
import { Droplets } from "lucide-react";

const Plumbing = () => {
  const features = [
    { text: "Emergency plumbing services" },
    { text: "Pipe repair and replacement" },
    { text: "Drain cleaning and unclogging" },
    { text: "Water heater installation and repair" },
    { text: "Fixture installation and replacement" },
    { text: "Sump pump installation and maintenance" },
    { text: "Backflow prevention" },
    { text: "Water line and sewer line services" }
  ];

  return (
    <ServicePage
      title="Plumbing"
      description="Professional plumbing services for any water or drainage need. Our certified plumbers provide reliable solutions for installations, repairs, and maintenance."
      features={features}
      image="/placeholder.svg"
      icon={<Droplets size={48} className="text-buildease-black" />}
    />
  );
};

export default Plumbing;
