import express from "express";
import Customer from "../model/customerModel.js";

const router = express.Router();

/**
 * @route   GET /
 * @desc    Retrieve all customers from the database
 * @access  Public
 */
router.get("/", async (req, res) => {
  try {
    const customerData = await Customer.find();

    if (customerData.length === 0) {
      return res.status(404).json({
        message: "No client data found",
      });
    }

    res.status(200).json({
      message: "Client Data",
      customerData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

export default router;
