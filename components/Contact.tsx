

import { Mail, MessageCircle } from "lucide-react";
import SectionOverlay from "./SectionOverlay";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <SectionOverlay />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <div className="flex flex-col items-center">
  <p className="text-sky-400 uppercase tracking-[0.35em] text-sm font-semibold">
    CONTACT
  </p>

  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
    GET IN TOUCH
  </h2>

  <p className="mt-12 max-w-3xl text-center text-lg text-slate-300">
    We'd love to hear from fellow Messians. Feel free to reach out to our team.
  </p>
</div>

        

        {/* Email + Instagram */}
        <div className="mt-20 flex flex-col translate-y-5 sm:flex-row items-center justify-center gap-6">
  <a
   href="https://mail.google.com/mail/?view=cm&fs=1&to=messiansofbengal@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
   className="min-w-[280px] h-16 flex items-center justify-center rounded-full border border-sky-500/30 bg-[#0A1630]/70 px-10 text-lg font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-[#0E2247]/90 hover:shadow-[0_0_35px_rgba(37,99,235,0.35)]"
  >
    Email Us
  </a>

  <a
    href="https://www.instagram.com/messiansofbengal?igsh=cTNjZm52MmQ5aHZu"
    target="_blank"
    rel="noopener noreferrer"
    className="min-w-[280px] h-16 flex items-center justify-center rounded-full border border-sky-500/30 bg-[#0A1630]/70 px-10 text-lg font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.15)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-sky-400 hover:bg-[#0E2247]/90 hover:shadow-[0_0_35px_rgba(37,99,235,0.35)]"
  >
    Follow on Instagram
  </a>
</div>

      </div>
    </section>
  );
}