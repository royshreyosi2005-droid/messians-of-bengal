import { NextResponse } from "next/server";
import { Readable } from "stream";

import connectDB from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";
import Review from "@/models/Review";

export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const rating = Number(formData.get("rating"));
    const message = formData.get("message") as string;

    const imageFiles = formData.getAll("images") as File[];

    if (!name || !message || !rating) {
      return NextResponse.json(
        {
          success: false,
          message: "All required fields are missing.",
        },
        { status: 400 }
      );
    }

    const imageUrls: string[] = [];

    for (const file of imageFiles) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result: any = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "messians-of-bengal/reviews",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        Readable.from(buffer).pipe(uploadStream);
      });

      imageUrls.push(result.secure_url);
    }

    const review = await Review.create({
      name,
      rating,
      message,
      images: imageUrls,
    });

    return NextResponse.json({
      success: true,
      review,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    await connectDB();

    const reviews = await Review.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      reviews,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch reviews.",
      },
      { status: 500 }
    );
  }
}