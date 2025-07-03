import { customerModel } from "../models/customer.model.js";

async function addNewCustomer(req, res) {
  console.log("new customer added");
  console.log(req.body);

  const newCustomer = new customerModel(req.body.customer);
  const saveCustomer = await newCustomer.save();
  res.send(saveCustomer);
}

export { addNewCustomer };
