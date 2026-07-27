"use client";
import Image from "next/image";
const goatImages = [
  "/cultural-fest/G1.jpg",
  "/cultural-fest/G2.jpg",
  "/cultural-fest/G3.jpg",
  "/cultural-fest/G4.jpg",
  "/cultural-fest/G5.jpg",
  "/cultural-fest/G6.jpg",
  "/cultural-fest/G7.jpg",
  "/cultural-fest/G8.jpg",
  "/cultural-fest/G9.jpg",
  "/cultural-fest/G10.jpg",
  "/cultural-fest/G11.jpg",
  "/cultural-fest/G12.jpg",
];
const infiniteGoatImages = [...goatImages, ...goatImages];
const picnicImages = [
  "/cultural-fest/P1.jpg",
  "/cultural-fest/P2.jpg",
  "/cultural-fest/P3.jpg",
  "/cultural-fest/P4.jpg",
  "/cultural-fest/P5.jpg",
  "/cultural-fest/P6.jpg",
  "/cultural-fest/P7.jpg",
  "/cultural-fest/P8.jpg",
  "/cultural-fest/P9.jpg",
  "/cultural-fest/P10.jpg",
];

const infinitePicnicImages = [...picnicImages, ...picnicImages];
interface CulturalFestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CulturalFestModal({
  isOpen,
  onClose,
}: CulturalFestModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
       {/* Close Button */}
        <button
  onClick={onClose}
  className="absolute right-8 top-8 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-[#07111f]/90 text-xl text-white shadow-[0_0_20px_rgba(34,211,238,0.25)] backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:border-cyan-300 hover:bg-cyan-500/20"
>
  ✕
</button>
      <div className="relative w-full max-w-7xl h-[92vh] overflow-y-auto rounded-3xl border border-cyan-400/20 bg-[#07111f] shadow-[0_0_60px_rgba(34,211,238,0.15)]">

        
        

        <div className="px-8 md:px-14 py-16">

         {/* Heading */}

<div className="mb-20 flex flex-col items-center text-center">

  <h1 className="text-5xl md:text-7xl font-black  tracking-[0.05em] text-white">
    Cultural Fests
  </h1>

 

  <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
    Celebrating talent, friendship, teamwork and unforgettable
    memories that continue to inspire every Messian.
  </p>

</div>
          {/* GOAT Legacy Cup */}

          <section className="mb-24">

            <h2 className="text-center text-4xl font-bold text-cyan-300">

              🏆 GOAT LEGACY CUP 🏆

            </h2>

            <div className="mt-4 flex justify-center">
  <p className="max-w-3xl text-center text-lg leading-8 text-slate-400">
    The spirit of competition, unity and unforgettable victories.
  </p>
</div>

           <div className="mt-10 flex w-full justify-center">
  <div className="w-full max-w-6xl">
    <div className="overflow-hidden rounded-3xl">
  <div className="goat-slider gap-6">
    {infiniteGoatImages.map((image, index) => (
      <div
        key={index}
        className="group relative h-72 w-64 flex-shrink-0 overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
      >
        <Image
          src={image}
          alt={`GOAT ${index + 1}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    ))}
  </div>
</div>
  </div>
</div>

          </section>

          {/* Divider */}

          <div className="flex items-center gap-5 my-16">

            <div className="h-px flex-1 bg-cyan-400/20" />

            <span className="text-cyan-300 text-xl">✦</span>

            <div className="h-px flex-1 bg-cyan-400/20" />

          </div>

          {/* Picnic */}

          <section className="pb-10">

            <h2 className="text-center text-4xl font-bold text-cyan-300">

              🌿 PICNIC 🌿

            </h2>

            <div className="mt-4 flex justify-center">
  <p className="max-w-3xl text-center text-lg leading-8 text-slate-400">
    Beyond classrooms, we created memories that will stay forever.
  </p>
</div>
            <div className="mt-10 flex w-full justify-center">
  <div className="w-full max-w-6xl">
    <div className="mt-10 flex w-full justify-center">
  <div className="w-full max-w-6xl">
    <div className="overflow-hidden rounded-3xl">
      <div className="picnic-slider gap-6">
        {infinitePicnicImages.map((image, index) => (
          <div
            key={index}
            className="group relative h-72 w-64 flex-shrink-0 overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 shadow-[0_0_25px_rgba(34,211,238,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
          >
            <Image
              src={image}
              alt={`Picnic ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
  </div>
</div>

          </section>

        </div>

      </div>
    </div>
  );
}