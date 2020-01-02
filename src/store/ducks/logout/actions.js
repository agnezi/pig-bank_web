import { LogoutTypes } from "./types";
import { action } from "typesafe-actions";

export const logoutRequest = () => action(LogoutTypes.LOGOUT_REQUEST);
export const logoutSuccess = () => action(LogoutTypes.LOGOUT_SUCCESS);
export const logoutFailure = () => action(LogoutTypes.LOGOUT_FAILURE);
