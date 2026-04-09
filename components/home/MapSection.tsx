"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = ["Cappadocia", "Goreme", "South America", "Africa", "Asia Indian Ocean"];

export default function MapSection() {
  const [activeTab, setActiveTab] = useState("Cappadocia");

  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage:
          "url(https://vacationcappadocia.com/wp-content/uploads/2023/02/h3_map1.png)",
      }}
    >
      <div className="absolute inset-0 bg-white/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 hover:bg-orange-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          Explore {activeTab}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Discover amazing destinations, tours, and activities across {activeTab}. Plan your next adventure with us.
        </p>
        <Link
          href="/destinations"
          className="inline-block rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
        >
          Check Our Destinations
        </Link>
      </div>
    </section>
  );
}
