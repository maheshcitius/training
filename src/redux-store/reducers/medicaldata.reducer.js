import { actionTypes } from '../actions/action-types';

const init= {
    allergiesRequest : '',
    medicationsRequest:'',
    allergies:[],
    medications:[]


};


 function medicalDataReducer(state = init, action) {
    
  switch (action.type) {
    case actionTypes.GET_ALL_AELLERGIES_REQUEST:
      return {
        ...state,
        allergiesRequest: 'pending',
        
        
      };
    case actionTypes.GET_ALL_AELLERGIES_SUCCESS:

       return {
        ...state,
      allergiesRequest: 'success',
      allergies:action.allergies
        };

    case actionTypes.GET_ALL_AELLERGIES_FAILURE:
      return {
        ...state,
        allergiesRequest: 'failed',
       
      
      };
 
    case actionTypes.GET_ALL_MEDICATIONS_REQUEST:
        return {
            ...state,
            medicationsRequest: 'pending',
            
        };
    case actionTypes.GET_ALL_MEDICATIONS_SUCCESS:
        return {
            ...state,
            medicationsRequest: 'success',
            medications: action.medications,
            
        };
    case actionTypes.GET_ALL_MEDICATIONS_FAILURE:
      return {
        ...state,
        medicationsRequest: 'failed',
        
        
    }
    default:
      return state
  }
}

export default medicalDataReducer;