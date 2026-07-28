import SectionOverlay from "./SectionOverlay";
export default function About() {
  return (
    <section
      id="about"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <SectionOverlay />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">

        {/* Section Title */}
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.7em] text-sky-400">
          ABOUT US
        </p>

        {/* Heading */}
        <h2 className="text-5xl font-black uppercase leading-tight text-white md:text-6xl xl:text-7xl">
          UNITED BY MESSI
          <br />
          UNITED BY PASSION
        </h2>

        {/* Description */}
        <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-slate-300">
          Messians of Bengal is Bengal's Largest Messi Fan Community,
          bringing together passionate supporters from across the state.
          Since 2022, we've celebrated every goal, every trophy and every
          unforgettable moment through watch parties, football meetups,
          community events and fan gatherings.
        </p>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-slate-400">
          More than a fan club, we are a family connected by our admiration
          for Lionel Messi and the beautiful game.
        </p>

        {/* Divider */}
        {/* <div className="mx-auto mt-10 h-px w-40 bg-gradient-to-r from-transparent via-sky-400 to-transparent" /> */}
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-6 translate-y-5 md:grid-cols-3">

          {/* Founded */}
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/45 p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/30 hover:bg-slate-950/55 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)]">
            <h3 className="text-5xl font-black text-sky-400">
              2022
            </h3>

            <p className="mt-3 text-lg font-medium text-slate-200">
              Founded
            </p>
          </div>

          {/* Members */}
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/45 p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/30 hover:bg-slate-950/55 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)]">
            <h3 className="text-5xl font-black text-sky-400">
              500+
            </h3>

            <p className="mt-3 text-lg font-medium text-slate-200">
              WhatsApp Members
            </p>
          </div>

          {/* Followers */}
          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/45 p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/30 hover:bg-slate-950/55 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)]">
            <h3 className="text-5xl font-black text-sky-400">
              25K+
            </h3>

            <p className="mt-3 text-lg font-medium text-slate-200">
              Facebook Followers
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}