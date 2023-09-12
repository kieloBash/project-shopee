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
      enum: ["packer", "admin", "no role"],
      required: true,
      default: "no role",
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
