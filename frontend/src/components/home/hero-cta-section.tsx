import React from "react";

const servicesOffered =[
    {
        title: "Artisanal Baked Goods",
        description: "Sourdough breads, cakes, cookies, brunch favorites and more.",
        href: "https://revolver-tau.vercel.app/baked-goods",
        image: "https://images.unsplash.com/photo-1595526417596-c0fdbf75287b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Event Catering",
        description: "Perfect for memorable gatherings and elegant occasions.",
        href: "/catering",
        image:  "https://images.unsplash.com/photo-1576842546422-60562b9242ae?q=80&w=1458&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Private Chef",
        description: "A curated dining experience in the comfort of your home.",
        href: "/menu",
        image: "https://images.unsplash.com/photo-1720430498832-237771a38cda?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Meal Subscriptions",
        description: "Seasonal wellness meals delivered weekly, crafted for nourishment.",
        href: "/subscriptions",
        image:   "https://plus.unsplash.com/premium_photo-1663091215026-81fd5e7653d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

const HeroCTASection = () => {


    return (
        <div className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-playfair">What Are You Craving?</h2>
                    <div className="h-0.5 w-16 bg-umami-gold mx-auto mt-3 mb-4"></div>
                    <p className="text-muted-foreground font-montserrat max-w-lg mx-auto">
                        Select your perfect culinary experience — each crafted to delight, elevate, and inspire.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-8 md:grid-cols-4 justify-center">
                        {servicesOffered.map(({ title, description, href, image }) => (
                            <a
                                key={title}
                                href={href}
                                className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white"
                            >
                                <div
                                    className="h-48 md:h-60 bg-cover bg-center transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                                    style={{ backgroundImage: `url(${image})` }}
                                />
                                <div className="p-6 transition-all group-hover:bg-umami">
                                    <h3 className="text-xl font-playfair mb-2 group-hover:text-white">{title}</h3>
                                    <p className="text-muted-foreground font-montserrat group-hover:text-white">
                                        {description}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCTASection;