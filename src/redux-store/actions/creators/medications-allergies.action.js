import { actionTypes } from '../action-types';

import { getPatientMadicationsAndAllergies,updatePatientMadicationsAndAllergies } from '../../../services/';
import {toggleSnackbarOpen} from './snackbar.action'

export const medicationAllergyActions = {
       getAll,
       updateMedication
};


function getAll() {
    let payload = {
        medicationsAndAllergies:'',
        message:''
    }
    return dispatch => {
        dispatch(request());
        

        getPatientMadicationsAndAllergies()
            .then(response =>{  
                if(response.data){      
                payload.medicationsAndAllergies = response.data[0];
                payload.message = 'Medications and Allergies Fetched'
              
                   dispatch(success(payload))
               }
            })
            .catch(error=>{
                payload.message = error.response.data;
                dispatch(failure(payload))
            }
            
            )
           
        
    };


    function request() { return { type: actionTypes.MEDICATION_GETALL_REQUEST } }
    function success(payload) { return { type: actionTypes.MEDICATION_GETALL_SUCCESS, payload } }
    function failure(payload) { return { type: actionTypes.MEDICATION_GETALL_FAILURE, payload } }
}

function updateMedication(newMedicationAllergy) {

    let payload = {
        medicationsAndAllergies:'',
        message:''
    }
    return dispatch => {
        dispatch(request(newMedicationAllergy));
        updatePatientMadicationsAndAllergies(newMedicationAllergy)
        .then(response =>{  
            if(response.data){      
            payload.medicationsAndAllergies = response.data[0];
            payload.message = 'Medications and Allergies Fetched'
          
               dispatch(success(payload))
               toggleSnackbarOpen({message:'Updated Successful..!',type:'success'})
           }
        })
        .catch(error=>{
            payload.message = error.response.data;
            dispatch(failure(payload))
            toggleSnackbarOpen({message:'Update Failed',type:'warning'})
        }
        
        )
    };

    function request() { return { type: actionTypes.MEDICATION_UPDATEALL_REQUEST} }
    function success(payload) { return {type : actionTypes.MEDICATION_UPDATEALL_REQUEST, payload } }
    function failure(payload) { return { type: actionTypes.MEDICATION_UPDATEALL_REQUEST, payload } }
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

//     function request() { return { type: actionTypes.MEDICATION_UPDATEALL_REQUEST} }
//     function success(medicationData) { return {type : actionTypes.MEDICATION_UPDATEALL_REQUEST, medicationData } }
//     function failure(error) { return { type: actionTypes.MEDICATION_UPDATEALL_REQUEST, error } }
// }