
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const seasonalMenuItems = [
  {
    name: "Grilled Corn & Avocado Salad",
    description: "Charred corn, avocado, cherry tomatoes, pickled onions, cilantro-lime vinaigrette.",
    category: "Salad"
  },
  {
    name: "Mushroom Tartine",
    description: "Wild mushrooms, house-made sourdough, herb ricotta, hot honey",
    category: "Appetizer"
  },
  {
    name: "Ricotta Gnocchi with Corn & Basil",
    description: "Served with charred corn, parmesan crumble, and roasted tomato vinaigrette.",
    category: "Main"
  },
  {
    name: "Herbed Chicken Supreme",
    description: "Grilled chicken breast with sweet corn purée, cherry tomato vinaigrette, and baby greens.",
    category: "Main"
  },
  {
    name: "Rib eye Steak",
    description: "Grilled and sliced, served with charred corn salsa, arugula, and chimichurri.",
    category: "Main"
  },
  {
    name: "Crème brûlée Bambolone",
    description: "Fluffy Italian doughnut filled with vanilla bean french pastry cream with a burnt sugar crunch.",
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
          <h3 className="text-2xl md:text-3xl text-umami-gold font-playfair mb-3">Summer June 21st - September 21st</h3>
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
