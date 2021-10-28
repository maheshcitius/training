import { appointmentsActionTypes } from '../constants/index';

import { appointmentServices } from '../services/index';
import { snackbarActions } from './';

export const appointmentsActions = {
    getAppointments,
    addAppointment,
    updateAppointment,
    deleteAppointment
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
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Posted Successful..!',type:'success'}));  

                }
            )
            .catch(error=>{
               dispatch(failure(payload))
               dispatch(snackbarActions.toggleSnackbarOpen({message:'Posted Failed..!',type:'failure'}));  
               console.log(error)

             })    
    };

    function request() { return { type: appointmentsActionTypes.ADD_APPOINTMENTS_REQUEST } }
    function success(payload) {return { type: appointmentsActionTypes.ADD_APPOINTMENTS_SUCCESS, payload}}
    function failure(payload) { return { type: appointmentsActionTypes.GET_ALL_APPOINTMENTS_FAILURE, payload } }
}
function updateAppointment(payload) {
      return dispatch => {
          dispatch(request(payload));
  
          appointmentServices.updateAppointment(payload)
              .then(
                  appointments => {
                    if(appointments){
                      dispatch(success(appointments))
                      dispatch(snackbarActions.toggleSnackbarOpen({message:'Updated Successful..!',type:'success'}));  
  
                  }
                },
              error=>{
                 dispatch(failure(error))
                 dispatch(snackbarActions.toggleSnackbarOpen({message:'Update Failed..!',type:'failure'}));  
                 console.log(error)
             })    
      };
  
      function request() { return { type: appointmentsActionTypes.UPDATE_APPOINTMENT_REQUEST } }
      function success(appointments) {return { type: appointmentsActionTypes.UPDATE_APPOINTMENT_SUCCESS, appointments } }
      function failure(error) { return { type: appointmentsActionTypes.UPDATE_APPOINTMENT_FAILURE, error } }
  }

  function deleteAppointment(id) {
    return dispatch => {
        dispatch(request(id));

        appointmentServices.deleteAppointment(id)
            .then(
                appointments => {
                  if(appointments){
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Deleted Successful..!',type:'success'}));  
                    dispatch(success(appointments))

                }
              },
            error=>{
               dispatch(failure(error))
               dispatch(snackbarActions.toggleSnackbarOpen({message:'Delete Failed..!',type:'failure'}));  
               console.log(error)
           })    
    };

    function request() { return { type: appointmentsActionTypes.DELETE_APPOINTMENT_REQUEST } }
    function success(appointments) {return { type: appointmentsActionTypes.DELETE_APPOINTMENT_SUCCESS, appointments } }
    function failure(error) { return { type: appointmentsActionTypes.DELETE_APPOINTMENT_FAILURE, error } }
}