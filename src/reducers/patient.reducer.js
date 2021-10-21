import { patientConstants } from '../constants';

const initialState = {
    patient : '',
};


 function patientReducer(state = initialState, action) {
    
  switch (action.type) {
    case patientConstants.DELETE_PATIENT_SUCCESS:
        return {
            ...state,
            patientRequest: 'success',
            patient:action.patient
            };
      
    case patientConstants.DELETE_PATIENT_FAILURE:
        return {
            ...state,
            patientRequest: 'failed'
          };

    case patientConstants.DELETE_PATIENT_REQUEST:
        return {
            ...state,
            patientRequest: 'pending',
            patient: [],
          };
    
    default:
      return state
  }
}

export default patientReducer;



