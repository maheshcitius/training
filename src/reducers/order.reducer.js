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
  
           }        
    default:
      return state
  }
}
