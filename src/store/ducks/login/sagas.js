import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "../login/actions";
import history from "../../../Helpers/history";

import errorHandler from "../../../Helpers/errorHandler";
export function* loadLogin(action) {
  const { email, password } = action.payload.data;

  const data = {
    email,
    password
  };

  try {
    const response = yield call(api.post, "/auth", data);
    yield localStorage.setItem("token", response.data.token);
    yield localStorage.setItem("user_id", response.data.user._id);
    yield put(loadSuccess(response.data));
    history.push("/");
  } catch (err) {
    yield put(loadFailure());
    errorHandler(err);
  }
}
