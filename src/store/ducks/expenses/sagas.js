import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "../expenses/actions";

export function* loadExpenses(action) {
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
  try {
    const response = yield call(api.get, "/expenses", config);
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
