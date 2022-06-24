import mongoose from "mongoose";
import Card from './card';

export const Deck = mongoose.model("Deck", {
  title: String,
  commander: Card,
  cards: [Card],
});