import axios from "axios";

export const customerbaseUrl = axios.create({
    baseURL: "http://localhost:3000/customer",
})

