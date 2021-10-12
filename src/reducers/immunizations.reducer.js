import { immunizationConstants } from '../constants';

export function immunizationReducer(state = {}, action) {
    console.log("Immunizations Reducers",action)
  switch (action.type) {
    case immunizationConstants.IMMUNIZATION_GETALL_SUCCESS:
      return {
        immunizationRequest: true,
        immunizationArr: action.immunizationArr
      };
      case immunizationConstants.POST_IMMUNIZATION_REQUEST:
        return{
          immunization: action.immunization,
        }
        case immunizationConstants.POST_IMMUNIZATION_SUCCESS:
         return{
          immunization: action.immunization
         }
         case immunizationConstants.POST_IMMUNIZATION_FAILURE:
           return{
  
           }    
    default:
      return state
  }
}