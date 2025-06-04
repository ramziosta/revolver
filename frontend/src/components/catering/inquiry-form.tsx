
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// Import EmailJS
import emailjs from '@emailjs/browser';

export const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    guests: '',
    details: ''
  });

  const [status, setStatus] = useState('');

  // Initialize EmailJS (you only need to do this once)
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Debug: Log environment variables
      console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // EmailJS template parameters - format catering inquiry details
      const cateringMessage = `
CATERING INQUIRY

Contact Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Event Details:
Event Type: ${formData.eventType}
Event Date: ${formData.date}
Number of Guests: ${formData.guests}

Additional Details:
${formData.details}
      `.trim();

      const templateParams = {
        first_name: formData.name.split(' ')[0] || formData.name,
        last_name: formData.name.split(' ')[1] || '',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "N/A",
        subject: "Catering Inquiry",
        message: cateringMessage,
        reply_to: formData.email,
      };

      console.log('Template params:', templateParams);

      const result = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setStatus('Catering inquiry submitted successfully! We\'ll contact you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          date: '',
          guests: '',
          details: ''
        });
      } else {
        setStatus('Failed to send inquiry. Please try again or call us.');
      }
    } catch (error) {
      console.error('EmailJS error details:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      setStatus(`Error sending inquiry: ${error.text || error.message}`);
    }
  };

  return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-playfair mb-6 text-center">Request Catering Information</h2>
            <p className="text-muted-foreground font-montserrat text-center mb-8">
              Fill out the form below, and our catering team will get back to you within 24 hours to discuss your event needs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="962 7 9089 4715"
                      required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type</Label>
                  <select
                      id="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                  >
                    <option value="">Select event type</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Private Celebration">Private Celebration</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Event Date</Label>
                  <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input
                      id="guests"
                      type="number"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="50"
                      required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Event Details</Label>
                <textarea
                    id="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Please provide any additional details about your event, including venue, preferred menu style, and any dietary restrictions."
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    required
                ></textarea>
              </div>

              <Button
                  type="submit"
                  className="w-full bg-umami text-umami-light hover:bg-umami-dark font-montserrat tracking-wider"
                  disabled={status === "Sending..."}
              >
                {status === "Sending..." ? "Sending..." : "Submit Inquiry"}
              </Button>

              {status && (
                  <p className="text-center text-sm text-muted-foreground">{status}</p>
              )}
            </form>

            {/*<div className="mt-12 text-center">*/}
            {/*  <p className="text-muted-foreground font-montserrat mb-4">*/}
            {/*    For immediate assistance or to speak with our catering coordinator directly:*/}
            {/*  </p>*/}
            {/*  <p className="font-montserrat">*/}
            {/*    <strong>Email:</strong> umamiamman@gmail.com | <strong>Phone:</strong> (962) 7 9089 4715*/}
            {/*  </p>*/}
            {/*</div>*/}
          </div>
        </div>
      </section>
  );
}