
import { Layout } from "@/components/layout/layout";
import { CateringHero } from "@/components/catering/hero-section";
import { ServicesOverview } from "@/components/catering/services-overview";
import { ProcessSection } from "@/components/catering/process-section";
import { InquiryForm } from "@/components/catering/inquiry-form";

const cateringServices = [
  {
    title: "Corporate Events",
    description: "From intimate executive lunches to large company gatherings, we create memorable dining experiences for corporate clients that reflect your company's standards and style.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    options: ["Breakfast meetings", "Executive lunches", "Client dinners", "Holiday parties", "Product launches"]
  },
  {
    title: "Private Celebrations",
    description: "Let us bring the Revolver by Umami experience to your special occasions. Whether it's a family gathering, milestone birthday, or anniversary, we customize our offerings to suit your event.",
    image: "https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?q=80&w=2070",
    options: ["Birthday celebrations", "Anniversary dinners", "Family gatherings", "Dinner parties", "Graduation events"]
  },
  {
    title: "Wedding Catering",
    description: "Your wedding day deserves exceptional cuisine. Our wedding catering services include custom menu design, tastings, and flawless execution to ensure your celebration is as delicious as it is memorable.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070",
    options: ["Reception dinners", "Rehearsal dinners", "Bridal showers", "Post-wedding brunches", "Custom wedding cakes"]
  }
];

const Catering = () => {
  return (
    <Layout>
      <CateringHero />
      <ServicesOverview services={cateringServices} />
      <ProcessSection />
      <InquiryForm />
    </Layout>
  );
};

export default Catering;
