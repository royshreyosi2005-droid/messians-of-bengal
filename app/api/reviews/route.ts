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
    const email = formData.get("email") as string;
    const rating = Number(formData.get("rating"));
    const message = formData.get("message") as string;

    const imageFiles = formData.getAll("images") as File[];

    // Maximum 4 images
    if (imageFiles.length > 4) {
      return NextResponse.json(
        {
          success: false,
          message: "You can upload a maximum of 4 images.",
        },
        { status: 400 }
      );
    }

    // Maximum 5 MB per image
    const MAX_SIZE = 5 * 1024 * 1024;

    for (const file of imageFiles) {
      if (file.size > MAX_SIZE) {
        return NextResponse.json(
          {
            success: false,
            message: "Each image must be smaller than 5 MB.",
          },
          { status: 400 }
        );
      }
    }

    // Required fields
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

    // Upload images to Cloudinary
    for (const file of imageFiles) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result: any = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "messians-of-bengal/reviews",

            transformation: [
              {
                width: 1200,
                crop: "limit",
                quality: "auto",
                fetch_format: "auto",
              },
            ],
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        Readable.from(buffer).pipe(uploadStream);
      });

      imageUrls.push(result.secure_url);
    }

    // Create review
    const review = await Review.create({
      name,
      email: email || "",
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