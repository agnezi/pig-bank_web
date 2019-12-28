import { ExpensesTypes } from "./types";
import { action } from "typesafe-actions";

export const loadRequest = () => action(ExpensesTypes.LOAD_REQUEST);
export const loadSuccess = data => action(ExpensesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ExpensesTypes.LOAD_FAILURE);
