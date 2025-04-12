
import ServicePage from "@/components/services/ServicePage";
import { Paintbrush } from "lucide-react";

const Painting = () => {
  const features = [
    { text: "Interior and exterior painting" },
    { text: "Cabinet painting and refinishing" },
    { text: "Deck and fence staining" },
    { text: "Wallpaper removal and installation" },
    { text: "Texture application and removal" },
    { text: "Color consultation and design" },
    { text: "Eco-friendly and low-VOC paint options" },
    { text: "Pressure washing and surface preparation" }
  ];

  return (
    <ServicePage
      title="Painting & Finishing"
      description="Quality painting and finishing services for interior and exterior projects. Our experienced painters deliver flawless results with attention to detail and cleanliness."
      features={features}
      image="/placeholder.svg"
      icon={<Paintbrush size={48} className="text-buildease-black" />}
    />
  );
};

export default Painting;
