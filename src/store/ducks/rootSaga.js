import { all, takeLatest } from "redux-saga/effects";

import { ExpensesTypes } from "./expenses/types";
import { LacesTypes } from "./laces/types";

import { loadExpenses } from "./expenses/sagas";
import { loadLaces } from "./laces/sagas";

export default function* rootSaga() {
  return yield all([
    takeLatest(ExpensesTypes.LOAD_REQUEST, loadExpenses),
    takeLatest(LacesTypes.LOAD_REQUEST, loadLaces)
  ]);
}
