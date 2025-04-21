
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974" 
                alt="Elegantly plated dish" 
                className="rounded-md w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-umami-gold z-0"></div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm text-umami-gold font-montserrat tracking-widest uppercase mb-3">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">Artistry in Every Dish</h2>
            
            <p className="text-muted-foreground mb-6 font-montserrat">
              At Revolver by Umami, we believe in a revolving canvas of culinary exploration. Our seasonal menus evolve with the finest local and imported ingredients, offering a fresh, curated experience with every order.
            </p>
            
            <p className="text-muted-foreground mb-8 font-montserrat">
              Blending traditional techniques with innovative flair, our chef-driven dishes celebrate each ingredient’s essence—allowing natural flavors to shine through thoughtful preparation.
            </p>
            <p className="text-muted-foreground mb-8 font-montserrat">
              Whether you’re hosting a grand celebration, planning an intimate dinner, or indulging in fine meals at home, Revolver by Umami delivers refined catering, exclusive dining, and elevated subscriptions—where wellness and luxury meet in perfect harmony.
            </p>
            <Button asChild className="self-start bg-umami text-umami-light hover:bg-umami-dark font-montserrat tracking-wider">
              <Link to="/chef">Meet Our Chef</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
