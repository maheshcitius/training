import { actionTypes } from "../actions/action-types";

export function immunizationReducer(state = {}, action) {
  console.log("Immunizations Reducers", action);
  switch (action.type) {
    case actionTypes.IMMUNIZATION_GETALL_SUCCESS:
      return {
        immunizationRequest: true,
        immunization: action.immunization,
      };
    case actionTypes.POST_IMMUNIZATION_REQUEST:
      return {
        immunization: action.immunization,
      };
    case actionTypes.POST_IMMUNIZATION_SUCCESS:
      console.log("immu succ red", action.payload);
      return {
        ...state,
        immunization: action.immunization,
      };
    case actionTypes.POST_IMMUNIZATION_FAILURE:
      return {};
    default:
      return state;
  }
}
