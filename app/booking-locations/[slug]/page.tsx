import PageBanner from "@/components/layout/PageBanner";
import TourCard from "@/components/shared/TourCard";
import { tours } from "@/data/tours";
import { destinations } from "@/data/destinations";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  return {
    title: `${dest?.name || slug} Tours - Vacation Cappadocia`,
  };
}

export default async function BookingLocationPage({ params }: Props) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  const locationName = dest?.name || slug;

  // Filter tours by location (case-insensitive partial match)
  const filtered = tours.filter((t) =>
    t.location.toLowerCase().includes(slug.toLowerCase())
  );

  return (
    <>
      <PageBanner
        title={locationName}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destination" },
          { label: locationName },
        ]}
      />
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No tours available for {locationName} yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
