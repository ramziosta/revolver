import { Layout } from "@/components/layout/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";


const CateringMenu = () => {


    const [bakedGoodsMenuCategories, setBakedGoodsMenuCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/bakedgoods')
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched menu data:", data); // 👈 Log it
                setBakedGoodsMenuCategories(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error loading menu:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center py-20">Loading menu...</div>;
    }

    return (
        <Layout>
            {/* Hero Section with Parallax Effect */}
            <section className="relative h-[70vh] overflow-hidden">
                {/* Background Image with Parallax */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
                        backgroundAttachment: "fixed"
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
          <span className="bg-umami-gold text-umami-DEFAULT font-montserrat uppercase tracking-widest text-sm py-2 px-4 rounded-full mb-6">
            Heavenly Baked Goods
          </span>
                    <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-white">
                        A Taste of Something Truly Special
                    </h1>
                    <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
                    <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
                        Our baked goods are crafted with care, using premium ingredients and time-honored techniques. Whether you crave something classic or boldly inventive, each bite is a celebration of flavor, texture, and tradition.
                    </p>

                </div>
            </section>


            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Tabs defaultValue="breads" className="w-full">
                            <TabsList className="w-full mb-20 bg-transparent flex flex-wrap  gap-2">
                                {bakedGoodsMenuCategories.map((category) => (
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

                            {bakedGoodsMenuCategories.map((category) => (
                                <TabsContent key={category.id} value={category.id} className="space-y-8">
                                    <div>
                                        <h2 className="text-3xl font-playfair mb-8 text-center">{category.name}</h2>
                                        <p className="max-w-2xl mx-auto text-umami-default/80 font-montserrat text-center mb-6 pb-6">
                                            {category.description}
                                        </p>
                                        <div className="space-y-8">
                                            {(category && category.items || []).map((item, index) => (
                                                <div key={index} className="border-b border-border  hover:bg-umami/5 p-4 -mx-4 transition-colors duration-300  pb-6">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="font-playfair text-xl">{item.name}</h3>
                                                        <span className="font-montserrat text-umami-gold">{item.price}</span>
                                                    </div>
                                                    <p className="text-umami-default font-cormorant text-xl">{item.description}</p>
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
                        <div className="text-center">
                            <Button asChild className="border-umami-light text-umami-light hover:bg-umami-gold hover:text-umami transition-colors duration-300 font-montserrat tracking-wider mt-8">
                                <Link to="/contact">Place Your Order</Link>
                            </Button>
                        </div>
                        <div className="mt-12 bg-umami-light/5 p-8 rounded-sm">
                            <h3 className="font-playfair text-xl mb-4">Catering Information</h3>
                            {/*<p className="text-muted-foreground font-montserrat mb-4">*/}
                            {/*    All catering orders require 48-hour and 50% deposit. Delivery available for orders over $100.00.*/}
                            {/*    Delivery fees may apply. All prices are subject to change. All orders are subject to availability.*/}
                            {/*    All prices are subject to 6.875% sales tax. All prices are subject to 20% service charge.*/}
                            {/*    All prices are subject to 3% credit card processing fee. All prices are subject to 3% credit card processing fee.*/}
                            {/*    Cancellations require 24-hour advance notice. Minimum order quantities may apply.*/}
                            {/*</p>*/}
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
