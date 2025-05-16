
export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "An extraordinary culinary experience that surprises with each visit. The seasonal menu ensures there's always something new to discover.",
      author: "Emily S.",
      source: "Food & Wine Magazine"
    },
    {
      quote: "Revolver by Umami strikes the perfect balance between innovative cuisine and comforting familiarity. The attention to detail is unmatched.",
      author: "Michael T.",
      source: "Dining Critic"
    },
    {
      quote: "The catering service was flawless for our corporate event. Guests are still talking about the food months later.",
      author: "Sarah J.",
      source: "Event Planner"
    }
  ];

  return (
    <section className="py-20 bg-umami-light/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-m font-semibold text-umami-gold font-montserrat tracking-widest uppercase mb-3 inline-block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-playfair">What Others Are Saying</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm">
                <div className="mb-4 text-umami-gold">
                  {Array(5).fill("★").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
                <blockquote className="font-cormorant text-xl italic mb-6">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-playfair">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground font-montserrat">{testimonial.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
