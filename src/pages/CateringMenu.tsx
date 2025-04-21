
import { Layout } from "@/components/layout/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Soup, Salad, UtensilsCrossed, Coffee, Sandwich, Cookie, GlassWater } from "lucide-react";

const menuCategories = [
  {
    id: "soups",
    name: "Soups",
    icon: Soup,
    items: [
      {
        name: "Butternut Squash Soup",
        description: "Creamy butternut squash soup with sage crème fraîche",
        price: "$12/person"
      },
      {
        name: "French Onion Soup",
        description: "Classic French onion soup with gruyère crouton",
        price: "$14/person"
      },
      {
        name: "Lobster Bisque",
        description: "Rich lobster bisque with cognac and fresh herbs",
        price: "$16/person"
      }
    ]
  },
  {
    id: "salads",
    name: "Salads",
    icon: Salad,
    items: [
      {
        name: "Mixed Green Salad",
        description: "Fresh mixed greens with champagne vinaigrette",
        price: "$10/person"
      },
      {
        name: "Caesar Salad",
        description: "Classic Caesar with house-made dressing and anchovies",
        price: "$12/person"
      },
      {
        name: "Quinoa & Roasted Vegetable",
        description: "Quinoa with seasonal roasted vegetables and citrus dressing",
        price: "$14/person"
      }
    ]
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    icon: Sandwich,
    items: [
      {
        name: "Grilled Vegetable",
        description: "Seasonal grilled vegetables with pesto on focaccia",
        price: "$16/person"
      },
      {
        name: "Turkey & Avocado",
        description: "Roasted turkey with avocado and sprouts on multigrain",
        price: "$18/person"
      },
      {
        name: "Roast Beef",
        description: "Prime roast beef with horseradish cream on sourdough",
        price: "$20/person"
      }
    ]
  },
  {
    id: "entrees",
    name: "Entrees",
    icon: UtensilsCrossed,
    items: [
      {
        name: "Grilled Salmon",
        description: "Wild-caught salmon with lemon herb butter",
        price: "$32/person"
      },
      {
        name: "Beef Tenderloin",
        description: "Herb-crusted beef tenderloin with red wine sauce",
        price: "$38/person"
      },
      {
        name: "Vegetable Lasagna",
        description: "Layered seasonal vegetables with house-made pasta",
        price: "$28/person"
      }
    ]
  },
  {
    id: "starters",
    name: "Starters",
    icon: GlassWater,
    items: [
      {
        name: "Charcuterie Board",
        description: "Selection of cured meats, cheeses, and accompaniments",
        price: "$24/person"
      },
      {
        name: "Bruschetta",
        description: "Toasted crostini with tomato, basil, and garlic",
        price: "$16/person"
      },
      {
        name: "Shrimp Cocktail",
        description: "Poached shrimp with house-made cocktail sauce",
        price: "$22/person"
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: Cookie,
    items: [
      {
        name: "Mini Dessert Platter",
        description: "Assortment of bite-sized desserts",
        price: "$14/person"
      },
      {
        name: "Chocolate Truffles",
        description: "House-made chocolate truffles",
        price: "$16/person"
      },
      {
        name: "Fresh Fruit Tart",
        description: "Seasonal fruit tart with vanilla custard",
        price: "$12/person"
      }
    ]
  },
  {
    id: "brunch",
    name: "Brunch",
    icon: Coffee,
    items: [
      {
        name: "Continental Breakfast",
        description: "Assorted pastries, fresh fruit, yogurt parfaits",
        price: "$22/person"
      },
      {
        name: "Quiche Selection",
        description: "Variety of quiches with mixed green salad",
        price: "$24/person"
      },
      {
        name: "Smoked Salmon Platter",
        description: "Smoked salmon with traditional accompaniments",
        price: "$28/person"
      }
    ]
  }
];

const CateringMenu = () => {
  return (
    <Layout>
      <section className="py-20 bg-umami text-umami-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair mb-4">Catering Menu</h1>
          <p className="max-w-2xl mx-auto text-umami-light/80 font-montserrat">
            Explore our extensive catering options for any occasion
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="starters" className="w-full">
              <TabsList className="w-full justify-start mb-8 bg-transparent space-x-2">
                {menuCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-umami data-[state=active]:text-umami-light font-montserrat tracking-wider"
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {menuCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-playfair mb-8 text-center">{category.name}</h2>
                    <div className="space-y-8">
                      {category.items.map((item, index) => (
                        <div key={index} className="border-b border-border pb-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-playfair text-xl">{item.name}</h3>
                            <span className="font-montserrat text-umami-gold">{item.price}</span>
                          </div>
                          <p className="text-muted-foreground font-cormorant text-lg">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-12 bg-umami-light/5 p-8 rounded-sm">
              <h3 className="font-playfair text-xl mb-4">Catering Information</h3>
              <p className="text-muted-foreground font-montserrat mb-4">
                All catering orders require 48-hour advance notice. Minimum order quantities may apply.
              </p>
              <p className="text-muted-foreground font-montserrat">
                Please contact us for custom menus, dietary accommodations, or special requests.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CateringMenu;
