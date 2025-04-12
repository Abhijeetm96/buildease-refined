
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import BookNow from "./pages/BookNow";
import NotFound from "./pages/NotFound";

// Service Pages
import Construction from "./pages/services/Construction";
import Renovation from "./pages/services/Renovation";
import Repair from "./pages/services/Repair";
import InteriorDesign from "./pages/services/InteriorDesign";
import Plumbing from "./pages/services/Plumbing";
import Electrical from "./pages/services/Electrical";
import Painting from "./pages/services/Painting";
import Landscaping from "./pages/services/Landscaping";
import Maintenance from "./pages/services/Maintenance";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-now" element={<BookNow />} />
        
        {/* Service Routes */}
        <Route path="/services/construction" element={<Construction />} />
        <Route path="/services/renovation" element={<Renovation />} />
        <Route path="/services/repair" element={<Repair />} />
        <Route path="/services/interior-design" element={<InteriorDesign />} />
        <Route path="/services/plumbing" element={<Plumbing />} />
        <Route path="/services/electrical" element={<Electrical />} />
        <Route path="/services/painting" element={<Painting />} />
        <Route path="/services/landscaping" element={<Landscaping />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
