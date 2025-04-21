
import { Logo } from "@/components/ui/logo";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-umami text-umami-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <Logo size="md" />
            <p className="mt-4 text-sm text-umami-light/80 max-w-xs text-center md:text-left font-montserrat">
              Explore the art of flavor through our seasonal, chef-curated menus featuring the finest local and imported ingredients.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-umami-light hover:text-umami-cream transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-umami-light hover:text-umami-cream transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-umami-light hover:text-umami-cream transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-lg mb-4">Hours</h3>
            <div className="font-montserrat text-sm space-y-2 text-umami-light/80">
              <p>Lunch: Tues-Sun 11:30am - 2:30pm</p>
              <p>Dinner: Tues-Sun 5:30pm - 10:00pm</p>
              <p>Closed Mondays</p>
            </div>
            <div className="mt-6">
              <h3 className="font-playfair text-lg mb-4">Contact</h3>
              <address className="font-montserrat text-sm not-italic text-umami-light/80">
                <p>123 Savory Street</p>
                <p>Culinary District</p>
                <p className="mt-2">info@revolverumami.com</p>
                <p>(555) 123-4567</p>
              </address>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-umami-light/80 hover:text-umami-cream transition-colors font-montserrat text-sm">Home</Link>
              <Link to="/menu" className="text-umami-light/80 hover:text-umami-cream transition-colors font-montserrat text-sm">Menu</Link>
              <Link to="/chef" className="text-umami-light/80 hover:text-umami-cream transition-colors font-montserrat text-sm">Chef</Link>
              <Link to="/catering" className="text-umami-light/80 hover:text-umami-cream transition-colors font-montserrat text-sm">Catering</Link>
              <Link to="/contact" className="text-umami-light/80 hover:text-umami-cream transition-colors font-montserrat text-sm">Contact</Link>
            </nav>
            <div className="mt-6">
              <h3 className="font-playfair text-lg mb-4">Policies</h3>
              <nav className="flex flex-col space-y-2">
                <Link to="/privacy" className="text-umami-light/80 hover:text-umami-cream transition-colors font-montserrat text-sm">Privacy Policy</Link>
                <Link to="/terms" className="text-umami-light/80 hover:text-umami-cream transition-colors font-montserrat text-sm">Terms of Service</Link>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-umami-light/10 text-center">
          <p className="text-xs text-umami-light/60 font-montserrat">
            © {new Date().getFullYear()} Revolver by Umami. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
