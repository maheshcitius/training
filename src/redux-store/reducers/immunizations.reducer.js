import { actionTypes } from "../actions/action-types";

const init = { immunization: [] };

export function immunizationReducer(state = init, action) {
  switch (action.type) {
    case actionTypes.IMMUNIZATION_GETALL_SUCCESS:
      return {
        immunizationRequest: true,
        immunization: action.immunization,
      };

    case actionTypes.POST_IMMUNIZATION_SUCCESS:
      return {
        ...state,
        immunization: [...state.immunization, action.immunization],
      };
    case actionTypes.POST_IMMUNIZATION_FAILURE:
      return {
        ...state,
      };
    case actionTypes.DELETE_IMMUNIZATION_SUCCESS:
      let filteredList = state.immunization.filter(
        (item) => item.id !== action.id
      );

      return {
        ...state,
        immunization: filteredList,
      };

    default:
      return state;
  }
}
