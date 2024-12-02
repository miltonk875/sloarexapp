import Hero from "@/components/Home/Slider/Hero";
import Cta from "@/components/Home/Cta";
import HomeAbout from "@/components/HomeAbout";
import Blog from "@/components/Home/Blog";
import Testimonial from "@/components/Home/Testimonial";
import Featured from "@/components/Home/Featured";
import CounterArea from "@/components/Home/CounterArea";
import AboutUs from "@/components/Home/AboutUs";
import Offer from "@/components/Home/Offer";
import TrainedWorkers from "@/components/Home/TrainedWorkers";

export default function Home() {
  return (
    <>
      <Hero />
      <TrainedWorkers/>
      <Offer/>
      <AboutUs/>
      <CounterArea/>
      <Featured />
      <Testimonial />
      <Blog />
      <Cta />
    </>
  );
}
