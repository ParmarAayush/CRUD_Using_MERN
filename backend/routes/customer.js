import express from "express";
import {addNewCustomer,deleteCustomer,getCustomers,} from "../controllers/customer.js";
import { wrapAsync } from "../utils/WrapAsync.js";
const router = express.Router();

// Here, we use wrapAsync as a higher-order function that takes a function (fn) as an argument.
// It helps avoid writing try...catch blocks in every controller.
// Just wrap the controller function with wrapAsync().
router.post("/add", wrapAsync(addNewCustomer));
router.get("/", getCustomers);
router.delete("/:id", deleteCustomer);

export { router as customerRoute };
