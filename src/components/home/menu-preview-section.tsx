
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const seasonalMenuItems = [
  {
    name: "Seared Scallops",
    description: "Hokkaido scallops, carrot purée, crispy leeks, brown butter",
    category: "Appetizer"
  },
  {
    name: "Mushroom Tartine",
    description: "Wild mushrooms, housemade sourdough, herb ricotta, truffle honey",
    category: "Appetizer"
  },
  {
    name: "Dry-Aged Duck Breast",
    description: "Cherry gastrique, celeriac, charred radicchio, duck jus",
    category: "Main"
  },
  {
    name: "Ora King Salmon",
    description: "Spring pea purée, morels, preserved lemon, sorrel",
    category: "Main"
  }
];

export function MenuPreviewSection() {
  return (
    <section className="py-20 bg-umami text-umami-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-umami-cream font-montserrat tracking-widest uppercase mb-3 inline-block">Taste</span>
          <h2 className="text-3xl md:text-4xl font-playfair mb-3">Current Seasonal Menu</h2>
          <p className="text-umami-light/80 max-w-2xl mx-auto font-montserrat">
            Our menu changes with the seasons, highlighting the finest ingredients at their peak. Here's a glimpse of our current offerings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {seasonalMenuItems.map((item, index) => (
            <div key={index} className="border-b border-umami-light/20 pb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-playfair text-xl">{item.name}</h3>
                <span className="text-umami-cream text-sm font-montserrat">{item.category}</span>
              </div>
              <p className="text-umami-light/70 font-cormorant text-lg">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-transparent border border-umami-cream text-umami-cream hover:bg-umami-cream hover:text-umami transition-all duration-300 font-montserrat tracking-wider">
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
