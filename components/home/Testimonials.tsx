"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          What Our Guests Say
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="pb-12 text-center">
                <Quote className="mx-auto mb-6 h-10 w-10 text-orange-400" />
                <p className="mb-6 text-lg leading-relaxed text-gray-600 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
