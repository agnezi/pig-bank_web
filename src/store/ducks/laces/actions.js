import { LacesTypes } from "./types";
import { action } from "typesafe-actions";

export const loadRequest = () => action(LacesTypes.LOAD_REQUEST);
export const loadSuccess = data => action(LacesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(LacesTypes.LOAD_FAILURE);
