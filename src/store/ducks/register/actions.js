import { RegisterTypes } from "./types";
import { action } from "typesafe-actions";

export const loadRequest = data => action(RegisterTypes.LOAD_REQUEST, { data });
export const loadSuccess = data => action(RegisterTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(RegisterTypes.LOAD_FAILURE);
