import { all, takeLatest } from "redux-saga/effects";

import { ExpensesTypes } from "./expenses/types";
import { load } from "./expenses/sagas";

export default function* rootSaga() {
  return yield all([takeLatest(ExpensesTypes.LOAD_REQUEST, load)]);
}
