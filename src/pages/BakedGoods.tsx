
import { Layout } from "@/components/layout/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Croissant, PieChart,CakeSlice, UtensilsCrossed, Coffee, Sandwich, Cookie, GlassWater, IceCream} from "lucide-react";

const menuCategories = [
    {
        id: "breads",
        name: "Breads",
        description: "Small batch Sourdough, French and Italian breads. Artisanal loaves and custom orders as well as dinner roll.",
        icon: Croissant,
        items: [
            {
                name: "White Sourdough",
                description: "Classic White Sourdough",
                price: "JOD 6"
            },
            {
                name: "Whole Wheat Sourdough",
                description: "100% Whole Wheat flour",
                price: "JOD 6"
            },
            {
                name: "Artisanal Loaf Sourdough",
                description: "Specialty blend of grains flours",
                price: "JOD 6"
            },
            {
                name: "100%  Rye Sourdough",
                description: "Russian Rye Flour and Caraway Seeds",
                price: "JOD 6"
            },
            {
                name: "MultiSeed Whole Grain Sourdough",
                description: "With a blend of Pumpkin, Sesame, Sunflower, poppy and Black Seeds",
                price: "JOD 7"
            },
            {
                name: "Brioche Loaf",
                description: "Classic, Variations include: Chocolate chip, Raisin & walnut, Apple Cinnamon",
                price: "JOD 7  JOD 8"
            },
            {
                name: "Cinnamon Swirl Bread",
                description: "Buttery with a swirl of Cinnamon Sugar",
                price: "JOD 7"
            },
            {
                name: "Ciabatta",
                description: "Classic Italian Bread with a chewy crust and open crumbs",
                price: "JOD 4"
            },
            {
                name: "Focaccia",
                description: "Classic Herb, Tomato Feta and Basil, Black and Green Olive, Sausage and Cheddar, and Caramelized Onions, Mushroom and Goat Cheese",
                price: "JOD 7"
            }
        ]
    },
    {
        id: "cookies-bars",
        name: "Cookies, Bars & Brownies",
        description: "Classics and standards, as well as custom orders. New flavors added monthly and seasonally. Check with us often!",
        icon: Cookie,
        items: [
            {
                name: "Chocolate Chip Cookies",
                description: "",
                price: "JOD 3"
            },
            {
                name: "Dark Chocolate Peanut Butter Chip",
                description: "",
                price: "JOD 3"
            },
            {
                name: "Oatmeal Raisin",
                description: "With plump Black and Golden Raisins",
                price: "JOD 3"
            },
            {
                name: "Lemon Drop",
                description: "Zesty with White Chocolate Chips",
                price: "JOD 3"
            },
            {
                name: "Samoa Cookie",
                description: "Caramel Coconut Chocolate Chip",
                price: "JOD 3"
            },
            {
                name: "Stamp Sugar Cookies",
                description: "Almond and Honey",
                price: "JOD 3"
            },
            {
                name: "Ginger Cookies",
                description: "Ginger, Spice and everything nice",
                price: "JOD 3"
            },
            {
                name: "Red Velvet Macadamia",
                description: "Chewy and crunchy with a hint of cocoa",
                price: "JOD 3"
            },
            {
                name: "Lemon Cheesecake Bars",
                description: "Citrusy and creamy",
                price: "JOD 3"
            },
            {
                name: "Strawberry Crumble",
                description: "Soft chewy center with a crunch Streusel topping",
                price: "JOD 4"
            },
            {
                name: "Millionaire Shortbread",
                description: "Classic buttery Shortbread with Caramel Center and Chocolate Frosting",
                price: "JOD 4"
            },
            {
                name: "GF Chocolate Chip",
                description: "Gluten-free version of the classic favorite",
                price: "JOD 4"
            },
            {
                name: "Brownie with Tahini Swirls",
                description: "With Halava bits",
                price: "JOD 4"
            },
            {
                name: "Classic Brownie",
                description: "With All Valrohna Chocolate chip and cocoa",
                price: "JOD 4"
            },
            {
                name: "Blondies",
                description: "With toasted pecans",
                price: "JOd 4"
            },
            {
                name: "Matcha Brownie",
                description: "With White Chocolate Chips",
                price: "JOD 4"
            },
            {
                name: "Red Velvet and Cream Cheese Brownies",
                description: "Light chocolate with a slight of tang",
                price: "JOD 4"
            }
        ]
    },
    {
        id: "cakes-cupcakes",
        name: "Cakes, Cheesecakes & Cupcakes",
        description: "All our cake flavors can be made into cupcakes.Classics and standards, as well as custom orders. New flavors added monthly and seasonally. Check with us often!",
        icon: CakeSlice,
        items: [
            {
                name: "Tiered Cakes",
                description:
                    "Cake Du Jour (Check with us), 12 Layer Chocolate Cake, Strawberry, Banana Toffee, Birthday Cake Funfetti, Coconut, Lotus Chocolate, Olive Oil Lemon Basil. " ,

                specs:[
                    "Each cake features three or more generous layers, filled and topped with a variety of premium ingredients.",
                    "Signature flavors include Red Velvet, Carrot, Banana, Coffee, and Lemon.",
                    "Fillings range from timeless to indulgent: Vanilla Bean Custard, Strawberry, Raspberry, Blueberry compote, Caramel, Chocolate, Banana Mousse, Lemon Curd, Coffee Cream, Oreo, Lotus, and seasonal favorites like Passion fruit, Mango, Peach, and more.",
                    "Our house-made frostings includes but not limited to French buttercream in Vanilla, Chocolate, White Chocolate, Salted Caramel, Mocha, and Lotus.",
                    "Additional frosting options include Cream Cheese, Marshmallow, Whipped Cream, Ganache."
                ],
            },
            {
                name: "Coffee Cakes",
                description: "Sour Cream Pound Cake, Vanilla Chocolate Marble Cake, Lemon Pound Cake with Lemon Curd, Spiced Coffee with Streusel Toppings."
            },
            {
                name: "Crepe Cakes",
                description: "Tiramisu, Matcha, Crème Brûlée, Milk Tea, Chocolate Mocha"
            },
            {
                name: "Cupcakes & Muffins",
                description: "Custard Castella, Chocolate Espresso Cream, Rosemary Orange, Lemon Blueberry, Multigrain Health, Apple Granola, Ginger Orange Crunch"
            },
            {
                name: "Cheesecake",
                description: "Baked, No-Bake Cheesecake, and  Burnt Basque Cheesecake  served with a variety of toppings as Strawberry Compote, Blueberry Compote, Raspberry Compote, Salted Caramel, Chocolate Sauce, Seasonal Fruit Compote, Dulce De Leche"
            },
        ]
    },
    {
        id: "brunch-bakes",
        name: "Brunch Bakes",
        icon: Coffee, // Temporary icon – maybe something like `Croissant` or `BreadSlice`?
        items: [
            {
                name: "Quiche",
                description: "Lorraine: Bacon and Swiss, Mediterranean:Tomato Basil and Feta, French: Mushroom and Goat Cheese",
                price: "$4"
            },
            {
                name: "Egg Bake Casserole",
                description: "Potato Strata topped with eggs, and fillings including: Mushrooms, Sausage, veggies, and Cheeses. Sauces include: Black Peppercorn Gravy, Ranchero, Hollandaise and more.",
                price: "$4"
            },
            {
                name: "Home Fries",
                description: "Crispy oven baked Potatoes with roasted garlic and herbs. Add cheese, baccon and veggies : Onions, Mushrooms and peppers.",
                price: "$4"
            },
            {
                name: "Savory Egg Crêpe",
                description: "Filled with eggs, and cheese, extra fillings include: Sausage, mushrooms, chicken, and veggies",
                price: "$6"
            },
            {
                name: "Savory Herb Scone",
                description: "Parmesan and chive scone served warm",
                price: "$4"
            },
            {
                name: "Buttermilk Biscuits",
                description: "Classic, Cheese, Roasted Garlic and Herb, Bacon and Cheddar.",
                price: "$4"
            }
        ]
    },
    {
        id: "pies-galettes",
        name: "Pies, Cobblers & Galettes",
        icon: PieChart, // Example icon—replace as needed
        items: [
            {
                name: "Rustic Galette",
                description: "Flaky free-form tart with cinnamon apples, Grilled Peaches and Burrata, Seasonal fruit, Plums and more.",
                price: "$6"
            },
            {
                name: "Berry Cobbler",
                description: "Seasonal berries with vanilla biscuit topping",
                price: "$7"
            },
            {
                name: "Pecan Pie",
                description: "Toasted pecans with brown sugar custard",
                price: "$6"
            }
        ]
    },
];

const CateringMenu = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative py-28 bg-umami text-umami-light">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-playfair mb-4">Heavenly Backed Goods</h1>
                    <p className="max-w-2xl mx-auto text-umami-light/80 font-montserrat">
                        Crafted with premium ingredients, our baked goods offer exceptional flavor for every occasion.
                        From classic favorites to innovative creations, our menu is a celebration of the art of baking.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Tabs defaultValue="breads" className="w-full">
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
                                        <p className="max-w-2xl mx-auto text-umami-default/80 font-montserrat text-center mb-6 pb-6">
                                            {category.description}
                                        </p>
                                        <div className="space-y-8">
                                            {category.items.map((item, index) => (
                                                <div key={index} className="border-b border-border pb-6">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="font-playfair text-xl">{item.name}</h3>
                                                        <span className="font-montserrat text-umami-gold">{item.price}</span>
                                                    </div>
                                                    <p className="text-muted-foreground font-cormorant text-lg">{item.description}</p>
                                                    {item.specs && Array.isArray(item.specs) && (
                                                        <ul className="list-disc pl-5 mt-2 text-muted-foreground font-cormorant text-lg space-y-1">
                                                            {item.specs.map((line, idx) => (
                                                                <li key={idx}>{line}</li>
                                                            ))}
                                                        </ul>
                                                    )}
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
                                All catering orders require 48-hour and 50% deposit. Delivery available for orders over $100.00.
                                Delivery fees may apply. All prices are subject to change. All orders are subject to availability.
                                All prices are subject to 6.875% sales tax. All prices are subject to 20% service charge.
                                All prices are subject to 3% credit card processing fee. All prices are subject to 3% credit card processing fee.
                                Cancellations require 24-hour advance notice. Minimum order quantities may apply.
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
