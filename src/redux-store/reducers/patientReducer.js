// import { patientConstants } from '../constants';
import { patientConstants } from '../../constants'

const initialState = {
    patient : '',
};


 function patientReducer(state = initialState, action) {
    console.log("--------------patientReducer-----------",action);
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

    case patientConstants.PATIENT_IMMUNISATION_SUCCESS:
        console.log("--------------patientReducersdfghjkdhydyaduyagyug-----------",action.payload);
        return {
          ...state,
          patientRequest: 'success',
          patientImmunisation:action.payload
        };
    
    case patientConstants.PATIENT_IMMUNISATION_FAILURE:
      return {
          ...state,
          patientRequest: 'failed'
        };

    case patientConstants.PATIENT_DEMOGRAPHICS_SUCCESS:
      console.log("--------------PATIENT_DEMOGRAPHICS_SUCCESS56789-----------",action.payload);
      return {
        ...state,
        patientRequest: 'success',
        patientDemographics:action.payload
      };

    case patientConstants.PATIENT_DEMOGRAPHICS_FAILURE:
      return {
          ...state,
          patientRequest: 'failed'
      };

    case patientConstants.PATIENT_DEMOGRAPHICS_REQUEST:
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



