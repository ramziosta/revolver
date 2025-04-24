
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Soup, Salad, Utensils, HandPlatter, EggFried, CakeSlice, Martini } from "lucide-react";
import { motion } from "framer-motion";
import { ChevronDown, Star, Coffee, Award } from "lucide-react";
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
      // {
      //   name: "Curried Carrot & Coconut Soup",
      //   description: "Gingered carrot purée, mild curry, coconut milk, lime leaf, and crispy shallots",
      //   category: "Soup"
      // },
      {
        name: "Spring Pea & Tarragon Soup",
        description: "Sweet peas blended with tarragon and crème fraîche, topped with sugar snap slivers and microgreens",
        category: "Soup"
      },
      // {
      //   name: "Spring Onion & New Potato Soup",
      //   description: "Creamy blend of new potatoes, charred spring onions, chives, and cultured butter",
      //   category: "Soup"
      // },
      // {
      //   name: "Asparagus & Lemon Soup",
      //   description: "Fresh asparagus purée with preserved lemon, crème fraîche, and shaved radish",
      //   category: "Soup"
      // },
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
        name: "Seasonal Strata",
        description: "Savory layered egg bake with seasonal vegetables, cheese, and crispy potato crust",
        price: ""
      },
      {
        name: "Signature Egg Bake Casserole",
        description: "Fluffy baked eggs with roasted peppers, spinach, and cheddar",
        price: ""
      },
      {
        name: "Quiche Selection",
        description: "A choice from a variety of quiches including Lorraine, Spinach & Feta, and Wild Mushroom, served with a fresh greens salad",
        price: ""
      },
      {
        name: "Assorted Muffins & Sweet Breads",
        description: "Chef's selection of house-baked muffins and sweet loaves",
        price: ""
      },
      {
        name: "European-Style Danish Pastries",
        description: "Flaky danishes with fruit, almond, and cream cheese fillings",
        price: ""
      },
      {
        name: "House Jams & Spreads",
        description: "A variety of artisanal jams, compound butters, and preserves",
        price: ""
      },
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: CakeSlice,
    items: [
      {
        name: "Best Chocolate Chip Cookie",
        description: "Valrhona chocolate and vanilla butter",
        price: ""
      },
      {
        name: "Fruit and Lemon Galette",
        description: "Seasonal Fruit medley, vanilla custard, and lemon glaze",
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
const instagram =[
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
]

const recommendations = [
  {
    name: "Spring Herb Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Creamy arborio rice with seasonal spring herbs, asparagus, and parmesan"
  },
  {
    name: "Pan-Seared Scallops",
    image: "https://images.unsplash.com/photo-1532980193608-32e2e719a8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "With pea purée, crispy pancetta, and lemon butter sauce"
  },
  {
    name: "Rhubarb & Strawberry Tart",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Seasonal fruit tart with vanilla bean custard and almond crust"
  }
]

const Menu = () => {
  return (
      <Layout>
        {/* Hero Section with Parallax Effect */}
        <section className="relative h-[70vh] overflow-hidden">
          {/* Background Image with Parallax */}
          <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                backgroundAttachment: "fixed"
              }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
          <span className="bg-umami-gold text-umami-DEFAULT font-montserrat uppercase tracking-widest text-sm py-2 px-4 rounded-full mb-6">
            Seasonal Offerings
          </span>
            <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-white">Our Menu</h1>
            <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
            <h3 className="text-2xl md:text-3xl text-umami-gold font-playfair mb-4">Spring Collection • April 1st - June 20th</h3>
            <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
              Indulge in our chef's seasonal creations, thoughtfully crafted to showcase the vibrant flavors of spring.
            </p>

          </div>
        </section>

        {/* Menu Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">


              {/* Menu Tabs */}
              <Tabs defaultValue="mains" className="w-full">
                <TabsList className="w-full mb-8 bg-transparent flex flex-wrap gap-2 justify-center">
                  {menuCategories.map((category) => (
                      <TabsTrigger
                          key={category.id}
                          value={category.id}
                          className="data-[state=active]:bg-umami data-[state=active]:text-umami-light font-montserrat tracking-wider transition-all"
                      >
                        <category.icon className="w-4 h-4 mr-2" />
                        {category.name}
                      </TabsTrigger>
                  ))}
                </TabsList>

                {menuCategories.map((category) => (
                    <TabsContent key={category.id} value={category.id} className="space-y-8 mt-6">
                      <div>
                        <div className="text-center mb-10">
                          <h2 className="text-3xl font-playfair">{category.name}</h2>
                          <div className="h-0.5 w-16 bg-umami-gold mx-auto mt-3 mb-2"></div>
                          {category.description && (
                              <p className="text-muted-foreground font-montserrat max-w-xl mx-auto">
                                {category.description}
                              </p>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                          {category.items.map((item, index) => (
                              <div
                                  key={index}
                                  className="border-b border-border pb-6 hover:bg-umami/5 p-4 -mx-4 transition-colors duration-300 rounded-md"
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <h3 className="font-playfair text-xl">{item.name}</h3>
                                  {item.price && (
                                      <span className="font-montserrat text-umami-gold font-medium">{item.price}</span>
                                  )}
                                </div>
                                <p className="text-muted-foreground font-cormorant text-lg">{item.description}</p>
                                {item.dietary && (
                                    <div className="mt-2 flex gap-2">
                                      {item.dietary.map((diet, i) => (
                                          <span key={i} className="text-xs font-montserrat bg-gray-100 px-2 py-1 rounded">
                                  {diet}
                                </span>
                                      ))}
                                    </div>
                                )}
                              </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                ))}
              </Tabs>


              {/* Additional Notes */}
              <div className="bg-umami-light/5 p-8 rounded-md border mt-14 border-umami/10">
                <h3 className="font-playfair text-xl mb-4 flex items-center">
                  <Coffee className="w-5 h-5 mr-2 text-umami-gold" />
                  A Note About Our Menu
                </h3>
                <p className="text-muted-foreground font-montserrat mb-4">
                  Our menu is subject to change based on ingredient availability and seasonality.
                  We source from local farms and purveyors whenever possible, supporting sustainable practices.
                </p>
                <p className="text-muted-foreground font-montserrat">
                  If you have dietary restrictions or allergies, please inform us, and our chef will be happy to accommodate your needs.
                </p>
              </div>

              {/* Private Dining CTA */}
              <div className="mt-16 bg-gradient-to-r from-umami/20 to-umami/5 p-8 rounded-md text-center">
                <h3 className="font-playfair text-2xl mb-3">Private Dining Experience</h3>
                <p className="text-muted-foreground font-montserrat mb-6 max-w-lg mx-auto">
                  Elevate your special occasions with our curated private dining experience.
                  Our chef will create a bespoke menu tailored to your preferences.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-umami text-umami-light hover:bg-umami-dark font-montserrat tracking-wider">
                    Make a Reservation
                  </Button>
                  <Button variant="outline" className="border-umami text-umami hover:bg-umami/10 font-montserrat tracking-wider">
                    Private Dining Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Items Carousel */}
        <section className="py-12 bg-gradient-to-b from-umami/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-playfair">Chef's Recommendations</h2>
              <div className="h-0.5 w-16 bg-umami-gold mx-auto mt-3 mb-6"></div>
            </div>

            <div className="flex overflow-x-auto pb-6 gap-6 hide-scrollbar">
              {recommendations.map((item, index) => (
                  <div key={index} className="min-w-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-md bg-white group">
                    <div className="h-52 overflow-hidden">
                      <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 text-umami-gold mr-1" />
                        <Star className="h-4 w-4 text-umami-gold mr-1" />
                        <Star className="h-4 w-4 text-umami-gold" />
                      </div>
                      <h3 className="font-playfair text-xl mb-2">{item.name}</h3>
                      <p className="text-muted-foreground font-cormorant text-lg">{item.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
        {/* Instagram Feed */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-playfair">Feast Your Eyes</h2>
              <div className="h-0.5 w-16 bg-umami-gold mx-auto mt-3 mb-4"></div>
              <p className="text-muted-foreground font-montserrat max-w-lg mx-auto">
                Follow us on Instagram @umamiamman for more culinary inspiration
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {instagram.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden group relative">
                    <img
                        src={image}
                        alt="Food instagram"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white font-montserrat">View Post</span>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
  );
};

export default Menu;

// Add this to your global CSS

