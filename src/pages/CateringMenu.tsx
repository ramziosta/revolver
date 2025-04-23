import { Layout } from "@/components/layout/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Soup, Salad, Utensils, EggFried, Sandwich, HandPlatter, CakeSlice, Drumstick} from "lucide-react";

const menuCategories = [
  {
    id: "soups",
    name: "Soups",
    icon: Soup,
    items: [
      {
        name: "Butternut Squash Soup",
        description: "Creamy butternut squash soup with sage crème fraîche",
        price: ""
      },
      {
        name: "French Onion Soup",
        description: "With Gruyère toast sticks",
        price: ""
      },
      {
        name: "Lobster Bisque",
        description: "With fresh herbs",
        price: ""
      },
      {
        name:"Roasted Tomato Soup",
        description:"Basil oil, roasted garlic and parmesan croutons"
      },
      {
        name:"Pumpkin Soup",
        description:"Spicy pepitos and creme fresh"
      },
      {
        name:"Chicken and Rice",
        description:"With gremolata and lemon"
      }
    ]
  },
  {
    id: "salads",
    name: "Salads",
    icon: Salad,
    description: "Discover our collection of composed salads. From delicate starter greens to robust entrée creations that satisfy completely. We can help you create your own perfect combination choosing from a variety of greens, vegetables, fruits and cheeses. For entree salads choose your protein from, chicken, beef, seafood and tofu.",
    subCategories: [
      {
        id: "starter-salads",
        name: "Starter Salads",
        items: [
          {
            name: "Mixed Green Salad",
            description: "Mixed greens, radishes, carrots, tomatoes, fine herbs with champagne vinaigrette",
            price: ""
          },
          {
            name: "Heirloom Tomato & Burrata",
            description: "Salad with Basil Pesto",
            price: ""
          },
          {
            name: "Citrus & Fennel Salad",
            description: "With Pomegranate and Toasted Pistachios",
            price: ""
          },
          {
            name: "Roasted Beet & Goat Cheese Salad",
            description: "With Candied Walnuts & Arugula",
            price: ""
          },
          {
            name: "Shaved Brussels Sprouts & Parmesan Salad",
            description: "With Lemon Vinaigrette",
            price: ""
          },
          {
            name: "Pear & Gorgonzola Salad",
            description: "With Frisée and Honey Balsamic Glaze",
            price: ""
          },
          {
            name: "Spring Artichoke & Fennel Salad",
            description: "Marinated baby artichokes, shaved fennel, snap peas, preserved lemon vinaigrette, mint, Grana Padano",
            price: ""
          },
          {
            name: "Greek Village Salad",
            description: "With Heirloom Tomatoes, Olives, and Feta",
            price: ""
          },
          {
            name: "Watermelon & Cucumber Salad",
            description: "With Mint and Feta Crumble",
            price: ""
          },
          {
            name: "Chopped Caesar Salad",
            description: "With Fire-roasted corn, cajun cornbread croutons",
            price: ""
          },
          {
            name: "Asian Crunch Salad",
            description: "With Napa Cabbage slaw, wanton crisps & Black Sesame",
            price: ""
          },
          {
            name: "Shaved Asparagus & Truffle Pecorino Salad",
            description: "With Tarragon Lemon Dressing",
            price: ""
          }
        ]
      },
      {
        id: "entree-salads",
        name: "Entree Salads",
        items: [
          {
            name: "Mediterranean Power Bowl",
            description: "With Quinoa, Roasted Vegetables & Hummus",
            price: ""
          },
          {
            name: "Kale & Grilled Peach Salad",
            description: "With Aged Balsamic & Toasted Almonds",
            price: ""
          },
          {
            name: "Thai Peanut Crunch Salad",
            description: "With Napa Cabbage, wonton crisps & Sweet Chili Dressing",
            price: ""
          },
          {
            name: "Grilled Romaine & Chimichurri Salad",
            description: "With Charred Corn",
            price: ""
          },
          {
            name: "Niçoise Salad",
            description: "With Haricots Verts, Fingerling Potatoes & Soft-Boiled Egg",
            price: ""
          },
          {
            name: "Chipotle-Lime Southwest Salad",
            description: "With Avocado & Black Beans",
            price: ""
          },
          {
            name: "Quinoa & Kale",
            description: "Seasonal roasted vegetables and citrus dressing",
            price: ""
          },
          {
            name: "Couscous and Arugula",
            description: "Spiced roasted cauliflower, tomatoes, garbanzo beans, and tahini dressing",
            price: ""
          },
        ]
      },
      {
        id: "dressings",
        name: "Dressings",
        items: [
          {
            name: "Revolver's House Vinaigrette",
            description: "",
            price: ""
          },
          {
            name: "Peppercorn Ranch",
            description: "",
            price: ""
          },
          {
            name: "Bleu Cheese Buttermilk",
            description: "",
            price: ""
          },
          {
            name: "Caesar",
            description: "",
            price: ""
          },
          {
            name: "Honey Mustard",
            description: "",
            price: ""
          },
          {
            name: "Herb Green Goddess",
            description: "",
            price: ""
          },
          {
            name: "Raspberry Vinaigrette",
            description: "",
            price: ""
          },
          {
            name: "Balsamic Vinaigrette",
            description: "",
            price: ""
          },
          {
            name: "Sherry Vinaigrette",
            description: "",
            price: ""
          },
          {
            name: "Lemon Herb",
            description: "",
            price: ""
          },
          {
            name: "Sweet Chili 🌶️",
            description: "",
            price: ""
          },
          {
            name: "Miso Ginger Soy",
            description: "",
            price: ""
          },
          {
            name: "Chipotle-Lime 🌶️",
            description: "",
            price: ""
          }
        ]
      }
    ]
  },
  {
    id: "starters",
    name: "Starters",
    icon: Utensils,
    description: "",
    subCategories: [
      {
        id: "amuse-bouches",
        name: "Amuse-Bouches",
        items: [
          {
            name: "Ricotta and Feta Cheese Mousse",
            description: "With Hot Honey Drizzle",
            price: ""
          },
          {
            name: "Beet Tartare",
            description: "With Crème Fraîche & Crispy Shallots",
            price: ""
          },
          {
            name: "Steak Carpaccio",
            description: "With Garlic Aioli & Parmigiano Reggiano",
            price: ""
          },
          {
            name: "Miso-Glazed Eggplant Bites",
            description: "With Sesame Crunch",
            price: ""
          },
          {
            name: "Crispy Polenta Cubes",
            description: "With Gorgonzola & Truffle Honey",
            price: ""
          },
          {
            name: "Mini Lobster Rolls",
            description: "With Brown Butter & Lemon Aioli",
            price: ""
          },
          {
            name: "Chilled Melon & Prosecco Gazpacho Shooter",
            description: "",
            price: ""
          }
        ]
      },
      {
        id: "small-bites",
        name: "Small Bites",
        items: [
          {
            name: "Chipotle Shrimp Tostadas",
            description: "With Guacamole",
            price: ""
          },
          {
            name: "Lamb Skewers",
            description: "With Rosemary Lemon",
            price: ""
          },
          {
            name: "Chicken Skewers",
            description: "With Peanut Sauce",
            price: ""
          },
          {
            name: "Vegetable Rice Paper Spring Rolls",
            description: "",
            price: ""
          },
          {
            name: "Eggplant Parmesan Bites",
            description: "",
            price: ""
          },
          {
            name: "Beef and Asparagus",
            description: "",
            price: ""
          },
          {
            name: "Ham and Gruyere Bites",
            description: "",
            price: ""
          }
        ]
      },
      {
        id: "plated-starters",
        name: "Plated Starters",
        items: [
          {
            name: "Curated Cheese & Charcuterie Board",
            description: "With House Accoutrements",
            price: ""
          },
          {
            name: "Greek Trio",
            description: "Taramasalata, Tirokafteri, Melitzanosalata",
            price: ""
          },
          {
            name: "Goat Cheese Cake",
            description: "With Frisée",
            price: ""
          },
          {
            name: "Tuna Tacos",
            description: "With Wasabi Avocado Purée & Crispy Seaweed",
            price: ""
          },
          {
            name: "Burrata and Truffata",
            description: "",
            price: ""
          },
          {
            name: "Charred Octopus",
            description: "With Smoked Paprika Romesco & Fingerling Potatoes",
            price: ""
          },
          {
            name: "Seared Scallops",
            description: "With Cauliflower Purée & Brown Butter Hazelnuts",
            price: ""
          },
          {
            name: "Wild Mushroom Arancini",
            description: "With Truffle Aioli",
            price: ""
          },
          {
            name: "Ricotta Gnocchi",
            description: "With Walnut and Sage Butter",
            price: ""
          },
          {
            name: "Cavatelli",
            description: "With Basil Pesto and Sun-Dried Tomatoes",
            price: ""
          }
        ]
      },
    ]
  },
  {
    id: "mains",
    name: "Mains",
    icon: HandPlatter,
    description: "Refined dishes inspired by global cuisine, using house-made pasta and prime meats.",
    subCategories: [
      {
        id: "chicken",
        name: "Poultry",
        items: [
          {
            name: "Jerk-Spiced Chicken Supreme",
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
            name: "Roasted hen with Dijon Velouté",
            description: "Served atop Potato Purée with Haricots Verts and Baby Carrots",
            price: ""
          },
          {
            name: "Chicken Piccata à la Maison",
            description: "Lemon-Caper Velouté, Sautéed Broccolini, and Olive Oil Potato Confit",
            price: ""
          },
          {
            name: "Poulet Rôti à la Truffe",
            description: "Truffle-Infused Roast Chicken, Celeriac Purée, and Wild Mushrooms",
            price: ""
          },
          {
            name: "Coq au Riesling",
            description: "Braised Chicken in White Wine, Shallots & Pearl Onions, with Parsley Spaetzle",
            price: ""
          },
          {
            name: "Sumac-Dusted Chicken Paillard",
            description: "Charred Lemon, Tahini Yogurt, and Pomegranate Couscous",
            price: ""
          },
          {
            name: "Chicken Ballotine with Foie Gras & Fig",
            description: "Wrapped in Prosciutto, served with Port Wine Jus and Celery Root Mash",
            price: ""
          },
          {
            name: "Tandoori-Spiced Chicken Roulade",
            description: "With Saffron Yogurt Sauce, Roasted Cauliflower, and Pickled Shallots",
            price: ""
          }
        ]
      },
      {
        id: "meats",
        name: "Meats",
        items: [
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
          {
            name: "Dry-Aged Ribeye",
            description: "With Bone Marrow Butter, Pommes Anna, and Grilled Seasonal Veggies",
            price: ""
          },
          {
            name: "Lamb Shank Osso Buco",
            description: "Braised with Sage & Rosemary, served over Saffron Polenta",
            price: ""
          },
          {
            name: "Smoked Beef Short Rib",
            description: "With Bourbon Glaze, Pickled Red Onion, and Potato Purée",
            price: ""
          },
          {
            name: "Grilled Lamb Loin",
            description: "With Olive Tapenade, grilled vegetables and Fingerling Potatoes",
            price: ""
          },
          {
            name: "Steak Tartare Classique",
            description: "Hand-Cut Tenderloin with Quail Egg, Capers, and Shallots, served with Crostini",
            price: ""
          },
          {
            name: "Chateaubriand",
            description: "Center-Cut Tenderloin with Sauce Bordelaise, Crispy Potatoes & Roasted Shallots",
            price: ""
          },
          {
            name: "Rosemary Grilled Lamb Racks",
            description: "With Pomegranate Glaze and Herbed Couscous",
            price: ""
          },
          {
            name: "Beef Wellington",
            description: "Filet Wrapped in Mushroom Duxelles and Puff Pastry, with Truffle Demi-Glace",
            price: ""
          },
          {
            name: "Korean BBQ-Style Short Rib",
            description: "With Sesame Glaze, Gochujang Sweet Potatoes, and Pickled Slaw",
            price: ""
          }
        ]
      },
      {
        id: "vegetarian",
        name: "Vegetarians",
        items: [
          {
            name: "Quattro Formaggi & Broccoli Macaroni",
            description: "Four-Cheese Béchamel, Roasted Broccoli, and Toasted Herbed Breadcrumbs",
            price: ""
          },
          {
            name: "Truffle-Stuffed Portobello",
            description: "With Herbed Farro, Baby Kale, and Roasted Red Pepper Coulis",
            price: ""
          },
          {
            name: "Five-Spice Tofu Steak",
            description: "With Chili Crisp, Gingered Napa Cabbage, and Scallion Rice",
            price: ""
          },
          {
            name: "Seasonal Vegetable Risotto",
            description: "Creamy Carnaroli Risotto with Herb Oil and Shaved Parmigiano",
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
            name: "Stuffed Delicata Squash",
            description: "With Farro, Cranberry, Walnuts, and Sage Brown Butter",
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
          {
            name: "Charred Romanesco",
            description: "With Romesco Sauce, Beluga Lentils, and Garlic Confit",
            price: ""
          },
          {
            name: "Heirloom Tomato Tart",
            description: "With Goat Cheese, Puff Pastry, and Balsamic Reduction",
            price: ""
          },
          {
            name: "Zucchini and Ricotta Cannelloni",
            description: "With Basil Pesto Cream and Crispy Garlic",
            price: ""
          },
          {
            name: "Grilled Polenta Cakes",
            description: "With Wild Greens, Roasted Tomatoes, and Gorgonzola Fondue",
            price: ""
          },
          {
            name: "Chickpea and Eggplant Tagine",
            description: "With Apricots, Preserved Lemon, and Almond Couscous",
            price: ""
          },
          {
            name: "Roasted Beet & Citrus Bowl",
            description: "With Whipped Feta, Toasted Quinoa, and Microgreens",
            price: ""
          }
        ]
      },
      {
        id: "pasta",
        name: "Pasta",
        items: [
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
                name: "Lobster Tagliatelle",
                description: "With Garlic-Chili Butter, Fresh Herbs, and Lemon Zest",
                price: ""
              },
              {
                name: "Short Rib Ravioli",
                description: "Braised Beef, Truffle Cream, and Parmigiano Reggiano",
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
                name: "Squid Ink Spaghetti",
                description: "Seared Scallops, Cherry Tomatoes, and Saffron-Lemon Butter",
                price: ""
              },
              {
                name: "Classic Bolognese",
                description: "Slow-Simmered Beef and Veal Ragu with Fresh Tagliatelle",
                price: ""
              },
              {
                name: "Truffle Macaroni Gratin",
                description: "Black Truffle Cream, Gruyère, and Herbed Breadcrumbs",
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
        id: "seafood",
        name: "Seafood",
        items: [
          {
            name: "Seared Scallops",
            description: "With Cauliflower Purée, Brown Butter Crumbs, and Microgreens",
            price: ""
          },
          {
            name: "Charred Octopus",
            description: "With Smoked eggplant puree, Lemon Emulsion, and Cherry Tomato Confit",
            price: ""
          },
          {
            name: "Crispy Skin Salmon",
            description: "With French Lentils, Fennel Slaw, and Orange Beurre Blanc",
            price: ""
          },
          {
            name: "Pan RoastedMarket Fish",
            description: "With Herb Oil, Caperberry Relish, and Seasonal Vegetables",
            price: ""
          },
          {
            name: "Tuna Tataki",
            description: "Sesame Crust, Wasabi Avocado Purée, and Soy-Ginger Glaze",
            price: ""
          },
          {
            name: "Pan-Roasted Halibut",
            description: "With Artichoke Hearts, Tomato Confit, and Basil Oil",
            price: ""
          },
          {
            name: "Garlic Butter Shrimp",
            description: "With Saffron Corn Purée and Shaved Asparagus Salad",
            price: ""
          },
          {
            name: "Blackened Salmon",
            description: "With Mango-Jalapeño Salsa and Coconut Creamed Greens",
            price: ""
          },
          {
            name: "Seasonal Market Fish",
            description: "With Roasted Red Pepper Coulis, Olive Tapenade, and Charred Broccolini",
            price: ""
          },
          {
            name: "Crispy Tempura Shrimp",
            description: "With Yuzu Aioli, Pickled Cucumber, and Fried-Rice",
            price: ""
          }
        ]
      },
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: CakeSlice,
    description: "An indulgent selection of artfully crafted desserts—ranging from multi-layered signature cakes and bespoke crepe creations to elegant cheesecakes, rustic galettes, and timeless classics reimagined.",
    subCategories: [
      {
        id: "mini-desserts",
        name: "Mini Desserts",
        items: [
          {
            name: "Mini Dessert Platter",
            description: "Assortment of bite-sized desserts",
            price: ""
          }
        ]
      },
      {
        id: "layer-cakes",
        name: "Layer Cakes",
        items: [
          {
            name: "Tiered Celebration Cakes",
            description: "Custom multi-layer cakes in flavors like Red Velvet, Carrot, Banana, Coffee, and Lemon, with fillings including vanilla bean custard, fruit compotes, chocolate, mousse, and more.",
            price: ""
          },
          {
            name: "Tailored Layer Cake",
            description: "Your bespoke layered cake — crafted to your flavor preferences. Inquire for our curated selections.",
            price: ""
          },
          {
            name: "12-Layer Chocolate Cake",
            description: "Decadent chocolate cake with alternating layers of ganache and cocoa cream.",
            price: ""
          },
          {
            name: "Strawberry & Cream Cake",
            description: "Vanilla sponge with strawberry compote, whipped cream, and custard.",
            price: ""
          },
          {
            name: "Banana Toffee Crunch Cake",
            description: "Banana sponge with toffee filling, caramel cream, and praline crunch.",
            price: ""
          },
          {
            name: "Birthday Cake Funfetti",
            description: "Classic vanilla with sprinkles, cream cheese or marshmallow frosting.",
            price: ""
          },
          {
            name: "Coconut Lotus Chocolate Cake",
            description: "Rich chocolate with coconut shavings and Lotus spread frosting.",
            price: ""
          },
          {
            name: "Olive Oil Lemon Basil Cake",
            description: "Fragrant olive oil sponge with lemon curd and basil cream.",
            price: ""
          }
        ]
      },
      {
        id: "crepe-cakes",
        name: "Crêpe Cakes",
        items: [
          {
            name: "Tiramisu Crêpe Cake",
            description: "Espresso-soaked crêpes layered with mascarpone cream.",
            price: ""
          },
          {
            name: "Matcha Crêpe Cake",
            description: "Green tea crêpes with matcha pastry cream.",
            price: ""
          },
          {
            name: "Crème Brûlée Crêpe Cake",
            description: "Layers of custard-filled crêpes topped with caramelized sugar.",
            price: ""
          },
          {
            name: "Milk Tea Crêpe Cake",
            description: "Crêpes layered with milk tea pastry cream, a boba-inspired favorite.",
            price: ""
          },
          {
            name: "Chocolate Mocha Crêpe Cake",
            description: "Chocolate and coffee crêpes stacked with mocha ganache.",
            price: ""
          }
        ]
      },
      {
        id: "cheesecakes",
        name: "Cheesecakes",
        items: [
          {
            name: "Classic Baked Cheesecake",
            description: "Silky baked cheesecake with optional fruit or chocolate toppings.",
            price: ""
          },
          {
            name: "No-Bake Cheesecake",
            description: "Light and creamy mousse-style cheesecake with seasonal fruit compote.",
            price: ""
          },
          {
            name: "Burnt Basque Cheesecake",
            description: "Custardy cheesecake with a caramelized top, served plain or with toppings.",
            price: ""
          }
        ]
      },
      {
        id: "pies-galettes",
        name: "Pies & Galettes",
        items: [
          {
            name: "Rustic Seasonal Galette",
            description: "Free-form tart with options like cinnamon apples, grilled peaches with burrata, or stone fruits.",
            price: ""
          },
          {
            name: "Berry Cobbler",
            description: "Mixed seasonal berries baked with vanilla biscuit topping.",
            price: ""
          },
          {
            name: "Pecan Pie",
            description: "Toasted pecans in a rich brown sugar custard with flaky pie crust.",
            price: ""
          },
          {
            name: "Pumpkin Pie",
            description: "Pumpkin in a rich butternut custard with flaky pie crust.",
            price: ""
          },
          {
            name: "Chocolate Cream Pie",
            description: "Rich chocolate custard in a flaky pie crust with whipped cream and chocolate shavings",
            price: ""
          },
          {
            name: "Key Lime Pie",
            description: "Tart and creamy key lime custard in a graham cracker crust with whipped cream",
            price: ""
          }
        ]
      },
      {
        id: "mousse-puddings",
        name: "Mousse & Puddings",
        items: [
          {
            name: "Bespoke Tiramisu",
            description: "A refined interpretation of the Italian classic — crafted with espresso-soaked ladyfingers, whipped mascarpone, and a dusting of cocoa. Custom flavors available upon request.",
            price: ""
          },
          {
            name: "Chocolate Mousse",
            description: "Light and creamy mousse with chocolate shavings",
            price: ""
          }
        ]
      }
    ]
  },
  {
    id: "brunch",
    name: "Brunch",
    icon:EggFried,
    items: [
      {
        name: "French Omelette",
          description: "Classic French omelette with choice of fillings including meats, cheese, and vegetables served with home-fries, and toasted sourdough bread",
          price: ""
      },

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
        name: "Gourmet Breakfast Sandwiches",
        description: "Assorted sandwiches with eggs, cheese, and proteins on brioche and English muffins",
        price: ""
      },
      {
        name: "Breakfast Bowl",
        description: " Scrambled eggs with choice of veggies, meats, and cheeses over cCrispy golden potatoes with herbs and caramelized onions. Optional sauces include hollandaise, salsa, and pesto",
        price: ""
      },
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
        name: "European-Style Danish Pastries",
        description: "Flaky danishes with fruit, almond, and cream cheese fillings",
        price: ""
      },
      {
        name: "House Jams & Spreads",
        description: "A variety of artisanal jams, compound butters, and preserves",
        price: ""
      },
      {
        name: "Continental Breakfast",
        description: "Assorted fresh pastries, croissants, seasonal fruit, and yogurt parfaits",
        price: ""
      },
      {
        name: "Smoked Salmon Platter",
        description: "Sliced smoked salmon with dill cream, cucumbers, red onions, capers, tomatoes, and mini bagels",
        price: ""
      },
      {
        name: "Avocado Toast Bar",
        description: "Toasted sourdough with smashed avocado, microgreens, chili flakes, and optional poached eggs",
        price: ""
      },
      {
        name: "Mini Croque Monsieur or Croque Madame",
        description: "Savory French ham and cheese with béchamel, served warm (option to add egg for Madame)",
        price: ""
      },
      {
        name: "Brioche French Toast Bake",
        description: "Custard-soaked brioche with cinnamon streusel and maple syrup drizzle",
        price: ""
      },
      {
        name:"Pancakes and French Toasts",
          description: "Fluffy pancakes  and brioche French toast with whipped butter and maple syrup. Choice of vanilla yogurt, multigrain, pancakes with a variety of fillings and toppings",
          price: ""
      },
        {
            name: "Breakfast Burrito",
            description: "Scrambled eggs, beef chorizo, cheddar, and avocado in a flour tortilla with salsa and sour cream",
            price: ""
        },
        {
            name: "Breakfast Tacos",
            description: "Scrambled eggs, beef chorizo, cheddar, and avocado in a flour tortilla with salsa and sour cream",
            price: ""
        },
        {
            name: "Breakfast Sandwich",
            description: "Scrambled eggs, turkey bacon, cheddar, potatoes, and avocado in a flour tortilla with salsa and sour cream",
            price: ""
      }
    ]
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    description:"Served on our house-made breads including sourdough, focaccia, and ciabatta.",
    icon: Sandwich,
    items: [
      {
        name: "Chicken Pesto & Artichoke Sandwich",
        description: "Grilled Chicken Breast with Sun-Dried Tomato Pesto, Creamy Avocado, Provolone, and Marinated Artichokes on Rustic Ciabatta",
        price: ""
      },
      {
        name: "Grilled Vegetable",
        description: "Seasonal grilled vegetables with pesto on focaccia",
        price: ""
      },
      {
        name: "Turkey & Avocado",
        description: "Roasted turkey with avocado and sprouts on multigrain",
        price: ""
      },
      {
        name: "Roast Beef",
        description: "Prime roast beef with horseradish cream on sourdough",
        price: ""
      },
      {
        name: "Truffle Chicken Club",
        description: "Herb-Roasted Chicken, Truffle Aioli, Aged Cheddar, and Baby Arugula on Brioche",
        price: ""
      },
      {
        name: "Balsamic Glazed Portobello Melt",
        description: "With Goat Cheese, Roasted Red Peppers, and Pesto on Ciabatta (Vegetarian)",
        price: ""
      },
      {
        name: "Tuna Niçoise Baguette",
        description: "Oil-Packed Tuna, Soft Egg, Haricot Verts, Olives, and Dijon Vinaigrette",
        price: ""
      },
      {
        name: "Steak Sandwich au Jus",
        description: "Sliced Ribeye, Horseradish Cream, Caramelized Onions, and Arugula on Baguette",
        price: ""
      },
      {
        name: "Crispy Chicken Milanese Sandwich",
        description: "Shaved Parmesan, Lemon Mayo, and Slaw on a Toasted Potato Bun",
        price: ""
      },
      {
        name: "Classic Tuna Melt",
        description: "White Albacore, Gruyère Cheese, and Tomato on Sourdough",
        price: ""
      },
      {
        name: "Roasted Beet Reuben",
        description: "With Sauerkraut, Swiss, and Russian Dressing on Rye (Vegetarian)",
        price: ""
      },
      {
        name: "Korean BBQ Beef Banh Mi",
        description: "Pickled Carrots, Cucumber, Chili Mayo, and Cilantro on Toasted Baguette",
        price: ""
      },
      {
        name: "Mediterranean Chicken Wrap",
        description: "Hummus, Feta, Olives, Cucumber, and Greens in a Spinach Flatbread",
        price: ""
      },
      {
        name: "Pulled Chicken Shawarma Roll",
        description: "Garlic Toum, Pickled Turnip, and Mint on Saj Bread",
        price: ""
      },
      {
        name: "Eggplant Caprese Sandwich",
        description: "Grilled Eggplant, Mozzarella, Heirloom Tomato, and Basil Pesto (Vegetarian)",
        price: ""
      }
    ]
  },
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
                                              <div key={index} className="border-b border-border pb-6">
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
                            /* Standard rendering for categories without subcategories */
                            <div className="space-y-8">
                              {category.items && category.items.map((item, index) => (
                                  <div key={index} className="border-b border-border pb-6">
                                    <div className="flex justify-between items-start mb-2">
                                      <h3 className="font-playfair text-xl">{item.name}</h3>
                                      <span className="font-montserrat text-umami-gold">{item.price}</span>
                                    </div>
                                    <p className="text-muted-foreground font-cormorant text-lg">{item.description}</p>
                                  </div>
                              ))}
                            </div>
                        )}
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