import connectDB from "@/lib/mongodb";
import Review from "@/models/Review";
import Link from "next/link";
import ReviewCard from "@/components/ReviewCard";

function getTimeAgo(date: Date | string) {
  const seconds = Math.floor(
    (Date.now() - new Date(date).getTime()) / 1000
  );

  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

  return new Date(date).toLocaleDateString("en-IN");
}

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
  await connectDB();

  const reviews = await Review.find().sort({ createdAt: -1 }).lean();

  const totalReviews = reviews.length;

const averageRating =
  totalReviews > 0
    ? (
        reviews.reduce(
          (sum: number, review: any) => sum + review.rating,
          0
        ) / totalReviews
      ).toFixed(1)
    : "0.0";

  return (
    <main className="min-h-screen bg-[#020617] py-16">

      {/* Back Button */}
    <div className="mx-auto max-w-7xl mb-6 mt-2 md:mt-6">
  <Link
    href="/#reviews"
    className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-5 py-3 text-sky-300 transition hover:bg-sky-400 hover:text-white md:translate-y-6"
  >
    ← Back to Home
  </Link>
</div>

      <div className="mx-auto mt-6 sm:mt-10 flex flex-col items-center">

        {/* Heading */}

        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.5em] text-sky-400">
            COMMUNITY
          </p>

          <h1 className="mt-3 text-5xl font-black uppercase text-white">
            ALL REVIEWS
          </h1>

          <p className="mt-4 text-slate-400">
            Every review shared by our Messians of Bengal family.
          </p>


<div className="mt-8 translate-y-3 flex flex-wrap justify-center gap-5">

  <div className="rounded-2xl w-40 h-15 border border-white/10 bg-slate-950/40 px-8 py-5 text-center backdrop-blur-xl">
    <p className="text-3xl font-black text-yellow-400">
      ⭐ {averageRating}
    </p>
    <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
      Average Rating
    </p>
  </div>

  <div className="rounded-2xl w-40 h-15 border border-white/10 bg-slate-950/40 px-8 py-5 text-center backdrop-blur-xl">
    <p className="text-3xl font-black text-sky-400">
      {totalReviews}
    </p>
    <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">
      Total Reviews
    </p>
  </div>

</div>



        </div>

        {/* Reviews */}

        <div className="flex flex-wrap translate-y-5 justify-center gap-8">

          {reviews.map((review: any) => (
  <ReviewCard
    key={review._id.toString()}
    review={{
      ...review,
      _id: review._id.toString(),
    }}
  />
))}
        </div>

      </div>

    </main>
  );
}