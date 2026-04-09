"use client";

import { activities } from "@/data/activities";
import TourCard from "@/components/shared/TourCard";

export default function ActivitiesGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center text-sm font-semibold tracking-widest text-primary">
          browse by Activities
        </p>
        <h2 className="mb-12 text-center text-3xl text-accent md:text-4xl">
          Find Your Own Adventure and Experience
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {activities.map((a) => (
            <TourCard key={a.slug} tour={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
