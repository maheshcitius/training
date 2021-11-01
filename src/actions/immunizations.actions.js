import { immunizationConstants } from "../constants/index";
import { getAllImmunizations, immunizationRecord } from "../services/index";
import { snackbarActions } from "./";
import { history } from "../helpers";

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
            snackbarActions.toggleSnackbarOpen({
              message: "immunizationss got Successful..!",
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
    return { type: immunizationConstants.IMMUNIZATION_GETALL_REQUEST };
  }
  function success(immunization) {
    return {
      type: immunizationConstants.IMMUNIZATION_GETALL_SUCCESS,
      immunization,
    };
  }
  function failure(error) {
    return { type: immunizationConstants.IMMUNIZATION_GETALL_FAILURE, error };
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
            snackbarActions.toggleSnackbarOpen({
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
          snackbarActions.toggleSnackbarOpen({
            message: "Post Failed",
            type: "warning",
          })
        );
      }
    );
  };

  function request() {
    return { type: immunizationConstants.POST_IMMUNIZATION_REQUEST };
  }
  function success(immunization) {
    return {
      type: immunizationConstants.POST_IMMUNIZATION_SUCCESS,
      immunization,
    };
  }
  function failure(error) {
    return { type: immunizationConstants.POST_IMMUNIZATION_FAILURE, error };
  }
}
