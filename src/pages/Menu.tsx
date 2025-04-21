
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Soup, Salad, Utensils, HandPlatter, EggFried, CakeSlice, Martini } from "lucide-react";
const menuCategories = [
  {
    id: "soups",
    name: "Soups",
    icon: Soup,
    items: [
      {
        name: "Zucchini & Mint Soup",
        description: "Purée of spring zucchini, fresh mint, green garlic, and lemon crème fraîche",
        category: "Soup"
      },
      {
        name: "Spring Mushroom & Barley Broth",
        description: "Wild mushrooms, pearl barley, green peas, and a light vegetable consommé",
        category: "Soup"
      },
      {
        name: "Curried Carrot & Coconut Soup",
        description: "Gingered carrot purée, mild curry, coconut milk, lime leaf, and crispy shallots",
        category: "Soup"
      },
      {
        name: "Spring Pea & Tarragon Soup",
        description: "Sweet peas blended with tarragon and crème fraîche, topped with sugar snap slivers and microgreens",
        category: "Soup"
      },
      {
        name: "Spring Onion & New Potato Soup",
        description: "Creamy blend of new potatoes, charred spring onions, chives, and cultured butter",
        category: "Soup"
      },
      {
        name: "Asparagus & Lemon Soup",
        description: "Fresh asparagus purée with preserved lemon, crème fraîche, and shaved radish",
        category: "Soup"
      },
    ]
  },
  {
    id: "salads",
    name: "Salads",
    icon: Salad,
    items: [
      {
        name: "Roasted Beet & Arugula Salad",
        description: "Roasted heirloom beets, wild arugula, whipped goat cheese mousse, candied walnuts, sherry vinaigrette",
        category: "Salad"
      },
      {
        name: "Spring Artichoke & Fennel Salad",
        description: "Marinated baby artichokes, shaved fennel, snap peas, preserved lemon vinaigrette, mint, Grana Padano",
        category: "Salad"
      },
      {
        name: "Asparagus & Quinoa Salad",
        description: "Grilled asparagus, red quinoa, pea tendrils, pickled shallots, toasted almonds, lemon-thyme vinaigrette",
        category: "Salad"
      },

    ]
  },
  {
    id: "starters",
    name: "Starters",
    icon: Utensils,
    items: [
      {
        name: "Seared Scallops",
        description: "Scallops, carrot purée, crispy scallions, brown butter",
        price: ""
      },
      {
        name: "Mushroom Tartine",
        description: "Wild mushrooms, house-made sourdough, hot ricotta, truffle honey",
        price: ""
      },
      {
        name: "Beef Tartare",
        description: "Hand-cut beef, quail egg, capers, shallots, rye crisps",
        price: ""
      },
      {
        name: "Potato Gnocchi",
        course: "Appetizer",
        description: "Hand-rolled potato gnocchi, asparagus tips, sweet peas, tarragon butter, shaved pecorino"
      },
    ]
  },
  {
    id: "mains",
    name: "Main Courses",
    icon: HandPlatter,
    items: [
       {
        name: "Spring Egg Noodles",
        description: "House-made egg noodles, sugar snap peas, spring onions, shiitake mushrooms, ginger-scallion oil, sesame, and yuzu soy glaze",
         price: ""
      },
      {
        name: "Roasted Chicken Supreme",
        description: "Confit garlic jus, cauliflower purée, charred fennel, cherry tomato glaze",
        price: ""

      },
      {
        name: "Market Fish",
        description: "Spring pea purée, roasted mushrooms, preserved lemon",
        price: ""
      },
      {
        name: "Grass-Fed Ribeye",
        description: "10 oz ribeye, potato puree, roasted seasonal vegetables, peppercorn demi glace",
        price: ""
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Arborio rice, seasonal mushrooms, aged parmesan, herbs",
        price: ""
      }
    ]
  },
  {
    id: "brunch",
    name: "Brunch",
    icon: EggFried,
    items: [
       {
        name: "Spring Egg Noodles",
        description: "House-made egg noodles, sugar snap peas, spring onions, shiitake mushrooms, ginger-scallion oil, sesame, and yuzu soy glaze",
         price: ""
      },
      {
        name: "Roasted Chicken Supreme",
        description: "Confit garlic jus, cauliflower purée, charred fennel, cherry tomato glaze",
        price: ""

      },
      {
        name: "Market Fish",
        description: "Spring pea purée, roasted mushrooms, preserved lemon",
        price: ""
      },
      {
        name: "Grass-Fed Ribeye",
        description: "10 oz ribeye, potato puree, roasted seasonal vegetables, peppercorn demi glace",
        price: ""
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Arborio rice, seasonal mushrooms, aged parmesan, herbs",
        price: ""
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: CakeSlice,
    items: [
      {
        name: "Dark Chocolate Mousse",
        description: "Salted caramel, cocoa nib tuile, vanilla crème fraîche",
        price: ""
      },
      {
        name: "Lemon Tart",
        description: "Toasted meringue, blackberry, shortbread crumble",
        price: ""
      },
      {
        name: "Seasonal Fruit Pavlova",
        description: "Crisp meringue, seasonal fruit, vanilla custard",
        price: ""
      },
      {
        name: "Carrot Chamomile Layer Cake",
        description: "Spiced carrot cake infused with chamomile, honey cream cheese frosting, and walnut praline",
        price: ""
      },
      {
        name: "Strawberry and Cream Bambolone",
        description: "Fluffy Italian doughnut filled with strawberry compote and vanilla bean pastry cream",
        price: ""
      }
    ]
  },
  {
    id: "drinks",
    name: "Beverages",
    icon: Martini,
    items: [
      {
        name: "Seasonal Craft Cocktails",
        description: "Ask about our rotating selection of handcrafted seasonal cocktails",
        price: ""
      },
      {
        name: "Curated Wine Selection",
        description: "Carefully selected wines by the bottle to complement our menu",
        price: ""
      },
      {
        name: "Artisanal Tea Service",
        description: "Premium loose-leaf teas, served with house-made accompaniments",
        price: ""
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
          <h3 className="text-2xl md:text-3xl text-umami-gold font-playfair mb-3 mt-8">Spring April 1st - June 20th</h3>
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
            <Tabs defaultValue="mains" className="w-full">
              <TabsList className="w-full mb-8 bg-transparent flex flex-wrap gap-2">
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
                <TabsContent key={category.id} value={category.id} className="space-y-8 mt-6">
                  <div>
                    <h2 className="text-3xl font-playfair mb-8 mt-12 text-center">{category.name}</h2>
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
