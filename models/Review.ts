import mongoose, { Schema, models, model } from "mongoose";

const ReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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