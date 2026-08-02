import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Review from "@/models/Review";

export async function DELETE(
  Request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
console.log("DELETE ROUTE HIT");
const cookie = Request.cookies.get("admin-auth");

if (cookie?.value !== "true") {
  return NextResponse.json(
    {
      success: false,
      message: "Unauthorized",
    },
    { status: 401 }
  );
}
  try {
    await connectDB();

    const { id } = await context.params;

    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      return NextResponse.json(
        {
          success: false,
          message: "Review not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Review deleted successfully",
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