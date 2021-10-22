import { appointmentsActionTypes } from '../constants/index';

import { appointmentServices } from '../services/index';

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

    function request() { return { type: appointmentsActionTypes.GET_ALL_APPOINTMENTS_REQUEST } }
    function success(appointments) { return { type: appointmentsActionTypes.GET_ALL_APPOINTMENTS_SUCCESS, appointments }}
    function failure(error) { return { type: appointmentsActionTypes.GET_ALL_APPOINTMENTS_FAILURE, error } }
}

function addAppointment(newAppointment) {
  let payload ={
      appointment: {}
  }
    return dispatch => {
        dispatch(request(newAppointment));

        appointmentServices.addAppointment(newAppointment)
            .then(
                response => {
                    payload.appointment=response.data
                    dispatch(success(payload))
                }
            )
            .catch(error=>{
               dispatch(failure(payload))
               console.log(error)

             })    
    };

    function request() { return { type: appointmentsActionTypes.ADD_APPOINTMENTS_REQUEST } }
    function success(payload) {return { type: appointmentsActionTypes.ADD_APPOINTMENTS_SUCCESS, payload}}
    function failure(payload) { return { type: appointmentsActionTypes.GET_ALL_APPOINTMENTS_FAILURE, payload } }
}