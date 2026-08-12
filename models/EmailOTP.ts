import mongoose, { Schema, models, model } from "mongoose";

const EmailOTPSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    otp: {
      type: String,
      required: true,
    },

    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.EmailOTP || model("EmailOTP", EmailOTPSchema);