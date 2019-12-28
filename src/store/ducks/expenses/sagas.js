import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "../expenses/actions";

export function* load() {
  try {
    const response = yield call(api.get, "/expenses");

    yield put(loadSuccess(response.data.docs));
  } catch (error) {
    yield put(loadFailure());
  }
}
