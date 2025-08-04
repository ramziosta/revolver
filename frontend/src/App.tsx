import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "./components/ui/scrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Chef from "./pages/Chef";
import BakedGoods from "./pages/BakedGoods";
import Catering from "./pages/Catering";
import CateringMenu from "./components/catering/CateringMenu.tsx";
import Cellar from "./pages/Cellar.tsx";
import Gallery from "./pages/Gallery";
import Subscriptions from "./components/subscription/Subscriptions.tsx";
import OnceAweek from "./components/subscription/OnceAweek";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Contact from "./pages/Contact";
import Wellness from "./components/subscription/Wellness.tsx";
import NotFound from "./pages/NotFound";
import UmamiAmman from "./pages/UmamiAmman.tsx";
import "./i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>

    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="umami-amman" element={<UmamiAmman />} />
          <Route path="/catering-menu" element={<CateringMenu />} />
          <Route path="/cellar" element={<Cellar />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/onceAweek" element={<OnceAweek />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>

  </QueryClientProvider>
);

export default App;
