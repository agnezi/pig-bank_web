import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 20000,
  headers: { Authorization: localStorage.getItem("pig_bank") },
  payload: { user_id: localStorage.getItem("pig_bank_user") }
});

console.log("pigbanktoken", localStorage.getItem("pig_bank"));
console.log("api-front", api.headers);

export default api;
