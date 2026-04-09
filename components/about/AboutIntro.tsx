import Image from "next/image";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Custom Travel Solutions
          </span>
          <p className="text-5xl md:text-6xl font-light text-gray-300 mt-2 mb-2 italic">
            time to explore
          </p>
          <h2 className="text-3xl md:text-4xl text-accent mb-6 leading-tight">
            A Better Way of Traveling and Touring the Cappadocia
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Vacation Cappadocia is a luxury travel booking portal where you
            effortlessly can book day tours, fixed group departures, holidays
            and vacation packages in 12+ unique destinasyon in Cappadocia.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Today, booking the right tour or holiday package has become a time
            consuming and painful process. Which tour operator is qualified?
            What&apos;s the right tour price? When you pay an upfront deposit to
            an unknown tour operator, is your money safe? Are the reviews seen
            on a local operators website genuine?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-[3px] font-semibold hover:bg-primary-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Right - Decorative Image */}
        <div className="relative flex justify-center">
          <Image
            src="/images/about/about-deco.png"
            alt="About Vacation Cappadocia"
            width={500}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
