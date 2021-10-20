import { MedicationConstants } from "../constants/medication.constants";

const initialState = {
    medicationData : []
}

export function medicationnReducer(state = initialState, action) {
    console.log("medicationReducers",action)
  switch (action.type) {
    case MedicationConstants.MEDICATION_GETALL_SUCCESS:
      return {
        medicationData : action.medicationAllergyArr,
        medicationRequest: true,
        medicationArr: action.medicationArr
      };
      case MedicationConstants.MEDICATION_UPDATEALL_REQUEST:
        return{
          medicationData: action.medicationData,
        }
    //     case immunizationConstants.POST_IMMUNIZATION_SUCCESS:
    //      return{
    //       immunization: action.immunization
    //      }
    //      case immunizationConstants.POST_IMMUNIZATION_FAILURE:
    //        return{
  
    //        }    
    default:
      return state
  }
}