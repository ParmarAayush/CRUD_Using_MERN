import mongoose from "mongoose";
const { Schema, model } = mongoose;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true, // corrected spelling
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
});

const customerModel = model("Customer", customerSchema);
export { customerModel };
