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

        <h1 className="text-5xl font-black uppercase leading-tight text-white md:text-7xl lg:text-8xl">
          MESSIANS OF BENGAL
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300 md:text-2xl">
          Bengal's Largest Messi Fan Community • Football • Brotherhood •
          Events • Exclusive Merchandise
        </p>

        {/* Divider */}
        <div className="mt-10 h-px w-40 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

      </div>
    </section>
  );
}