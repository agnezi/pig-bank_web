import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "../expenses/actions";
import errorHandler from "../../../Helpers/errorHandler";

export function* loadExpenses(action) {
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
    const response = yield call(api.get, "/expenses", config);
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());

    errorHandler(err);
  }
}
