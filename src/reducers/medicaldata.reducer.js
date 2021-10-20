import { medicalDataActionTypes } from '../constants';

const initialState = {
    allergiesRequest : '',
    medicationsRequest:''
};


 function medicalDataReducer(state = initialState, action) {
    
  switch (action.type) {
    case medicalDataActionTypes.GET_ALL_AELLERGIES_REQUEST:
      return {
        ...state,
        allergiesRequest: 'pending',
        allergies: [],
        
      };
    case medicalDataActionTypes.GET_ALL_AELLERGIES_SUCCESS:

       return {
        ...state,
      allergiesRequest: 'success',
      allergies:action.allergies
        };

    case medicalDataActionTypes.GET_ALL_AELLERGIES_FAILURE:
      return {
        ...state,
        allergiesRequest: 'failed',
        allergies:[],
      
      };
 
    case medicalDataActionTypes.GET_ALL_MEDICATIONS_REQUEST:
        return {
            ...state,
            medicationsRequest: 'pending',
            medications: [],
           
        };
    case medicalDataActionTypes.GET_ALL_MEDICATIONS_SUCCESS:
        return {
            ...state,
            medicationsRequest: 'success',
            medications: action.medications,
            
        };
    case medicalDataActionTypes.GET_ALL_MEDICATIONS_FAILURE:
      return {
        ...state,
        medicationsRequest: 'failed',
        medications: [],
        
    }
    default:
      return state
  }
}

export default medicalDataReducer;