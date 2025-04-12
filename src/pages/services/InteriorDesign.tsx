
import ServicePage from "@/components/services/ServicePage";
import { House } from "lucide-react";

const InteriorDesign = () => {
  const features = [
    { text: "Comprehensive interior design consultation" },
    { text: "Space planning and layout optimization" },
    { text: "Color scheme and paint selection" },
    { text: "Furniture and decor recommendations" },
    { text: "Custom furniture design and sourcing" },
    { text: "Window treatments and lighting design" },
    { text: "Material and finish selection" },
    { text: "3D visualization and concept presentation" }
  ];

  return (
    <ServicePage
      title="Interior Design"
      description="Create beautiful and functional spaces with our design expertise. Our interior designers will work with you to develop a personalized style that reflects your taste and meets your needs."
      features={features}
      image="/placeholder.svg"
      icon={<House size={48} className="text-buildease-black" />}
    />
  );
};

export default InteriorDesign;
