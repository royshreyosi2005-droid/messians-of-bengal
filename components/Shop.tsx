import SectionOverlay from "./SectionOverlay";
export default function Shop() {
  const jerseys = [
    {
      id: 1,
      price: "₹499",
      soldOut: true,
    },
    {
      id: 2,
      price: "₹550",
      soldOut: true,
    },
  ];

  return (
    <section
      id="shop"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24"
    >
     <SectionOverlay />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">

        {/* Heading */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.7em] text-sky-400">
          SHOP
        </p>

        <h2 className="text-5xl font-black uppercase leading-none text-white md:text-6xl xl:text-7xl">
          OFFICIAL JERSEYS
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xl font-semibold leading-8 text-slate-300">
          Wear the passion. Represent Messians of Bengal wherever you go.
        </p>

        {/* Cards */}
        <div className="mx-auto mt-20 grid w-full max-w-5xl grid-cols-1 justify-items-center gap-10 md:grid-cols-2">

          {jerseys.map((jersey) => (

            <div
              key={jersey.id}
             className="group w-full max-w-[430px] rounded-3xl border border-white/10 bg-slate-950/35 p-6 text-center backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/30 hover:bg-slate-950/45 hover:shadow-[0_0_35px_rgba(56,189,248,0.15)]"
            >

              {/* Front & Back */}
              <div className="grid grid-cols-2 gap-4">

                {/* Front */}
                <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border-2 border-dashed border-white/10 bg-slate-950/30 transition group-hover:border-sky-300">

                  <div className="text-center">

                    <div className="text-5xl">📷</div>

                    <p className="mt-3 text-sm font-medium text-slate-400">
                      Front Image
                    </p>

                  </div>

                </div>

                {/* Back */}
                <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border-2 border-dashed border-sky-400/20 bg-slate-900/20 transition group-hover:border-sky-300">

                  <div className="text-center">

                    <div className="text-5xl">📷</div>

                    <p className="mt-3 text-sm font-medium text-slate-400">
                      Back Image
                    </p>

                  </div>

                </div>

              </div>

             
              {/* Jersey Name */}
<div className="mt-7 flex flex-col items-center">
  <h3 className="text-2xl font-bold tracking-wide text-white">
    {jersey.id === 1 ? "Official Jersey 2025" : "Official Jersey 2026"}
  </h3>
</div>

              {/* Price */}
              <h3 className="mt-8 text-center text-5xl font-black text-sky-400">
                {jersey.price}
              </h3>

              {/* Sold Out */}
              {jersey.soldOut && (
                <div className="mt-5 flex justify-center">
                  <span className="rounded-full border border-red-500/40 bg-red-500/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-red-400">
                    🔴 SOLD OUT
                  </span>
                </div>
              )}

              {/* Button */}
              <div className="mt-8 flex justify-center">

                <button
                  disabled
                  className="w-full cursor-not-allowed rounded-xl border border-slate-700 bg-slate-800/80 py-4 text-lg font-semibold text-slate-400 opacity-80 backdrop-blur-xl"
                >
                  Order Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}