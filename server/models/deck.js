import mongoose from "mongoose";
const { Schema } = mongoose;

const DeckSchema = new Schema({ title: String }, { timestamps: true });
export const Deck = mongoose.model("Deck", DeckSchema);
