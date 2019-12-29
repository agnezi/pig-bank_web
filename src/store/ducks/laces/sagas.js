import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "../laces/actions";

export function* loadLaces() {
  try {
    const response = yield call(api.get, "/lace");
    yield put(loadSuccess(response.data.docs));
  } catch (error) {
    yield put(loadFailure());
  }
}
