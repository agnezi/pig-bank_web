import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "../laces/actions";

import errorHandler from "../../../Helpers/errorHandler";

export function* loadLaces(action) {
  try {
    const { page, pageSize } = action.payload;
    const userId =
      localStorage.getItem("user_id") || sessionStorage.getItem("user_id");

    const config = {
      params: {
        page,
        pageSize,
        _id: userId
      }
    };
    const response = yield call(api.get, "/laces", config);
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
    errorHandler(err);
  }
}

export function* createLace(action) {
  try {
    const { title, amount, category } = action.payload.data;
    const userId =
      localStorage.getItem("user_id") || sessionStorage.getItem("user_id");
    const payload = {
      title,
      amount,
      category,
      _id: userId
    };
    const response = yield call(api.post, "/laces", payload);
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
    errorHandler(err);
  }
}
