import { actionTypes } from "../actions/action-types";

export function orderReducer(state = {}, action) {
  console.log("Order Reducers", action);
  switch (action.type) {
    case actionTypes.ORDER_GET_SUCCESS:
      return {
        orderRequest: true,
        billings: action.billings,
      };
    default:
      return state;
  }
}
