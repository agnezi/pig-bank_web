import { ExpensesTypes } from "./types";
import { action } from "typesafe-actions";

export const loadRequest = (page, pageSize) =>
  action(ExpensesTypes.LOAD_REQUEST, { page, pageSize });
export const loadSuccess = data => action(ExpensesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ExpensesTypes.LOAD_FAILURE);

export const createRequest = data =>
  action(ExpensesTypes.CREATE_REQUEST, { data });
export const createSuccess = data =>
  action(ExpensesTypes.CREATE_SUCCESS, { data });
export const createFailure = () => action(ExpensesTypes.CREATE_FAILURE);
