import { tours } from "@/data/tours";
import { activities } from "@/data/activities";
import BookingDetail from "./BookingDetail";

export function generateStaticParams() {
  const tourSlugs = tours.map((t) => ({ slug: t.slug }));
  const activitySlugs = activities.map((a) => ({ slug: a.slug }));
  return [...tourSlugs, ...activitySlugs];
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const item = tours.find((t) => t.slug === slug) || activities.find((a) => a.slug === slug);
    return { title: item ? `${item.title} - Vacation Cappadocia` : "Tour - Vacation Cappadocia" };
  });
}

export default function BookingPage() {
  return <BookingDetail />;
}
