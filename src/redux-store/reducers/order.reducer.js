import { actionTypes } from "../actions/action-types";

export function orderReducer(state = {}, action) {
  console.log("Order Reducers", action);
  switch (action.type) {
    case actionTypes.ORDER_GET_SUCCESS:
      return {
        orderRequest: true,
        billing: action.billings,
      };
    case actionTypes.POST_BILLING_REQUEST:
      return {
        billing: action.billings,
      };
    case actionTypes.POST_BILLING_SUCCESS:
      return {
        billing: action.billings,
      };
    case actionTypes.POST_BILLING_FAILURE:
      return {
        ...state,
      };
    case actionTypes.UPDATE_BILLING_SUCCESS:
      const updatedData = state.billing.map((x) =>
        x.id !== action.payload.id ? x : action.payload.updatedBilling
      );
      return {
        ...state,
        billing: updatedData,
        updateBillingStatus: action.payload.updatedBillingStatus,
      };

    case actionTypes.UPDATE_APPOINTMENT_FAILURE:
      return {
        ...state,
        updateAppointmentStatus: action.payload.updatedBillingStatus,
      };
    default:
      return state;
  }
}
