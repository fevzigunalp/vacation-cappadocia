export interface Testimonial {
  name: string;
  location: string;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Veronica Doe",
    location: "London England",
    text: "We had an absolutely wonderful time in Cappadocia. The balloon ride was breathtaking and our tour guide was incredibly knowledgeable. Everything was perfectly organized from start to finish. Highly recommended!",
    image: "/images/testimonials/veronica.jpg",
  },
  {
    name: "John Smith",
    location: "New York USA",
    text: "The best travel experience we've ever had. The team went above and beyond to make our honeymoon special. The cave hotel was stunning and the tours were perfectly planned.",
    image: "/images/testimonials/john.jpg",
  },
  {
    name: "Brad Cooper",
    location: "London England",
    text: "Exceptional service from start to finish. The hot air balloon experience was once in a lifetime. The team was professional, friendly and made sure we had the best time possible.",
    image: "/images/testimonials/brad.jpg",
  },
];
