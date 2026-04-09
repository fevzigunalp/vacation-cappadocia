import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Travel Style", slug: "travel-style", tourCount: 0, image: "/images/tours/classic-cappadocia.jpg" },
  { name: "Activities Type", slug: "activities-type", tourCount: 3, image: "/images/activities/horse-riding.jpg" },
  { name: "Adventure", slug: "adventure", tourCount: 2, image: "/images/activities/jeep-safari.jpg" },
  { name: "ATV (Quad Bike)", slug: "atv", tourCount: 2, image: "/images/activities/atv-sunrise.jpg" },
  { name: "Ballon Ride", slug: "balloon-ride", tourCount: 2, image: "/images/activities/classic-balloon.jpg" },
  { name: "Camel Safari", slug: "camel-safari", tourCount: 0, image: "/images/activities/camel-ride.jpg" },
  { name: "Cultural", slug: "cultural", tourCount: 4, image: "/images/activities/dervishes.jpg" },
  { name: "Experiences", slug: "experiences", tourCount: 1, image: "/images/activities/turkish-bath.jpg" },
];

export default function Categories() {
  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center text-sm font-semibold tracking-widest text-primary">
          browse by category
        </p>
        <h2 className="mb-12 text-center text-3xl text-accent md:text-4xl">
          Choose the Type of Vacation you want
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="group relative block h-44 overflow-hidden rounded-[3px]"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-lg">{c.name}</h3>
                <p className="text-sm opacity-90">{c.tourCount} Tour{c.tourCount !== 1 ? "s" : ""}+</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
