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
           ...state,
           appointments:[...state.appointments,action.payload.appointment]
         }
         case appointmentsActionTypes.ADD_APPOINTMENTS_FAILURE:
           return{
  
           }
           case appointmentsActionTypes.UPDATE_APPOINTMENT_REQUEST:
            return{
                 appointment: action.appointment,
            }
            case appointmentsActionTypes.UPDATE_APPOINTMENT_SUCCESS:
            return state.appointments.map((appointmentitem) => {
                if (appointmentitem.id === action.payload.id) {
                  return {
                    ...appointmentitem,
                    ...action.payload,
                  };
                } else {
                  return appointmentitem;
                }
              });
             
             case appointmentsActionTypes.UPDATE_APPOINTMENT_FAILURE:
               return{
      
               }
               case appointmentsActionTypes.DELETE_APPOINTMENT_SUCCESS:
            return{
              ...state,
        appointment: state.appointments.filter(user => user.id !== action.payload),
            }
             
             case appointmentsActionTypes.DELETE_APPOINTMENT_FAILURE:
               return{
      
               }

 
    default:
      return state
  }
}

export default appointmentsReducer;