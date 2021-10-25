import { MedicationConstants } from '../constants/medication.constants';
import { getPatientMadicationsAndAllergies,updatePatientMadicationsAndAllergies } from '../services/index';
import { snackbarActions } from './';
import { history } from '../helpers';

export const medicationAllergyActions = {
       getAll,
       updateMedication
};


function getAll() {
    return dispatch => {
        dispatch(request());
        

        getPatientMadicationsAndAllergies().then(
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

function updateMedication(payload) {
    return dispatch => {
        dispatch(request(payload));
        updatePatientMadicationsAndAllergies(payload).then(
                medicationData => { 
                    console.log('************',medicationData);
                    if(medicationData){
                        console.log("Success login",medicationData);
                       
                        dispatch(success(medicationData));
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Updated Successful..!',type:'success'}));  
                    }    
                },
                error => {
                    console.log("in medicationData actions",error)
                    dispatch(failure(error));
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Update Failed',type:'warning'}));
                }
            );
    };

    function request() { return { type: MedicationConstants.MEDICATION_UPDATEALL_REQUEST} }
    function success(medicationData) { return {type : MedicationConstants.MEDICATION_UPDATEALL_REQUEST, medicationData } }
    function failure(error) { return { type: MedicationConstants.MEDICATION_UPDATEALL_REQUEST, error } }
}

// function AddMedication(payload) {
//     return dispatch => {
//         dispatch(request(payload));
//         AddMedication(payload).then(
//                 medicationData => { 
//                     console.log(medData);
//                     if(medData){
//                         console.log("Success login",medData);
                       
//                         dispatch(success(medData));
//                         dispatch(snackbarActions.toggleSnackbarOpen({message:'Updated Successful..!',type:'success'}));  
//                     }    
//                 },
//                 error => {
//                     console.log("in medData actions",error)
//                     dispatch(failure(error));
//                     dispatch(snackbarActions.toggleSnackbarOpen({message:'Update Failed',type:'warning'}));
//                 }
//             );
//     };

//     function request() { return { type: MedicationConstants.MEDICATION_UPDATEALL_REQUEST} }
//     function success(medicationData) { return {type : MedicationConstants.MEDICATION_UPDATEALL_REQUEST, medicationData } }
//     function failure(error) { return { type: MedicationConstants.MEDICATION_UPDATEALL_REQUEST, error } }
// }