import { actionTypes } from '../action-types'

import { patientEducationService } from '../../../services';



export const patientEducationActions = {
       getAll,
};


function getAll() {
        return dispatch => {
            dispatch(request());
    
            patientEducationService.getPatientEducation()
                .then(
                   education => dispatch(success(education)),
                    error => dispatch(failure(error))
                );
        };
    
        function request() { return { type: actionTypes.PATIENTEDUCATION_GETALL_REQUEST} }
        function success(education) { return { type: actionTypes.PATIENTEDUCATION_GETALL_SUCCESS,education }}
        function failure(error) { return { type: actionTypes.PATIENTEDUCATION_GETALL_FAILURE, error } }
    }
