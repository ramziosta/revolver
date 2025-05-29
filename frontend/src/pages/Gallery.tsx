import { cn } from "@/lib/utils";
import {Layout } from "@/components/layout/layout";
import React, { useState, useEffect } from "react";



export default function GalleryPage() {
    //instagram featured images from the database
    const [instagramImages, setInstagramImages] = useState([]);
    const [loading, setLoading] = useState(true);
    //images and alt from mongoDB
    useEffect(() => {
        fetch("https://revolver-pcce.onrender.com/images")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched menu data:", data);
                setInstagramImages(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error loading menu:', err);
                setLoading(false);
            });
    }, []);

    // instagram images from service
    useEffect(() => {
        const scriptId = "elfsight-platform-script";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://static.elfsight.com/platform/platform.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    if (loading) {
        return <div className="text-center py-20">Loading menu...</div>;
    }

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[70vh] overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        backgroundAttachment: "fixed"
                    }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10 text-white">
                    <span className="bg-umami-gold text-umami-DEFAULT font-montserrat uppercase tracking-widest text-sm py-2 px-4 rounded-full mb-6">
                        Gallery
                    </span>
                    <h1 className="text-5xl md:text-7xl font-playfair mb-6">A Feast for the Eyes</h1>
                    <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
                    <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
                        Discover the vibrant spirit of <span className="font-semibold">Revolver by Umami</span> through a curated collection of our signature dishes, desserts, and baked goods.
                        For more culinary moments, follow us on
                        <a
                            href="https://www.instagram.com/umamiamman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-umami-cream ml-1"
                        >
                            @umamiamman
                        </a>.
                    </p>
                </div>
            </section>

            <main className="container mx-auto px-4 py-16  bg-umami/bg-umami 2bg-umami bg-umami/20 ">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-playfair text-umami mb-4">
                        Signature Plates & Seasonal Bites
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground text-base font-montserrat">
                        A curated collection of our most inspired dishes — from elegant desserts to seasonal mains.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  ">

                    {instagramImages.map((image, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-background flex flex-col transition-transform hover:scale-[1.02]"
                        >
                            <div className="w-full aspect-[4/3] bg-white flex items-center justify-center">
                                <img
                                    src={image.image}
                                    alt={image.alt || image.title || ""}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-playfair text-umami mb-2">
                                    {image.title}
                                </h3>
                                {image.description && (
                                    <p className="text-muted-foreground text-sm font-montserrat">
                                        {image.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Elfsight embed below the gallery */}
                <section className="mt-24 text-center">
                    <h2 className="text-3xl md:text-4xl font-playfair text-umami mb-12">
                        Follow Us on Instagram
                    </h2>
                    <div
                        className="elfsight-app-417857f2-998e-4542-b478-26fac8b964d8 mx-auto font-playfair "
                        data-elfsight-app-lazy
                    ></div>
                </section>
            </main>
        </Layout>
    );
}