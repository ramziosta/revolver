
import { Layout } from "@/components/layout/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from 'react';


const instagram =[
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
]



const recommendations = [
  {
    name: "Spring Herb Risotto",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Creamy arborio rice with seasonal spring herbs, asparagus, and parmesan"
  },
  {
    name: "Pan-Seared Scallops",
    image: "https://images.unsplash.com/photo-1532980193608-32e2e719a8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "With pea purée, crispy pancetta, and lemon butter sauce"
  },
  {
    name: "Rhubarb & Strawberry Tart",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Seasonal fruit tart with vanilla bean custard and almond crust"
  }
]

const Menu = () => {

  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/menu')
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched menu data:", data); // 👈 Log it
          setMenuCategories(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error loading menu:', err);
          setLoading(false);
        });
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading menu...</div>;
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
          <span className="bg-umami-gold text-umami-DEFAULT font-montserrat uppercase tracking-widest text-sm py-2 px-4 rounded-full mb-6">
            Seasonal Offerings
          </span>
            <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-white">Our Menu</h1>
            <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
            <h3 className="text-2xl md:text-3xl text-umami-gold font-playfair mb-4">Spring Collection • April 1st - June 20th</h3>
            <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
              Indulge in our chef's seasonal creations, thoughtfully crafted to showcase the vibrant flavors of spring.
            </p>

          </div>
        </section>

        {/* Menu Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="starters" className="w-full">
                <TabsList className="w-full mb-8 bg-transparent flex flex-wrap gap-2">
                  {menuCategories.map((category) => (
                      <TabsTrigger
                          key={category.id}
                          value={category.id}
                          className="data-[state=active]:bg-umami data-[state=active]:text-umami-light font-montserrat tracking-wider"
                      >
                        <category.icon className="w-4 h-4 mr-2" />
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
                                <TabsList className="w-full mb-8 bg-transparent flex justify-center">
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
                                    <TabsContent key={subCategory.id} value={subCategory.id} className="space-y-8">
                                      <div>
                                        <h3 className="text-2xl font-playfair mb-6 text-center">{subCategory.name}</h3>
                                        <div className="space-y-8">
                                          {subCategory.items.map((item, index) => (
                                              <div key={index} className="border-b border-border  hover:bg-umami/5 p-4 -mx-4 transition-colors duration-300 pb-6">
                                                <div className="flex justify-between items-start mb-2">
                                                  <h4 className="font-playfair text-xl">{item.name}</h4>
                                                  <span className="font-montserrat text-umami-gold">{item.price}</span>
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
                                            <span className="font-umami-gold">{item.price}</span>
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

              {/*<div className="mt-12 bg-umami-light/5 p-8 rounded-sm">*/}
              {/*  <h3 className="font-playfair text-xl mb-4">Catering Information</h3>*/}
              {/*  <p className="text-muted-foreground font-montserrat mb-4">*/}
              {/*    All catering orders require 48-hour advance notice. Minimum order quantities may apply.*/}
              {/*  </p>*/}
              {/*  <p className="text-muted-foreground font-montserrat">*/}
              {/*    Please contact us for custom menus, dietary accommodations, or special requests.*/}
              {/*  </p>*/}
              {/*</div>*/}
            </div>
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
                  <div key={index} className="min-w-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-md bg-white group">
                    <div className="h-52 overflow-hidden">
                      <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      {/*<div className="flex items-center mb-2">*/}
                      {/*  <Star className="h-4 w-4 text-umami-gold mr-1" />*/}
                      {/*  <Star className="h-4 w-4 text-umami-gold mr-1" />*/}
                      {/*  <Star className="h-4 w-4 text-umami-gold" />*/}
                      {/*</div>*/}
                      <h3 className="font-playfair text-xl mb-2">{item.name}</h3>
                      <p className="text-muted-foreground font-cormorant text-lg">{item.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-playfair">Feast Your Eyes</h2>
              <div className="h-0.5 w-16 bg-umami-gold mx-auto mt-3 mb-4"></div>
              <p className="text-muted-foreground font-montserrat max-w-lg mx-auto">
                Follow us on Instagram @umamiamman for more culinary inspiration
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {instagram.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden group relative">
                    <img
                        src={image}
                        alt="Food instagram"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white font-montserrat">View Post</span>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
  );
};

export default Menu;
