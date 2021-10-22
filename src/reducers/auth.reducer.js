import { userConstants } from '../constants';

let user = (localStorage.getItem('user') )? JSON.parse(localStorage.getItem('user') ) : '';
const initialState = user ? 
  {
  globalmessage: '',
  isLoggedIn: true,
  role: user.user.role,
  accessToken: user.accessToken,
  currentUser: user.user
}
 :
 {
  globalmessage: '',
  isLoggedIn: false,
  role: '',
  accessToken: '',
  currentUser:{}
} 
;


 function authentication(state = initialState, action) {
    
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:

      return {
        loggingIn: false,
        message:'',
        user: action.user
      };
      
    case userConstants.LOGIN_SUCCESS:
     
      return {
        globalmessage: action.payload.globalmessage,
        isLoggedIn: action.payload.isLoggedIn,
        role: action.payload.role,
        accessToken: action.payload.accessToken,
        currentUser :action.payload.currentUser
    };
    case userConstants.LOGIN_FAILURE:

      return {
        globalmessage: action.payload.globalmessage,
        isLoggedIn: false,
        role: '',
        accessToken: '',
        currentUser :{}
    };
    
    case userConstants.LOGOUT:
      return {
        globalmessage: '',
        isLoggedIn: false,
        role: '',
        accessToken: '',
        currentUser:{}
      } 
    case userConstants.UPDATE_USER_REQUEST:
        return {
          loggingIn: true,
          user: action.user
        };
    case userConstants.UPDATE_USER_SUCCESS:
        return {
          ...state,
          loggedIn: true,
          user: action.user,
        };
    case userConstants.UPDATE_USER_FAILURE:
      return {
        ...state,
        loggedIn: true

      };
    default:
      return state
  }
}
 function registration(state = initialState, action) {
 
switch (action.type) {
  case userConstants.REGISTER_REQUEST:
    console.log('user-----',action.user)
    return {
      loggingIn: true ,
      user: action.user
    };
  case userConstants.REGISTER_SUCCESS:
    return {
      globalmessage: action.payload.globalmessage,
      isLoggedIn: action.payload.isLoggedIn,
      role: action.payload.role,
      accessToken: action.payload.accessToken,
      currentUser :action.payload.currentUser
  };
  case userConstants.REGISTER_FAILURE:
    return {
      globalmessage: action.payload.globalmessage,
      isLoggedIn: false,
      role: '',
      accessToken: '',
      currentUser :{}
  };
  default:
    return state
}
}
export {authentication,registration} 