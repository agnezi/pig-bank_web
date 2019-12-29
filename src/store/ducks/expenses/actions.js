import { ExpensesTypes } from "./types";
import { action } from "typesafe-actions";

export const loadRequest = (page, pageSize) =>
  action(ExpensesTypes.LOAD_REQUEST, { page, pageSize });
export const loadSuccess = data => action(ExpensesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ExpensesTypes.LOAD_FAILURE);
