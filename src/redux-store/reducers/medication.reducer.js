import { actionTypes } from "../actions/action-types";

const initialState = {
    medicationData : [],
  
}

export function medicationnReducer(state = initialState, action) {
   if(
    action.type === actionTypes.MEDICATION_GETALL_SUCCESS || 
    action.type === actionTypes.MEDICATION_UPDATEALL_SUCCESS 
   ){
  switch (action.type) {
    case actionTypes.MEDICATION_GETALL_SUCCESS:
      return {
        ...state,
        medicationsAllergies : action.payload.medicationsAndAllergies,
        medicationRequest: true,
        medicationArr: action.payload.medicationsAndAllergies
      };
      case actionTypes.MEDICATION_UPDATEALL_SUCCESS:
        return{
          ...state,
          medicationData: action.payload.medicationsAndAllergies,
        }
     
    default:
      return state
  }
}else{ return { ...state}}
}