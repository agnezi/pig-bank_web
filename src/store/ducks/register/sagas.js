import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "../expenses/actions";
import history from "../../../Helpers/history";

import errorHandler from "../../../Helpers/errorHandler";

export function* loadRegister(action) {
  const { name, email, password } = action.payload.data;
  const data = {
    name,
    email,
    password
  };
  try {
    const response = yield call(api().post, "/register", data);
    if (response.data.token && response.data.user._id) {
      yield localStorage.setItem("token", response.data.token);
      yield localStorage.setItem("user_id", response.data.user._id);
      yield sessionStorage.setItem("token", response.data.token);
      yield sessionStorage.setItem("user_id", response.data.user._id);
      yield put(loadSuccess(response.data));
      yield history.push("/");
    }
  } catch (err) {
    yield put(loadFailure());
    errorHandler(err);
  }
}
