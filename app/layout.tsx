import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsletterSection from "@/components/layout/NewsletterSection";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vacation Cappadocia — Tours, Activities & Hot Air Balloon Rides",
  description:
    "Discover the magic of Cappadocia with our curated tours, hot air balloon rides, and unique activities. Book your dream vacation today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body className="font-[family-name:var(--font-jost)] min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <NewsletterSection />
        <Footer />
      </body>
    </html>
  );
}
