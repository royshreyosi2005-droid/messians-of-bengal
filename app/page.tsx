import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import About from "@/components/About";
import Journey from "@/components/Journey";
import Shop from "@/components/Shop";
import Reviews from "@/components/Review";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Navbar />
      <Hero />
     
      <About />
      <Journey />
      <Shop />
      <Reviews />
      <Contact />
    </>
  );
}