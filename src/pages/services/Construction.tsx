
import ServicePage from "@/components/services/ServicePage";
import { Building } from "lucide-react";

const Construction = () => {
  const features = [
    { text: "Complete building construction for residential and commercial projects" },
    { text: "Foundation and structural work by certified professionals" },
    { text: "Custom home building and design-build services" },
    { text: "Commercial construction and tenant improvements" },
    { text: "Project management and construction supervision" },
    { text: "Permits and regulatory compliance management" },
    { text: "Green building and sustainable construction options" },
    { text: "Quality materials and craftsmanship guarantee" }
  ];

  return (
    <ServicePage
      title="General Construction"
      description="Professional construction services for residential and commercial projects, delivered on time and on budget. Our expert team handles everything from planning to completion."
      features={features}
      image="/placeholder.svg"
      icon={<Building size={48} className="text-buildease-black" />}
    />
  );
};

export default Construction;
