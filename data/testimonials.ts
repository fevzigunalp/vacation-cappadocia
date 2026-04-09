export interface Testimonial {
  name: string;
  location: string;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Veronica Doe",
    location: "London, England",
    text: "Absolutely wonderful! Just the right amount of time spent snorkeling and one of the most beautiful beaches I have ever seen. Customer service was professional. Highly recommend.",
    image: "/images/testimonials/veronica.jpg",
  },
  {
    name: "Sofia Joly",
    location: "London, England",
    text: "Customer service was professional. Highly recommend. Absolutely wonderful! Just the right amount of time spent snorkeling and one of the most beautiful beaches I have ever seen.",
    image: "/images/testimonials/sofia.jpg",
  },
  {
    name: "Brad Cooper",
    location: "London, England",
    text: "Exceptional service from start to finish. The hot air balloon experience was once in a lifetime. The team was professional, friendly and made sure we had the best time possible.",
    image: "/images/testimonials/brad.jpg",
  },
];
