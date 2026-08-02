"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  images: string[];
};

export default function ReviewGallery({ images }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!images.length) return null;

  return (
    <>
      <div className="mb-5 flex flex-wrap justify-center gap-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            onClick={() => setSelectedImage(image)}
            className="h-20 w-20 cursor-pointer rounded-xl object-cover transition hover:scale-105"
          />
        ))}
      </div>

      {mounted &&
        selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-4 -top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-black"
              >
                ×
              </button>

              <img
                src={selectedImage}
                alt=""
                className="max-h-[70vh] max-w-[70vw] rounded-2xl object-contain"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}