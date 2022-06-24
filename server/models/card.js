import mongoose from "mongoose";

export const Card = mongoose.model("Card", {
  title: String,
  rating: Number,
  linkURL: String,
  imageURL: String,
});