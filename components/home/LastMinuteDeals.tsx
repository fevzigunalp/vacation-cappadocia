"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { tours } from "@/data/tours";
import { activities } from "@/data/activities";
import TourCard from "@/components/shared/TourCard";

import "swiper/css";
import "swiper/css/navigation";

const allItems = [...tours, ...activities].sort((a, b) => a.price - b.price);

export default function LastMinuteDeals() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="mb-2 text-center text-sm font-semibold tracking-widest text-primary">
          book now and save
        </p>
        <h2 className="mb-12 text-center text-3xl text-accent md:text-4xl">
          Last Minute Travel Deals
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {allItems.map((item) => (
            <SwiperSlide key={item.slug}>
              <TourCard tour={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
