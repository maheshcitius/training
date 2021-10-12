import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const registeruser = user ? { registerd: true, user } : {};

 function authentication(state = initialState, action) {
    console.log("Auth Reducers",action)
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      console.log('user',action.user)
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      console.log("in auth reducer logout")
      return {};
    case userConstants.MAIL_VERIFICATION_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.MAIL_VERIFICATION_FAILURE:
      return {};
    default:
      return state
  }
}
 function registration(state = registeruser, action) {
  console.log("Auth Reducers",action)
switch (action.type) {
  case userConstants.REGISTER_REQUEST:
    console.log('user-----',action.user)
    return {
      registered: true ,
      user: action.user
    };
  case userConstants.REGISTER_SUCCESS:
    console.log('user scccess-----',action.user)
    return {
      registered: true,
      user: action.user
    };
  case userConstants.REGISTER_FAILURE:
    return {};
  case userConstants.LOGOUT:
    console.log("in auth reducer logout")
    return {};
  default:
    return state
}
}
export {authentication,registration} 