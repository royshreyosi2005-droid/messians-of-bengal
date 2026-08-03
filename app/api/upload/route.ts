import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const file = data.get("file") as File;

const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

if (file.size > MAX_SIZE) {
  return NextResponse.json(
    {
      success: false,
      message: "Image size must be less than 5 MB.",
    },
    { status: 400 }
  );
}

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
  .upload_stream(
    {
      folder: "messians-of-bengal",

      transformation: [
        {
          width: 1500,
          crop: "limit",
          quality: "auto",
          fetch_format: "auto",
        },
      ],
    },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    return NextResponse.json({
      success: true,
      url: result.secure_url,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}