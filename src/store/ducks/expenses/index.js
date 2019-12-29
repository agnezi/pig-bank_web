import { ExpensesTypes } from "./types";

const INITIAL_STATE = {
  data: [
    {
      _id: 1,
      title: "Xbox",
      amount: 5000
    }
  ],
  error: false,
  loading: false,
  page: 1,
  pageSize: 1
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ExpensesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ExpensesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case ExpensesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;