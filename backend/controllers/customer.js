import { customerModel } from "../models/customer.model.js";

async function addNewCustomer(req, res) {
  console.table(req.body);

  const newCustomer = new customerModel(req.body.customer);
  const saveCustomer = await newCustomer.save();
  res.send(saveCustomer);
}

async function getCustomers(req, res) {
  const customers = await customerModel.find();
  console.log(customers);
  res.status(200).json({
    customers,
  });
}

async function deleteCustomer(req, res) {
  const id = req.params.id;
  const customers = await customerModel.findByIdAndDelete(id);
  console.log(customers);
  res.status(200).json({
    message: "Customer deleted successfully",
  });
}

export { addNewCustomer, getCustomers, deleteCustomer };
