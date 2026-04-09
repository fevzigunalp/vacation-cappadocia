export interface TeamMember {
  name: string;
  role: string;
  image: string;
  instagram: string;
}

const IMAGE_BASE = "https://vacationcappadocia.com/wp-content/uploads";

export const team: TeamMember[] = [
  {
    name: "Refik Tokmak",
    role: "CEO/Founder",
    image: `${IMAGE_BASE}/2023/03/png-kako-qKDNrw2aUNbF38CQ-600x449-1.webp`,
    instagram: "@refiktokmak1990",
  },
  {
    name: "Neşe Ersöz",
    role: "Marketing",
    image: `${IMAGE_BASE}/2023/03/kako-fgTw0hHZVKRYpkXw-1-600x449-2.webp`,
    instagram: "@joydreamjoy",
  },
  {
    name: "Bilgen Günalp",
    role: "Organizer",
    image: `${IMAGE_BASE}/2023/03/kako-90APAZ4VQNCxCv41-1-600x449-1.webp`,
    instagram: "@gunalpbilgen",
  },
  {
    name: "Selçuk Ersöz",
    role: "Finance Manager",
    image: `${IMAGE_BASE}/2023/03/kako-j5HFVM5JSJNSitVq-600x449-2.webp`,
    instagram: "@f.selcukersoz",
  },
];
