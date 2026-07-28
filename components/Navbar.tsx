"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = [
      "about",
      "journey",
      "shop",
      "reviews",
      "contact",
    ];

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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-sky-400/10 bg-slate-950/30 backdrop-blur-2xl">
      <div className="relative flex h-20 w-full items-center px-5 lg:px-8">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo.jpg"
            alt="Messians of Bengal"
            className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-full border-2 border-sky-300/60 object-cover shadow-[0_0_8px_rgba(56,189,248,0.25),0_0_18px_rgba(56,189,248,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(56,189,248,0.35),0_0_25px_rgba(56,189,248,0.3)]"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Desktop Center Menu */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
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
                  <span className="relative z-10">
                    {item.name}
                  </span>

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

        {/* Desktop Join Button */}
        <div className="absolute right-6 hidden lg:block lg:right-8">
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
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute left-0 top-20 w-full border-t border-sky-400/10 bg-slate-950/95 backdrop-blur-2xl lg:hidden">
            <ul className="flex flex-col items-center gap-2 py-6">

              {[
                { name: "About", id: "about" },
                { name: "Journey", id: "journey" },
                { name: "Shop", id: "shop" },
                { name: "Reviews", id: "reviews" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id} className="w-full px-6">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-xl px-5 py-3 text-center text-base font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-sky-500/15 text-sky-300"
                        : "text-white hover:bg-sky-500/10 hover:text-sky-300"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <li className="mt-4 w-full px-6">
                <a
                  href="https://www.facebook.com/share/18e586aGd5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-12 w-full items-center justify-center rounded-full border border-sky-400/30 bg-slate-900/70 text-[15px] font-semibold tracking-wide text-sky-200 shadow-[0_0_20px_rgba(56,189,248,0.18)] transition-all duration-300 hover:border-sky-300/60 hover:bg-slate-900/90 hover:text-white"
                >
                  Join Family
                </a>
              </li>

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}