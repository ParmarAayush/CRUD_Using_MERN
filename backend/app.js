import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { dbConnect } from "./connection.js";
import { customerRoute } from "./routes/customer.js";

const port = 3000;
const app = express();
app.use(cors());
const db = dbConnect();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/customer", customerRoute);
app.listen(port, () => console.log(`Port start working on ${port}`));
