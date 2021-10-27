import { actionTypes } from "../actions/action-types";
import { initialState } from "../state";

const initial = {
  demographics: [],
  demographicsMessage: "",
};

export function demographicsReducer(state = initial, action) {
  switch (action.type) {
    case actionTypes.GETALL_DEMOGRAPHICS_SUCCESS:
      console.log("inside g demo", action);
      return {
        ...state,
        demographics: action.payload.demographics,
        demographicsMessage: action.payload.demographicMessage,
      };
    case actionTypes.POST_DEMOGRAPHICS_REQUEST:
      return {
        ...state,
        demographics: action.demographics,
      };
    case actionTypes.POST_DEMOGRAPHICS_SUCCESS:
      return {
        ...state,
        demographics: action.payload.demographics,
      };
    case actionTypes.POST_DEMOGRAPHICS_FAILURE:
      return {
        ...state,
        demographicsMessage: action.payload.demographicsMessage,
      };
    case actionTypes.UPDATE_DEMOGRAPHICS_REQUEST:
      return {
        ...state,
        demographics: action.demographics,
      };
    case actionTypes.UPDATE_DEMOGRAPHICS_SUCCESS:
      return {
        ...state,
        demographics: action.payload.demographics,
      };
    case actionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        demographicsMessage: action.payload.demographicsMessage,
      };

    default:
      return state;
  }
}
