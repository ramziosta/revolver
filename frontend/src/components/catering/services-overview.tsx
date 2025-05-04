
import React from "react";

interface Service {
  title: string;
  description: string;
  image: string;
  options: string[];
}

interface ServicesSectionProps {
  services: Service[];
}

export const ServicesOverview = ({ services }: ServicesSectionProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-playfair mb-6">Tailored Culinary Experiences</h2>
          <p className="text-muted-foreground font-montserrat">
            Whether you're planning a corporate event, private celebration, or wedding reception, our catering team brings the same passion and attention to detail that defines the Revolver by Umami experience.
          </p>
        </div>
        
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-sm w-full h-auto object-cover"
                  />
                  <div className={`absolute ${
                    index % 2 === 0 ? "-bottom-6 -right-6" : "-top-6 -left-6"
                  } w-32 h-32 border-2 border-umami-gold z-0`}></div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl font-playfair mb-4">{service.title}</h3>
                <p className="text-muted-foreground font-montserrat mb-6">
                  {service.description}
                </p>
                
                <h4 className="font-montserrat font-semibold mb-3">Our Services Include:</h4>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                  {service.options.map((option, i) => (
                    <li key={i} className="text-muted-foreground font-montserrat">{option}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
