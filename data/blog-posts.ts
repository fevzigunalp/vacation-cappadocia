export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cappadocia",
    title: "Cappadocia",
    date: "March 10, 2023",
    image: "/images/blog/cappadocia.jpg",
  },
  {
    slug: "faq",
    title: "Frequently Asked Questions",
    date: "March 6, 2023",
    image: "/images/blog/faq.jpg",
  },
  {
    slug: "reservation-conditions",
    title: "Reservation Conditions",
    date: "March 6, 2023",
    image: "/images/blog/reservation.jpg",
  },
  {
    slug: "mausoleum",
    title: "Mausoleum",
    date: "March 10, 2023",
    image: "/images/blog/mausoleum.jpg",
  },
];
