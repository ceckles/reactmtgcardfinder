import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({ firstName: String }, { timestamps: true });
export const User = mongoose.model("User", UserSchema);
