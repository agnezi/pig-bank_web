import { LoginTypes } from "./types";
import { action } from "typesafe-actions";

export const loadRequest = data => action(LoginTypes.LOAD_REQUEST, { data });
export const loadSuccess = data => action(LoginTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(LoginTypes.LOAD_FAILURE);
