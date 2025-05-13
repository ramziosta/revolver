
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070')", 
          backgroundPosition: "center",
          filter: "brightness(0.3) "
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-playfair text-umami-light  font-medium mb-6">
          <span className="block">Culinary Artistry</span>
          <span className="block mt-2">Seasonal Inspiration</span>
        </h1>

          <p className="text-umami-light/90 text-lg md:text-xl font-cormorant mb-8">
              An elevated culinary experience through <b className="text-umami-gold font-bold"><br />
              refined catering, exclusive at-home dining, a seasonal meal subscription service,<br />
              and a selection of artisanal baked goods. <br /></b>
              Curated by our chef, showcasing exceptional ingredients and <br />
              ever-evolving flavor combinations.
          </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button asChild className="bg-umami-light text-umami hover:bg-umami-cream transition-colors duration-300 font-montserrat tracking-wider">
            <Link to="/menu">Explore Our Menu</Link>
          </Button>
          
          <Button asChild variant="outline" className="border-umami-light text-umami-default hover:bg-umami-gold hover:text-umami transition-colors duration-300 font-montserrat tracking-wider">
            <a href="#book-event">Book Your Event</a>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-[1px] h-10 bg-umami-light/50 mx-auto"></div>
        <div className="text-umami-light/70 text-xs mt-2 font-montserrat tracking-widest">SCROLL</div>
      </div>
    </section>
  );
}
