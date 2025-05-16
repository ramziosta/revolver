import {useState } from 'react';
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error sending message.');
    }
  };

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
            Contact
          </span>
          <h1 className="text-5xl md:text-7xl font-playfair mb-6 text-white">
            Let’s Talk — Whether It’s Placing an Order, Catering, Reservations, or Collaboration.
          </h1>
          <div className="h-0.5 w-24 bg-umami-gold mb-8"></div>
          <p className="max-w-2xl mx-auto text-white/90 font-montserrat text-lg">
            We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.
            Connect with us for custom orders, private dining inquiries, or any special requests. We're here to bring your vision to the table.
          </p>

        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-playfair mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-umami-gold mr-4 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-playfair text-lg mb-2">Location</h3>
                    <address className="not-italic text-muted-foreground font-montserrat">
                      Amman<br />
                      Al-Rabieh<br />
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-umami-gold mr-4 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-playfair text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground font-montserrat">
                      Main: (962) 7 9089 4715
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-umami-gold mr-4 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-playfair text-lg mb-2">Email Us</h3>
                    <p className="text-muted-foreground font-montserrat">
                     umamiamman@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-umami-gold mr-4 h-5 w-5 mt-1" />
                  <div>
                    <h3 className="font-playfair text-lg mb-2">Hours</h3>
                    <p className="text-muted-foreground font-montserrat">
                    Wa are always working!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-playfair text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/umamiamman" className="w-10 h-10 rounded-full bg-umami flex items-center justify-center text-umami-light hover:bg-umami-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61570837547092#" className="w-10 h-10 rounded-full bg-umami flex items-center justify-center text-umami-light hover:bg-umami-dark transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  {/*<a href="#" className="w-10 h-10 rounded-full bg-umami flex items-center justify-center text-umami-light hover:bg-umami-dark transition-colors">*/}
                  {/*  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>*/}
                  {/*</a>*/}
                </div>
              </div>
            </div>
            {/*Form*/}
            <div>
              <h2 className="text-3xl font-playfair mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="text" value={formData.phone} onChange={handleChange} placeholder="962 7 9089 4715" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <select
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a subject</option>
                    <option value="ordering">Ordering</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="catering">Catering Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="employment">Employment Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please enter your message here..."
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-umami text-umami-light hover:bg-umami-dark font-montserrat tracking-wider">
                  Send Message
                </Button>

                {status && <p className="mt-2 text-center text-sm text-muted-foreground">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/*<section className="py-16 bg-umami-light/5">*/}
      {/*  <div className="container mx-auto px-4">*/}
      {/*    <div className="max-w-5xl mx-auto">*/}
      {/*      <h2 className="text-3xl font-playfair mb-8 text-center">Find Us</h2>*/}
      {/*      */}
      {/*      <div className="bg-white p-1 rounded-sm shadow-sm">*/}
      {/*        /!* Placeholder for a map - in a real implementation, this would be a Google Maps or similar embed *!/*/}
      {/*        <div className="bg-gray-200 h-96 w-full flex items-center justify-center">*/}
      {/*          <p className="text-muted-foreground font-montserrat">Interactive Map Would Be Embedded Here</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      */}
      {/*      <div className="mt-8 text-center">*/}
      {/*        <p className="text-muted-foreground font-montserrat mb-4">*/}
      {/*          Located in the heart of the Culinary District, Revolver by Umami is easily accessible by public transportation and offers valet parking for guests.*/}
      {/*        </p>*/}
      {/*        <Button className="bg-umami text-umami-light hover:bg-umami-dark font-montserrat tracking-wider">*/}
      {/*          Get Directions*/}
      {/*        </Button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </Layout>
  );
};

export default Contact;
