
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Chef = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-28 bg-umami text-umami-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair mb-4">Meet Our Chef</h1>
          <p className="max-w-2xl mx-auto text-umami-light/80 font-montserrat">
            The creative mind behind our seasonal menus and innovative approach to culinary artistry.
          </p>
        </div>
      </section>
      
      {/* Chef Profile */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1974" 
                alt="Chef portrait" 
                className="rounded-sm w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-umami-gold z-0"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-playfair mb-2">Chef Alexandra Lin</h2>
              <p className="text-umami-gold font-montserrat text-sm tracking-wider uppercase mb-6">Executive Chef</p>
              
              <p className="text-muted-foreground font-montserrat mb-4">
                With over 15 years of experience in renowned restaurants across the globe, Chef Alexandra Lin brings a unique perspective to Revolver by Umami. Her culinary journey began in her grandmother's kitchen and has taken her through Michelin-starred establishments in Tokyo, Paris, and New York.
              </p>
              
              <p className="text-muted-foreground font-montserrat mb-6">
                Chef Lin's philosophy centers around respecting ingredients, embracing seasonality, and blending traditional techniques with innovative approaches. Her dedication to sourcing the finest ingredients and supporting local producers is at the heart of Revolver's rotating seasonal menu.
              </p>
              
              <div className="flex space-x-4">
                <Button asChild className="bg-umami text-umami-light hover:bg-umami-dark font-montserrat tracking-wider">
                  <Link to="/menu">Explore Her Menu</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-16 bg-umami-light/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair mb-8">Culinary Philosophy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
              <div>
                <h3 className="font-playfair text-xl mb-4">Seasonality</h3>
                <p className="text-muted-foreground font-montserrat">
                  Our menu revolves around the best ingredients each season has to offer, ensuring peak flavor and freshness in every dish.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-4">Technique</h3>
                <p className="text-muted-foreground font-montserrat">
                  We blend classical culinary methods with modern innovations to create dishes that are both familiar and surprising.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-4">Integrity</h3>
                <p className="text-muted-foreground font-montserrat">
                  From sourcing to preparation, we maintain the highest standards of quality and ethical practices in all aspects of our cuisine.
                </p>
              </div>
            </div>
            
            <blockquote className="text-xl font-cormorant italic mb-8">
              "My greatest joy is creating dishes that honor the essence of each ingredient, allowing their natural flavors to shine while bringing diners on an unexpected journey."
            </blockquote>
            
            <p className="font-montserrat">— Chef Alexandra Lin</p>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-playfair mb-12 text-center">Meet the Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1974" 
                  alt="Sous Chef" 
                  className="rounded-sm w-full h-64 object-cover mb-4"
                />
                <h3 className="font-playfair text-xl mb-1">Daniel Moore</h3>
                <p className="text-umami-gold font-montserrat text-sm tracking-wider uppercase mb-3">Sous Chef</p>
                <p className="text-muted-foreground font-montserrat text-sm">
                  Daniel's background in French cuisine and dedication to precision perfectly complements Chef Lin's creative vision.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1588675646184-4b549ff655b9?q=80&w=1974" 
                  alt="Pastry Chef" 
                  className="rounded-sm w-full h-64 object-cover mb-4"
                />
                <h3 className="font-playfair text-xl mb-1">Isabella Chen</h3>
                <p className="text-umami-gold font-montserrat text-sm tracking-wider uppercase mb-3">Pastry Chef</p>
                <p className="text-muted-foreground font-montserrat text-sm">
                  Isabella creates desserts that balance sweetness, texture, and artistic presentation to complete the dining experience.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1574966739987-65ee4e52ebcd?q=80&w=1974" 
                  alt="Wine Director" 
                  className="rounded-sm w-full h-64 object-cover mb-4"
                />
                <h3 className="font-playfair text-xl mb-1">Marcus Turner</h3>
                <p className="text-umami-gold font-montserrat text-sm tracking-wider uppercase mb-3">Wine Director</p>
                <p className="text-muted-foreground font-montserrat text-sm">
                  Marcus curates our wine program, seeking out small producers who share our commitment to quality and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Chef;
