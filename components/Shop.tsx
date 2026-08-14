"use client";

import SectionOverlay from "./SectionOverlay";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Shop() {
  const [frontImage, setFrontImage] = useState<Record<string, number>>({});
  const [backImage, setBackImage] = useState<Record<string, number>>({});
  const [jerseys, setJerseys] = useState<any[]>([]);

  const [selectedJersey, setSelectedJersey] = useState<any | null>(null);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);

  useEffect(() => {
    const fetchJerseys = async () => {
      try {
        const res = await fetch("/api/jersey");
        const data = await res.json();

        if (data.success) {
          setJerseys(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch jerseys:", error);
      }
    };

    fetchJerseys();
  }, []);

  const openWhatsApp = (number: string) => {
    if (!selectedJersey) return;

    const message = `Hello, I want to order ${selectedJersey.name} for ₹${selectedJersey.price}.`;

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

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

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
          OFFICIAL JERSEYS
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xl font-semibold leading-8 text-slate-300">
          Wear the passion. Represent Messians of Bengal wherever you go.
        </p>

        {/* Cards */}

        <div className="mx-auto mt-20 grid w-full max-w-5xl translate-y-5 grid-cols-1 justify-items-center gap-10 md:grid-cols-2">

          {jerseys.map((jersey) => (

            <div
              key={jersey._id}
              className="group w-full max-w-[430px] rounded-3xl border border-white/10 bg-slate-950/35 p-6 text-center backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/30 hover:bg-slate-950/45 hover:shadow-[0_0_35px_rgba(56,189,248,0.15)]"
            >

              {/* Front & Back */}

              <div className="grid grid-cols-2 gap-4">

                {/* Front */}

                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/30">

                  <div className="relative h-64 translate-y-2 overflow-hidden rounded-xl">

                    {jersey.frontImages.map(
                      (img: string, index: number) => (
                        <Image
                          key={index}
                          src={img}
                          alt={`Front View ${index + 1}`}
                          fill
                          unoptimized
                          className={`absolute inset-0 object-contain transition-opacity duration-300 ${
                            (frontImage[jersey._id] ?? 0) === index
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      )
                    )}

                    <button
                      onClick={() =>
                        setFrontImage((prev) => ({
                          ...prev,
                          [jersey._id]:
                            (prev[jersey._id] ?? 0) === 0 ? 1 : 0,
                        }))
                      }
                      className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-sky-500"
                    >
                      ❯
                    </button>

                  </div>
                </div>

                {/* Back */}

                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-sky-400/20 bg-slate-900/20">

                  <div className="relative h-64 translate-y-2 overflow-hidden rounded-xl">

                    {jersey.backImages.map(
                      (img: string, index: number) => (
                        <Image
                          key={index}
                          src={img}
                          alt={`Back View ${index + 1}`}
                          fill
                          unoptimized
                          className={`absolute inset-0 object-contain transition-opacity duration-300 ${
                            (backImage[jersey._id] ?? 0) === index
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      )
                    )}

                    <button
                      onClick={() =>
                        setBackImage((prev) => ({
                          ...prev,
                          [jersey._id]:
                            (prev[jersey._id] ?? 0) === 0 ? 1 : 0,
                        }))
                      }
                      className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-sky-500"
                    >
                      ❯
                    </button>

                  </div>
                </div>

              </div>

              {/* Jersey Name */}

              <div className="mt-7 flex flex-col items-center">

                <h3 className="text-2xl font-bold tracking-wide text-white">
                  {jersey.name}
                </h3>

              </div>

              {/* Price */}

              <h3 className="mt-8 text-center text-5xl font-black text-sky-400">
                ₹{jersey.price}
              </h3>

              {/* Sold Out */}

              {jersey.soldOut && (
                <div className="mt-5 flex justify-center">

                  <span className="rounded-full border border-red-500/40 bg-red-500/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-red-400">
                    🔴 SOLD OUT
                  </span>

                </div>
              )}

              {/* Order Button */}

              <div className="mt-8 flex justify-center">

                <button
                  disabled={jersey.soldOut}
                  onClick={() => {
                    setSelectedJersey(jersey);
                    setShowWhatsappModal(true);
                  }}
                  className={`w-full rounded-xl py-4 text-lg font-semibold transition ${
                    jersey.soldOut
                      ? "cursor-not-allowed border border-slate-700 bg-slate-800/80 text-slate-400 opacity-80"
                      : "border border-sky-400/30 bg-sky-500 text-white hover:scale-[1.02] hover:bg-sky-400"
                  }`}
                >
                  {jersey.soldOut ? "Out of Stock" : "Order Now"}
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* WhatsApp Modal */}

      {showWhatsappModal && selectedJersey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-950 p-8 text-center shadow-2xl">

            <h3 className="text-2xl font-black uppercase text-white">
              Order {selectedJersey.name}
            </h3>

            <p className="mt-3 text-slate-400">
              Choose a WhatsApp number to place your order.
            </p>

            <div className="mt-7 flex flex-col gap-3">

              {/* WhatsApp 1 */}

              <button
                onClick={() => openWhatsApp("916290667270")}
                className="w-full rounded-xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-400"
              >
                WhatsApp 1
              </button>

              {/* WhatsApp 2 */}

              <button
                onClick={() => openWhatsApp("916294905464")}
                className="w-full rounded-xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-400"
              >
                WhatsApp 2
              </button>

              {/* WhatsApp 3 */}

              <button
                onClick={() => openWhatsApp("917003032026")}
                className="w-full rounded-xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-400"
              >
                WhatsApp 3
              </button>

            </div>

            {/* Cancel */}

            <button
              onClick={() => {
                setShowWhatsappModal(false);
                setSelectedJersey(null);
              }}
              className="mt-5 text-sm text-slate-400 transition hover:text-white"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

    </section>
  );
}