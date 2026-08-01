import SectionOverlay from "./SectionOverlay";
export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
     <SectionOverlay />
      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.7em] text-sky-400 md:text-base">
          Official Fan Community
        </p>

       <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none text-white">
  MESSIANS OF BENGAL
</h1>

       <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-300 md:text-xl">
  Bengal's One of The Largest Messi Fanbase
  <br />
  Football • Brotherhood • Events • Exclusive Merchandise
</p>

        {/* Divider */}
        <div className="mt-10 h-px w-40 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

      </div>
    </section>
  );
}