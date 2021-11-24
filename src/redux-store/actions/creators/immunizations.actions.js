import { actionTypes } from "../action-types";
import {
  getAllImmunizations,
  immunizationRecord,
  deleteImmunization,
} from "../../../services";
import { toggleSnackbarOpen } from "./snackbar.action";

export const immunizationActions = {
  getAll,
  postImmunization,
  deleteImminization,
};

function getAll() {
  return (dispatch) => {
    dispatch(request());

    getAllImmunizations().then(
      (immunization) => {
        if (immunization) {
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
        if (immunization) {
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

function deleteImminization(id) {
  return (dispatch) => {
    deleteImmunization(id)
      .then((response) => {
        dispatch(success(id));
        dispatch(
          toggleSnackbarOpen({
            message: "Immunization -" + id + " Deleted ",
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
    return { type: actionTypes.DELETE_IMMUNIZATION_SUCCESS, id };
  }
  function failure(error) {
    return { type: actionTypes.DELETE_IMMUNIZATION_FAILURE, error };
  }
}
