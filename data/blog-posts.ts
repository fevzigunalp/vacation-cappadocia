export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
}

const IMAGE_BASE = "https://vacationcappadocia.com/wp-content/uploads";

export const blogPosts: BlogPost[] = [
  {
    slug: "cappadocia",
    title: "Cappadocia",
    date: "March 10, 2023",
    image: `${IMAGE_BASE}/2023/03/32401099-820x760.jpg`,
  },
  {
    slug: "faq",
    title: "Frequently Asked Questions",
    date: "March 6, 2023",
    image: `${IMAGE_BASE}/2023/03/public-examination-preparation-concept-820x760.jpg`,
  },
  {
    slug: "reservation-conditions",
    title: "Reservation Conditions",
    date: "March 6, 2023",
    image: `${IMAGE_BASE}/2023/03/plastic-plaque-with-inscription-reserved-restaurant-table-820x760.jpg`,
  },
  {
    slug: "mausoleum",
    title: "Mausoleum",
    date: "March 10, 2023",
    image: `${IMAGE_BASE}/2022/06/anitkabir-1-820x760.jpg`,
  },
];
