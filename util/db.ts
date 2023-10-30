import mongoose from "mongoose";

export const connectDb = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.DB_URL as unknown as string);
  }
};

export const disconnectDb = async () => {
  if (mongoose.connection.readyState === 1) {
    await mongoose.disconnect();
  }
};
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
