"use client";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionOverlay from "./SectionOverlay";
import Link from "next/link";
type Review = {
  name: string;
  rating: number;
  message: string;
  images: string[];
};

export default function Reviews() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
const [email, setEmail] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);



  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const trimmedEmail = email.trim().toLowerCase();

if (!trimmedEmail.endsWith("@gmail.com")) {
  alert("Please enter a valid Gmail address.");
  return;
}

setEmail(trimmedEmail);

  if (!name.trim() || !message.trim() || rating === 0) {
  alert("Please complete all required fields.");
  return;
}

if (submitting) return;

setSubmitting(true);

  const formData = new FormData();

  formData.append("name", name);
  formData.append("email", email);
  formData.append("rating", rating.toString());
  formData.append("message", message);

  selectedImages.forEach((image) => {
    formData.append("images", image);
  });

  const res = await fetch("/api/reviews", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!data.success) {
  setSubmitting(false);
  alert("Failed to submit review.");
  return;
}

  

  setName("");
  setRating(0);
  setMessage("");
  if (textAreaRef.current) {
  textAreaRef.current.style.height = "44px";
}
  setSelectedImages([]);

  if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }
setSubmitting(false);
await fetchReviews();
  alert("Review submitted successfully!");
};
const fetchReviews = async () => {
  try {
    const res = await fetch("/api/reviews");
    const data = await res.json();
    

    if (data.success) {
      setReviews(data.reviews);
    }
  } catch (error) {
    console.error(error);
  } finally {
  setLoadingReviews(false);
}
};


useEffect(() => {
  fetchReviews();
}, []);


const fileInputRef = useRef<HTMLInputElement>(null);
const textAreaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <section
      id="reviews"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24"
    >
      <SectionOverlay />

      <div className="relative z-10 mx-auto -translate-y-4 flex w-full max-w-6xl flex-col items-center">

        {/* Heading */}

        <p className="text-sm font-semibold uppercase tracking-[0.6em] text-sky-400">
          REVIEWS
        </p>

        <h2 className="mx-auto text-center text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
          SHARE YOUR EXPERIENCE
        </h2>

        <p className="mt-6 max-w-2xl text-center text-lg leading-8 text-slate-300">
         Share your experience with Messians of Bengal or review your jersey. Your feedback helps us grow stronger as a community.
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

          <div className="w-full">
  <input
    type="text"
    placeholder="Your Gmail"
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
    }}
    className="h-12 w-full rounded-xl border border-white/10 bg-slate-950/30 px-5 text-center text-lg text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-sky-400"
  />

  
</div>
<p className="text-center text-lg text-slate-300">
  Rate Your Experience
</p>
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
<div className="relative rounded-2xl border border-white/10 bg-slate-950/30 transition focus-within:border-sky-400">

  <input
    type="file"
    accept="image/*"
    multiple
    ref={fileInputRef}
    className="hidden"
    onChange={(e) => {
  const files = Array.from(e.target.files || []);

  if (files.length > 4) {
    alert("Maximum 4 images allowed.");
    e.target.value = "";
    return;
  }

  setSelectedImages(files);
}}
  />

  {selectedImages.length > 0 && (
    <div className="flex flex-wrap gap-3 border-b border-white/10 px-5 pt-5 pb-4">

      {selectedImages.map((image, index) => (

        <div key={index} className="relative">

          <img
            src={URL.createObjectURL(image)}
            alt=""
            className="h-14 w-14 translate-x-2 rounded-xl object-cover"
          />

          <button
            type="button"
            onClick={() =>
              setSelectedImages((prev) =>
                prev.filter((_, i) => i !== index)
              )
            }
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white"
          >
            ×
          </button>

        </div>

      ))}

    </div>
  )}

 

 <div className="flex items-end gap-3 px-5 pb-5 overflow-hidden">

    <button
      type="button"
      onClick={() => fileInputRef.current?.click()}
      className="flex h-10 w-10 items-center justify-center translate-x-2 translate-y-0.0005 rounded-full border border-white/10 bg-slate-900 text-2xl text-slate-300 transition hover:border-sky-400 hover:text-sky-400"
    >
      +
    </button>

<textarea
ref={textAreaRef}
  rows={1}
  placeholder="Write your review..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onInput={(e) => {
    e.currentTarget.style.height = "auto";
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
  }}
  className="min-h-[44px] max-h-40 flex-1 resize-none overflow-y-auto bg-transparent py-2 text-white placeholder:text-slate-500 outline-none"
/>

    <button
  type="submit"
  disabled={submitting}
  className={`flex h-10 w-10 items-center justify-center -translate-x-2 translate-y-0.001 rounded-full text-white transition ${
    submitting
      ? "cursor-not-allowed bg-slate-600"
      : "bg-sky-500 hover:scale-110 hover:bg-sky-400"
  }`}
>
  {submitting ? "..." : "➤"}
</button>

  </div>

</div>

         
        </form>

        {/* Latest Reviews */}

        <div id="latest-reviews" className="mt-20 flex w-full translate-y-2 flex-col items-center">

          <h3 className="text-center text-3xl font-black  uppercase text-white">
            Latest Reviews
          </h3>

          {loadingReviews ? null : reviews.length === 0 ? (

           <div className="mt-8 flex w-full max-w-3xl translate-y-3 flex-col items-center justify-center rounded-3xl border border-white/10 bg-slate-950/35 p-12 text-center backdrop-blur-2xl transition duration-300 hover:border-sky-400/30 hover:shadow-[0_0_35px_rgba(56,189,248,0.15)]">

              <div className="text-5xl">⭐</div>

             <h4 className="mt-6 text-2xl font-black uppercase text-white">
  No Reviews Yet
</h4>

              <p className="mt-3 max-w-lg text-center leading-7 text-slate-300">
  Be the first to share your experience with Messians of Bengal.
</p>

            </div>

          ) : (

            <div
  className={`mt-8 translate-y-2 grid w-full gap-6 ${
    reviews.length === 1
      ? "max-w-xl mx-auto grid-cols-1"
      : reviews.length === 2
      ? "max-w-4xl mx-auto grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  }`}
>

              {reviews.slice(0, 3).map((review, index) => (

                <div
                  key={index}
                  className="w-full rounded-3xl -translate-y-1.5 border border-white/10 bg-slate-950/35 p-8 text-center backdrop-blur-2xl transition duration-300 hover:border-sky-400/30 hover:shadow-[0_0_35px_rgba(56,189,248,0.15)]"
                >

                  <div className="mb-4 flex justify-center text-2xl">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>

              {review.images?.length > 0 && (
  <div className="mb-5 flex flex-wrap justify-center gap-2">
    {review.images.map((image, i) => (
      <img
        key={i}
        src={image}
        alt={`Review ${i + 1}`}
        className="h-20 w-20 rounded-xl object-cover border border-white/10"
      />
    ))}
  </div>
)}

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

          {reviews.length > 3 && (
  <Link
  href="/reviews"
    className="mt-10 h-6 w-55 translate-y-3 text-center rounded-full border border-sky-400/30 bg-sky-400/10 text-sm font-semibold uppercase tracking-wider text-sky-300 transition hover:bg-sky-400 hover:text-white"
  >
    View All Reviews →
  </Link>
)}

        </div>

      </div>
    </section>
  );
}