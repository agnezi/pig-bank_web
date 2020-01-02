import { put } from "redux-saga/effects";
import { logoutSuccess, logoutFailure } from "../logout/actions";
import history from "../../../Helpers/history";

export function* loadLogout() {
  try {
    localStorage.removeItem("pig-bank");
    localStorage.removeItem("pig-bank-user");

    yield put(logoutSuccess());
    history.push("/login");
  } catch (error) {
    yield put(logoutFailure());
  }
}
