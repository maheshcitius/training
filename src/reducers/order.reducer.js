import { orderConstants } from "../constants";

export function orderReducer(state = {}, action) {
  console.log("Order Reducers", action);
  switch (action.type) {
    case orderConstants.ORDER_GET_SUCCESS:
      return {
        orderRequest: true,
        billings: action.billings,
      };
    default:
      return state;
  }
}
