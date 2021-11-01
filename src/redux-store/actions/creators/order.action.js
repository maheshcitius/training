import { actionTypes } from "../action-types";
import { getPatientOrder } from "../../../services";
import { toggleSnackbarOpen } from "./snackbar.action";

export const orderActions = {
  getOrderDetails,
};

function getOrderDetails() {
  return (dispatch) => {
    dispatch(request());

    getPatientOrder().then(
      (billings) => {
        if (billings) {
          dispatch(
            toggleSnackbarOpen({
              message: "orders got Successful..!",
              type: "success",
            })
          );
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
