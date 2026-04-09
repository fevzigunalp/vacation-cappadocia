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

const IMAGE_BASE = "https://vacationcappadocia.com/wp-content/uploads";

export const tours: Tour[] = [
  {
    slug: "classic-cappadocia-tour",
    title: "Classic Cappadocia Tour",
    image: `${IMAGE_BASE}/2022/06/balloons-goreme-820x520.jpg`,
    duration: "2 hours",
    rating: 4,
    price: 137,
    location: "Cappadocia",
    popular: false,
  },
  {
    slug: "cappadocia-winter-tour",
    title: "Cappadocia Winter Tour",
    image: `${IMAGE_BASE}/2022/06/cappadocia-winter-820x520.jpg`,
    duration: "3 days",
    rating: 4,
    price: 122,
    location: "Cappadocia",
    popular: false,
  },
  {
    slug: "best-honeymoon-tour",
    title: "Best Honeymoon Tour",
    image: `${IMAGE_BASE}/2022/06/honeymoon-cappadocia-820x520.jpg`,
    duration: "3 days",
    rating: 4,
    price: 102,
    location: "Cappadocia",
    popular: true,
  },
  {
    slug: "fascinating-cappadocia-tour",
    title: "Fascinating Cappadocia Tour",
    image: `${IMAGE_BASE}/2022/06/fascinating-cappadocia-820x520.jpg`,
    duration: "1 day",
    rating: 4,
    price: 110,
    location: "Cappadocia",
    popular: false,
  },
  {
    slug: "popular-cappadocia",
    title: "Popular Cappadocia",
    image: `${IMAGE_BASE}/2022/06/popular-cappadocia-820x520.jpg`,
    duration: "2 days",
    rating: 0,
    price: 80,
    location: "Cappadocia",
    popular: false,
  },
  {
    slug: "spirit-of-cappadocia",
    title: "Spirit of Cappadocia",
    image: `${IMAGE_BASE}/2022/06/spirit-cappadocia-820x520.jpg`,
    duration: "4 days",
    rating: 0,
    price: 50,
    location: "Cappadocia",
    popular: false,
  },
  {
    slug: "cappadocia-trekking-route",
    title: "Cappadocia Most Popular Trekking Route",
    image: `${IMAGE_BASE}/2022/06/trekking-cappadocia-820x520.jpg`,
    duration: "1 day",
    rating: 0,
    price: 80,
    location: "Cappadocia",
    popular: false,
  },
];
