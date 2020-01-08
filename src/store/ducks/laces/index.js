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
  loading: false,
  page: 1,
  pageSize: 10
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
    case LacesTypes.CREATE_REQUEST:
      return { ...state, loading: true };
    case LacesTypes.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case LacesTypes.CREATE_FAILURE:
      return { ...state, loading: false, error: true, data: [] };

    default:
      return state;
  }
};

export default reducer;
