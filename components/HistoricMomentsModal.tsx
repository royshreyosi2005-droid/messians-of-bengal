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
    place: "Rudranath",
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
    place: "Rudranath",
  },
   {
    image: "/historic/H8.jpg",
    place: "Kedarnath",
  },
   {
  image: "/historic/H9.jpg",
  title: "Kedarkantha",
},
{
  image: "/historic/H10.jpg",
  title: "Hamta Pass",
},
{
  image: "/historic/H11.jpg",
  title: "Puri Jagannath Mandir",
},
{
  image: "/historic/H12.jpg",
  title: "Puri Jagannath Mandir",
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
     
<div className="relative h-[90vh] w-[95%] max-w-7xl rounded-3xl bg-[#08111f]">

 <button
  onClick={onClose}
  className="absolute right-3 top-3 z-[999] flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-[#07111f]/95 text-xl text-white shadow-[0_0_20px_rgba(34,211,238,0.25)] backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:border-cyan-300 hover:bg-cyan-500/20 right-3 top-3 md:-right-16 md:-top-2"
>
   ✕
</button>



  <div className="h-full overflow-y-auto px-5 pt-16 pb-5 md:px-10 md:pt-10 md:pb-10">
        <h2 className="text-center text-5xl font-extrabold tracking-wide text-white md:text-6xl">
  Historic Moments
</h2>
       
<div className="mt-10 flex justify-center translate-y-15">
  <div className="w-[95%] mx-12 mb-8 overflow-hidden rounded-3xl">
    <div className="historic-slider flex gap-8 items-center">
      {infiniteHistoricMoments.map((item, index) => (
        <div
          key={index}
          className="historic-card w-[650px] flex-shrink-0 overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#0b1728]"
        >
          <div className="relative h-[450px] w-full">
            <Image
              src={item.image}
              alt={item.title || item.place || "Historic Image"}
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="py-5 text-center">
            <p className="text-lg font-semibold text-cyan-200">
              📍{item.title || item.place || "Historic Image"}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
      </div>
    </div>
  );
}