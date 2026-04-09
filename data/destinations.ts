export interface Destination {
  slug: string;
  name: string;
  image: string;
  tourCount: number;
}

export const destinations: Destination[] = [
  {
    slug: "aksaray",
    name: "Aksaray",
    image: "/images/destinations/aksaray.jpg",
    tourCount: 0,
  },
  {
    slug: "central-cappadocia",
    name: "Central Cappadocia",
    image: "/images/destinations/central.jpg",
    tourCount: 6,
  },
  {
    slug: "goreme",
    name: "Göreme",
    image: "/images/destinations/goreme.jpg",
    tourCount: 11,
  },
  {
    slug: "kayseri",
    name: "Kayseri",
    image: "/images/destinations/kayseri.jpg",
    tourCount: 1,
  },
  {
    slug: "urgup",
    name: "Ürgüp",
    image: "/images/destinations/urgup.jpg",
    tourCount: 5,
  },
];
