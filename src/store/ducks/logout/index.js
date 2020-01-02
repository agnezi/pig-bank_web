import { LogoutTypes } from "./types";

const INITIAL_STATE = {
  data: {},
  error: false,
  loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LogoutTypes.LOGOUT_REQUEST:
      return { ...state, loading: true, error: false };
    case LogoutTypes.LOGOUT_SUCCESS:
      return {
        state: {},
        loading: false,
        error: false
      };
    case LogoutTypes.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
