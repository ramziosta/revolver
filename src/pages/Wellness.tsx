import {Layout} from "@/components/layout/layout";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {HandPlatter, Flame, Briefcase } from "lucide-react";

const wellnessMenu = [
    {
        id: "balanced",
        name: "Balanced Wellness Meals",
        icon: HandPlatter,
        description:
            "Designed for those seeking optimal nutrition without compromise, our balanced meals unite lean proteins, complex carbohydrates, and seasonal vegetables—crafted to support vitality and everyday wellness.",
        subCategories: [
            {
                id: "balanced-proteins",
                name: "Proteins",
                items: [
                    {
                        name: "Herb-Grilled Chicken Breast",
                        description: "Free-range chicken, marinated with lemon and thyme, fire-grilled to perfection.",
                    },
                    {
                        name: "Miso-Roasted Salmon",
                        description: "Rich in Omega-3, finished with a light sesame-miso glaze.",
                    },
                    {
                        name: "Crisped Tofu with Tamari Glaze",
                        description: "Pan-seared organic tofu with ginger soy reduction.",
                    },
                    {
                        name: "Seared Grass-Fed Sirloin",
                        description: "Tender cuts with rosemary sea salt rub.",
                    },
                    {
                        name: "Spiced Lentil Croquettes",
                        description: "Golden-baked patties with coriander and cumin.",
                    },
                ],
            },
            {
                id: "balanced-carbs",
                name: "Complex Carbohydrates",
                items: [
                    {
                        name: "Ancient Grain Quinoa",
                        description: "Tricolor quinoa with lemon zest and herbs.",
                    },
                    {
                        name: "Rosemary Sweet Potato Mash",
                        description: "Velvety, herb-infused roasted sweet potatoes.",
                    },
                    {
                        name: "Wild Rice Pilaf",
                        description: "Toasted almond, shallot, and seasonal herbs.",
                    },
                    {
                        name: "Whole Wheat Pearled Couscous",
                        description: "Pearled couscous tossed with grilled vegetables.",
                    },
                ],
            },
            {
                id: "balanced-veggies",
                name: "Seasonal Vegetables",
                items: [
                    {
                        name: "Charred Broccolini",
                        description: "Olive oil, lemon, and sea salt.",
                    },
                    {
                        name: "Heirloom Carrot Mélange",
                        description: "Roasted with maple glaze and thyme.",
                    },
                    {
                        name: "Zucchini Ribbons",
                        description: "Shaved, lightly seared, and dressed with mint oil.",
                    },
                    {
                        name: "Spring Greens with Citrus Vinaigrette",
                        description: "Arugula, frisée, and baby spinach with citrus dressing.",
                    },
                ],
            },
        ],
    },
    {
        id: "keto",
        name: "Ketogenic Fuel Meals",
        icon: Flame,
        description:
            "Crafted for those following a low-carb, high-fat lifestyle, our keto meals prioritize protein-forward plates and nutrient-rich vegetables—enhanced by healthy fats to keep you satisfied and energized.",
        subCategories: [
            {
                id: "keto-proteins",
                name: "Keto Proteins",
                items: [
                    {
                        name: "Crispy Skin Chicken Thighs",
                        description: "Slow-roasted, skin-on with smoked paprika rub.",
                    },
                    {
                        name: "Seared Wild Salmon",
                        description: "High-fat, cold-water salmon, herb crusted.",
                    },
                    {
                        name: "Garlic Beef Medallions",
                        description: "Grilled with rosemary and cracked pepper.",
                    },
                    {
                        name: "Ginger-Lime Tempeh",
                        description: "Sautéed with coconut aminos and toasted sesame.",
                    },
                ],
            },
            {
                id: "keto-veggies",
                name: "Low-Carb Vegetables",
                items: [
                    {
                        name: "Cauliflower Pilaf",
                        description: "Grated and toasted with pine nuts and cumin.",
                    },
                    {
                        name: "Grilled Asparagus Spears",
                        description: "Olive oil drizzle and lemon zest finish.",
                    },
                    {
                        name: "Wilted Spinach",
                        description: "Garlic-sautéed and lightly seasoned.",
                    },
                    {
                        name: "Zucchini Tagliatelle",
                        description: "Thin-cut and tossed with herbs and parmesan.",
                    },
                ],
            },
            {
                id: "keto-fats",
                name: "Wholesome Fat Enhancements",
                items: [
                    {
                        name: "Avocado Rosettes",
                        description: "Sliced and served with smoked sea salt.",
                    },
                    {
                        name: "Toasted Tahini Dressing",
                        description: "Creamy, nutty, and slightly tangy.",
                    },
                    {
                        name: "Cold-Pressed Olive Oil Blend",
                        description: "Finished with cracked pepper and lemon essence.",
                    },
                ],
            },
        ],
    },
    {
        id: "corporate-wellness",
        name: "Corporate Wellness",
        icon: Briefcase, // import { Briefcase } from "lucide-react"
        description:
            "Wholesome, energizing meals for teams and group settings — designed to support productivity and wellness without compromising on flavor or satisfaction.",
        subCategories: [
            {
                id: "team-salads",
                name: "Team-Style Salads",
                items: [
                    { name: "Superfood Quinoa Salad", description: "With kale, roasted sweet potato, cranberries, pumpkin seeds, and lemon vinaigrette." },
                    { name: "Mediterranean Chickpea Salad", description: "Chickpeas, cucumbers, tomatoes, olives, parsley, and tahini dressing." },
                    { name: "Grilled Chicken Caesar", description: "With romaine, shaved parmesan, whole grain croutons, and yogurt Caesar dressing." }
                ]
            },
            {
                id: "protein-trays",
                name: "Protein Trays",
                items: [
                    { name: "Lemon Herb Chicken Breast", description: "Served sliced for easy plating or wraps." },
                    { name: "Za’atar Spiced Salmon", description: "Baked with olive oil, lemon, and fresh herbs." },
                    { name: "Roasted Veggie Lentil Patties", description: "Vegan-friendly and packed with flavor." }
                ]
            },
            {
                id: "smart-sides",
                name: "Smart Sides",
                items: [
                    { name: "Grain Bowl Base", description: "Choose from quinoa, brown rice, or farro." },
                    { name: "Steamed Market Vegetables", description: "Lightly seasoned with sea salt and herbs." },
                    { name: "Dips & Crudité", description: "Colorful seasonal vegetables with our house hummus, baba ganoush and cucumber-mint yogurt." }
                ]
            },
            {
                id: "light-sweets",
                name: "Light Sweets & Energy Bites",
                items: [
                    { name: "Date & Nut Energy Bites", description: "With oats, almond butter, flaxseed, and coconut." },
                    { name: "Mini Fruit Skewers", description: "Seasonal fruits served bite-size for easy sharing." },
                    { name: "Coconut Yogurt Parfaits", description: "Layered with chia seeds and fruit compote." }
                ]
            }
        ]
    }
];

const WellnessMenu = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://plus.unsplash.com/premium_photo-1664648005742-0c360f4910b2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        backgroundAttachment: "fixed",
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10 text-white">
                    <span className="bg-umami-gold text-umami-DEFAULT font-montserrat uppercase tracking-widest text-sm py-2 px-4 rounded-full mb-6">
                         Flavorful Wellness
                    </span>
                    <h1 className="text-5xl md:text-7xl font-playfair mb-6">Wellness Meal Plans</h1>
                    <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
                    <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
                        Eating well should never mean sacrificing flavor. Our wellness meals are thoughtfully crafted with seasonal, nutrient-rich ingredients and vibrant, satisfying flavors—designed to fuel your lifestyle and delight your palate.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Tabs defaultValue="balanced" className="w-full">
                            <TabsList className="w-full mb-10 bg-transparent flex justify-center flex-wrap gap-2">
                                {wellnessMenu.map((category) => (
                                    <TabsTrigger
                                        key={category.id}
                                        value={category.id}
                                        className="data-[state=active]:bg-umami data-[state=active]:text-umami-light font-montserrat tracking-wider"
                                    >
                                        <category.icon className="w-4 h-4 mr-2"/>
                                        {category.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {wellnessMenu.map((category) => (
                                <TabsContent key={category.id} value={category.id} className="space-y-10">
                                    {category.subCategories.map((sub) => (
                                        <div key={sub.id}>
                                            <h2 className="text-2xl font-playfair text-center mb-4">{sub.name}</h2>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {sub.items.map((item, i) => (
                                                    <div key={i} className="border-b border-border pb-4">
                                                        <h3 className="font-playfair text-xl mb-1">{item.name}</h3>
                                                        <p className="font-cormorant text-lg text-muted-foreground">{item.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default WellnessMenu;
