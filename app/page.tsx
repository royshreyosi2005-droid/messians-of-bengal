"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Shop from "@/components/Shop";
import Reviews from "@/components/Review";
import Contact from "@/components/Contact";


export default function Home() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
  setLoading(false);
}, 1000);

  return () => clearTimeout(timer);
}, []);
  return (
  <>
    <AnimatePresence mode="wait">
      {loading && <LoadingScreen key="loader" />}
    </AnimatePresence>

    {!loading && (
      <>
        
        <Navbar />
        <Hero />
        <About />
        <Journey />
        <Shop />
        <Reviews />
        <Contact />
        
      </>
    )}
  </>
);
}