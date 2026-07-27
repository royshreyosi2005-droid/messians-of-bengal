"use client";
import Image from "next/image";
const historicMoments = [
  {
    image: "/historic/H1.jpg",
    place: "Allianz Arena, Bayern Munich",
  },
  {
    image: "/historic/H2.jpg",
    place: "Allianz Arena, Bayern Munich",
  },
  {
    image: "/historic/H3.jpg",
    place: "Paris",
  },
  {
    image: "/historic/H4.jpg",
    place: "Rudraanath",
  },
  {
    image: "/historic/H5.jpg",
    place: "Allianz Arena, Bayern Munich",
  },
  {
    image: "/historic/H6.jpg",
    place: "Allianz Arena, Bayern Munich",
  },
  {
    image: "/historic/H7.jpg",
    place: "Rudraanath",
  },
   {
    image: "/historic/H8.jpg",
    place: "Kedarnath",
  },
];
const infiniteHistoricMoments = [
  ...historicMoments,
  ...historicMoments,
];
interface HistoricMomentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HistoricMomentsModal({
  isOpen,
  onClose,
}: HistoricMomentsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-[90%] max-w-6xl rounded-3xl bg-[#08111f] p-8">
        <h2 className="text-center text-4xl font-bold text-cyan-300">
          Historic Moments
        </h2>
        <button
  onClick={onClose}
  className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-xl font-bold text-white transition hover:bg-cyan-400"
>
  ×
</button>
<div className="mt-10 flex justify-center">
  <div className="overflow-hidden rounded-3xl">
    <div className="flex gap-8">
      {infiniteHistoricMoments.map((item, index) => (
        <div
          key={index}
          className="w-[850px] flex-shrink-0 overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#0b1728]"
        >
          <div className="relative h-[500px] w-full">
            <Image
              src={item.image}
              alt={item.place}
              fill
              className="object-cover"
            />
          </div>

          <div className="py-5 text-center">
            <p className="text-lg font-semibold text-cyan-200">
              📍 {item.place}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </div>
  );
}