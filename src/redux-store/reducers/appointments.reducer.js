import { actionTypes } from '../actions/action-types';
import { initialState } from '../state'

const init ={
  appointmentsRequest:'',
  appointments:[],
}

 function appointmentsReducer(state = init, action) {
    
  switch (action.type) {
    case actionTypes.GET_ALL_APPOINTMENTS_REQUEST:
      return {
        ...state,
        appointmentsRequest: 'pending',
        
      };
    case actionTypes.GET_ALL_APPOINTMENTS_SUCCESS:
        console.log("in get all app success")
       return {
        ...state,
        appointmentsRequest: 'success',
        appointments:action.appointments
        };

    case actionTypes.GET_ALL_APPOINTMENTS_FAILURE:
      return {
        ...state,
        appointmentsRequest: 'failed'
        
      
      };
 
    default:
      return state
  }
}

export default appointmentsReducer;