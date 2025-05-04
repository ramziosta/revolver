
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const InquiryForm = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-playfair mb-6 text-center">Request Catering Information</h2>
          <p className="text-muted-foreground font-montserrat text-center mb-8">
            Fill out the form below, and our catering team will get back to you within 24 hours to discuss your event needs.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="962 7 9089 4715" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventType">Event Type</Label>
                <select 
                  id="eventType" 
                  className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select event type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="private">Private Celebration</option>
                  <option value="wedding">Wedding</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Event Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Input id="guests" type="number" placeholder="50" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="details">Event Details</Label>
              <textarea 
                id="details" 
                rows={5}
                placeholder="Please provide any additional details about your event, including venue, preferred menu style, and any dietary restrictions."
                className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full bg-umami text-umami-light hover:bg-umami-dark font-montserrat tracking-wider">
              Submit Inquiry
            </Button>
          </form>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-montserrat mb-4">
              For immediate assistance or to speak with our catering coordinator directly:
            </p>
            <p className="font-montserrat">
              <strong>Email:</strong> umamiamman@gmail.com | <strong>Phone:</strong> (962) 7 9089 4715
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
