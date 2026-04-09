"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/hero/slider1.jpg",
    heading: "Welcome to Cappadocia",
    subtitle: "Discover the magic of fairy chimneys",
    cta: "Explore Tours",
    link: "/tours",
  },
  {
    image: "/images/hero/slider2.jpg",
    heading: "Hot Air Balloon Rides",
    subtitle: "Experience the sunrise from above",
    cta: "Book Now",
    link: "/activities/classic-balloon-tour",
  },
  {
    image: "/images/hero/slider3.jpg",
    heading: "Unforgettable Adventures",
    subtitle: "Create memories that last forever",
    cta: "View Activities",
    link: "/activities",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-screen min-h-[500px] sm:min-h-[600px]"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative flex h-screen min-h-[600px] items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 px-4 text-center text-white">
                <h1 className="mb-4 text-4xl md:text-6xl lg:text-7xl text-[#f5f0e8]">
                  {slide.heading}
                </h1>
                <p className="mb-8 text-lg md:text-2xl text-[#f5f0e8]/90">{slide.subtitle}</p>
                <Link
                  href={slide.link}
                  className="inline-block rounded-[3px] bg-primary px-[27px] py-[11px] text-lg font-semibold text-white transition duration-300 hover:bg-primary-dark"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
