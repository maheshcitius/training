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
    //   case immunizationConstants.POST_IMMUNIZATION_REQUEST:
    //     return{
    //       immunization: action.immunization,
    //     }
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