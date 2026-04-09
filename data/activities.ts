export interface Activity {
  slug: string;
  title: string;
  image: string;
  duration: string;
  rating: number;
  price: number;
}

const IMAGE_BASE = "https://vacationcappadocia.com/wp-content/uploads";

export const activities: Activity[] = [
  {
    slug: "classic-balloon-tour",
    title: "Classic Balloon Tour",
    image: `${IMAGE_BASE}/2022/06/classic-balloon-tour-820x520.jpg`,
    duration: "1 hour",
    rating: 5,
    price: 100,
  },
  {
    slug: "hot-air-balloon-view",
    title: "Hot Air Balloon View",
    image: `${IMAGE_BASE}/2022/06/hot-air-balloon-view-820x520.jpg`,
    duration: "1 hour",
    rating: 5,
    price: 80,
  },
  {
    slug: "horse-riding",
    title: "Horse Riding",
    image: `${IMAGE_BASE}/2022/06/horse-riding-cappadocia-820x520.jpg`,
    duration: "2 hours",
    rating: 4,
    price: 60,
  },
  {
    slug: "jeep-safari",
    title: "Jeep Safari",
    image: `${IMAGE_BASE}/2022/06/jeep-safari-cappadocia-820x520.jpg`,
    duration: "3 hours",
    rating: 4,
    price: 70,
  },
  {
    slug: "atv-sunrise",
    title: "ATV Sunrise",
    image: `${IMAGE_BASE}/2022/06/atv-sunrise-cappadocia-820x520.jpg`,
    duration: "2 hours",
    rating: 4,
    price: 50,
  },
  {
    slug: "camel-ride",
    title: "Camel Ride",
    image: `${IMAGE_BASE}/2022/06/camel-ride-cappadocia-820x520.jpg`,
    duration: "1 hour",
    rating: 4,
    price: 40,
  },
  {
    slug: "turkish-bath",
    title: "Turkish Bath",
    image: `${IMAGE_BASE}/2022/06/turkish-bath-cappadocia-820x520.jpg`,
    duration: "2 hours",
    rating: 4,
    price: 45,
  },
  {
    slug: "turkish-night-show",
    title: "Turkish Night Show",
    image: `${IMAGE_BASE}/2022/06/turkish-night-show-820x520.jpg`,
    duration: "3 hours",
    rating: 4,
    price: 55,
  },
  {
    slug: "dervishes-ceremony",
    title: "Dervishes Ceremony",
    image: `${IMAGE_BASE}/2022/06/dervishes-ceremony-820x520.jpg`,
    duration: "1.5 hours",
    rating: 5,
    price: 35,
  },
  {
    slug: "deluxe-balloon-tour",
    title: "Deluxe Balloon Tour",
    image: `${IMAGE_BASE}/2022/06/deluxe-balloon-tour-820x520.jpg`,
    duration: "1.5 hours",
    rating: 5,
    price: 200,
  },
  {
    slug: "private-hot-air-balloon",
    title: "Private Hot Air Balloon",
    image: `${IMAGE_BASE}/2022/06/private-hot-air-balloon-820x520.jpg`,
    duration: "1 hour",
    rating: 5,
    price: 300,
  },
  {
    slug: "private-balloon-tour",
    title: "Private Balloon Tour",
    image: `${IMAGE_BASE}/2022/06/private-balloon-tour-820x520.jpg`,
    duration: "1.5 hours",
    rating: 5,
    price: 350,
  },
];
