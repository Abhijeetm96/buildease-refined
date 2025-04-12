
import ServicePage from "@/components/services/ServicePage";
import { Zap } from "lucide-react";

const Electrical = () => {
  const features = [
    { text: "Electrical installations and upgrades" },
    { text: "Circuit breaker and panel replacements" },
    { text: "Wiring and rewiring services" },
    { text: "Lighting installation and repair" },
    { text: "Ceiling fan installation" },
    { text: "Outlet and switch installations" },
    { text: "Generator installation and maintenance" },
    { text: "Electrical safety inspections" }
  ];

  return (
    <ServicePage
      title="Electrical"
      description="Safe and reliable electrical services by certified professionals. From minor repairs to complete electrical system installations, we ensure quality work that meets all safety codes."
      features={features}
      image="/placeholder.svg"
      icon={<Zap size={48} className="text-buildease-black" />}
    />
  );
};

export default Electrical;
