import { LacesTypes } from "./types";

const INITIAL_STATE = {
  data: [
    {
      _id: 1,
      title: "Nasdaq",
      amount: 5000
    }
  ],
  error: false,
  loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LacesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case LacesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case LacesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
