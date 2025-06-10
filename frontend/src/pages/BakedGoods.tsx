import {Layout} from "@/components/layout/layout";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig.tsx';
// Helper function to get consistent ID
const getItemId = (item, fallback) => item._id || item.id || fallback;

// Hero Section Component
const HeroSection = () => (
    <section className="relative h-[70vh] overflow-hidden">
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
                backgroundAttachment: "fixed"
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
            <span className="bg-umami-gold text-umami-DEFAULT font-montserrat uppercase tracking-widest text-sm py-2 px-4 rounded-full mb-6">
                Heavenly Baked Goods
            </span>
            <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-white">
                A Taste of Something Truly Special
            </h1>
            <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
            <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
                Our baked goods are crafted with care, using premium ingredients and time-honored techniques.
                Whether you crave something classic or boldly inventive, each bite is a celebration of flavor,
                texture, and tradition.
            </p>
        </div>
    </section>
);

// Menu Item Component
const MenuItem = ({ item }) => {
    const itemId = getItemId(item, Math.random());

    return (
        <div className="border-b border-border hover:bg-umami/5 p-4 -mx-4 transition-colors duration-300 pb-6">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-playfair text-xl">{item.name}</h3>
                <span className="font-montserrat text-umami-gold">{item.price}</span>
            </div>
            <div className="flex justify-between items-start mb-2">
                <p className="font-playfair text-l">{item.weight}</p>
            </div>
            <p className="text-umami-default font-cormorant text-xl">{item.description}</p>
            {item.specs && Array.isArray(item.specs) && (
                <ul className="list-disc pl-5 mt-2 text-muted-foreground font-cormorant text-lg space-y-1">
                    {item.specs.map((line, idx) => (
                        <li key={`${itemId}-spec-${idx}`}>{line}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// Category Content Component
const CategoryContent = ({ category }) => {
    const tabId = getItemId(category, Math.random());

    return (
        <TabsContent key={tabId} value={tabId} className="space-y-8">
            <div>
                <h2 className="text-3xl font-playfair mb-8 text-center">{category.name}</h2>
                <p className="max-w-2xl mx-auto text-umami-default/80 font-montserrat text-center mb-6 pb-6">
                    {category.description || ""}
                </p>
                <div className="space-y-8">
                    {(category.items || []).map((item) => (
                        <MenuItem key={getItemId(item, Math.random())} item={item} />
                    ))}
                </div>
            </div>
        </TabsContent>
    );
};

// Catering Info Component
const CateringInfo = () => (
    <div className="mt-12 bg-umami-light p-8 rounded-sm">
        <h3 className="font-playfair text-xl mb-4">Catering & Custom Orders</h3>
        <p className="text-muted-foreground font-montserrat mb-4">
            Planning a brunch, office meeting, special event—or simply stocking your favorites at
            home? We offer our full baked goods menu for personal, corporate, and event catering.
        </p>
        <p className="text-muted-foreground font-montserrat mb-4">
            Choose from our seasonal selections or request custom flavors, sizes, and dietary
            accommodations. Gluten-free options available. Tray service and bulk pricing offered for
            large orders.
        </p>
        <p className="text-muted-foreground font-montserrat">
            Contact us to explore options, availability, and pricing. We'd love to create something
            special just for you.
        </p>
    </div>
);

// Order Button Component
const OrderButton = () => (
    <div className="text-center">
        <Button asChild className="border-umami-light text-umami-light hover:bg-umami-gold hover:text-umami transition-colors duration-300 font-montserrat tracking-wider mt-12">
            <Link to="/contact?type=ordering">Place Your Order</Link>
        </Button>
    </div>
);

// Custom hook for menu data
const useMenuData = () => {
    const [bakedGoodsMenuCategories, setBakedGoodsMenuCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "bakedGoods"));
                const menuData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setBakedGoodsMenuCategories(menuData);

                if (menuData.length > 0) {
                    const firstTabId = getItemId(menuData[0], Math.random());
                    setActiveTab(firstTabId);
                }
            } catch (error) {
                console.error("Error fetching menu from Firestore:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    return { bakedGoodsMenuCategories, loading, activeTab, setActiveTab };
};

// Main Component
const BakedGoods = () => {
    const { bakedGoodsMenuCategories, loading, activeTab, setActiveTab } = useMenuData();

    const handleTabChange = (value) => {
        setActiveTab(value);
    };

    if (loading) {
        return <div className="text-center py-20">Loading menu...</div>;
    }

    return (
        <Layout>
            <HeroSection />

            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {bakedGoodsMenuCategories.length > 0 && (
                            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                                <TabsList className="w-full mb-20 bg-transparent flex flex-wrap gap-2">
                                    {bakedGoodsMenuCategories.map((category) => {
                                        const tabId = getItemId(category, Math.random());
                                        return (
                                            <TabsTrigger
                                                key={tabId}
                                                value={tabId}
                                                className="data-[state=active]:bg-umami data-[state=active]:text-umami-light font-montserrat tracking-wider"
                                            >
                                                {category.name}
                                            </TabsTrigger>
                                        );
                                    })}
                                </TabsList>

                                {bakedGoodsMenuCategories.map((category) => (
                                    <CategoryContent key={getItemId(category, Math.random())} category={category} />
                                ))}
                            </Tabs>
                        )}

                        <CateringInfo />
                        <OrderButton />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BakedGoods;