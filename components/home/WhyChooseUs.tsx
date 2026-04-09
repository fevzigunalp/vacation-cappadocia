import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const points = [
  "Professional Tour Guide",
  "Exceptional flexibility",
  "Quality you can trust",
  "Award-winning support",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative h-[400px] overflow-hidden rounded-xl lg:h-[500px]">
          <Image
            src="https://vacationcappadocia.com/wp-content/uploads/2023/03/32401099-820x760.jpg"
            alt="Cappadocia Experience"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold tracking-widest text-orange-500">
            WHY CHOOSE US
          </p>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Experiences Meet High Quality Standards
          </h2>
          <ul className="mb-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="h-5 w-5 shrink-0 text-orange-500" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
