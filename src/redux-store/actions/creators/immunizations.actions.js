import { actionTypes } from "../action-types";
import { getAllImmunizations, immunizationRecord } from "../../../services";
import { toggleSnackbarOpen } from "./snackbar.action";

export const immunizationActions = {
  getAll,
  postImmunization,
};

function getAll() {
  return (dispatch) => {
    dispatch(request());

    getAllImmunizations().then(
      (immunization) => {
        if (immunization) {
          dispatch(
            toggleSnackbarOpen({
              message: "immunizations got Successful..!",
              type: "success",
            })
          );
          dispatch(success(immunization));
        }
      },
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: actionTypes.IMMUNIZATION_GETALL_REQUEST };
  }
  function success(immunization) {
    return { type: actionTypes.IMMUNIZATION_GETALL_SUCCESS, immunization };
  }
  function failure(error) {
    return { type: actionTypes.IMMUNIZATION_GETALL_FAILURE, error };
  }
}

function postImmunization(payload) {
  return (dispatch) => {
    dispatch(request(payload));
    immunizationRecord(payload).then(
      (immunization) => {
        console.log("************", immunization);
        if (immunization) {
          console.log("Success login", immunization);

          dispatch(success(immunization));
          dispatch(
            toggleSnackbarOpen({
              message: "Posted Successful..!",
              type: "success",
            })
          );
        }
      },
      (error) => {
        console.log("in immunization actions", error);
        dispatch(failure(error));
        dispatch(
          toggleSnackbarOpen({ message: "Post Failed", type: "warning" })
        );
      }
    );
  };

  function request() {
    return { type: actionTypes.POST_IMMUNIZATION_REQUEST };
  }
  function success(immunization) {
    return { type: actionTypes.POST_IMMUNIZATION_SUCCESS, immunization };
  }
  function failure(error) {
    return { type: actionTypes.POST_IMMUNIZATION_FAILURE, error };
  }
}
