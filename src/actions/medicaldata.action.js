import { medicalDataActionTypes } from '../constants/index';

import { medicalDataService } from '../services/index';

//import { snackbarActions } from './';

export const medicalDataActions = {
    getAllergies,
    getMedications,
};


function getAllergies() {
    return dispatch => {
        dispatch(request());

        medicalDataService.getAllAllergies()
            .then(
                allergies => dispatch(success(allergies)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: medicalDataActionTypes.GET_ALL_AELLERGIES_REQUEST } }
    function success(allergies) { return { type: medicalDataActionTypes.GET_ALL_AELLERGIES_SUCCESS, allergies }}
    function failure(error) { return { type: medicalDataActionTypes.GET_ALL_AELLERGIES_FAILURE, error } }
}

function getMedications() {
    return dispatch => {
        dispatch(request());

        medicalDataService.getAllMedications()
            .then(
                medications => dispatch(success(medications)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: medicalDataActionTypes.GET_ALL_MEDICATIONS_REQUEST } }
    function success(medications) {return { type: medicalDataActionTypes.GET_ALL_MEDICATIONS_SUCCESS, medications }}
    function failure(error) { return { type: medicalDataActionTypes.GET_ALL_MEDICATIONS_FAILURE, error } }
}