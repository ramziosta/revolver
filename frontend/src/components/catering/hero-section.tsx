
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CateringHero = () => {
  return (
    <>
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
            Catering
          </span>
                <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-white">
                    Exceptional Catering, Crafted for You
                </h1>
                <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
                <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
                    From elegant events and private celebrations to corporate gatherings and everyday indulgence, our catering services bring restaurant-quality meals and baked goods to your table—with personalized menus, professional service, and unforgettable flavor.
                </p>

            </div>
        </section>
      
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <Button asChild className="bg-gold text-umami-DEFAULT hover:text-umami-light  font-montserrat tracking-wider">
            <Link to="/catering-menu">View Catering Menu</Link>
          </Button>
        </div>
      </section>
    </>
  );
};
