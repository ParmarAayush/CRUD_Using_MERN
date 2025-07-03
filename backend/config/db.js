import mongoose from "mongoose";
import "dotenv/config";

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.DB_URL);
    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Something went wrong", error.message);
  }
};
export default dbConnect;
