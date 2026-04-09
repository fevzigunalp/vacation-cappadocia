import { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import TourCard from "@/components/shared/TourCard";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Tours - Vacation Cappadocia",
  description:
    "Explore our curated selection of Cappadocia tours including classic tours, winter tours, honeymoon packages, and more.",
};

export default function ToursPage() {
  return (
    <>
      <PageBanner
        title="Tours"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tours" },
        ]}
      />
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
