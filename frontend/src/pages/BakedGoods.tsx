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
        <Button asChild className="border-umami-light text-umami-light hover:bg-umami-gold hover:text-umami transition-colors duration-300 font-montserrat tracking-wider m-12">
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
                    const firstTabId = menuData.find(item => item.id === "breads")?.id
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

const instagramImages = [
    {
        href: "https://www.instagram.com/p/DKWhl17sXDu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        name:"Choux Aux Craquelin with Vanilla Bean Diplomat Cream ",
        src: "https://cdn.inflact.com/media/503221003_18327144577201224_6813557435685842003_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-15%2F503221003_18327144577201224_6813557435685842003_n.jpg%3Fstp%3Ddst-jpg_e35_s1080x1080_sh0.08_tt6%26_nc_ht%3Dinstagram.fdac149-1.fna.fbcdn.net%26_nc_cat%3D100%26_nc_oc%3DQ6cZ2QGSYAeictKa8rT0fx_wwx9U9oX3cjXRmem-_E7W-tSLxK2-wKcQQPx5Bj6PDVFaf9k%26_nc_ohc%3DxUh6xkIchJoQ7kNvwGMdRl9%26_nc_gid%3DaaeasEEwe35aXSHgNp8zWw%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfPAtEv-u2tswVDTxvPf4QSPcn39ppkvOAIwGhk0WWBUTA%26oe%3D684F7C25%26_nc_sid%3Dd885a2&time=1749654000&key=d23e61fa419f09c424fdb1cea211a6c8"
    },
    {
        href: "https://www.instagram.com/p/DJvmuIRMfS7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        name:" The Ultimate Rich a$ Fu$k Brownie$ with Ducle De Leche'",
        src: "https://cdn.inflact.com/media/498609453_18325375684201224_6661830880450824044_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-15%2F498609453_18325375684201224_6661830880450824044_n.jpg%3Fstp%3Ddst-jpg_e35_s1080x1080_sh0.08_tt6%26_nc_ht%3Dinstagram.fdkr7-1.fna.fbcdn.net%26_nc_cat%3D100%26_nc_oc%3DQ6cZ2QHq05w90hx3eFc6AEJVrBq2UZXDGwOMqDyc6ZDxugT96w7S42pe2cLWZeRDaEOCv70%26_nc_ohc%3DQMTXwzBuVdEQ7kNvwEH0N3g%26_nc_gid%3DOxi32_IqtgplPx7GQSt_Dg%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfMQ5oC0Jq_DyPF-qArfvcIF7JMvZu_x4fRFL_vqKi9EQw%26oe%3D684F5F1F%26_nc_sid%3Dd885a2&time=1749654000&key=e9fb77a243301479aaa746b9e8b60b3e"},
    {
        href: "https://www.instagram.com/p/DIN-3KTMbkc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        name:"Classic Brioche Loaf",
        src: "https://cdn.inflact.com/media/489868696_18321194695201224_2002425287252918005_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-15%2F489868696_18321194695201224_2002425287252918005_n.jpg%3Fstp%3Ddst-jpg_e35_s1080x1080_sh0.08_tt6%26_nc_ht%3Dinstagram.fpnh26-1.fna.fbcdn.net%26_nc_cat%3D100%26_nc_oc%3DQ6cZ2QEV56nuVIjRRFz0C71NKb-gt6vDZVunJIeKsKEIZcJPAGGQIbuG06RnqHxc4bS3P5I%26_nc_ohc%3DRWjOLESmbAcQ7kNvwHPWV7p%26_nc_gid%3DcNmDwy8aygYwSM21gTMoGA%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfOtpQArJnUrlldU5aDuPXYPnuJrdpjcqck5ROOti79_og%26oe%3D684F7940%26_nc_sid%3Dd885a2&time=1749657600&key=c4a69694c679335b4b7a4c868aebc4c6"},
    {
        href: "https://www.instagram.com/reel/DEE5TP6OOF-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        name:"Olive Oil Lemon Cake, Mascarpone Frosting, Lemon Basil Sugar and Lemon Curd",
        src: "https://cdn.inflact.com/media/471676065_18309148828201224_759405600112511092_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-15%2F471676065_18309148828201224_759405600112511092_n.jpg%3Fstp%3Ddst-jpg_e35_p1080x1080_sh0.08_tt6%26_nc_ht%3Dinstagram.fcgy1-1.fna.fbcdn.net%26_nc_cat%3D100%26_nc_oc%3DQ6cZ2QHLAWHXjsZUB8YjIdogEthPsGVj8XMmmkNUbPraM-0UikXq5dmwxt6cLHCOtTVFf5VsG7oxVFDmN26PXnVT6z-k%26_nc_ohc%3DZJjZ-QGPBFUQ7kNvwFpY78f%26_nc_gid%3Dx-x93AxNJCcMi252bLKc9w%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfPj5c9zWxSnvzO0VactjNXWMrlceCHlxa7KDlW7uBlMPA%26oe%3D684F62EE%26_nc_sid%3Dd885a2&time=1749657600&key=48102b46e001e1e9e5d86959d9fcc6ee"
    },
]
const InstagramImages = () => {
    return (
        <div>
            {/* Instagram Feed */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-playfair">Feast Your Eyes</h2>
                        <div className="h-0.5 w-16 bg-umami-gold mx-auto mt-3 mb-4"></div>
                        <p className="text-muted-foreground font-montserrat max-w-lg mx-auto">
                            Follow us on Instagram <span><a href="https://www.instagram.com/umamiamman/"
                                                            className="text-umami-gold text-lg" target="_blank"
                                                            rel="noopener noreferrer">@umamiamman</a></span> for more
                            culinary inspiration
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {instagramImages.map((post, index) => (
                            <div key={index}>
                            <a
                                href={post.href || "#"} // Fallback to "#" if href is empty
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                className="block aspect-square overflow-hidden group relative"
                            >
                                <img
                                    src={post.src}
                                    alt="Instagram food post"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
      <span className="text-white font-montserrat">
        {post.href ? "View Post" : "Coming Soon"}
      </span>
                                </div>

                            </a>
                                <p className="text-center text-sm text-gray-500 mt-2">
                                    {post.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

// Main Component
const BakedGoods = () => {
    const { bakedGoodsMenuCategories, loading, activeTab, setActiveTab } = useMenuData();

    const handleTabChange = (value) => {
        setActiveTab(value);
    };

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
                            <h2 className="text-2xl font-playfair text-umami">Baking some goods</h2>
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
                        <InstagramImages />
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BakedGoods;