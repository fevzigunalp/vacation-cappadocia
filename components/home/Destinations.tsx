import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center text-sm font-semibold tracking-widest text-orange-500">
          DISCOVER MAGIC OF CAPPADOCIA!
        </p>
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Top Attractions Destinations
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group relative block h-64 overflow-hidden rounded-xl"
            >
              <Image
                src={d.image}
                alt={d.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-xl font-bold">{d.name}</h3>
                <p className="text-sm opacity-90">{d.tourCount} Tours+</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/destinations"
            className="inline-block rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Explore to More Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
