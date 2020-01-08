import { LacesTypes } from "./types";
import { action } from "typesafe-actions";

export const loadRequest = (page, pageSize) =>
  action(LacesTypes.LOAD_REQUEST, { page, pageSize });
export const loadSuccess = data => action(LacesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(LacesTypes.LOAD_FAILURE);

export const createRequest = data =>
  action(LacesTypes.CREATE_REQUEST, { data });
export const createSuccess = data =>
  action(LacesTypes.CREATE_SUCCESS, { data });
export const createFailure = () => action(LacesTypes.CREATE_FAILURE);
