
import { useState } from "react";
import { Calendar, Clock, MapPin, DollarSign, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ServiceOption {
  id: string;
  name: string;
}

const QuickBooking = () => {
  const { toast } = useToast();
  const [serviceOptions] = useState<ServiceOption[]>([
    { id: "construction", name: "Construction" },
    { id: "renovation", name: "Renovation" },
    { id: "electrical", name: "Electrical" },
    { id: "plumbing", name: "Plumbing" },
    { id: "interior", name: "Interior Design" },
    { id: "painting", name: "Painting" },
    { id: "landscaping", name: "Landscaping" },
    { id: "maintenance", name: "Maintenance" },
  ]);
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  
  const handleAddService = (serviceId: string) => {
    if (!selectedServices.includes(serviceId)) {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };
  
  const handleRemoveService = (serviceId: string) => {
    setSelectedServices(selectedServices.filter(id => id !== serviceId));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Request Submitted!",
      description: "We'll connect you with professionals shortly.",
      duration: 5000,
    });
    
    setFormOpen(false);
    setSelectedServices([]);
  };
  
  return (
    <Dialog open={formOpen} onOpenChange={setFormOpen}>
      <DialogTrigger asChild>
        <Button className="btn-primary text-lg py-6 px-8">
          Quick Booking
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Quick Service Booking</DialogTitle>
          <DialogDescription>
            Fill out this form and we'll connect you with the right professionals for your needs.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          {/* Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your full name" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Your phone number" required />
            </div>
          </div>
          
          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email address" required />
          </div>
          
          {/* Location */}
          <div>
            <Label htmlFor="location" className="flex items-center">
              <MapPin size={16} className="mr-2" />
              Location
            </Label>
            <Input id="location" placeholder="Your address" required />
          </div>
          
          {/* Services */}
          <div>
            <Label className="flex items-center mb-2">
              <Plus size={16} className="mr-2" />
              Select Services
            </Label>
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedServices.map(serviceId => {
                const service = serviceOptions.find(opt => opt.id === serviceId);
                return (
                  <div key={serviceId} className="bg-buildease-yellow/20 px-3 py-1 rounded-full flex items-center text-sm">
                    {service?.name}
                    <button
                      type="button"
                      onClick={() => handleRemoveService(serviceId)}
                      className="ml-2 text-gray-600 hover:text-red-500"
                    >
                      <X size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
            <select 
              className="w-full p-2 border rounded-md"
              onChange={(e) => {
                if (e.target.value) {
                  handleAddService(e.target.value);
                  e.target.value = "";
                }
              }}
            >
              <option value="">Add a service</option>
              {serviceOptions.map(service => (
                <option 
                  key={service.id} 
                  value={service.id}
                  disabled={selectedServices.includes(service.id)}
                >
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Date and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date" className="flex items-center">
                <Calendar size={16} className="mr-2" />
                Preferred Date
              </Label>
              <Input id="date" type="date" required />
            </div>
            <div>
              <Label htmlFor="time" className="flex items-center">
                <Clock size={16} className="mr-2" />
                Preferred Time
              </Label>
              <Input id="time" type="time" required />
            </div>
          </div>
          
          {/* Budget */}
          <div>
            <Label htmlFor="budget" className="flex items-center">
              <DollarSign size={16} className="mr-2" />
              Budget (Optional)
            </Label>
            <Input id="budget" type="number" placeholder="Your estimated budget" />
          </div>
          
          {/* Additional Requirements */}
          <div>
            <Label htmlFor="requirements">Additional Requirements</Label>
            <Textarea id="requirements" placeholder="Tell us more about your project requirements..." className="h-24" />
          </div>
          
          <DialogFooter>
            <Button type="submit" className="w-full btn-primary">
              Submit Request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuickBooking;
