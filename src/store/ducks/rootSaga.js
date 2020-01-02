import { all, takeLatest } from "redux-saga/effects";

import { LoginTypes } from "./login/types";
import { RegisterTypes } from "./register/types";
import { ExpensesTypes } from "./expenses/types";
import { LacesTypes } from "./laces/types";

import { LogoutTypes } from "./logout/types";

import { loadLogin } from "./login/sagas";
import { loadRegister } from "./register/sagas";
import { loadExpenses } from "./expenses/sagas";
import { loadLaces } from "./laces/sagas";

import { loadLogout } from "./logout/sagas";

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.LOAD_REQUEST, loadLogin),
    takeLatest(RegisterTypes.LOAD_REQUEST, loadRegister),
    takeLatest(ExpensesTypes.LOAD_REQUEST, loadExpenses),
    takeLatest(LacesTypes.LOAD_REQUEST, loadLaces),
    takeLatest(LogoutTypes.LOGOUT_REQUEST, loadLogout)
  ]);
}
