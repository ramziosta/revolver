
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuCategories = [
  {
    id: "starters",
    name: "Starters",
    items: [
      {
        name: "Seared Scallops",
        description: "Hokkaido scallops, carrot purée, crispy leeks, brown butter",
        price: "$18"
      },
      {
        name: "Mushroom Tartine",
        description: "Wild mushrooms, housemade sourdough, herb ricotta, truffle honey",
        price: "$16"
      },
      {
        name: "Beef Tartare",
        description: "Hand-cut grass-fed beef, quail egg, capers, shallots, rye crisps",
        price: "$19"
      },
      {
        name: "Roasted Beet Salad",
        description: "Red and gold beets, whipped goat cheese, pistachio, citrus vinaigrette",
        price: "$15"
      }
    ]
  },
  {
    id: "mains",
    name: "Main Courses",
    items: [
      {
        name: "Dry-Aged Duck Breast",
        description: "Cherry gastrique, celeriac, charred radicchio, duck jus",
        price: "$38"
      },
      {
        name: "Ora King Salmon",
        description: "Spring pea purée, morels, preserved lemon, sorrel",
        price: "$36"
      },
      {
        name: "Grass-Fed Ribeye",
        description: "10oz ribeye, potato fondant, seasonal vegetables, red wine sauce",
        price: "$45"
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Carnaroli rice, seasonal mushrooms, aged parmesan, herbs",
        price: "$32"
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        name: "Dark Chocolate Mousse",
        description: "Salted caramel, cocoa nib tuile, vanilla crème fraîche",
        price: "$14"
      },
      {
        name: "Meyer Lemon Tart",
        description: "Toasted meringue, blackberry, shortbread crumble",
        price: "$12"
      },
      {
        name: "Seasonal Fruit Pavlova",
        description: "Crisp meringue, seasonal fruit, vanilla custard",
        price: "$13"
      }
    ]
  },
  {
    id: "drinks",
    name: "Beverages",
    items: [
      {
        name: "Seasonal Craft Cocktails",
        description: "Ask your server about our rotating selection of handcrafted seasonal cocktails",
        price: "$15-18"
      },
      {
        name: "Curated Wine Selection",
        description: "Carefully selected wines by the glass or bottle to complement our menu",
        price: "Varies"
      },
      {
        name: "Artisanal Tea Service",
        description: "Premium loose-leaf teas, served with house-made accompaniments",
        price: "$8"
      }
    ]
  }
];

const Menu = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-28 bg-umami text-umami-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair mb-4">Seasonal Menu</h1>
          <p className="max-w-2xl mx-auto text-umami-light/80 font-montserrat">
            Our menu changes with the seasons to showcase ingredients at their peak. 
            All dishes are thoughtfully crafted by our chef using both local and specially sourced imported ingredients.
          </p>
        </div>
      </section>
      
      {/* Menu Content */}
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
              <h3 className="font-playfair text-xl mb-4">A Note About Our Menu</h3>
              <p className="text-muted-foreground font-montserrat mb-4">
                Our menu is subject to change based on ingredient availability and seasonality. 
                We source from local farms and purveyors whenever possible.
              </p>
              <p className="text-muted-foreground font-montserrat">
                If you have dietary restrictions or allergies, please inform your server, and our chef will be happy to accommodate your needs.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-umami text-umami-light hover:bg-umami-dark font-montserrat tracking-wider">
                Make a Reservation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
