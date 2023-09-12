import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return console.log("MONGODB_URI NOT FOUND");
  if (isConnected) return console.log("Already connected to MongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
