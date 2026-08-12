import mongoose, { Schema, models, model } from "mongoose";

const ReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default models.Review || model("Review", ReviewSchema);