import { combineReducers } from "redux";

import register from "./register";
import login from "./login";
import expenses from "./expenses";
import laces from "./laces";

import logout from "./logout";

export default combineReducers({
  login,
  register,
  expenses,
  laces,
  logout
});
