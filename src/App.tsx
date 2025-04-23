
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
import CateringMenu from "./pages/CateringMenu";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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
          <Route path="/baked-goods" element={<BakedGoods />} />
          <Route path="/catering-menu" element={<CateringMenu />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>

  </QueryClientProvider>
);

export default App;
