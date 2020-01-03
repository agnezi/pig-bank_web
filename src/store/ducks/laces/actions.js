import { LacesTypes } from "./types";
import { action } from "typesafe-actions";

export const loadRequest = (page, pageSize) =>
  action(LacesTypes.LOAD_REQUEST, { page, pageSize });
export const loadSuccess = data => action(LacesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(LacesTypes.LOAD_FAILURE);
