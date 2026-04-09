import { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import AboutIntro from "@/components/about/AboutIntro";
import WhyBookWithUs from "@/components/about/WhyBookWithUs";
import TeamSection from "@/components/about/TeamSection";
import TestimonialSlider from "@/components/shared/TestimonialSlider";
import CTABanner from "@/components/about/CTABanner";

export const metadata: Metadata = {
  title: "About Us - Vacation Cappadocia",
  description:
    "Learn about Vacation Cappadocia, your trusted travel partner for unforgettable Cappadocia tours and experiences.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutIntro />
      <WhyBookWithUs />
      <TeamSection />
      <TestimonialSlider />
      <CTABanner />
    </>
  );
}
