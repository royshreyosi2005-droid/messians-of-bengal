import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Review from "@/models/Review";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
console.log("DELETE ROUTE HIT");

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