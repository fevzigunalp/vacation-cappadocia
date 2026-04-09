export interface Activity {
  slug: string;
  title: string;
  image: string;
  duration: string;
  rating: number;
  price: number;
  popular: boolean;
}

export const activities: Activity[] = [
  {
    slug: "classic-balloon-tour",
    title: "Classic Balloon Tour",
    image: "/images/activities/classic-balloon.jpg",
    duration: "1 days",
    rating: 4,
    price: 90,
    popular: true,
  },
  {
    slug: "hot-air-balloon-view",
    title: "Hot Air Balloon View",
    image: "/images/activities/balloon-view.jpg",
    duration: "1 days",
    rating: 4,
    price: 90,
    popular: true,
  },
  {
    slug: "horse-riding",
    title: "Horse Riding",
    image: "/images/activities/horse-riding.jpg",
    duration: "1 days",
    rating: 4,
    price: 90,
    popular: true,
  },
  {
    slug: "jeep-safari-tour",
    title: "Jeep Safari Tour",
    image: "/images/activities/jeep-safari.jpg",
    duration: "1 days",
    rating: 4,
    price: 90,
    popular: true,
  },
  {
    slug: "atv-tours-sunrise",
    title: "ATV Tours - Sunrise",
    image: "/images/activities/atv-sunrise.jpg",
    duration: "2 hours",
    rating: 4,
    price: 90,
    popular: true,
  },
  {
    slug: "camel-ride",
    title: "Camel Ride",
    image: "/images/activities/camel-ride.jpg",
    duration: "1 days",
    rating: 4,
    price: 90,
    popular: true,
  },
  {
    slug: "turkish-bath",
    title: "Turkish Bath",
    image: "/images/activities/turkish-bath.jpg",
    duration: "1 days",
    rating: 4,
    price: 90,
    popular: true,
  },
  {
    slug: "turkish-night",
    title: "Turkish Night",
    image: "/images/activities/turkish-night.jpg",
    duration: "1 days",
    rating: 4,
    price: 90,
    popular: true,
  },
  {
    slug: "dervishes-ceremony",
    title: "Dervishes Ceremony",
    image: "/images/activities/dervishes.jpg",
    duration: "1 days",
    rating: 4,
    price: 90,
    popular: true,
  },
  {
    slug: "deluxe-balon-tour",
    title: "Deluxe Balon Tour",
    image: "/images/activities/deluxe-balloon.jpg",
    duration: "1 days",
    rating: 4,
    price: 88,
    popular: true,
  },
  {
    slug: "private-hot-air-ballon-tours",
    title: "Private Hot Air Ballon Tours",
    image: "/images/activities/private-balloon.jpg",
    duration: "",
    rating: 4,
    price: 0,
    popular: false,
  },
  {
    slug: "private-balloon-tour",
    title: "Private Balloon Tour",
    image: "/images/activities/private-balloon2.jpg",
    duration: "",
    rating: 4,
    price: 0,
    popular: false,
  },
  {
    slug: "atv-tours-sunset",
    title: "ATV Tours - Sunset",
    image: "/images/activities/atv-sunrise.jpg",
    duration: "",
    rating: 4,
    price: 0,
    popular: false,
  },
];
