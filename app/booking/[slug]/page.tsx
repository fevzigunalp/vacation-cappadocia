import { tours } from "@/data/tours";
import BookingDetail from "./BookingDetail";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const tour = tours.find((t) => t.slug === slug);
    return { title: tour ? `${tour.title} - Vacation Cappadocia` : "Tour - Vacation Cappadocia" };
  });
}

export default function BookingPage() {
  return <BookingDetail />;
}
