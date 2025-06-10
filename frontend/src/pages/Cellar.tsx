import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/layout";
import { Link } from "react-router-dom";
import cellar from "../assets/cellar.jpg";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebaseConfig.tsx";

const UmamiCellar = () => {
    const [cellarData, setCellarData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "cellar"));
                const cellarMenuData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                // Debug: Log the fetched data
                console.log("Fetched cellar data:", cellarMenuData);
                console.log("Number of documents:", cellarMenuData.length);

                // Log each document's structure
                cellarMenuData.forEach((doc, index) => {

                });

                setCellarData(cellarMenuData);
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
                            <h2 className="text-2xl font-playfair text-umami">Preparing the Cellar</h2>
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

    // Get the first category's ID as default, or fallback to empty string
    const defaultTabValue = cellarData.length > 0 ? cellarData[1].id : "";

    return (
        <Layout>
            <section className="relative h-[70vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${cellar})` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
          <span className="bg-umami-gold text-umami-DEFAULT font-montserrat uppercase tracking-widest text-sm py-2 px-4 rounded-full mb-6">
            The Umami Cellar
          </span>
                    <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-white">Preserve the Flavor</h1>
                    <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
                    <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
                        A refined collection of cheeses, preserves, and pickled creations from our kitchen to yours.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {cellarData.length > 0 ? (
                            <Tabs defaultValue={defaultTabValue} className="w-full">
                                <TabsList className="w-full mb-20 bg-transparent flex flex-wrap gap-2">
                                    {cellarData.map(category => (
                                        <TabsTrigger
                                            key={category.id}
                                            value={category.id}
                                            className="data-[state=active]:bg-umami data-[state=active]:text-umami-light font-montserrat tracking-wider"
                                        >
                                            {category.name}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                {cellarData.map(category => (
                                    <TabsContent key={category.id} value={category.id} className="space-y-8">
                                        <div>
                                            <h2 className="text-3xl font-playfair mb-8 text-center">{category.name}</h2>
                                            <p className="max-w-2xl mx-auto text-umami-default/80 font-montserrat text-center mb-6 pb-6">
                                                {category.description}
                                            </p>

                                            <div className="space-y-8">
                                                {(category.items || []).map(item => (
                                                    <div key={item.id} className="border-b border-border hover:bg-umami/5 p-4 -mx-4 transition-colors duration-300 pb-6">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <h3 className="font-playfair text-xl">{item.name}</h3>
                                                            <span className="font-montserrat text-umami-gold">{item.price}</span>
                                                        </div>
                                                        {item.weight && (
                                                            <div className="flex justify-between items-start mb-2">
                                                                <p className="font-playfair text-l">{item.weight}</p>
                                                            </div>
                                                        )}
                                                        <p className="text-umami-default font-cormorant text-xl">{item.description}</p>
                                                        {item.specs && Array.isArray(item.specs) && (
                                                            <ul className="list-disc pl-5 mt-2 text-muted-foreground font-cormorant text-lg space-y-1">
                                                                {item.specs.map((line, idx) => (
                                                                    <li key={`${item.id}-spec-${idx}`}>{line}</li>
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
                        ) : (
                            <div className="text-center py-20">No cellar items found.</div>
                        )}

                        <div className="mt-12 bg-umami-light p-8 rounded-sm">
                            <h3 className="font-playfair text-xl mb-4">Custom Orders & Gift Sets</h3>
                            <p className="text-muted-foreground font-montserrat mb-4">
                                Interested in a cheese board, brunch jar trio, or a personalized gift set? We offer mix & match bundles, custom flavors, and elegant packaging for special occasions.
                            </p>
                            <p className="text-muted-foreground font-montserrat">
                                Contact us to curate your own Umami Cellar experience.
                            </p>
                        </div>
                        <div className="text-center">
                            <Button asChild className="border-umami-light text-umami-light hover:bg-umami-gold hover:text-umami transition-colors duration-300 font-montserrat tracking-wider mt-12">
                                <Link to="/contact?type=cellar">Start a Custom Order</Link>
                            </Button>
                            <p className="text-sm text-muted-foreground mt-2 font-montserrat italic">
                                *Allergen note: Not all ingredients are listed. Please notify us of any food restrictions or sensitivities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default UmamiCellar;