import React from "react";
import umamiamman  from "../assets/umamiamman.jpg";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

const UmamiAmman = () => (
        <section className="relative w-full aspect-video sm:aspect-[4/3] md:aspect-[16/9] lg:h-screen flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    className="w-full h-full object-cover"
                    src="https://res.cloudinary.com/df2jleiei/video/upload/v1753476955/umamiammans_scklr4.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                    poster="fallback-hero.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col justify-center items-center h-full top-2 sm:top-8">
                <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-8xl font-blanka text-white tracking-wide leading-snug ">
                    Baked to Break the Mold
                </h1>

                <p className="lg:text-6xl  md:text-4xl italic text-umami-gold font-lovan">
                    Flavor. Elevated.
                </p>

                <p className="text-base text-smsm:text-sm md:text-xl lg:text-3xl text-white font-ppneuemontreal leading-relaxed max-w-xl mx-auto md:mt-6 lg:mt-6">
                    Not just baked. Engineered. Every crumb, crust, and layer crafted to surprise.
                    Even our brownie? A bold, edible statement.
                </p>
                <p className="max-w-2xl mx-auto mt-8 text-white/90 font-montserrat text-lg">
                    For our full artisan collection, visit Umami Amman — where every detail matters.
                </p>
                <div className="text-center">
                    <Button asChild
                            className="border-umami-light text-umami-light hover:bg-umami-gold hover:text-umami transition-colors duration-300 font-montserrat tracking-wider mt-12">
                        <Link to="https://umami-revolver-amman-bakery.vercel.app/">Visit UMAMI AMMAN</Link>
                    </Button>

                </div>
            </div>
        </section>
);

export default UmamiAmman;