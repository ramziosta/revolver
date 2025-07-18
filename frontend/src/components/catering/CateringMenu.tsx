import {Layout} from "@/components/layout/layout.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import React, {useEffect, useState} from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig.tsx';

const CateringMenu = () => {
    const [CateringMenuCategories, setCateringMenuCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "menu")); // 'menu' is your Firestore collection name
                const menuData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setCateringMenuCategories(menuData);
            } catch (error) {
                console.error("Error fetching menu from Firestore:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    if (loading) {
        return (
            <Layout>
                <div className="min-h-screen flex flex-col items-center justify-center bg-background">
                    <div className="text-center">
                        {/* Animated loading spinner */}
                        <div className="relative mb-8">
                            <div className="w-16 h-16 border-4 border-umami-light border-t-umami-gold rounded-full animate-spin mx-auto"></div>
                            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-umami/30 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                        </div>

                        {/* Loading text */}
                        <div className="space-y-2">
                            <h2 className="text-2xl font-playfair text-umami">Preparing the Catering Menu</h2>
                            <p className="text-umami-default/70 font-montserrat animate-pulse">
                                Curating our finest selections...
                            </p>
                        </div>

                        {/* Decorative elements */}
                        <div className="flex items-center justify-center space-x-2 mt-6">
                            <div className="w-2 h-2 bg-umami-gold rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-umami-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-umami-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>

            {/* Hero Section with Parallax Effect */}
            <section className="relative h-[70vh] overflow-hidden">
                {/* Background Image with Parallax */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1723867267202-169dfe3b197a?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
                    <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-white">
                        Thoughtfully Curated Catering
                    </h1>
                    <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
                    <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
                        From intimate gatherings to grand celebrations, our catering menu offers a refined selection designed to impress—crafted with care, flavor, and artistry for every occasion.
                    </p>

                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Tabs defaultValue="mains" className="w-full">
                            <TabsList className="w-full mb-8 bg-transparent flex flex-wrap gap-2">
                                {CateringMenuCategories.map((category) => (
                                    <TabsTrigger
                                        key={category.id}
                                        value={category.id}
                                        className="data-[state=active]:bg-umami data-[state=active]:text-umami-light font-montserrat tracking-wider"
                                    >
                                        {category.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            {CateringMenuCategories.map((category) => (
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
                                                                    {subCategory.items.map((item) => (
                                                                        <div key={item.name} className="border-b border-border  hover:bg-umami/5 p-4 -mx-4 transition-colors duration-300 pb-6">
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
                                                {category.subCategories && category.subCategories.map((subCategory) => (
                                                    <div key={subCategory.id} className="border-b border-border pb-6">
                                                        <h3 className="font-playfair text-xl">{subCategory.name}</h3>
                                                        {subCategory.items && subCategory.items.map((item) => (
                                                            <div key={item.name} className="mb-2">
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
                        <div className="mt-12 bg-umami-light border border-umami-light text-muted-foreground p-6 rounded-md text-sm font-montserrat leading-relaxed max-w-3xl mx-auto">
                            <p className="font-semibold text-umami mb-2">⚠️ Allergies & Dietary Restrictions</p>
                            <p>
                                We take food sensitivities seriously. Please inform us of any allergies or dietary preferences when placing your order. Not all ingredients are listed—feel free to reach out if you have questions or concerns.
                            </p>
                        </div>
                        <div className="mt-12 bg-umami-light p-8 rounded-sm">
                            <h3 className="font-playfair text-xl mb-4">Catering Information</h3>
                            <p className="text-muted-foreground font-montserrat mb-4">
                                We offer curated catering experiences designed around limited, seasonal selections. Menus are built by course, with seated dinners featuring 4-course service: a starter, salad, entrée, and dessert.
                                Optional pre-dinner cocktail hours include passed hors d’oeuvres or grazing displays. We also provide flexible setups such as self-serve or hosted stations, baskets, and presentation trays.

                            </p>
                            <p className="text-muted-foreground font-montserrat">
                                All catering orders require advance notice. Minimum order quantities apply. Please contact us to discuss availability, event format, and customized options. Please contact us for custom menus, dietary accommodations, or special requests.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};


export default CateringMenu;