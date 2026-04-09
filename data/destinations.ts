export interface Destination {
  slug: string;
  name: string;
  image: string;
  tourCount: number;
}

const IMAGE_BASE = "https://vacationcappadocia.com/wp-content/uploads";

export const destinations: Destination[] = [
  {
    slug: "aksaray",
    name: "Aksaray",
    image: `${IMAGE_BASE}/2022/06/aksaray-820x520.jpg`,
    tourCount: 0,
  },
  {
    slug: "central-cappadocia",
    name: "Central Cappadocia",
    image: `${IMAGE_BASE}/2022/06/central-cappadocia-820x520.jpg`,
    tourCount: 6,
  },
  {
    slug: "goreme",
    name: "Göreme",
    image: `${IMAGE_BASE}/2022/06/goreme-820x520.jpg`,
    tourCount: 11,
  },
  {
    slug: "kayseri",
    name: "Kayseri",
    image: `${IMAGE_BASE}/2022/06/kayseri-820x520.jpg`,
    tourCount: 1,
  },
  {
    slug: "urgup",
    name: "Ürgüp",
    image: `${IMAGE_BASE}/2022/06/urgup-820x520.jpg`,
    tourCount: 5,
  },
];
