import "dotenv/config";
import express from "express";
import cors from "cors";
import { customerRoute } from "./routes/customer.js";
import { dbConnect } from "./configs/dbConnection.js";

const port = 3000;
const app = express();
const db = dbConnect();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/customer", customerRoute);

// custom error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(port, () => console.log(`Port start working on ${port}`));
