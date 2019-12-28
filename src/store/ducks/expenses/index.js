import { ExpensesTypes } from "./types";

const INITIAL_STATE = {
  data: [
    {
      _id: "asdfaf",
      title: "Xbox series X",
      amount: 5000
    }
  ],
  error: false,
  loading: false
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
