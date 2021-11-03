import { orderConstants } from '../constants/index';
import { getPatientOrder, addBilling } from '../services/index';
import { snackbarActions } from './';
import { history } from '../helpers';

export const orderActions = {
    getOrderDetails,
    postOrderDetails
};

function getOrderDetails(patientId) {
    return dispatch => {
        dispatch(request(patientId));
        

        getPatientOrder(patientId).then(
            billings => {
                    if(billings){
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'orders got Successful..!'+patientId,type:'success'}));
                        dispatch(success(billings))
                    }
                    
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: orderConstants.ORDER_GET_REQUEST } }
    function success(billings) { return { type: orderConstants.ORDER_GET_SUCCESS, billings } }
    function failure(error) { return { type: orderConstants.ORDER_GET_FAILURE, error } }
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
    return { type: orderConstants.POST_BILLING_REQUEST };
  }
  function success(billing) {
    return {
      type: orderConstants.POST_BILLING_SUCCESS,
      billing,
    };
  }
  function failure(error) {
    return { type: orderConstants.POST_BILLING_FAILURE, error };
  }
}