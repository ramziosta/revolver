
import { Layout } from "@/components/layout/layout.tsx";import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import { ChevronRight, Check, Star, Users, Briefcase, Heart } from "lucide-react";
import React from "react";

export default function SubscriptionPage() {
    return (
        <Layout>
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                        backgroundPosition: "center 60%"
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                </div>
                <div className="relative z-20 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-playfair mb-4">Your Personal Chef, On Repeat</h1>
                    <p className="text-xl font-montserrat max-w-2xl mx-auto opacity-90">
                        Subscribe to chef-crafted meals delivered on your schedule
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
                {/* Value Proposition */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-playfair mb-6">Why Choose Our Meal Subscription?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-umami flex items-center justify-center mb-4">
                                <Star className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-playfair mb-2">Chef-Crafted Quality</h3>
                            <p className="text-muted-foreground">Gourmet meals prepared by professional chefs using seasonal ingredients</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-umami flex items-center justify-center mb-4">
                                <Check className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-playfair mb-2">Flexible & Convenient</h3>
                            <p className="text-muted-foreground">Choose your frequency and meal types with easy scheduling</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-umami flex items-center justify-center mb-4">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-playfair mb-2">Healthful Options</h3>
                            <p className="text-muted-foreground">Nutritionally balanced meals that never compromise on flavor</p>
                        </div>
                    </div>
                </div>

                {/* PERSONAL & FAMILY PLANS */}
                <div className="mb-24 relative">
                    <div className="flex items-center mb-6">
                        <Users className="w-6 h-6 mr-3 text-umami" />
                        <h2 className="text-3xl font-playfair">Personal & Family Plans</h2>
                    </div>
                    <div className="h-1 w-20 bg-umami mb-8"></div>
                    <p className="text-lg text-muted-foreground font-montserrat mb-10 max-w-3xl">
                        Enjoy ready-to-eat meals with flexible frequencies. Choose from plans for individuals, couples, or families up to 10.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Once a Week",
                                description: "Perfect for busy professionals who want to enjoy one special chef-prepared meal weekly.",
                                price: "Starting from JOD JOD 79/month (Just JOD 19.74 per week)",
                                image: "https://images.unsplash.com/photo-1580683750935-cecfc7ea57f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
                                features: ["Complete meal for 1-2 people", "Entrée + Side + Dessert", "Weekly menu rotation"]
                            },
                            {
                                title: "3x a Week",
                                description: "Our most popular plan! Enjoy multiple chef-crafted dinners without the hassle of cooking.",
                                price: "Starting from JOD 235/month (Just JOD 58.75/week)",
                                image: "https://images.unsplash.com/photo-1626203313658-886791f37e46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
                                features: ["Three complete meals weekly", "Mix & match menu options", "Flexible delivery schedule"]
                            },
                            {
                                title: "Family Plan – Once a Week ",
                                description: "A weekly chef-prepared dinner for families who want one special meal together, without the hassle of cooking.",
                                price: "Starting from JOD 310/month (Just JOD 77.5/week)",
                                image: "https://images.unsplash.com/photo-1639696318374-2934d7c11182?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRpbm5lciUyMGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D",
                                features: [
                                    "1 complete family dinner per week ",
                                    "Family-sized portions (serves 4–6)",
                                    "Kid-friendly & customizable options",
                                    "Includes entrée, salad, and dessert for each meal"
                                ]
                            },
                            {
                                title: "Family Plan – 3x a Week",
                                description: "Ideal for families who want to enjoy delicious, chef-prepared meals together without the daily planning or prep.",
                                price: "Starting from JOD 940/month (Just JOD 235/week)",
                                image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                features: [
                                    "3 complete family dinners per week",
                                    "Family-sized portions (serves 4–6)",
                                    "Kid-friendly & customizable options",
                                    "Includes entrée, salad, and dessert for each meal"
                                ]
                            }
                        ].map((plan, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={plan.image}
                                        alt={plan.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-playfair mb-2">{plan.title}</h3>
                                    <p className="font-montserrat font-semibold text-umami-gold mb-4">{plan.price}</p>
                                    <p className="text-sm font-montserrat mb-4 text-muted-foreground">{plan.description}</p>
                                    <ul className="mb-6 space-y-2">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-sm">
                                                <Check className="w-4 h-4 mr-2 text-umami flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Button asChild
                                className="border-umami-light text-umami-light hover:bg-umami-gold hover:text-umami transition-colors duration-300 font-montserrat tracking-wider mt-12">
                            <Link to="/contact?type=subscription"> Choose Your Meal Subscription Plan</Link>
                        </Button>
                        <p className="text-sm text-muted-foreground mt-2 font-montserrat italic">
                            *Delivery not included in subscription price.
                        </p>
                    </div>
                </div>

                {/* OFFICE PLANS */}
                <div className="mb-24 relative">
                    <div className="flex items-center mb-6">
                        <Briefcase className="w-6 h-6 mr-3 text-umami" />
                        <h2 className="text-3xl font-playfair">Office & Team Plans</h2>
                    </div>
                    <div className="h-1 w-20 bg-umami mb-8"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-lg text-muted-foreground font-montserrat mb-6">
                                Boost team morale and productivity with delicious meals delivered to your workplace. Perfect for team lunches, meetings, or regular office meals.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-6">
                                <h3 className="text-xl font-playfair mb-4">Why Teams Love Our Office Plans</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 mr-3 text-umami flex-shrink-0 mt-0.5" />
                                        <span>Customizable meal options for diverse dietary needs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 mr-3 text-umami flex-shrink-0 mt-0.5" />
                                        <span>Corporate billing with detailed invoicing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 mr-3 text-umami flex-shrink-0 mt-0.5" />
                                        <span>Reliable delivery scheduling that works with your meetings</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="w-5 h-5 mr-3 text-umami flex-shrink-0 mt-0.5" />
                                        <span>Eco-friendly packaging with easy cleanup</span>
                                    </li>
                                </ul>
                            </div>
                            <Button asChild className="border-umami-light text-umami-light hover:bg-umami-gold hover:text-umami transition-colors duration-300 font-montserrat tracking-wider">
                                <Link to="/contact?type=subscription">Schedule a Team Consultation</Link>
                            </Button>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Team enjoying lunch"
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                                <div className="flex items-center mb-2">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <Star className="w-5 h-5 text-yellow-400" />
                                    <Star className="w-5 h-5 text-yellow-400" />
                                </div>
                                <p className="text-sm italic">"Since we started the Umami office lunch program, our team not only eats better.
                                    The food is consistently outstanding, it brought ease and consistency to our busy days. The food is exceptional, and lunch has become the moment we all look forward to."</p>
                                <p className="text-xs font-semibold mt-2">— Sarah T., Marketing Director</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WELLNESS PLANS */}
                <div className="mb-24">
                    <div className="flex items-center mb-6">
                        <Heart className="w-6 h-6 mr-3 text-umami" />
                        <h2 className="text-3xl font-playfair">Wellness & Corporate Wellness</h2>
                    </div>
                    <div className="h-1 w-20 bg-umami mb-8"></div>

                    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-8 lg:p-12">
                                <h3 className="text-2xl font-playfair mb-4">Nourish Your Body, Fuel Your Day</h3>
                                <p className="text-muted-foreground mb-6">
                                    Our wellness plans are designed by nutritionists and crafted by chefs to deliver balanced, nutrient-dense meals that support your health goals without compromising on flavor.
                                </p>

                                <div className="mb-8">
                                    <h4 className="font-playfair font-medium mb-3">Available Wellness Options:</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                                                <Check className="w-4 h-4 text-teal-700" />
                                            </div>
                                            <span>Balanced Nutrition Plans</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                                                <Check className="w-4 h-4 text-teal-700" />
                                            </div>
                                            <span>High-Protein Options</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                                                <Check className="w-4 h-4 text-teal-700" />
                                            </div>
                                            <span>Plant-Based Programs</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                                                <Check className="w-4 h-4 text-teal-700" />
                                            </div>
                                            <span>Corporate Wellness Packages</span>
                                        </li>
                                    </ul>
                                </div>

                                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                                    <Link to="/wellness">Explore Wellness Plans</Link>
                                </Button>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhbHRoeSUyMG1lYWx8ZW58MHx8MHx8fDA%3D"
                                    alt="Healthy meal preparation"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gray-50 p-10 rounded-xl">
                    <h2 className="text-3xl font-playfair mb-4">Ready to Transform Your Mealtime?</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Join our community of satisfied customers who have simplified their dining experience while enjoying restaurant-quality meals at home or work.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="border-umami-light text-umami-light hover:bg-umami-gold hover:text-umami transition-colors duration-300 font-montserrat tracking-wider">
                            <Link to="/contact?type=subscription">Get Started Now</Link>
                        </Button>
                        <Button size="lg" variant="outline">
                            <Link to="/menu">View Sample Menus</Link>

                        </Button>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {/*<section className="py-16 bg-gray-50">*/}
            {/*    <div className="max-w-6xl mx-auto px-4">*/}
            {/*        <h2 className="text-3xl font-playfair text-center mb-12">What Our Subscribers Say</h2>*/}
            {/*        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
            {/*            {[*/}
            {/*                {*/}
            {/*                    quote: "The meals are restaurant-quality and have made our weeknights so much less stressful. Worth every penny!",*/}
            {/*                    author: "Michelle K.",*/}
            {/*                    role: "Family Plan Subscriber",*/}
            {/*                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"*/}
            {/*                },*/}
            {/*                {*/}
            {/*                    quote: "Our team looks forward to lunch days. It's improved morale and the variety keeps everyone happy.",*/}
            {/*                    author: "Jason R.",*/}
            {/*                    role: "HR Director",*/}
            {/*                    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"*/}
            {/*                },*/}
            {/*                {*/}
            {/*                    quote: "The wellness plan has been instrumental in helping me maintain my nutrition goals without sacrificing taste.",*/}
            {/*                    author: "Thomas L.",*/}
            {/*                    role: "Wellness Plan Subscriber",*/}
            {/*                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"*/}
            {/*                },*/}
            {/*            ].map((testimonial, index) => (*/}
            {/*                <div key={index} className="bg-white p-6 rounded-lg shadow">*/}
            {/*                    <div className="flex items-center mb-4">*/}
            {/*                        <Star className="w-5 h-5 text-yellow-400" />*/}
            {/*                        <Star className="w-5 h-5 text-yellow-400" />*/}
            {/*                        <Star className="w-5 h-5 text-yellow-400" />*/}
            {/*                        <Star className="w-5 h-5 text-yellow-400" />*/}
            {/*                        <Star className="w-5 h-5 text-yellow-400" />*/}
            {/*                    </div>*/}
            {/*                    <p className="italic mb-6">{testimonial.quote}</p>*/}
            {/*                    <div className="flex items-center">*/}
            {/*                        <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 object-cover" />*/}
            {/*                        <div>*/}
            {/*                            <p className="font-medium">{testimonial.author}</p>*/}
            {/*                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* FAQ Section */}
            <section className="py-16 px-4 md:px-12 lg:px-24 max-w-5xl mx-auto">
                <h2 className="text-3xl font-playfair text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        {
                            question: "How does the subscription process work?",
                            answer: "Select your preferred plan, customize your meals and delivery frequency, and we'll handle the rest. You can modify, pause, or cancel your subscription anytime through your account."
                        },
                        {
                            question: "Are there options for dietary restrictions?",
                            answer: "Yes! We offer vegetarian, vegan, gluten-free, dairy-free, and other dietary options. You can specify your preferences when setting up your subscription."
                        },
                        {
                            question: "How far in advance can I customize my meals?",
                            answer: "You can customize your meals up to 2 weeks in advance. We send reminder emails 3 days before your order is processed."
                        },
                        {
                            question: "What areas do you deliver to?",
                            answer: "We currently deliver throughout Amman and also accommodate catering deliveries for special occasions and group orders. Please contact us for more details."
                        }
                    ].map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg border border-gray-100">
                            <h3 className="text-lg font-playfair mb-2">{faq.question}</h3>
                            <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
            </Layout >
    );
}