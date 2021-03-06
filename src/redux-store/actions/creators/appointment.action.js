import { actionTypes } from "../action-types";
import { appointmentServices } from "../../../services";
import { toggleSnackbarOpen } from "./snackbar.action";

//import { snackbarActions } from './';

export const appointmentsActions = {
  getAppointments,
  addAppointment,
  deleteAppointment,
  updateAppointment,
};

function getAppointments(cb) {
  var callb = cb ? cb : function f() {};
  return (dispatch) => {
    dispatch(request());

    appointmentServices.getAllAppointments().then(
      (appointments) => {
        callb(appointments);
        dispatch(success(appointments));
      },
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: actionTypes.GET_ALL_APPOINTMENTS_REQUEST };
  }
  function success(appointments) {
    return { type: actionTypes.GET_ALL_APPOINTMENTS_SUCCESS, appointments };
  }
  function failure(error) {
    return { type: actionTypes.GET_ALL_APPOINTMENTS_FAILURE, error };
  }
}

function addAppointment(newAppointment) {
  let payload = {
    appointment: "",
  };
  return (dispatch) => {
    // dispatch(request());

    appointmentServices
      .addAppointment(newAppointment)
      .then((response) => {
        payload.appointment = response.data;
        payload.message = "Added success";
        dispatch(
          toggleSnackbarOpen({
            message: "Appointment Created",
            type: "success",
          })
        );
        dispatch(success(payload));
      })
      .catch((error) => {
        dispatch(
          toggleSnackbarOpen({
            message: "Something went wrong",
            type: "warning",
          })
        );
        payload.message = "Failed to add";
      });
    dispatch(failure(payload));
  };

  function request() {
    return { type: actionTypes.ADD_APPOINTMENTS_REQUEST };
  }
  function success(payload) {
    return { type: actionTypes.ADD_APPOINTMENTS_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: actionTypes.ADD_APPOINTMENTS_FAILURE, payload };
  }
}

function deleteAppointment(id) {
  return (dispatch) => {
    appointmentServices
      .deleteAppointment(id)
      .then((response) => {
        dispatch(success(id));
        dispatch(
          toggleSnackbarOpen({
            message: "Appointment -" + id + " Deleted ",
            type: "success",
          })
        );
      })

      .catch((e) => {
        let error = e.response.data;

        dispatch(
          toggleSnackbarOpen({ message: "failed to delete", type: "warning" })
        );
        dispatch(failure(error));
      });
  };

  function success(id) {
    return { type: actionTypes.DELETE_APPOINTMENT_SUCCESS, id };
  }
  function failure(error) {
    return { type: actionTypes.DELETE_APPOINTMENT_FAILURE, error };
  }
}

function updateAppointment(id, newAppointment) {
  let payload = {
    id: "",
    updatedAppointment: "",
    updatedAppointmentStatus: "",
  };
  return (dispatch) => {
    appointmentServices
      .updateAppointment(id, newAppointment)
      .then((response) => {
        payload.id = id;
        payload.updatedAppointment = response.data;
        dispatch(success(payload));
        dispatch(
          toggleSnackbarOpen({
            message: "Appointment -" + id + " Updated ",
            type: "success",
          })
        );
      })

      .catch((e) => {
        let error = e.response.data;
        payload = {
          id: id,
          updatedAppointment: "",
          updatedAppointmentStatus: error,
        };

        dispatch(
          toggleSnackbarOpen({ message: "failed to update", type: "warning" })
        );
        dispatch(failure(payload));
      });
  };

  function success(payload) {
    return { type: actionTypes.UPDATE_APPOINTMENT_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: actionTypes.DELETE_APPOINTMENT_FAILURE, payload };
  }
}
