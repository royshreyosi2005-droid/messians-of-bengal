"use client";
import { useEffect, useState } from "react";
export default function AdminPage() {
    const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [jerseys, setJerseys] = useState<any[]>([]);
const [frontFile, setFrontFile] = useState<File | null>(null);
const fetchJerseys = async () => {
  
  const res = await fetch("/api/jersey");
  const data = await res.json();

  if (data.success) {
    setJerseys(data.data);
  }
};

useEffect(() => {
  fetchJerseys();
}, []);
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
    if (!frontFile) {
  alert("Please select a front image.");
  return;
}
const formData = new FormData();
formData.append("file", frontFile);

const uploadRes = await fetch("/api/upload", {
  method: "POST",
  body: formData,
});

const uploadData = await uploadRes.json();

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
        backImages: [],
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
  <label className="font-medium">Front Image</label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) =>
      setFrontFile(e.target.files ? e.target.files[0] : null)
    }
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
  onClick={() => handleDelete(jersey._id)}
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