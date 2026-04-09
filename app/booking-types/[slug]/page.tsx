import PageBanner from "@/components/layout/PageBanner";
import TourCard from "@/components/shared/TourCard";
import { tours } from "@/data/tours";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const label = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${label} - Vacation Cappadocia`,
  };
}

export function generateStaticParams() {
  return [
    { slug: "adventure" },
    { slug: "cultural" },
    { slug: "balloon-ride" },
    { slug: "camel-safari" },
  ];
}

export default async function BookingTypePage({ params }: Props) {
  const { slug } = await params;
  const label = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <PageBanner
        title={label}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tours", href: "/tours" },
          { label },
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
