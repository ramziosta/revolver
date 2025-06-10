import {useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {Layout} from "@/components/layout/layout";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {MapPin, Phone, Mail, Clock} from "lucide-react";
import emailjs from '@emailjs/browser';

// Hero section component
const ContactHero = () => (
    <section className="relative h-[70vh] overflow-hidden">
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                backgroundAttachment: "fixed"
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
            <span className="bg-umami-gold text-umami-DEFAULT font-montserrat uppercase tracking-widest text-sm py-2 px-4 rounded-full mb-6">
                Contact
            </span>
            <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-white">
                Place an Order, Book a Reservation, Request Catering, or Explore Collaboration.
            </h1>
            <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
            <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
                We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.
                Connect with us for custom orders, private dining inquiries, or any special requests. We're here
                to bring your vision to the table.
            </p>
        </div>
    </section>
);

// Contact info component
const ContactInfo = () => (
    <div>
        <h2 className="text-3xl font-playfair mb-8">Get in Touch</h2>

        <div className="space-y-6">
            <div className="flex items-start">
                <MapPin className="text-umami-gold mr-4 h-5 w-5 mt-1"/>
                <div>
                    <h3 className="font-playfair text-lg mb-2">Location</h3>
                    <address className="not-italic text-muted-foreground font-montserrat">
                        Amman<br/>
                        Al-Rabieh<br/>
                    </address>
                </div>
            </div>

            <div className="flex items-start">
                <Phone className="text-umami-gold mr-4 h-5 w-5 mt-1"/>
                <div>
                    <h3 className="font-playfair text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground font-montserrat">
                        Main: (962) 7 9089 4715
                    </p>
                </div>
            </div>

            <div className="flex items-start">
                <Clock className="text-umami-gold mr-4 h-5 w-5 mt-1"/>
                <div>
                    <h3 className="font-playfair text-lg mb-2">Hours</h3>
                    <p className="text-muted-foreground font-montserrat">
                        We are always working!
                    </p>
                </div>
            </div>
        </div>

        <SocialLinks />
    </div>
);

// Social links component
const SocialLinks = () => (
    <div className="mt-10">
        <h3 className="font-playfair text-lg mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
            <a href="https://instagram.com/umamiamman"
               className="w-10 h-10 rounded-full bg-umami flex items-center justify-center text-umami-light hover:bg-umami-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61570837547092#"
               className="w-10 h-10 rounded-full bg-umami flex items-center justify-center text-umami-light hover:bg-umami-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
            </a>
        </div>
    </div>
);

// Form field component for better reusability
const FormField = ({ label, id, type = "text", value, onChange, required = false, placeholder, children }: { label: string; id: string; type?: string; value: any; onChange: any; required?: boolean; placeholder?: string; children?: React.ReactNode }) => (
    <div className="space-y-2">
        <Label htmlFor={id}>{label}</Label>
        {children || (
            <Input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        )}
    </div>
);

// Subject select component
const SubjectSelect = ({ value, onChange }) => (
    <select
        id="subject"
        value={value}
        onChange={onChange}
        className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        required
    >
        <option value="">Select a subject</option>
        <option value="orders">Orders</option>
        <option value="reservation">Reservation Inquiry</option>
        <option value="catering">Catering Information</option>
        <option value="subscription">Meal Subscription</option>
        <option value="chef">Private Chef</option>
        <option value="feedback">Feedback</option>
        <option value="employment">Employment Opportunities</option>
        <option value="other">Other</option>
    </select>
);

// Custom hook for form logic
const useContactForm = (initialType, initialPlan) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: initialType || "",
        message: initialPlan ? `Subscription Plan: ${initialPlan}` : "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    return { formData, status, setStatus, handleChange, resetForm };
};

// Email service functions
const createMessageBody = (formData) => `
CONTACT FORM SUBMISSION

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
`.trim();

const createTemplateParams = (formData) => ({
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || "N/A",
    subject: formData.subject || "General",
    message: createMessageBody(formData),
    reply_to: formData.email,
});

// Contact form component
const ContactForm = ({ formData, status, onSubmit, onChange }) => (
    <div className="bg-umami/5 p-5" id="contact-form">
        <h2 className="text-3xl font-playfair mb-8">Send a Message</h2>
        <form onSubmit={onSubmit} className="space-y-6">
            <FormField
                label="Full Name"
                id="name"
                value={formData.name}
                onChange={onChange}
                placeholder="John Doe"
                required
            />

            <FormField
                label="Email Address"
                id="email"
                type="email"
                value={formData.email}
                onChange={onChange}
                placeholder="john@example.com"
                required
            />

            <FormField
                label="Phone Number"
                id="phone"
                value={formData.phone}
                onChange={onChange}
                placeholder="962 7 9089 4715"
                required
            />

            <FormField label="Subject" id="subject" value={formData.subject} onChange={onChange}>
                <SubjectSelect value={formData.subject} onChange={onChange} />
            </FormField>

            <FormField label="Message" id="message" value={formData.message} onChange={onChange}>
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={onChange}
                    rows={5}
                    placeholder="Tell us more about your needs, preferences, or event..."
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    required
                />
            </FormField>

            <Button
                type="submit"
                className="w-full bg-umami text-umami-light hover:bg-umami-dark font-montserrat tracking-wider"
                disabled={status === "Sending..."}
            >
                {status === "Sending..." ? "Sending..." : "Send Message"}
            </Button>

            {status && <p className="text-center text-sm text-muted-foreground">{status}</p>}
        </form>
    </div>
);

// Main Contact component
const Contact = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const initialType = query.get("type") || "";
    const initialPlan = query.get("plan") || "";

    const { formData, status, setStatus, handleChange, resetForm } = useContactForm(initialType, initialPlan);

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    // Scroll to form when param is detected
    useEffect(() => {
        const formAnchor = document.getElementById("contact-form");
        if (formAnchor) {
            formAnchor.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const templateParams = createTemplateParams(formData);

            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams
            );

            if (result.status === 200) {
                setStatus("Message sent successfully!");
                resetForm();
            } else {
                setStatus("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus(`Error sending message: ${error.text || error.message}`);
        }
    };

    return (
        <Layout>
            <ContactHero />

            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <ContactInfo />
                        <ContactForm
                            formData={formData}
                            status={status}
                            onSubmit={handleSubmit}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </section>
        </Layout>
    );
};
export default Contact;