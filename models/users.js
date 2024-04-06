import { Timestamp } from "mongodb";
import mongoose, { mongo } from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = model("User", userSchema);
