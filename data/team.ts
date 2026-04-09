export interface TeamMember {
  name: string;
  role: string;
  image: string;
  instagram: string;
}

export const team: TeamMember[] = [
  {
    name: "Refik Tokmak",
    role: "CEO, Founder",
    image: "/images/team/team1.webp",
    instagram: "@refiktokmak1990",
  },
  {
    name: "Neşe Ersöz",
    role: "Marketing",
    image: "/images/team/team2.webp",
    instagram: "@joydreamjoy",
  },
  {
    name: "Bilgen Günalp",
    role: "Organizer",
    image: "/images/team/team3.webp",
    instagram: "@gunalpbilgen",
  },
  {
    name: "Selçuk Ersöz",
    role: "Finance Manager",
    image: "/images/team/team4.webp",
    instagram: "@f.selcukersoz",
  },
];
