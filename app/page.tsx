import HeroSlider from "@/components/home/HeroSlider";
import PopularTours from "@/components/home/PopularTours";
import FeatureIcons from "@/components/home/FeatureIcons";
import Destinations from "@/components/home/Destinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ActivitiesGrid from "@/components/home/ActivitiesGrid";
import MapSection from "@/components/home/MapSection";
import BookingProcess from "@/components/home/BookingProcess";
import Categories from "@/components/home/Categories";
import LastMinuteDeals from "@/components/home/LastMinuteDeals";
import CountdownBanner from "@/components/home/CountdownBanner";
import Testimonials from "@/components/home/Testimonials";
import BlogPosts from "@/components/home/BlogPosts";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <PopularTours />
      <FeatureIcons />
      <Destinations />
      <WhyChooseUs />
      <ActivitiesGrid />
      <MapSection />
      <BookingProcess />
      <Categories />
      <LastMinuteDeals />
      <CountdownBanner />
      <Testimonials />
      <BlogPosts />
    </>
  );
}
