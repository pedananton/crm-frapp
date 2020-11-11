import axios from "axios";

export const products = axios.create({
  baseURL: "https://5f16d587a346a00016739638.mockapi.io/api/products/products",
  headers: {
    "Content-Type": "application/json",
  },
});