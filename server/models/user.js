import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({ firstName: String, lastName: String, userName: String, email: String, passWord: String }, { timestamps: true });
export const User = mongoose.model("User", UserSchema);
