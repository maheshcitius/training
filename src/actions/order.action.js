import { orderConstants } from '../constants/index';
import { getPatientOrder } from '../services/index';
import { snackbarActions } from './';
import { history } from '../helpers';

export const orderActions = {
    getOrderDetails
};

function getOrderDetails() {
    return dispatch => {
        dispatch(request());
        

        getPatientOrder().then(
            billings => {
                    if(billings){
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'orders got Successful..!',type:'success'}));
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