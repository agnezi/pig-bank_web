import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSuccess, loadFailure } from "../expenses/actions";

export function* loadExpenses(action) {
  const { page, pageSize } = action.payload;
  const config = {
    params: {
      page,
      pageSize
    }
  };
  try {
    const response = yield call(api.get, "/expenses", config.params);
    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
