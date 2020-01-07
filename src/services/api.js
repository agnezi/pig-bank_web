import axios from "axios";

const token = localStorage.getItem("token") || sessionStorage.getItem("token");

const api = axios.create({
  baseURL:
    process.env.REACT_APP_ENV === "prod"
      ? process.env.REACT_APP_URL_PROD
      : process.env.REACT_APP_URL_DEV,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
});

export default api;
