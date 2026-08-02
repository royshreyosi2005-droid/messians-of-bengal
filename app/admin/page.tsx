"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function AdminPage() {
  const router = useRouter();
    const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [jerseys, setJerseys] = useState<any[]>([]);
const [reviews, setReviews] = useState<any[]>([]);
const [frontFile, setFrontFile] = useState<File | null>(null);
const [backFile, setBackFile] = useState<File | null>(null);
const [editingId, setEditingId] = useState<string | null>(null);
const fetchJerseys = async () => {

  if (typeof window !== "undefined") {
  fetch("/api/admin/check")
    .then((res) => res.json())
    .then((data) => {
      if (!data.isAdmin) {
        window.location.href = "/admin/login";
      }
    });
}

  if (editingId) {
  const res = await fetch(`/api/jersey/${editingId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price: Number(price),
    }),
  });

  const data = await res.json();

  

  return;
}
  const res = await fetch("/api/jersey");
  const data = await res.json();

  if (data.success) {
    setJerseys(data.data);
  }
};

const fetchReviews = async () => {
  const res = await fetch("/api/reviews");
  const data = await res.json();

  if (data.success) {
    setReviews(data.reviews);
  }
};

useEffect(() => {
  fetch("/api/admin/check")
    .then((res) => res.json())
    .then((data) => {
      if (!data.isAdmin) {
        router.replace("/admin/login");
      } else {
        fetchJerseys();
        fetchReviews();
      }
    });
}, [router]);
const handleDelete = async (id: string) => {
  const confirmDelete = confirm("Are you sure you want to delete this jersey?");

  if (!confirmDelete) return;

  const res = await fetch(`/api/jersey/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  if (data.success) {
    alert("Jersey deleted successfully!");
    fetchJerseys();
  } else {
    alert("Failed to delete jersey.");
  }
};
const handleSubmit = async () => {
  try {
    if (!frontFile  && !editingId ) {
  alert("Please select a front image.");
  return;
}
if (editingId) {
  const res = await fetch(`/api/jersey/${editingId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price: Number(price),
    }),
  });

  const data = await res.json();

  if (data.success) {
    alert("Jersey updated successfully!");
    fetchJerseys();
    setEditingId(null);
    setName("");
    setPrice("");
    return;
  }
}
if (!backFile && !editingId) {
  alert("Please select a back image.");
  return;
}
const formData = new FormData();
const backFormData = new FormData();
backFormData.append("file", backFile!);
formData.append("file", frontFile!);

const uploadRes = await fetch("/api/upload", {
  method: "POST",
  body: formData,
});

const uploadData = await uploadRes.json();
const backUploadRes = await fetch("/api/upload", {
  method: "POST",
  body: backFormData,
});

const backUploadData = await backUploadRes.json();

if (!backUploadData.success) {
  alert("Back image upload failed!");
  return;
}

if (!uploadData.success) {
  alert("Image upload failed!");
  return;
}



    const res = await fetch("/api/jersey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price: Number(price),
        soldOut: false,
       frontImages: [uploadData.url],
       backImages: [backUploadData.url],
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Jersey Added Successfully!");

      setName("");
      setPrice("");
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
};
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900 p-8">

        <h1 className="mb-8 text-center text-3xl font-bold text-white">
          Admin Dashboard
        </h1>

        <div className="space-y-5">
            <label className="font-medium">Jersey Name</label>

          <input
  type="text"
  placeholder="Jersey Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full rounded-lg border border-slate-600 bg-slate-800 p-3 text-white outline-none"
/>
<div className="space-y-2">
  <label className="font-medium">Price</label>

  <input
    type="number"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    placeholder="Price"
    className="w-full rounded-lg border border-gray-600 bg-transparent p-2"
  />
</div>

         <div className="space-y-2">
 <label className="mb-2 block font-medium">Front Image</label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) =>
      setFrontFile(e.target.files ? e.target.files[0] : null)
    }
    className="w-full rounded border p-2"
  />
</div>

<div>
  <label className="mb-2 block font-medium">Back Image</label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) =>
      setBackFile(e.target.files ? e.target.files[0] : null)
    }
    className="w-full rounded border p-2"
  />
</div>

          <button
  onClick={handleSubmit}
  className="w-full rounded-lg bg-sky-500 p-3 font-semibold text-white hover:bg-sky-600"
>
  Add Jersey
</button>
<div className="mt-8 space-y-4">
  <h2 className="text-xl font-bold">All Jerseys</h2>

  {jerseys.map((jersey: any) => (
    <div
      key={jersey._id}
      className="flex items-center justify-between rounded-lg border p-4"
    >
      <div>
        <p className="font-semibold">{jersey.name}</p>
        <p>₹{jersey.price}</p>
      </div>
      <button
  onClick={() => {
  setEditingId(jersey._id);
  setName(jersey.name);
  setPrice(jersey.price.toString());
}}
  className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
>
  Edit
</button>

      <button
  onClick={() => handleDelete(jersey._id)}
  className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
>
  Delete
</button>
    </div>
  ))}
</div>

<div className="mt-10 space-y-4">
  <h2 className="text-xl font-bold">All Reviews</h2>

  {reviews.map((review: any) => (
    <div
      key={review._id}
      className="flex items-center justify-between rounded-lg border p-4"
    >
      <div>
        <p className="font-semibold">{review.name}</p>
        <p>{review.message}</p>
        <p>⭐ {review.rating}</p>
      </div>

      <button
        onClick={async () => {
          const ok = confirm("Delete this review?");

          if (!ok) return;

          const res = await fetch(`/api/reviews/${review._id}`, {
            method: "DELETE",
          });

          const data = await res.json();

          if (data.success) {
            alert("Review deleted!");
            fetchReviews();
          } else {
            alert("Delete failed!");
          }
        }}
        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  ))}
</div>


        </div>
      </div>
    </main>
  );
}