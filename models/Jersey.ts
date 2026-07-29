import mongoose, { Schema, models, model } from "mongoose";

const JerseySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    soldOut: {
      type: Boolean,
      default: false,
    },

    frontImages: {
      type: [String],
      required: true,
    },

    backImages: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Jersey = models.Jersey || model("Jersey", JerseySchema);

export default Jersey;