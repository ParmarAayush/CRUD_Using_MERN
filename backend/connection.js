import { dbConfig } from "./configs/db.config.js";
import mongoose from "mongoose";

async function dbConnect() {
  return await mongoose.connect(dbConfig.db_url);
}

dbConnect()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Error in Databse Connection", error);
  });

export { dbConnect };
