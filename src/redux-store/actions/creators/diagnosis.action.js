import { actionTypes } from "../action-types";
import { diagnosisService } from "../../../services";
import { toggleSnackbarOpen } from "./snackbar.action";
import { store } from "../../index";

//import { snackbarActions } from './';

export const diagnosissActions = {
  addDiagnosis,
  updateDiagnosis,
};

function addDiagnosis(appointmentId, type, dpayload, cb) {
  let payload = {
    type: type,
    appointmentId: appointmentId,
    response: "",
  };

  return (dispatch, getState) => {
    dispatch(request());

    diagnosisService
      .addDiagnosis(appointmentId, type, dpayload)
      .then((response) => {
        dispatch(
          toggleSnackbarOpen({
            message:
              "Added Diagnosis details for appointment  -" + appointmentId,
            type: "success",
          })
        );

        console.log("a", response);
      })
      .then(cb())
      .catch((error) => {
        console.log("error", error);
      });
  };

  function request() {
    return { type: actionTypes.POST_DIAGNOSIS_REQUEST };
  }

  function success(Diagnosis) {
    return { type: actionTypes.POST_DIAGNOSIS_SUCCESS, Diagnosis };
  }
  function failure(error) {
    return { type: actionTypes.POST_IMMUNIZATION_FAILURE, error };
  }
}

function updateDiagnosis(id, tableType, updatepayload, cb) {
  console.log("in update Diagnosis");
  const payload = {
    tableType: tableType,
    updatedtableData: "",
    tableTypeMessage: "",
  };
  return (dispatch) => {
    // dispatch(request());

    diagnosisService
      .updateDiagnosis(id, tableType, updatepayload)
      .then((response) => {
        payload.updatedtableData = response.data;
        payload.tableTypeMessage = tableType + " updated";

        console.log("a", response);
      })
      .then((response) => cb(response))
      .catch((error) => {
        payload.updatedtableData = "";
        payload.tableTypeMessage = tableType + " failed to update";

        console.log("error", error);
      });
  };

  function request() {
    return { type: actionTypes.UPDATE_APPOINTMENT_REQUEST };
  }
  function success(payload) {
    return { type: actionTypes.UPDATE_DIAGNOSIS_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: actionTypes.UPDATE_DIAGNOSIS_FAILURE, payload };
  }
}
