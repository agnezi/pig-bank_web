import axios from "axios";
import env from "../env";

const token = localStorage.getItem("token") || sessionStorage.getItem("token");

const api = axios.create({
  baseURL: env.baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
});

export default api;
