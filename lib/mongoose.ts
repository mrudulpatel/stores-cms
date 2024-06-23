import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.error("❗ Missing MONGODB_URL");

  if (isConnected) return console.log("✅ MongoDB is already connected");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error(error);
  }
};
