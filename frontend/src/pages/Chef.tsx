
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dineinthed from "../assets/dineinthed.jpg"
import ramzisqueeze from "../assets/ramzisqueeze.jpg"
import React from "react";
const Chef = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1950&q=80')",
              backgroundAttachment: "fixed"
            }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Text Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10 text-white">
    <span className="bg-umami-gold text-umami-default font-montserrat uppercase tracking-widest text-sm py-2 px-4 rounded-full mb-6">
      Our Chef
    </span>
          <h1 className="text-4xl md:text-6xl font-playfair mb-6">Meet Chef Ramzi Osta</h1>
          <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
          <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
            The creative force behind Revolver by Umami, Chef Ramzi blends his Jordanian heritage with years of experience in New York City’s high-end culinary world, where innovation and technique are always at the cutting edge. His work honors seasonality and technique — spanning artisanal baking, French pastries, Asian desserts, and bold Indian and Latin flavors — all brought together with a globally inspired, artistic touch.
          </p>
        </div>
      </section>
      
      {/* Chef Profile */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <img 
                src={ramzisqueeze}
                alt="Chef portrait" 
                className="rounded-sm w-full h-auto object-cover"
              />   <img
                src={dineinthed}
                alt="Chef portrait"
                className="rounded-sm w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-umami-gold z-0"></div>
            </div>

            <div>
              <h2 className="text-3xl font-playfair mb-2">Chef Ramzi Osta</h2>
              <p className="text-umami-gold font-montserrat text-sm tracking-wider uppercase mb-6">Executive Chef & Founder</p>

              <p className="text-muted-foreground font-montserrat mb-4">
                With over 20 years of international culinary experience, Chef Ramzi Osta brings a globally refined touch to every plate. His career was shaped in New York City’s vibrant food scene, where he trained and led in top-tier kitchens across both fine dining and high-volume hospitality.
              </p>

              <p className="text-muted-foreground font-montserrat mb-4">
                After returning to the Middle East, Chef Ramzi directed and consulted for leading culinary ventures across the region. As the creative force behind Revolver by Umami, he merges his NYC sensibilities with local ingredients and a commitment to seasonality and artisanal craft.
              </p>

              <p className="text-muted-foreground font-montserrat mb-6">
                Chef Ramzi’s vision blends classical techniques with bold, modern flavors—whether developing private dining experiences, elegant catering menus, or curated wellness-focused subscriptions. His mission is simple: food that nourishes, delights, and tells a story.
              </p>
              
              <div className="flex space-x-4">
                <Button asChild className="bg-umami text-umami-light hover:bg-umami-dark font-montserrat tracking-wider">
                  <Link to="/menu">Explore The Menu</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-16 bg-umami-light/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair mb-8">Culinary Philosophy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
              <div>
                <h3 className="font-playfair text-xl mb-4">Seasonality</h3>
                <p className="text-muted-foreground font-montserrat">
                  Our menu revolves around the best ingredients each season has to offer, ensuring peak flavor and freshness in every dish.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-4">Technique</h3>
                <p className="text-muted-foreground font-montserrat">
                  We blend classical culinary methods with modern innovations to create dishes that are both familiar and surprising.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-4">Integrity</h3>
                <p className="text-muted-foreground font-montserrat">
                  From sourcing to preparation, we maintain the highest standards of quality and ethical practices in all aspects of our cuisine.
                </p>
              </div>
            </div>
            
            <blockquote className="text-xl font-cormorant italic mb-8">
              "My greatest joy is creating dishes that honor the essence of each ingredient, allowing their natural flavors to shine while bringing diners on an unexpected journey."
            </blockquote>
            
            <p className="font-montserrat">— Chef Ramzi Osta</p>

            <div className="text-center">
              <Button asChild
                      className="border-umami-light text-umami-light hover:bg-umami-gold hover:text-umami transition-colors duration-300 font-montserrat tracking-wider mt-12">
                <Link to="/contact?type=chef">Book Your Private Dining Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/*/!* Team Section *!/*/}
      {/*<section className="py-16 bg-background">*/}
      {/*  <div className="container mx-auto px-4">*/}
      {/*    <div className="max-w-5xl mx-auto">*/}
      {/*      <h2 className="text-3xl font-playfair mb-12 text-center">Meet the Team</h2>*/}
      {/*      */}
      {/*      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
      {/*        <div className="text-center">*/}
      {/*          <img */}
      {/*            src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1974" */}
      {/*            alt="Sous Chef" */}
      {/*            className="rounded-sm w-full h-64 object-cover mb-4"*/}
      {/*          />*/}
      {/*          <h3 className="font-playfair text-xl mb-1">Daniel Moore</h3>*/}
      {/*          <p className="text-umami-gold font-montserrat text-sm tracking-wider uppercase mb-3">Sous Chef</p>*/}
      {/*          <p className="text-muted-foreground font-montserrat text-sm">*/}
      {/*            Daniel's background in French cuisine and dedication to precision perfectly complements Chef Lin's creative vision.*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*        */}
      {/*        <div className="text-center">*/}
      {/*          <img */}
      {/*            src="https://images.unsplash.com/photo-1588675646184-4b549ff655b9?q=80&w=1974" */}
      {/*            alt="Pastry Chef" */}
      {/*            className="rounded-sm w-full h-64 object-cover mb-4"*/}
      {/*          />*/}
      {/*          <h3 className="font-playfair text-xl mb-1">Isabella Chen</h3>*/}
      {/*          <p className="text-umami-gold font-montserrat text-sm tracking-wider uppercase mb-3">Pastry Chef</p>*/}
      {/*          <p className="text-muted-foreground font-montserrat text-sm">*/}
      {/*            Isabella creates desserts that balance sweetness, texture, and artistic presentation to complete the dining experience.*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*        */}
      {/*        <div className="text-center">*/}
      {/*          <img */}
      {/*            src="https://images.unsplash.com/photo-1574966739987-65ee4e52ebcd?q=80&w=1974" */}
      {/*            alt="Wine Director" */}
      {/*            className="rounded-sm w-full h-64 object-cover mb-4"*/}
      {/*          />*/}
      {/*          <h3 className="font-playfair text-xl mb-1">Marcus Turner</h3>*/}
      {/*          <p className="text-umami-gold font-montserrat text-sm tracking-wider uppercase mb-3">Wine Director</p>*/}
      {/*          <p className="text-muted-foreground font-montserrat text-sm">*/}
      {/*            Marcus curates our wine program, seeking out small producers who share our commitment to quality and sustainability.*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </Layout>
  );
};

export default Chef;
