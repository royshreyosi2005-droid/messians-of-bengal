import { NextResponse } from "next/server";
import { Resend } from "resend";
import connectDB from "@/lib/mongodb";
import EmailOTP from "@/models/EmailOTP";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // OTP expires in 10 minutes
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    // Remove previous OTP for this email
    await EmailOTP.deleteMany({
      email: normalizedEmail,
    });

    // Save new OTP
    await EmailOTP.create({
      email: normalizedEmail,
      otp,
      expiresAt,
    });

    // Send email
    const { error } = await resend.emails.send({
      from: "Messians of Bengal <onboarding@resend.dev>",
      to: normalizedEmail,
      subject: "Your Messians of Bengal Verification Code",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 30px;">
          <h2 style="color: #0ea5e9;">
            Messians of Bengal
          </h2>

          <p>
            Your email verification code is:
          </p>

          <div style="
            margin: 25px 0;
            padding: 20px;
            background: #f1f5f9;
            border-radius: 12px;
            text-align: center;
          ">
            <h1 style="
              letter-spacing: 10px;
              font-size: 32px;
              margin: 0;
            ">
              ${otp}
            </h1>
          </div>

          <p>
            This code is valid for <strong>10 minutes</strong>.
          </p>

          <p>
            Please do not share this code with anyone.
          </p>

          <p>
            — Messians of Bengal
          </p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      await EmailOTP.deleteMany({
        email: normalizedEmail,
      });

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send verification email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Verification code sent successfully.",
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