import { actionTypes } from '../action-types';
import { appointmentServices } from '../../../services';


//import { snackbarActions } from './';

export const appointmentsActions = {
    getAppointments,
    addAppointment,
};


function getAppointments() {
    return dispatch => {
        dispatch(request());

        appointmentServices.getAllAppointments()
            .then(
                appointments => dispatch(success(appointments)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: actionTypes.GET_ALL_APPOINTMENTS_REQUEST } }
    function success(appointments) { return { type: actionTypes.GET_ALL_APPOINTMENTS_SUCCESS, appointments }}
    function failure(error) { return { type: actionTypes.GET_ALL_APPOINTMENTS_FAILURE, error } }
}

function addAppointment() {
    return dispatch => {
        dispatch(request());

        appointmentServices.addAppointment()
            .then(
                appointment => dispatch(success(appointment)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: actionTypes.ADD_APPOINTMENTS_REQUEST } }
    function success(appointment) {return { type: actionTypes.ADD_APPOINTMENTS_SUCCESS, appointment }}
    function failure(error) { return { type: actionTypes.GET_ALL_APPOINTMENTS_FAILURE, error } }
}