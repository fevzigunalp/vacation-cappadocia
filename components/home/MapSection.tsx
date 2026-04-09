import Image from "next/image";

export default function MapSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative w-full">
          <Image
            src="/images/general/map.png"
            alt="Cappadocia Map"
            width={1200}
            height={600}
            className="mx-auto w-full max-w-4xl"
          />
        </div>
      </div>
    </section>
  );
}
