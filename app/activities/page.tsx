import { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import TourCard from "@/components/shared/TourCard";
import { activities } from "@/data/activities";

export const metadata: Metadata = {
  title: "Activities - Vacation Cappadocia",
  description:
    "Discover exciting activities in Cappadocia: balloon rides, horse riding, jeep safari, ATV tours, and more.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageBanner
        title="Activities"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Activities" },
        ]}
      />
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <TourCard key={activity.slug} tour={activity} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
