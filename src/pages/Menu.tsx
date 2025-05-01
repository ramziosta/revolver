
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Soup, Salad, Utensils, HandPlatter, EggFried, CakeSlice, Martini, Star, Coffee} from "lucide-react";
const menuCategories = [
  {
    id: "soups",
    name: "Soups",
    icon: Soup, // Assuming Soup is a defined component
    description: "A selection of our finest soups, crafted with fresh, seasonal ingredients.",
    subCategories: [
      {
        id: "classic",
        name: "Classic Soups",
        items: [
          {
            name: "Chicken and Rice",
            description: "With gremolata and lemon",
            price: ""
          },
          {
            name: "Minstrone Soup",
            description: "",
            price: ""
          },   {
            name: "Beef and Barley Soup",
            description: "",
            price: ""
          },
        ],
      },
      {
        id: "seasonal",
        name: "Seasonal Soups",
        items: [
          {
            name: "Zucchini & Mint Soup",
            description: "Purée of spring zucchini, fresh mint, green garlic, and lemon crème fraîche",
            price: ""
          },
          {
            name: "Spring Mushroom & Barley Broth",
            description: "Wild mushrooms, pearl barley, green peas, and a light vegetable consommé",
            price: ""
          },
          {
            name: "Curried Carrot & Coconut Soup",
            description: "Gingered carrot purée, mild curry, coconut milk, lime leaf, and crispy shallots",
            price: ""
          },
          {
            name: "Spring Pea & Tarragon Soup",
            description: "Sweet peas blended with tarragon and crème fraîche, topped with sugar snap slivers and microgreens",
            price: ""
          },
          {
            name: "Spring Onion & New Potato Soup",
            description: "Creamy blend of new potatoes, charred spring onions, chives, and cultured butter",
            price: ""
          },
          {
            name: "Asparagus & Lemon Soup",
            description: "Fresh asparagus purée with preserved lemon, crème fraîche, and shaved radish",
            price: ""
          },
        ]
      }
    ]
  },
  {
    id: "salads",
    name: "Salads",
    icon: Salad, // Assuming Salad is a defined component
    description: "Fresh and vibrant salads, featuring seasonal produce and house-made dressings.",
    subCategories:
        [
      {
        id: "classic",
        name: "Classic Salads",
        items: [
          {
            name: "Mixed Green Salad",
            description: "Mixed greens, radishes, carrots, tomatoes, fine herbs with champagne vinaigrette",
            price: ""
          },
          {
            name: "Greek Village Salad",
            description: "With Heirloom Tomatoes, Olives, and Feta",
            price: ""
          },
          {
            name: "Chopped Caesar Salad",
            description: "With Fire-roasted corn, cajun cornbread croutons",
            price: ""
          },
        ]
      },
      {
        id: "seasonal",
        name: "Seasonal Salads",
        items: [
          {
            name: "Roasted Beet & Arugula Salad",
            description: "Roasted heirloom beets, wild arugula, whipped goat cheese mousse, candied walnuts, sherry vinaigrette",
            price: ""
          },
          {
            name: "Spring Artichoke & Fennel Salad",
            description: "Marinated baby artichokes, shaved fennel, snap peas, preserved lemon vinaigrette, mint, Grana Padano",
            price: ""
          },
          {
            name: "Asparagus & Quinoa Salad",
            description: "Grilled asparagus, red quinoa, pea tendrils, pickled shallots, toasted almonds, lemon-thyme vinaigrette",
            price: ""
          },
        ]
      }
    ]
  },
  {
    id: "starters",
    name: "Starters",
    icon: Utensils, // Assuming Utensils is a defined component
    description: "A delightful selection of small plates to begin your culinary journey.",
    subCategories: [
      {
        id: "boards",
        name: "Boards & Spreads",
        items: [
          {
            name: "Curated Cheese Board",
            description: "With House Accoutrements",
            price: ""
          },
          {
            name: "Curated Cheese & Charcuterie Board",
            description: "With House Accoutrements",
            price: ""
          },
          {
            name: "Greek Trio",
            description: "Classic Greek dips: Taramasalata (creamy fish roe), Tirokafteri (spicy whipped feta), and Melitzanosalata (smoky eggplant)",
            price: ""
          },
          {
            name: "Spinach & Artichoke Dip",
            description: "With crispy pita chips, roasted red peppers, and fresh mint",
            price: ""
          },
        ]
      },
      {
        id: "seafood",
        name: "Seafood Starters",
        items: [
          {
            name: "Seared Scallops",
            description: "Scallops, carrot purée, crispy scallions, brown butter",
            price: ""
          },
          {
            name: "Shrimp Giuseppe",
            description: "Breaded shrimp with Lemony Zip Sauce",
            price: ""
          },
        ]
      },
      {
        id: "main-starter",
        name: "Main Starters",
        items: [
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
            description: "Hand-rolled potato gnocchi, asparagus tips, sweet peas, tarragon butter, shaved pecorino",
            price: ""
          },
          {
            name: "Goat Cheese Cake",
            description: "With Frisée",
            price: ""
          },
          {
            name: "Vegetable Rice Paper Spring Rolls",
            description: "",
            price: ""
          },
          {
            name: "Greek Trio",
            description: "Taramasalata, Tirokafteri, Melitzanosalata",
            price: ""
          },
        ]
      }
    ]
  },
  {
    id: "mains",
    name: "Main Courses",
    icon: HandPlatter, // Assuming HandPlatter is a defined component
    description: "Refined dishes inspired by global cuisine, using house-made pasta and prime meats.",
    subCategories: [
      {
        id: "noodles",
        name: "Noodles",
        items: [
          {
            name: "Spring Egg Noodles",
            description: "House-made egg noodles, sugar snap peas, spring onions, shiitake mushrooms, ginger-scallion oil, sesame, and yuzu soy glaze",
            price: ""
          },
          {
            name: "Vegetarian Lasagna",
            description: "Layered Eggplant, Zucchini, Spinach, Ricotta, and Roasted Tomato Sauce",
            price: ""
          },
          {
            name: "Classic Spaghetti & Meatballs",
            description: "Hand-Rolled Beef & Veal Meatballs in San Marzano Marinara, Fresh Basil, and Parmesan",
            price: ""
          },
          {
            name: "Fettuccine Primavera",
            description: "Spring Vegetables, Lemon-Basil Butter, and Baby Arugula",
            price: ""
          },
          {
            name: "Wild Mushroom Pappardelle",
            description: "Porcini Cream, Thyme, and Aged Gruyère",
            price: ""
          },
          {
            name: "Zucchini and Ricotta Cannelloni",
            description: "Fresh Basil Pesto Cream and Crispy Garlic",
            price: ""
          },
          {
            name: "Shrimp Scampi Linguine",
            description: "Lemon-Garlic Butter, Parsley, and Chili Flakes",
            price: ""
          },
          {
            name: "Cajun Chicken Alfredo",
            description: "Blackened Chicken Breast, Roasted Peppers, and Creamy Parmesan Sauce",
            price: ""
          },
          {
            name: "Classic Bolognese",
            description: "Slow-Simmered Beef and Veal Ragu with Fresh Tagliatelle",
            price: ""
          },
          {
            name: "Broccoli and Macaroni Gratin",
            description: "Broccoli, Cheddar, Parmesan and Gruyère, with Herbed Breadcrumbs",
            price: ""
          },
          {
            name: "Smoked Salmon Carbonara",
            description: "Linguine with Dill Cream, Lemon, and Capers",
            price: ""
          },
          {
            name: "Ricotta Gnocchi",
            description: "With Roasted Cherry Tomatoes, Basil Oil, and Parmesan Crumble",
            price: ""
          }
        ]
      },
      {
        id: "poultry",
        name: "Poultry",
        items: [
          {
            name: "Roasted Chicken Supreme",
            description: "Confit garlic jus, cauliflower purée, charred fennel, cherry tomato glaze",
            price: ""

          },
          {
            name: "Jerk-Spiced Chicken",
            description: "With Avocado-Mango Relish and Fragrant Island Rice",
            price: ""
          },
          {
            name: "Moroccan-Spiced Chicken Tagine",
            description: "Braised with Medjool Dates, Apricots & Preserved Lemon, served over Toasted Almond Couscous",
            price: ""
          },
          {
            name: "Herb-Roasted Turkey",
            description: "Accompanied by Roasted Heirloom Vegetables and Pan Reduction Jus",
            price: ""
          },
          {
            name: "Mexican Arroz con Pollo",
            description: "Saffron-Tomato Braised Chicken with Fire-Roasted Peppers and Cilantro Rice Pilaf",
            price: ""
          },
          {
            name: "Sesame-Crusted Chicken Medallions",
            description: "With Ginger-Soy Glaze, Stir-Fried Jasmine Rice & Baby Bok Choy",
            price: ""
          },
          {
            name: "Coconut-Curried Chicken",
            description: "With Kaffir Lime, stirr-fried vegetables, and Jasmine Rice",
            price: ""
          },
          {
            name: "Chicken Piccata à la Maison",
            description: "Lemon-Caper Velouté, Sautéed Broccolini, and Olive Oil Potato Confit",
            price: ""
          },
          {
            name: "Sumac-Dusted Chicken Paillard",
            description: "Charred Lemon, Tahini Yogurt, and Pomegranate Couscous",
            price: ""
          },
          {
            name: "Tandoori-Spiced Chicken",
            description: "With Saffron Yogurt Rita Sauce, Roasted Cauliflower, and Pickled Shallots",
            price: ""
          }
        ]
      },
      {
        id: "seafood",
        name: "Seafood",
        items: [
          {
            name: "Market Fish",
            description: "Spring pea purée, roasted mushrooms, preserved lemon",
            price: ""
          },
          {
            name: "Crispy Skin Salmon",
            description: "With French Lentils, Fennel Slaw, and Orange Beurre Blanc",
            price: ""
          },
          {
            name: "Pan Roasted Market Fish",
            description: "With Herb Oil, Caperberry Relish, and Seasonal Vegetables",
            price: ""
          },
          {
            name: "Tuna Tataki",
            description: "Sesame Crust, Wasabi Avocado Purée, and Soy-Ginger Glaze",
            price: ""
          },
        ]
      },
      {
        id: "meat",
        name: "Meat",
        items: [
          {
            name: "NY Strip Steak",
            description: "10 oz Steak, potato puree, roasted seasonal vegetables, peppercorn demi glace",
            price: ""
          },
          {
            name: "Grilled Skirt Steak",
            description: "With Chimichurri Verde, Roasted Corn Relish, and Smoked Sea Salt",
            price: ""
          },
          {
            name: "Steak au Poivre",
            description: "Peppercorn-Crusted Striploin, Cognac Cream Sauce, and Pommes Frites",
            price: ""
          },
          {
            name: "Filet Mignon with Béarnaise",
            description: "Tenderloin with Tarragon Béarnaise, Haricots Verts, and Fondant Potatoes",
            price: ""
          },
          {
            name: "Pistachio-Crusted Lamb Chops",
            description: "With Whole Grain Mustard Glaze, Baby Root Vegetables, and Red Wine Jus",
            price: ""
          },
          {
            name: "Bavette",
            description: "With Braised Leeks, Parsnip Purée, and Jus",
            price: ""
          },
        ]
      },
      {
        id: "vegetarian",
        name: "Vegetarian",
        items: [
          {
            name: "Wild Mushroom Risotto",
            description: "Arborio rice, seasonal mushrooms, aged parmesan, herbs",
            price: ""
          },
          {
            name: "Quattro Formaggi & Broccoli Macaroni",
            description: "Four-Cheese Béchamel, Roasted Broccoli, and Toasted Herbed Breadcrumbs",
            price: ""
          },
          {
            name: "Stuffed Portobello",
            description: "With Herbed Farro, Baby Kale, and Roasted Red Pepper Coulis",
            price: ""
          },
          {
            name: "Five-Spice Tofu Steak",
            description: "With Chili Crisp, Gingered Napa Cabbage, and Scallion Rice",
            price: ""
          },
          {
            name: "Fettuccine Primavera",
            description: "Spring Vegetables with Lemon-Basil Butter and Baby Arugula",
            price: ""
          },
          {
            name: "Eggplant Mille-Feuille",
            description: "With Tofu Ricotta, Charred Leeks, and Caramelized Miso Glaze",
            price: ""
          },
          {
            name: "Wild Mushroom Pappardelle",
            description: "With Porcini Cream, Thyme, and Aged Gruyère",
            price: ""
          },
          {
            name: "Sweet Potato Gnocchi",
            description: "With Brown Butter, Fried Sage, and Toasted Pepitas",
            price: ""
          },
          {
            name: "Cauliflower Steak",
            description: "With Vadouvan Curry, Cashew Cream, and Pickled Shallots",
            price: ""
          },
        ]
      }
    ]
  },
  {
    id: "brunch",
    name: "Brunch",
    icon: EggFried, // Assuming EggFried is a defined component
    description: "A delightful brunch menu featuring both sweet and savory options.",
    subCategories: [
      {
        id: "savory",
        name: "Savory",
        items: [
          {
            name: "Seasonal Strata",
            description: "Savory layered egg bake with seasonal vegetables, cheese, and crispy potato crust",
            price: ""
          },
          {
            name: "French Omelette",
            description: "Classic French omelette with choice of fillings including meats, cheese, and vegetables served with home-fries, and toasted sourdough bread",
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
            name: "Gourmet Breakfast Sandwiche",
            description: "With eggs, cheese, and veggies on brioche bun",
            price: ""
          },
          {
            name: "Breakfast Bowl",
            description: " Scrambled eggs with choice of veggies, meats, and cheeses over cCrispy golden potatoes with herbs and caramelized onions. Optional sauces include hollandaise, salsa, and pesto",
            price: ""
          },
        ]
      },
      {
        id: "sweet",
        name: "Sweet",
        items: [
          {
            name: "Yogurt Parfait Cups",
            description: "Layered Greek yogurt with honey, granola, and fresh seasonal berries",
            price: ""
          },
          {
            name: "Fresh Fruit Cups",
            description: "Seasonal fruit medley, perfectly portioned for individual service",
            price: ""
          },
          {
            name: "Assorted Muffins & Sweet Breads",
            description: "Chef's selection of house-baked muffins and sweet loaves",
            price: ""
          },
          {
            name: "House Jams & Spreads",
            description: "A variety of artisanal jams, compound butters, and preserves",
            price: ""
          },
        ]
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: CakeSlice, // Assuming CakeSlice is a defined component
    description: "Indulge in our decadent selection of house-made desserts.",
    subCategories: [
      {
        id: "cookies",
        name: "Cookies & Brownies",
        items: [
          {
            name: "Best Chocolate Chip Cookie",
            description: "Valrhona chocolate and vanilla butter",
            price: ""
          },
          {
            name: "Brownie with Tahini Swirls",
            description: "With Halava bits",
            price: ""
          },
      {
        name: "Blondie",
        description: "With toasted pecans",
        price: ""
      },
          {
            name: "Oatmeal Raisin",
            description: "With plump Black and Golden Raisins",
            price: ""
          },
        ]
      },
      {
        id: "cakes",
        name:"Cakes",
        items:[
          {
            name: "Carrot Chamomile Layer Cake",
            description: "Spiced carrot cake infused with chamomile, honey cream cheese frosting, and walnut praline",
            price: ""
          },
          {
            name: "Sour Cream Pound Cake",
            description: "With lemon curd and lemon glaze."
          },
          {
            name: "Tiramisu Crepe Cake",
            description: "Coffee, Mascarpone, and Cocoa Crepes"
          },
        ]
      },
      {
        id:"fruit",
        name:"Fruit Desserts",
        items:[
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
        ]
      },
      {
        id:"specials",
        name:"Specials",
        items:[
          {
            name: "Strawberry and Cream Bambolone",
            description: "Fluffy Italian doughnut filled with strawberry compote and vanilla bean pastry cream",
            price: ""
          }
        ]
      }
    ]
  },
  // {
  //   id: "drinks",
  //   name: "Beverages",
  //   icon: Martini, // Assuming Martini is a defined component
  //    description: "A curated selection of beverages to complement your meal.",
  //   subCategories: [
  //     {
  //       id: "cocktails",
  //       name: "Cocktails",
  //       items: [
  //         {
  //           name: "Seasonal Craft Cocktails",
  //           description: "Ask about our rotating selection of handcrafted seasonal cocktails",
  //           price: ""
  //         },
  //       ]
  //     },
  //     {
  //        id: "wine",
  //        name: "Wine",
  //        items:
  //         [
  //           {
  //           name: "Curated Wine Selection",
  //           description: "Carefully selected wines by the bottle to complement our menu",
  //           price: ""
  //         },
  //         ]
  //     },
  //     {
  //       id:"tea",
  //       name:"Tea",
  //       items:
  //         [
  //           {
  //           name: "Artisanal Tea Service",
  //           description: "Premium loose-leaf teas, served with house-made accompaniments",
  //           price: ""
  //         }
  //         ]
  //     }
  //   ]
  // }
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
              <Tabs defaultValue="starters" className="w-full">
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

                        {/* Check if the category has subcategories */}
                        {category.subCategories && category.subCategories.length > 0 ? (
                            <>
                              <p className="text-muted-foreground font-montserrat mb-8 text-center max-w-3xl mx-auto">
                                {category.description}
                              </p>

                              <Tabs defaultValue={category.subCategories[0].id} className="w-full">
                                <TabsList className="w-full mb-8 bg-transparent flex justify-center">
                                  {category.subCategories.map((subCategory) => (
                                      <TabsTrigger
                                          key={subCategory.id}
                                          value={subCategory.id}
                                          className="data-[state=active]:bg-umami data-[state=active]:text-umami-light font-montserrat tracking-wider"
                                      >
                                        {subCategory.name}
                                      </TabsTrigger>
                                  ))}
                                </TabsList>

                                {category.subCategories.map((subCategory) => (
                                    <TabsContent key={subCategory.id} value={subCategory.id} className="space-y-8">
                                      <div>
                                        <h3 className="text-2xl font-playfair mb-6 text-center">{subCategory.name}</h3>
                                        <div className="space-y-8">
                                          {subCategory.items.map((item, index) => (
                                              <div key={index} className="border-b border-border  hover:bg-umami/5 p-4 -mx-4 transition-colors duration-300 pb-6">
                                                <div className="flex justify-between items-start mb-2">
                                                  <h4 className="font-playfair text-xl">{item.name}</h4>
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
                            </>
                        ) : (
                            <div className="space-y-8">
                              {category.subCategories && category.subCategories.map((subCategory, subIndex) => (
                                  <div key={subIndex} className="border-b border-border pb-6">
                                    <h3 className="font-playfair text-xl">{subCategory.name}</h3>
                                    {subCategory.items && subCategory.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="mb-2">
                                          <div className="flex justify-between items-start">
                                            <h4 className="font-montserrat text-lg">{item.name}</h4>
                                            <span className="font-umami-gold">{item.price}</span>
                                          </div>
                                          <p className="text-muted-foreground font-cormorant text-base">{item.description}</p>
                                        </div>
                                    ))}
                                  </div>
                              ))}
                            </div>
                        )}
                      </div>
                    </TabsContent>
                ))}
              </Tabs>

              {/*<div className="mt-12 bg-umami-light/5 p-8 rounded-sm">*/}
              {/*  <h3 className="font-playfair text-xl mb-4">Catering Information</h3>*/}
              {/*  <p className="text-muted-foreground font-montserrat mb-4">*/}
              {/*    All catering orders require 48-hour advance notice. Minimum order quantities may apply.*/}
              {/*  </p>*/}
              {/*  <p className="text-muted-foreground font-montserrat">*/}
              {/*    Please contact us for custom menus, dietary accommodations, or special requests.*/}
              {/*  </p>*/}
              {/*</div>*/}
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
                      {/*<div className="flex items-center mb-2">*/}
                      {/*  <Star className="h-4 w-4 text-umami-gold mr-1" />*/}
                      {/*  <Star className="h-4 w-4 text-umami-gold mr-1" />*/}
                      {/*  <Star className="h-4 w-4 text-umami-gold" />*/}
                      {/*</div>*/}
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

