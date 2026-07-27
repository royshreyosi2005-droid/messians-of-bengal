"use client";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
  const sections = ["about", "journey", "shop", "reviews", "contact"];

  const handleScroll = () => {
    const heroHeight = window.innerHeight * 0.7;

if (window.scrollY < heroHeight) {
  setActiveSection("");
  return;
}
    const scrollPos = window.scrollY + 150;

    for (const section of sections) {
      const el = document.getElementById(section);

      if (
        el &&
        scrollPos >= el.offsetTop &&
        scrollPos < el.offsetTop + el.offsetHeight
      ) {
        setActiveSection(section);
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-sky-400/10 bg-slate-950/30 backdrop-blur-2xl">
      <div className="relative flex h-20 w-full items-center px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center translate-x-5">
          <img
            src="/images/logo.jpg"
            alt="Messians of Bengal"
            className="h-14 w-14 rounded-full border-2 border-sky-300/60 object-cover shadow-[0_0_8px_rgba(56,189,248,0.25),0_0_18px_rgba(56,189,248,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(56,189,248,0.35),0_0_25px_rgba(56,189,248,0.3)]"
          />
        </div>

      {/* Center Menu */}
<div className="absolute left-1/2 -translate-x-1/2">
  <ul className="flex items-center gap-12 text-lg font-medium text-white">
    {[
      { name: "About", id: "about" },
      { name: "Journey", id: "journey" },
      { name: "Shop", id: "shop" },
      { name: "Reviews", id: "reviews" },
      { name: "Contact", id: "contact" },
    ].map((item) => (
      <li key={item.id}>
        <a
          href={`#${item.id}`}
          className={`group relative inline-block rounded-full px-3 py-2 transition-all duration-300 hover:-translate-y-0.5 ${
            activeSection === item.id
              ? "bg-sky-500/15 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.25)]"
              : "hover:bg-sky-500/10 hover:text-sky-300"
          }`}
        >
          <span className="relative z-10">{item.name}</span>

          <span
            className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.5)] transition-all duration-300 ${
              activeSection === item.id
                ? "w-3/4"
                : "w-0 group-hover:w-full"
            }`}
          />
        </a>
      </li>
    ))}
  </ul>
</div>

        {/* Right Button */}
        <div className="absolute right-6 lg:right-8">
        <a
  href="https://www.facebook.com/share/18e586aGd5/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex
    h-12
    min-w-[170px]
    items-center
    justify-center
    rounded-full
    border
    border-sky-400/30
    bg-slate-900/70
    px-8
    text-[15px]
    font-semibold
    leading-normal
    tracking-wide
    text-sky-200
    backdrop-blur-xl
    shadow-[0_0_20px_rgba(56,189,248,0.18)]
    transition-all
    duration-300
    hover:scale-105
    hover:border-sky-300/60
    hover:bg-slate-900/90
    hover:text-white
    hover:shadow-[0_0_35px_rgba(56,189,248,0.45)]
  "
>
  Join Family
</a>
        </div>

      </div>
    </nav>
  );
}