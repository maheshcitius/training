import { orderConstants } from '../constants';

export function orderReducer(state = {}, action) {
    console.log("Order Reducers",action)
      switch (action.type) {
    case orderConstants.ORDER_GET_SUCCESS:
      return {
        orderRequest: true,
        billing: action.billings
      }
      case orderConstants.POST_BILLING_REQUEST:
        return{
          billing: action.billings,
        }
        case orderConstants.POST_BILLING_SUCCESS:

         return{
          billing: action.billings
         }
         case orderConstants.POST_BILLING_FAILURE:
           return{
              ...state
           }
           case orderConstants.UPDATE_BILLING_SUCCESS:
            const updatedData = state.billing.map((x) =>
              x.id !== action.payload.id ? x : action.payload.updatedBilling
            );
            return {
              ...state,
              billing: updatedData,
              updateBillingStatus: action.payload.updatedBillingStatus,
            };

    case orderConstants.UPDATE_APPOINTMENT_FAILURE:
      return {
        ...state,
        updateAppointmentStatus: action.payload.updatedBillingStatus,
      };        
    default:
      return state
  }
}
