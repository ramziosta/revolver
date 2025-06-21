import {Layout} from "@/components/layout/layout";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React, {useEffect, useState} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../firebaseConfig.tsx';

const instagram = [
    {
        href: "https://www.instagram.com/p/Be8iAHQh3e9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        src: "https://cdn.inflact.com/media/27573392_164759937644881_2696939179249500160_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-15%2F27573392_164759937644881_2696939179249500160_n.jpg%3Fstp%3Ddst-jpg_e35_tt6%26_nc_ht%3Dscontent-icn2-1.cdninstagram.com%26_nc_cat%3D101%26_nc_oc%3DQ6cZ2QGKml4s1vBFItbotY2CE6JQkunxCBGJnlMXLwv9H4HSpNavj4NzshadVi6DZXVo08w%26_nc_ohc%3DQH48zLuEoYcQ7kNvwHDZsus%26_nc_gid%3DCsTVhAB8L9H5Z_-0HGQG1A%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfMlOiD36dE__BTO7IWk3ZMBhd5zbwJQCyy-ld4_Asgjzw%26oe%3D684F57B8%26_nc_sid%3Dd885a2&time=1749654000&key=a1df11a9fe2bccf4fadb210d9723ac73"
    },
    {
        href: "https://www.instagram.com/p/Bes_FI7BjAf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        src: "https://cdn.inflact.com/media/26871824_858025897710083_3014705207977181184_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-15%2F26871824_858025897710083_3014705207977181184_n.jpg%3Fstp%3Ddst-jpg_e35_tt6%26_nc_ht%3Dinstagram.fixm4-3.fna.fbcdn.net%26_nc_cat%3D111%26_nc_oc%3DQ6cZ2QGfhOjRvnGdA0WGqWxpqpAhGyk0-D4gJ0rvmyqqiyUinOT-9iTR2xmzL8GJp6V8vyp0llPck2WXf2mHjeIUwzVB%26_nc_ohc%3DuYbkcKJIjdwQ7kNvwE0Yt4g%26_nc_gid%3DOnSrg5-tqy32Ylv_OUB8dQ%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfNSaeY_Oj0ltI9bxIKsDkPivWsimE_Ze0Fuaivby20D0g%26oe%3D684F66AE%26_nc_sid%3Dd885a2&time=1749654000&key=e2e56a2cf189595e704c976d11ad5891"
    },
    {
        href: "https://www.instagram.com/p/BbaodoTBhPF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        src: "https://cdn.inflact.com/media/23507999_364768757307660_2337965301548711936_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-15%2F23507999_364768757307660_2337965301548711936_n.jpg%3Fstp%3Ddst-jpg_e35_tt6%26_nc_ht%3Dinstagram.fdel5-2.fna.fbcdn.net%26_nc_cat%3D100%26_nc_oc%3DQ6cZ2QE1BBpNfsV9t8SJ6Fq3mvRN88dcO4TmGwmI5rXV3-HWeFepk0tWs_RmgQKwm12JtO8%26_nc_ohc%3DA8UhGme9UZ8Q7kNvwElMZpK%26_nc_gid%3DcwkD3DguQIWRfSWEmjyo-w%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfMN4K9g85fxdY_vJXB9wvDjOLIyE53Ad82UEz1Zo5wM5Q%26oe%3D684F6FE4%26_nc_sid%3Dd885a2&time=1749654000&key=203cda0cee8da2612aa51d1a58f89619"
    },
    {
        href: "https://www.instagram.com/p/BbVwcuEh46y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        src: "https://cdn.inflact.com/media/23507176_1514208512001907_6800799912549154816_n.jpg?url=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft51.2885-15%2F23507176_1514208512001907_6800799912549154816_n.jpg%3Fstp%3Ddst-jpg_e35_tt6%26_nc_ht%3Dinstagram.fixm4-4.fna.fbcdn.net%26_nc_cat%3D107%26_nc_oc%3DQ6cZ2QEMCmjSHe2uxUn7BZCGICz7CbEX3sWukdWKKISA68LAZsEIlatJvPB7O2HJaX3Yf9UscAsHtuTJYPuhkequs05b%26_nc_ohc%3D76epmtvPM4gQ7kNvwEcAAFp%26_nc_gid%3DdHHSYziPvkodsfExdV5wlg%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfP54uRFbwzrq985ApKRvNUf2LrxT9HbrWPnqRcLI_NrJQ%26oe%3D684F56D1%26_nc_sid%3Dd885a2&time=1749654000&key=32b6b03395c0c0f9bad9ec5f90389e51"
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
                        {instagram.map((post, index) => (
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
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}


const recommendations = [
    {
        name: "Wild Mushroom Risotto",
        image: "https://plus.unsplash.com/premium_photo-1694850980351-683bd8436024?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Creamy arborio rice, roasted mushrooms, aged parmesan, herbs"
    },
    {
        name: "Pan Roasted Market Fish",
        image: "https://images.unsplash.com/photo-1676300185165-3f543c1fcb72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "With Herb Oil, Caperberry Remoulade, and Seasonal Vegetables"
    },
    {
        name: "Creme Brulee Bambolone",
        image: "https://static01.nyt.com/images/2025/03/13/multimedia/DP-bomboloni-fcvh/DP-bomboloni-fcvh-master768.jpg?quality=75&auto=webp",
        description: "Fluffy Italian doughnut filled with strawberry compote and vanilla bean pastry cream"
    }
]

const Menu = () => {

    const [menuCategories, setMenuCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const sortedCategories = menuCategories.sort((a, b) => a.order - b.order);
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "menu")); // 'menu' is your Firestore collection name
                const menuData = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                setMenuCategories(menuData);
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
                            <div
                                className="w-16 h-16 border-4 border-umami-light border-t-umami-gold rounded-full animate-spin mx-auto"></div>
                            <div
                                className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-umami/30 rounded-full animate-spin mx-auto"
                                style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                        </div>

                        {/* Loading text */}
                        <div className="space-y-2">
                            <h2 className="text-2xl font-playfair text-umami">Preparing the Menu</h2>
                            <p className="text-umami-default/70 font-montserrat animate-pulse">
                                Curating our finest selections...
                            </p>
                        </div>

                        {/* Decorative elements */}
                        <div className="flex items-center justify-center space-x-2 mt-6">
                            <div className="w-2 h-2 bg-umami-gold rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-umami-gold rounded-full animate-bounce"
                                 style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-umami-gold rounded-full animate-bounce"
                                 style={{animationDelay: '0.2s'}}></div>
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
                        backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                        backgroundAttachment: "fixed"
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
          <span
              className="bg-umami-gold text-umami-DEFAULT font-montserrat uppercase tracking-widest text-sm py-2 px-4 rounded-full mb-6">
            Seasonal Offerings
          </span>
                    <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-white">Our Menu</h1>
                    <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
                    <h3 className="text-2xl md:text-3xl text-umami-gold font-playfair mb-4">Spring Collection • April
                        1st - June 20th</h3>
                    <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
                        Indulge in our chef's seasonal creations, thoughtfully crafted to showcase the vibrant flavors
                        of spring.
                    </p>

                </div>
            </section>

            {/* Menu Content */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Tabs defaultValue="mains" className="w-full">
                            <TabsList className="w-full mb-8 bg-transparent flex flex-wrap gap-2">
                                {
                                    sortedCategories.map((category) => (
                                    <TabsTrigger
                                        key={category.id}
                                        value={category.id}
                                        className="data-[state=active]:bg-umami data-[state=active]:text-umami-light font-montserrat tracking-wider"
                                    >
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
                                                    <TabsList
                                                        className="w-full mb-8 bg-transparent flex justify-center">
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
                                                        <TabsContent key={subCategory.id} value={subCategory.id}
                                                                     className="space-y-8">
                                                            <div>
                                                                <h3 className="text-2xl font-playfair mb-6 text-center">{subCategory.name}</h3>
                                                                <div className="space-y-8">
                                                                    {subCategory.items.map((item, index) => (
                                                                        <div key={index}
                                                                             className="border-b border-border  hover:bg-umami/5 p-4 -mx-4 transition-colors duration-300 pb-6">
                                                                            <div
                                                                                className="flex justify-between items-start mb-2">
                                                                                <h4 className="font-playfair text-xl">{item.name}</h4>
                                                                                <span
                                                                                    className="font-montserrat text-umami-gold">{item.price}</span>
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
                                                                    <span
                                                                        className="font-umami-gold">{item.price}</span>
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


                    </div>
                </div>
                <div
                    className="mt-12 bg-umami-light border border-umami-light text-muted-foreground p-6 rounded-md text-sm font-montserrat leading-relaxed max-w-3xl mx-auto">
                    <p className="font-semibold text-umami mb-2">⚠️ Allergies & Dietary Restrictions</p>
                    <p>
                        We take food sensitivities seriously. Please inform us of any allergies or dietary preferences
                        when placing your order. Not all ingredients are listed—feel free to reach out if you have
                        questions or concerns.
                    </p>
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
                            <div key={index}
                                 className="min-w-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-md bg-white group">
                                <div className="h-52 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-5">

                                    <h3 className="font-playfair text-xl mb-2">{item.name}</h3>
                                    <p className="text-muted-foreground font-cormorant text-lg">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instagram Feed */}
            <InstagramImages/>

        </Layout>
    );
};

export default Menu;
