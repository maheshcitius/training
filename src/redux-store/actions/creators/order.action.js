import { actionTypes } from "../action-types";

import { getPatientOrder, addBilling, updateBilling } from "../../../services";
import { snackbarActions } from "..";
export const orderActions = {
  getOrderDetails,
  postOrderDetails,
  updateBillingDetails,
};

function getOrderDetails(patientId) {
  return (dispatch) => {
    dispatch(request(patientId));

    getPatientOrder(patientId).then(
      (billings) => {
        if (billings) {
          dispatch(success(billings));
        }
      },
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: actionTypes.ORDER_GET_REQUEST };
  }
  function success(billings) {
    return { type: actionTypes.ORDER_GET_SUCCESS, billings };
  }
  function failure(error) {
    return { type: actionTypes.ORDER_GET_FAILURE, error };
  }
}

function postOrderDetails(appointmentId, payload) {
  return (dispatch) => {
    dispatch(request(appointmentId, payload));
    addBilling(appointmentId, payload).then(
      (billing) => {
        console.log("************", billing);
        if (billing) {
          console.log("Success login", billing);

          dispatch(success(billing));
          dispatch(
            snackbarActions.toggleSnackbarOpen({
              message: "Billing Generated Successfully..!" + appointmentId,
              type: "success",
            })
          );
        }
      },
      (error) => {
        console.log("in Billing actions", error);
        dispatch(failure(error));
        dispatch(
          snackbarActions.toggleSnackbarOpen({
            message: "Billing Generation Failed",
            type: "warning",
          })
        );
      }
    );
  };

  function request() {
    return { type: actionTypes.POST_BILLING_REQUEST };
  }
  function success(billing) {
    return {
      type: actionTypes.POST_BILLING_SUCCESS,
      billing,
    };
  }
  function failure(error) {
    return { type: actionTypes.POST_BILLING_FAILURE, error };
  }
}

function updateBillingDetails(id, newBilling) {
  let payload = {
    id: "",
    updatedBilling: "",
    updatedBillingStatus: "",
  };
  return (dispatch) => {
    updateBilling(id, newBilling)
      .then((response) => {
        payload.id = id;
        payload.updatedBilling = response.data;
        payload.updatedBillingStatus = "updated Billing";
        dispatch(success(payload));
        dispatch(
          snackbarActions.toggleSnackbarOpen({
            message: "Billing -" + id + " Updated ",
            type: "success",
          })
        );
      })

      .catch((e) => {
        let error = e.response.data;
        payload = {
          id: id,
          updatedBilling: "",
          updatedBillingStatus: error,
        };

        dispatch(
          snackbarActions.toggleSnackbarOpen({
            message: "failed to update",
            type: "warning",
          })
        );
        dispatch(failure(payload));
      });
  };

  function success(payload) {
    return { type: actionTypes.UPDATE_BILLING_SUCCESS, payload };
  }
  function failure(payload) {
    return { type: actionTypes.UPDATE_BILLING_FAILURE, payload };
  }
}
