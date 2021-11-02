import { actionTypes } from "../actions/action-types";

const initialState = {
    patientEducationData   : [],
  
}

export function patientEducationReducer(state = initialState, action) {
 
  switch (action.type) {
    case actionTypes.PATIENTEDUCATION_GETALL_SUCCESS :
      return {
        ...state,
        patientEducationData : action.payload
      };
      default:
        return state
     
}
}