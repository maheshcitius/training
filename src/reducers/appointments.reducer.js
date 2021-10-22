import { appointmentsActionTypes } from '../constants';

const initialState = {
    appointments : '',
};


 function appointmentsReducer(state = initialState, action) {
    
  switch (action.type) {
    case appointmentsActionTypes.GET_ALL_APPOINTMENTS_REQUEST:
      return {
        ...state,
        appointmentsRequest: 'pending',
        appointments: [],
        
      };
    case appointmentsActionTypes.GET_ALL_APPOINTMENTS_SUCCESS:

       return {
        ...state,
        appointmentsRequest: 'success',
        appointments:action.appointments
        };

    case appointmentsActionTypes.GET_ALL_APPOINTMENTS_FAILURE:
      return {
        ...state,
        appointmentsRequest: 'failed'
        
      
      };
      case appointmentsActionTypes.ADD_APPOINTMENTS_REQUEST:
        return{
             appointments: action.appointments,
        }
        case appointmentsActionTypes.ADD_APPOINTMENTS_SUCCESS:
         return{
           appointments: action.appointments
         }
         case appointmentsActionTypes.ADD_APPOINTMENTS_FAILURE:
           return{
  
           }
 
    default:
      return state
  }
}

export default appointmentsReducer;