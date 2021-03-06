import { RegisterTypes } from "./types";

const INITIAL_STATE = {
  data: undefined,
  error: false,
  loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegisterTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RegisterTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      };
    case RegisterTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: {} };
    default:
      return state;
  }
};

export default reducer;
