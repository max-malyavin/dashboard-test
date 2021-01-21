import {
  GET_SITES,
  SITES_ERROR,
  GET_TEST,
  GET_TESTS,
  TESTS_ERROR,
} from "./Constants";

function AppReducer(state, action) {
  switch (action.type) {
    case GET_SITES:
      return {
        ...state,
        loading: false,
        sites: action.payload,
      };
    case GET_TEST:
      let { payload, currentR } = action;
      if (currentR === "currentResults") {
        return {
          ...state,
          loading: false,
          currentResults: payload,
        };
      }
      if (currentR === "currentFinalize") {
        return {
          ...state,
          loading: false,
          currentFinalize: payload,
        };
      }
      break;
    case GET_TESTS:
      return {
        ...state,
        loading: false,
        tests: action.payload,
      };
    case TESTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SITES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default AppReducer;
