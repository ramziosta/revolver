import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Calendar, Clock, User, Users } from "lucide-react";
import { useState, useEffect } from "react";
import image from "../../assets/event.jpg";
// Import EmailJS
import emailjs from '@emailjs/browser';

export function ReservationSection() {
  const [bookingFormData, setBookingFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    subject: 'reservation', // Set default subject for reservations
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  // Initialize EmailJS (you only need to do this once)
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setBookingFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    try {
      // Debug: Log environment variables
      console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      // EmailJS template parameters - format reservation details
      const reservationMessage = `
RESERVATION REQUEST

Contact Information:
Name: ${bookingFormData.name}
Email: ${bookingFormData.email}
Phone: ${bookingFormData.phone}

Reservation Details:
Event Date: ${bookingFormData.date}
Preferred Time: ${bookingFormData.time}
Number of Guests: ${bookingFormData.guests}

Special Requests/Event Details:
${bookingFormData.message || 'No additional details provided'}
      `.trim();

      const templateParams = {
        first_name: bookingFormData.name.split(' ')[0] || bookingFormData.name,
        last_name: bookingFormData.name.split(' ')[1] || '',
        from_name: bookingFormData.name,
        from_email: bookingFormData.email,
        phone: bookingFormData.phone || "N/A",
        subject: "Reservation Request",
        message: reservationMessage,
        reply_to: bookingFormData.email,
      };

      console.log('Template params:', templateParams);

      const result = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setFormStatus('Reservation request sent successfully! We\'ll contact you soon to confirm.');
        setBookingFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          subject: 'reservation',
          message: ''
        });
      } else {
        setFormStatus('Failed to send reservation request. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS error details:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      setFormStatus(`Error sending reservation request: ${error.text || error.message}`);
    }
  };

  return (
      <section id="book-event" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-m font-semibold text-umami-gold font-montserrat tracking-widest uppercase mb-3 inline-block">Reservations</span>
              <h2 className="text-3xl md:text-4xl font-playfair mb-6">Book Your Event</h2>

              <p className="text-muted-foreground mb-6 font-montserrat">
                Secure your date for an unforgettable occasion. Early reservations are encouraged to ensure availability.
                Once received, our team will be in touch to craft your menu and bring your vision to life.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                          id="name"
                          value={bookingFormData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="pl-10"
                          required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        type="email"
                        value={bookingFormData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input
                        id="phone"
                        type="text"
                        value={bookingFormData.phone}
                        onChange={handleChange}
                        placeholder="962 7 9089 4715"
                        required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Event Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                          id="date"
                          type="date"
                          value={bookingFormData.date}
                          onChange={handleChange}
                          className="pl-10"
                          required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <select
                          id="time"
                          value={bookingFormData.time}
                          onChange={handleChange}
                          className="w-full h-10 pl-10 pr-4 flex rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          required
                      >
                        <option value="">Select time</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="12:30 PM">12:30 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="1:30 PM">1:30 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="7:30 PM">7:30 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="8:30 PM">8:30 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Guest Count</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <select
                        id="guests"
                        value={bookingFormData.guests}
                        onChange={handleChange}
                        className="w-full h-10 pl-10 pr-4 flex rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                    >
                      <option value="">Select number of guests</option>
                      <option value="1 person">1 person</option>
                      <option value="2 people">2 people</option>
                      <option value="3 people">3 people</option>
                      <option value="4 people">4 people</option>
                      <option value="5 people">5 people</option>
                      <option value="6 people">6 people</option>
                      <option value="7+ people">7+ people (please specify in notes)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Event Details & Special Requests</Label>
                  <textarea
                      id="message"
                      value={bookingFormData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Dietary restrictions, special occasions, etc."
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                  ></textarea>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-umami text-umami-light hover:bg-umami-dark font-montserrat tracking-wider"
                    disabled={formStatus === "Sending..."}
                >
                  {formStatus === "Sending..." ? "Sending..." : "Request Consultation"}
                </Button>

                {formStatus && (
                    <p className="mt-2 text-center text-sm text-muted-foreground">
                      {formStatus}
                    </p>
                )}
              </form>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <img
                    src={image} //"https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974"
                    alt="Restaurant interior"
                    className="rounded-sm w-full h-auto object-cover"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-umami-gold z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}