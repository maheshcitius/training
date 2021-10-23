import { patientConstants } from '../constants/index';
import { patientService } from '../services/index';
import { snackbarActions } from '.';



function deletePatientById(id) {
    console.log('in action deletePatientById--');
    return dispatch => {
        dispatch(request());
        console.log('before call service');
        patientService.deletePatientByIdService(id)
            .then(
                patient => {
                    if(patient){
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Patient data deleted Successfuly..!',type:'success'}));
                        dispatch(success(patient));
                    }        
                },
                error => {
                    dispatch(failure(error));
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Data Failed to load',type:'warning'}));
                }
            );
    };
    function request() { return { type: patientConstants.DELETE_PATIENT_REQUEST } }
    function success(patient) { return { type: patientConstants.DELETE_PATIENT_SUCCESS, patient } }
    function failure(error) { return { type: patientConstants.DELETE_PATIENT_FAILURE, error } }
   
}

export const patientsAction = {
    deletePatientById
};

