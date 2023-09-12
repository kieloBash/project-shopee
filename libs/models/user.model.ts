import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
    image: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      required: true,
      default: "user",
    },
    provider: {
      type: String,
      default: "credentials",
    },
  },
  { timestamps: true }
);

const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;
