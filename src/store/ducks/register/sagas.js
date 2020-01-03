import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "../expenses/actions";

export function* loadRegister(action) {
  console.log(action);
  const { name, email, password } = action.payload.data;
  const data = {
    name,
    email,
    password
  };
  try {
    const response = yield call(api.post, "/register", data);

    localStorage.setItem("token", response.data.token);

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
