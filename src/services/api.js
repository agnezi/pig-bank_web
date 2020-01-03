import axios from "axios";

const token = localStorage.getItem("token") || sessionStorage.getItem("token");

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Authorization: token
  }
});

export default api;
