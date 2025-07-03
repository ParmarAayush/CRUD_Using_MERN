import express from "express";
import "dotenv/config";
import dbConnect from "./config/db.js";
import router from "./routes/customerRoute.js";

dbConnect();
const app = express();
const PORT = process.env.PORT;

app.use("/api/customers", router);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
