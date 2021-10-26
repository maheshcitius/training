import { patientConstants } from '../constants/index';
import { patientService } from '../services/index';
import { snackbarActions } from './snackbar-actions';
import { toggleSnackbarOpen, toggleSnackbarClose } from './snackbar-actions';

function deletePatientById(id) {
    console.log('in action deletePatientById--');
    return dispatch => {
        dispatch(request());
        console.log('before call service');
        patientService.deletePatientByIdService(id)
            .then(
                patient => {
                    if(patient){
                        dispatch(toggleSnackbarOpen({message:'Patient data deleted Successfuly..!',type:'success'}));
                        dispatch(success(patient));
                    }        
                },
                error => {
                    dispatch(failure(error));
                    dispatch(toggleSnackbarOpen({message:'Data Failed to load',type:'warning'}));
                }
            );
    };
    function request() { return { type: patientConstants.DELETE_PATIENT_REQUEST } }
    function success(patient) { return { type: patientConstants.DELETE_PATIENT_SUCCESS, patient } }
    function failure(error) { return { type: patientConstants.DELETE_PATIENT_FAILURE, error } }
   
}

function updatePatient(id,updatePayload) {

    let payload = {
        message : '',
        updatedUser:{}
    }
    return dispatch => {
       // dispatch(request());

       patientService.updateUser(id,updatePayload)
            .then(
                response => {
                    payload.message = 'User Updated'
                    payload.updatedUser = response.data
                    dispatch(success(payload))
                    dispatch(toggleSnackbarOpen({message:'Updated Successfully',type:'success'}));
                }
            )
            .catch(error=>{
                payload.message = error.response.data
                dispatch(failure(payload))
                dispatch(toggleSnackbarOpen({message:'Failed to update',type:'warning'}));
            })
    };

    function request() { return { type: patientConstants.UPDATE_PATIENT_REQUEST } }
    function success(payload) { return { type: patientConstants.UPDATE_PATIENT_SUCCESS, payload } }
    function failure(payload) { return { type: patientConstants.UPDATE_PATIENT_FAILURE, payload } }
}

export const patientsAction = {
    deletePatientById,
    updatePatient
};

