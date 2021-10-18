import { demographicsConstants } from '../constants';


export function  demographicsReducer(state = {}, action){
    switch (action.type) {
      case demographicsConstants.GETALL_DEMOGRAPHICS_REQUEST:
        return state;
      case demographicsConstants.GETALL_SUCCESS: 
        return {
          demographics: action.demographics};
       case demographicsConstants.POST_DEMOGRAPHICS_REQUEST:
         return{
              demographics: action.demographics,
         }
         case demographicsConstants.POST_DEMOGRAPHICS_SUCCESS:
          return{
            demographics: action.demographics
          }
          case demographicsConstants.POST_DEMOGRAPHICS_FAILURE:
            return{
   
            }
      
      default:
        return state;
    }
  } 