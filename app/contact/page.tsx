import { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import PhotoGallery from "@/components/contact/PhotoGallery";

export const metadata: Metadata = {
  title: "Contact Us - Vacation Cappadocia",
  description:
    "Get in touch with Vacation Cappadocia for tour bookings, trip queries, and travel inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </section>
      <PhotoGallery />
    </>
  );
}
