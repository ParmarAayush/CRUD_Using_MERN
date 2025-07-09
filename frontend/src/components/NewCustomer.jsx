import React, { useState } from "react";
import { customerbaseUrl } from "../axiosInstance.js";
import { ToastContainer, toast } from "react-toastify";

const NewCustomer = () => {
  const [customerForm, setCustomerForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const { name, email, phone, address } = customerForm;
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setCustomerForm({
      ...customerForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await customerbaseUrl.post("/add", { customer: customerForm });
      console.log("After Success", response);
      toast.success("New Customer added successfully ✅");
    } catch (error) {
      console.error("Submit error:", error);

      const errMessage = error.response?.data?.error || error.response?.data?.message || "Something went wrong while adding customer ❌";

      toast.error(errMessage);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="col-8 offset-2">
          <h3 className="mb-4 mt-3">Customer</h3>
          <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" name="email" value={email} id="email" className="form-control" placeholder="email" onChange={handleFormChange} />
              <div className="valid-feedback">Email Looks Good</div>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" name="name" value={name} id="name" className="form-control" placeholder="name" onChange={handleFormChange} />
              <div className="valid-feedback">Names Looks Good</div>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Contact No
              </label>
              <input type="text" name="phone" value={phone} id="phone" className="form-control" placeholder="phone" onChange={handleFormChange} />
              <div className="valid-feedback">Phone Looks Good</div>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input type="text" name="address" value={address} id="address" className="form-control" placeholder="address" onChange={handleFormChange} />
            </div>
            <div className="mb-4">
              <input type="submit" value="Add" className="btn btn-dark add-btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCustomer;
