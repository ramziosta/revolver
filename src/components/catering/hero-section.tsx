
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CateringHero = () => {
  return (
    <>
      <section className="relative py-28 bg-umami text-umami-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair mb-4">Catering Services</h1>
          <p className="max-w-2xl mx-auto text-umami-light/80 font-montserrat">
            Elevate your events with our exceptional catering services, featuring the same dedication to quality and creativity as our restaurant.
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
