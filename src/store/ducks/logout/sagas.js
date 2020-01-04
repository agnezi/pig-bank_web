import { put } from "redux-saga/effects";
import { logoutSuccess, logoutFailure } from "../logout/actions";
import history from "../../../Helpers/history";

export function* loadLogout() {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user_id");

    yield put(logoutSuccess());
    history.push("/login");
  } catch (error) {
    yield put(logoutFailure());
  }
}
