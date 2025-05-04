import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function SubscriptionSection() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-umami-gold rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-umami-gold rounded-full -translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className=" py-2 px-4 rounded-full mb-6 text-sm text-umami-DEFAULT bg-umami-gold font-montserrat tracking-widest uppercase inline-block " >Subscription Meal Service</span>
                    <h2 className="text-3xl md:text-4xl font-playfair mb-6">Flexible Meal Plans for Every Lifestyle</h2>
                    <p className="text-muted-foreground font-montserrat">
                        Choose from personal, family, or office meal plans — designed for convenience, wellness, and variety. Delivered to your door or workplace, just when you need it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="font-playfair text-xl mb-4">Personal & Family</h3>
                        <p className="text-muted-foreground font-montserrat text-sm mb-4">
                            Weekly flexible meal plans for 1–2 or up to 10 people. Includes entrée, soup or salad, and dessert.
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=2070"
                            alt="Personal meals"
                            className="w-full h-40 object-cover rounded-sm mb-4"
                        />
                    </div>

                    <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="font-playfair text-xl mb-4">Office Subscriptions</h3>
                        <p className="text-muted-foreground font-montserrat text-sm mb-4">
                            Brunch, lunch, and more for teams of 5 and up. Choose frequency and add-ons like dessert or fruit platters.
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=2070"
                            alt="Office catering"
                            className="w-full h-40 object-cover rounded-sm mb-4"
                        />
                    </div>

                    <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="font-playfair text-xl mb-4">Wellness Plans</h3>
                        <p className="text-muted-foreground font-montserrat text-sm mb-4">
                            Nutritionally balanced meals designed for fitness, health, and performance. Available in personal and corporate formats.
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070"
                            alt="Healthy meals"
                            className="w-full h-40 object-cover rounded-sm mb-4"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <Button asChild className="bg-umami text-umami-light hover:bg-umami-dark transition-colors duration-300 font-montserrat tracking-wider">
                        <Link to="/subscriptions">Explore Plans</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}