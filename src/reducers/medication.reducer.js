import { MedicationConstants } from "../constants/medication.constants";

const initialState = {
    medicationData : [],
  
}

export function medicationnReducer(state = initialState, action) {
   if(
    action.type === MedicationConstants.MEDICATION_GETALL_SUCCESS || 
    action.type === MedicationConstants.MEDICATION_UPDATEALL_SUCCESS 
   ){
  switch (action.type) {
    case MedicationConstants.MEDICATION_GETALL_SUCCESS:
      return {
        ...state,
        medicationData : action.medicationAllergyArr,
        medicationRequest: true,
        medicationArr: action.medicationArr
      };
      case MedicationConstants.MEDICATION_UPDATEALL_SUCCESS:
        return{
          ...state,
          medicationData: action.medicationData,
        }
     
    default:
      return state
  }
}else{ return { ...state}}
}