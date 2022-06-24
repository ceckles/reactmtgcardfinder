import mongoose from "mongoose";

export const Movie = mongoose.model("Movie", {
  title: String,
  rating: Number,
  year: Number,
});