
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CateringSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-umami-gold rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-umami-gold rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm text-umami-gold font-montserrat tracking-widest uppercase mb-3 inline-block">Catering</span>
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">Elevated Events & Private Dining</h2>
          <p className="text-muted-foreground font-montserrat">
            Bring the Revolver by Umami experience to your special occasions. Our catering services offer the same commitment to quality and creativity as our restaurant, tailored to your event's needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-playfair text-xl mb-4">Corporate Events</h3>
            <p className="text-muted-foreground font-montserrat text-sm mb-4">
              Impress clients and reward employees with our corporate catering options, from breakfast meetings to full-service dinners.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070" 
              alt="Corporate catering" 
              className="w-full h-40 object-cover rounded-sm mb-4"
            />
          </div>
          
          <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-playfair text-xl mb-4">Private Celebrations</h3>
            <p className="text-muted-foreground font-montserrat text-sm mb-4">
              From intimate dinner parties to milestone celebrations, we create memorable dining experiences in your home or venue of choice.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070" 
              alt="Private celebrations" 
              className="w-full h-40 object-cover rounded-sm mb-4"
            />
          </div>
          
          <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-playfair text-xl mb-4">Wedding Receptions</h3>
            <p className="text-muted-foreground font-montserrat text-sm mb-4">
              Celebrate your special day with custom menus that reflect your taste and style, created with the same attention to detail as our restaurant.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070" 
              alt="Wedding catering" 
              className="w-full h-40 object-cover rounded-sm mb-4"
            />
          </div>
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-umami text-umami-light hover:bg-umami-dark transition-colors duration-300 font-montserrat tracking-wider">
            <Link to="/catering">Explore Catering Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
