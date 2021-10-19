import { MedicationConstants } from '../constants/medication.constants';
import { getAllMedication } from '../services/index';
import { snackbarActions } from './';
import { history } from '../helpers';

export const medicationAllergyActions = {
       getAll,

};


function getAll() {
    return dispatch => {
        dispatch(request());
        

        getAllMedication().then(
            medicationAllergyArr => {
                console.log(medicationAllergyArr,"acctuv")
                    if(medicationAllergyArr){
                    
                        dispatch(snackbarActions.toggleSnackbarOpen(
                            {message:'MEDICATION got Successful..!',type:'success'}));
                        dispatch(success(medicationAllergyArr))
                       
                    }
                    
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: MedicationConstants.MEDICATION_GETALL_REQUEST } }
    function success(medicationAllergyArr) { return { type: MedicationConstants.MEDICATION_GETALL_SUCCESS, medicationAllergyArr } }
    function failure(error) { return { type: MedicationConstants.MEDICATION_GETALL_FAILURE, error } }
}