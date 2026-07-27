"use client";
import { Star } from "lucide-react";
import { useState } from "react";
import SectionOverlay from "./SectionOverlay";

type Review = {
  name: string;
  rating: number;
  message: string;
};

export default function Reviews() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const [reviews, setReviews] = useState<Review[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim() || rating === 0) return;

    const newReview: Review = {
      name,
      rating,
      message,
    };

    setReviews((prev) => [newReview, ...prev]);

    setName("");
    setRating(0);
    setMessage("");
  };

  return (
    <section
      id="reviews"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24"
    >
      <SectionOverlay />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">

        {/* Heading */}

        <p className="text-sm font-semibold uppercase tracking-[0.6em] text-sky-400">
          REVIEWS
        </p>

        <h2 className="mt-4 text-center text-4xl font-black uppercase text-white md:text-6xl">
          SHARE YOUR EXPERIENCE
        </h2>

        <p className="mt-6 max-w-2xl text-center text-lg leading-8 text-slate-300">
          We'd love to hear what you think about Messians of Bengal.
        </p>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-14 flex w-full max-w-3xl flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/35 p-8 backdrop-blur-2xl"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 rounded-xl border border-white/10 bg-slate-950/30 px-5 text-center text-lg text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-sky-400"
          />

          <div className="flex justify-center gap-3">
  {[1, 2, 3, 4, 5].map((star) => (
    <button
      key={star}
      type="button"
      onClick={() => setRating(star)}
      className="transition hover:scale-110"
    >
      <Star
        size={40}
        strokeWidth={2}
        className={`transition duration-200 ${
          star <= rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-transparent text-white"
        }`}
      />
    </button>
  ))}
</div>
          <textarea
            rows={5}
            placeholder="Write your review..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none rounded-xl border border-white/10 bg-slate-950/30 px-5 py-4 text-center text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400"
          />

          <button
            type="submit"
            className="rounded-xl border border-sky-400/40 bg-sky-400/10 py-4 text-lg font-bold text-sky-300 transition duration-300 hover:bg-sky-400/20 hover:text-white"
          >
            Submit Review
          </button>
        </form>

        {/* Latest Reviews */}

        <div className="mt-20 flex w-full flex-col items-center">

          <h3 className="text-center text-3xl font-black uppercase text-white">
            Latest Reviews
          </h3>

          {reviews.length === 0 ? (

            <div className="mt-8 flex w-full max-w-3xl flex-col items-center justify-center rounded-3xl border border-white/10 bg-slate-950/35 p-12 text-center backdrop-blur-2xl">

              <div className="text-6xl">💙</div>

              <h4 className="mt-6 text-2xl font-bold text-white">
                No Reviews Yet
              </h4>

              <p className="mt-3 max-w-lg text-center leading-7 text-slate-300">
                Be the first person to share your experience with
                <br />
                Messians of Bengal.
              </p>

            </div>

          ) : (

            <div className="mt-10 flex w-full flex-col items-center gap-6">

              {reviews.slice(0, 3).map((review, index) => (

                <div
                  key={index}
                  className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-950/35 p-8 text-center backdrop-blur-2xl transition duration-300 hover:border-sky-400/30 hover:shadow-[0_0_35px_rgba(56,189,248,0.15)]"
                >

                  <div className="mb-4 flex justify-center text-2xl">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>

                  <p className="text-lg italic leading-8 text-slate-200">
                    "{review.message}"
                  </p>

                  <p className="mt-5 font-semibold text-sky-400">
                    — {review.name}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>
    </section>
  );
}