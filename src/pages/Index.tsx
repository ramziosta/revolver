import { Layout } from "@/components/layout/layout";
import { HeroSection } from "@/components/home/hero-section";
import {SubscriptionSection} from "@/components/home/subscription-section";
import { AboutSection } from "@/components/home/about-section";
import { MenuPreviewSection } from "@/components/home/menu-preview-section";
import { CateringSection } from "@/components/home/catering-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ReservationSection } from "@/components/home/reservation-section";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
        <SubscriptionSection />
      <MenuPreviewSection />
      <CateringSection />
      <TestimonialsSection />
      <ReservationSection />
    </Layout>
  );
};

export default Index;
