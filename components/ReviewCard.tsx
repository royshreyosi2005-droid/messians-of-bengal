"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReviewGallery from "./ReviewGallery";

type Props = {
  review: {
    _id: string;
    name: string;
    rating: number;
    message: string;
    images: string[];
    createdAt: string;
  };
};

export default function ReviewCard({ review }: Props) {
  const router = useRouter();

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
  const checkAdmin = async () => {
    try {
      const res = await fetch("/api/admin/check");
      const data = await res.json();

      setIsAdmin(data.isAdmin);
    } catch (error) {
      console.error(error);
    }
  };

  checkAdmin();
}, []);

  const deleteReview = async () => {
    const ok = window.confirm(
      "Are you sure you want to delete this review?"
    );

    if (!ok) return;

console.log("ID:", review._id);

    const res = await fetch(`/api/reviews/${review._id}`, {
      method: "DELETE",
    });

console.log(res.status);

    const data = await res.json();

console.log(res.status);
console.log(data);

if (!data.success) {
  alert(data.message);
  return;
}

alert("Deleted successfully!");
router.refresh();
  };

  return (
    <div className="relative w-[320px] rounded-3xl border border-white/10 bg-slate-950/40 p-6 backdrop-blur-xl">

      {/* Delete Button */}
      {isAdmin && (
  <button
    onClick={deleteReview}
    className="absolute right-4 top-4 text-lg transition hover:scale-110"
    title="Delete Review"
  >
    🗑️
  </button>
)}
      <div className="mb-4 text-center text-2xl">
        {"⭐".repeat(review.rating)}
      </div>

      <ReviewGallery images={review.images || []} />

      <p className="text-center leading-7 text-slate-200">
        "{review.message}"
      </p>

      <p className="mt-5 text-center font-semibold text-sky-400">
        — {review.name}
      </p>

      <p className="mt-2 text-center text-sm text-slate-400">
        {new Date(review.createdAt).toLocaleDateString("en-IN")}
      </p>
    </div>
  );
}