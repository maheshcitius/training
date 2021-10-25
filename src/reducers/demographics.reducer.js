import { demographicsConstants } from '../constants';



export function  demographicsReducer(state = {} , action){
    switch (action.type) {
      case demographicsConstants.GETALL_DEMOGRAPHICS_REQUEST:
        return state;
      case demographicsConstants.GETALL_DEMOGRAPHICS_SUCCESS: 
        return {
          ...state,
          demographics: action.demographics};
       case demographicsConstants.POST_DEMOGRAPHICS_REQUEST:
         return{
             ...state,
              demographics: action.demographics,
         }
         case demographicsConstants.POST_DEMOGRAPHICS_SUCCESS:
          return{
            ...state,
            demographics: action.demographics
          }
          case demographicsConstants.POST_DEMOGRAPHICS_FAILURE:
            return{
                ...state
            }
      
      default:
        return state;
    }
    
  } 