
import React from "react";

const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description: "We discuss your event details, preferences, dietary requirements, and vision to understand your needs."
  },
  {
    step: 2,
    title: "Menu Design",
    description: "Our chef creates a customized menu proposal based on your preferences and seasonal availability."
  },
  {
    step: 3,
    title: "Tasting",
    description: "Sample your selected menu items and make any adjustments to ensure everything is perfect."
  },
  {
    step: 4,
    title: "Execution",
    description: "Our professional team handles everything on the day of your event, delivering an exceptional experience."
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-16 bg-umami-light/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-playfair mb-6">Our Catering Process</h2>
          <p className="text-muted-foreground font-montserrat">
            From initial consultation to flawless execution, we ensure every detail is handled with the utmost care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {processSteps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-16 h-16 bg-umami text-umami-light rounded-full flex items-center justify-center mx-auto mb-4 font-playfair text-xl">
                {step.step}
              </div>
              <h3 className="font-playfair text-xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-montserrat text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
