import { cn } from "@/lib/utils";
import {Layout } from "@/components/layout/layout";


const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
        alt: "Rustic sourdough bread on wooden board",
    },
    {
        src: "https://images.unsplash.com/photo-1605478572073-4e8c04d40cc9?auto=format&fit=crop&w=800&q=80",
        alt: "Fine dining plated dish with edible flowers",
    },
    {
        src: "https://images.unsplash.com/photo-1559628232-93bd3f28d5e6?auto=format&fit=crop&w=800&q=80",
        alt: "Chef slicing gourmet meat in open kitchen",
    },
    {
        src: "https://images.unsplash.com/photo-1565895405139-6b71f5a9c866?auto=format&fit=crop&w=800&q=80",
        alt: "Charcuterie and cheese board spread",
    },
    {
        src: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=800&q=80",
        alt: "Assorted pastries on rustic table",
    },
    {
        src: "https://images.unsplash.com/photo-1598514982834-34ef8e3c8ae3?auto=format&fit=crop&w=800&q=80",
        alt: "Cocktails and small bites at candlelit dinner",
    },
];

export default function GalleryPage() {
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
        <main className="container mx-auto px-4 py-12 mt-14">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryImages.map((image, idx) => (
                    <div key={idx} className="overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className={cn(
                                "w-full h-64 object-cover transform hover:scale-105 transition duration-300"
                            )}
                        />
                    </div>
                ))}
            </div>
        </main>
        </Layout>
    );
}
