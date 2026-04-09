export interface Tour {
  slug: string;
  title: string;
  image: string;
  duration: string;
  rating: number;
  price: number;
  location: string;
  popular: boolean;
}

export const tours: Tour[] = [
  {
    slug: "classic-cappadocia-tour",
    title: "Classic Cappadocia Tour",
    image: "/images/tours/classic-cappadocia.jpg",
    duration: "2 hours",
    rating: 4,
    price: 137,
    location: "Cappadocia",
    popular: false,
  },
  {
    slug: "cappadocia-winter-tour",
    title: "Cappadocia Winter Tour",
    image: "/images/tours/winter-tour.jpg",
    duration: "3 days",
    rating: 4,
    price: 122,
    location: "Cappadocia",
    popular: false,
  },
  {
    slug: "best-honeymoon-tour",
    title: "Best Honeymoon Tour",
    image: "/images/tours/honeymoon.jpg",
    duration: "3 days",
    rating: 4,
    price: 102,
    location: "Cappadocia",
    popular: true,
  },
  {
    slug: "fascinating-cappadocia-tour",
    title: "Fascinating Cappadocia Tour",
    image: "/images/tours/fascinating.jpg",
    duration: "1 days",
    rating: 4,
    price: 110,
    location: "Cappadocia",
    popular: false,
  },
  {
    slug: "popular-cappadocia",
    title: "Popular Cappadocia",
    image: "/images/tours/popular-cappadocia.jpg",
    duration: "2 days",
    rating: 4,
    price: 80,
    location: "Cappadocia",
    popular: false,
  },
  {
    slug: "spirit-of-cappadocia",
    title: "Spirit of Cappadocia",
    image: "/images/tours/spirit.jpg",
    duration: "4 days",
    rating: 4,
    price: 50,
    location: "Cappadocia",
    popular: false,
  },
  {
    slug: "cappadocia-most-popular-trekking-route",
    title: "Cappadocia Most Popular Trekking Route",
    image: "/images/tours/trekking.jpg",
    duration: "1 days",
    rating: 4,
    price: 80,
    location: "Cappadocia",
    popular: false,
  },
];
