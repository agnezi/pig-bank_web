import { LoginTypes } from "./types";
import { action } from "typesafe-actions";

export const loginRequest = data => action(LoginTypes.LOAD_REQUEST, { data });
export const loginSuccess = data => action(LoginTypes.LOAD_SUCCESS, { data });
export const loginFailure = () => action(LoginTypes.LOAD_FAILURE);
