import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import EmailOTP from "@/models/EmailOTP";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and OTP are required.",
        },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    const otpRecord = await EmailOTP.findOne({
      email: normalizedEmail,
    });

    if (!otpRecord) {
      return NextResponse.json(
        {
          success: false,
          message: "OTP not found. Please request a new code.",
        },
        { status: 400 }
      );
    }

    // Check expiry
    if (new Date() > otpRecord.expiresAt) {
      await EmailOTP.deleteOne({
        _id: otpRecord._id,
      });

      return NextResponse.json(
        {
          success: false,
          message: "OTP has expired. Please request a new code.",
        },
        { status: 400 }
      );
    }

    // Check OTP
    if (otpRecord.otp !== otp.toString()) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid verification code.",
        },
        { status: 400 }
      );
    }

    // OTP successfully verified
    await EmailOTP.deleteOne({
      _id: otpRecord._id,
    });

    return NextResponse.json({
      success: true,
      message: "Email verified successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}