
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const seasonalMenuItems = [
  {
    name: "Roasted Beet & Arugula Salad",
    description: "Roasted heirloom beets, wild arugula, whipped goat cheese mousse, candied walnuts, sherry vinaigrette",
    category: "Salad"
  },
  {
    name: "Mushroom Tartine",
    description: "Wild mushrooms, house-made sourdough, herb ricotta, hot honey",
    category: "Appetizer"
  }, {
    name: "Spring Egg Noodles",
    description: "House-made egg noodles, sugar snap peas, spring onions, shiitake mushrooms, ginger-scallion oil, sesame, and yuzu soy glaze",
    category: "Main"
  },
  {
    name: "Roasted Chicken Supreme",
    description: "Confit garlic jus, cauliflower purée, charred fennel, cherry tomato glaze",
    category: "Main"
  },
  {
    name: "Market Fish",
    description: "Spring pea purée, roasted mushrooms, preserved lemon",
    category: "Main"
  },
  {
    name: "Strawberry and Cream Bambolone",
    description: "Fluffy Italian doughnut filled with strawberry compote and vanilla bean pastry cream",
    category: "Dessert"
  }
];

export function MenuPreviewSection() {
  return (
    <section className="py-20 bg-umami text-umami-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-m font-semibold text-umami-cream font-montserrat tracking-widest uppercase mb-3 inline-block">Taste</span>
          <h2 className="text-3xl md:text-4xl font-playfair mb-3">Current Seasonal Menu</h2>
          <h3 className="text-2xl md:text-3xl text-umami-gold font-playfair mb-3">Spring April 1st - June 20th</h3>
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
