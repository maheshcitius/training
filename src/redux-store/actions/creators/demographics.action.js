import { actionTypes } from "../action-types";
import { demographicsService } from "../../../services";
import { toggleSnackbarOpen } from "./snackbar.action";

export const demographicActions = {
  getDemographics,
  postDemographics,
  updateDemographics,
};

function getDemographics() {
  let payload = {
    demographicMessage: "",
    demographics: "",
  };
  return (dispatch) => {
    demographicsService
      .getAllDemographics()
      .then((response) => {
        payload.demographicMessage = "success";
        payload.demographics = response.data ? response.data[0] : [];
        dispatch(success(payload));
      })
      .catch((error) => {
        payload.demographicMessage = "Failed";
        payload.demographics = [];
        dispatch(failure(payload));
      });
  };
  function success(payload) {
    return { type: actionTypes.GETALL_DEMOGRAPHICS_SUCCESS, payload };
  }
  function failure(error) {
    return { type: actionTypes.GETALL_DEMOGRAPHICS_FAILURE, error };
  }
}

function postDemographics(newDemography) {
  let payload = {
    demographicMessage: "",
    demographics: "",
  };
  return (dispatch) => {
    dispatch(request(newDemography));

    demographicsService
      .postDemographics(payload)

      .then((response) => {
        payload.demographicMessage = "success";
        payload.demographics = response.data ? response.data : [];
        dispatch(success(payload));
        dispatch(
          toggleSnackbarOpen({ message: "Demographics Added", type: "success" })
        );
      })
      .catch((error) => {
        payload.demographicMessage = error.response.data;
        payload.demographics = [];
        dispatch(failure(payload));
        dispatch(
          toggleSnackbarOpen({ message: "Failed to Add", type: "warning" })
        );
      });
  };

  function request(demographics) {
    return { type: actionTypes.POST_DEMOGRAPHICS_REQUEST, demographics };
  }
  function success(payload) {
    return { type: actionTypes.POST_DEMOGRAPHICS_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: actionTypes.POST_DEMOGRAPHICS_FAILURE, payload };
  }
}

function updateDemographics(id, newDemography) {
  let payload = {
    demographicMessage: "",
    demographics: "",
  };
  return (dispatch) => {
    dispatch(request(newDemography));

    demographicsService
      .updateDemographicsById(id, payload)

      .then((response) => {
        payload.demographicMessage = "success";
        payload.demographics = response.data ? response.data : [];
        dispatch(success(payload));
        dispatch(
          toggleSnackbarOpen({
            message: "Demographics Updated",
            type: "success",
          })
        );
      })
      .catch((error) => {
        payload.demographicMessage = error.response.data;
        payload.demographics = [];
        dispatch(failure(payload));
        dispatch(
          toggleSnackbarOpen({ message: "Failed to update", type: "warning" })
        );
      });
  };

  function request(demographics) {
    return { type: actionTypes.UPDATE_DEMOGRAPHICS_REQUEST, demographics };
  }
  function success(payload) {
    return { type: actionTypes.UPDATE_DEMOGRAPHICS_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: actionTypes.UPDATE_DEMOGRAPHICS_FAILED, payload };
  }
}
