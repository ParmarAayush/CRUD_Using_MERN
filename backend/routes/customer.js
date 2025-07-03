import express from "express";
import { addNewCustomer } from "../controllers/customer.js";

const router = express.Router();

router.post("/add",addNewCustomer);
export { router as customerRoute };
