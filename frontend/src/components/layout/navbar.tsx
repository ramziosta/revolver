
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  // { name: "Baked Goods", path: "/baked-goods" },
  { name: "The Umami Cellar", path: "/cellar" },
  { name: "Chef", path: "/chef" },
  { name: "Catering", path: "/catering" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/gallery" },

];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigate = useNavigate();
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-umami py-3 shadow-md" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo className={isScrolled ? "scale-90" : ""} />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-umami-light hover:text-umami-cream transition-colors font-montserrat tracking-wider text-sm font-light"
              >
                {link.name}
              </Link>
            ))}
            <div className="gradient-border-button">
              <Button className="bg-transparent border-0 text-l font-bold text-umami-DEFAULT  hover:text-umami-cream font-montserrat tracking-wider rounded">
                <Link to="/subscriptions">Meal Subscription</Link>
              </Button>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-umami-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-umami-light/5 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-umami-light hover:text-umami-cream transition-colors font-montserrat tracking-wider text-sm py-2 border-b border-umami-light/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="text-center">
                <Button asChild className="bg-umami-gold text-umami-light hover:bg-umami-dark transition-colors duration-300 font-montserrat tracking-wider">
                  <Link to="/subscriptions">Meal Subscription Plans</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
