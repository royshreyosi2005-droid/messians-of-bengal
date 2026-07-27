"use client";
import { useState } from "react";
import SectionOverlay from "./SectionOverlay";
import BirthdayModal from "./BirthdayModal";
import CulturalFestModal from "@/components/CulturalFestModal";
export default function Journey() {
  const [showBirthdayModal, setShowBirthdayModal] = useState(false);
  const [showCulturalFestModal, setShowCulturalFestModal] = useState(false);
  return (
    <section
      id="journey"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24"
    >
      <SectionOverlay />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        {/* Heading */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.7em] text-sky-400">
          JOURNEY
        </p>

        <h2 className="text-5xl font-black uppercase leading-none text-white md:text-6xl xl:text-7xl">
          FROM PASSION
          <br />
          TO A FAMILY
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-xl leading-9 text-slate-300">
          Founded in <span className="font-bold text-white">2022</span>,
          Messians of Bengal started with a simple dream—to unite every Lionel
          Messi fan across Bengal under one family. What began as a small
          community has grown into a passionate movement, celebrating victories,
          creating unforgettable memories, and building lifelong friendships. In{" "}
          <span className="font-bold text-white">2025</span>, we proudly
          launched our first official jersey, marking an exciting new chapter in
          our journey. And this is only the beginning.
        </p>

        {/* Journey Highlights */}
        <div className="mt-16 flex w-full flex-wrap items-center justify-center gap-6">

          <button
           onClick={() => setShowBirthdayModal(true)}
          className="min-w-[320px] h-24 rounded-full border border-sky-500/30 bg-[#0A1630]/70 px-10 text-center text-lg font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-[#0E2247]/90 hover:shadow-[0_0_35px_rgba(37,99,235,0.35)]">
            Messi Birthday Celebration
          </button>

          <button
            onClick={() => setShowCulturalFestModal(true)}
            className="min-w-[320px] h-24 rounded-full border border-sky-500/30 bg-[#0A1630]/70 px-10 text-center text-lg font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-[#0E2247]/90 hover:shadow-[0_0_35px_rgba(37,99,235,0.35)]"
          >
            Cultural Events
          </button>

          <button className="min-w-[320px] h-24 rounded-full border border-sky-500/30 bg-[#0A1630]/70 px-10 text-center text-lg font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-[#0E2247]/90 hover:shadow-[0_0_35px_rgba(37,99,235,0.35)]">
            Historic Moments
          </button>

        </div>

      </div>
      {showBirthdayModal && (
  <BirthdayModal
    onClose={() => setShowBirthdayModal(false)}
  />
  
)}
<CulturalFestModal
  isOpen={showCulturalFestModal}
  onClose={() => setShowCulturalFestModal(false)}
/>
    </section>
  );
}