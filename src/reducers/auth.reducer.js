import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    console.log("Auth Reducers",action)
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    
    case userConstants.LOGOUT:
      return {};
    case userConstants.UPDATE_USER_REQUEST:
        return {
          loggingIn: true,
          user: action.user
        };
    case userConstants.UPDATE_USER_SUCCESS:
        return {
          loggedIn: true,
          user: action.user
        };
    case userConstants.UPDATE_USER_FAILURE:
      return initialState
    default:
      return state
  }
}