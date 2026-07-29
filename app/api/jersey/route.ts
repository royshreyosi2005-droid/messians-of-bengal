import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Jersey from "@/models/Jersey";

export async function GET() {
  try {
    await connectDB();

   

    const jerseys = await Jersey.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: jerseys,
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
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
console.log(body);
    const jersey = await Jersey.create(body);

    return NextResponse.json({
      success: true,
      data: jersey,
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
