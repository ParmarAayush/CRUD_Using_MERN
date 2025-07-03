import { useEffect, useState } from "react";
import axios from "axios";

const GetCustomer = () => {
  const [customers, setCustomer] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/customers");
        setCustomer(response.data.customerData);
      } catch (error) {
        console.error("Error fetching clients:", error.message);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Clients List</h2>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Client
        </button>
      </div>

      <table className="w-full table-auto border border-gray-300 mt-3">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="4" className="p-4 text-center text-gray-600">
                No clients found.
              </td>
            </tr>
          ) : (
            customers.map((customer, index) => (
              <tr key={index}>
                <td className="p-2 border">{customer.name}</td>
                <td className="p-2 border">{customer.email}</td>
                <td className="p-2 border">{customer.phone}</td>
                <td className="p-2 border">{customer.address}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetCustomer;
