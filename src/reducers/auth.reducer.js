import axios from 'axios';
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

  if(action.type === userConstants.LOGIN_REQUEST || 
     action.type === userConstants.LOGIN_SUCCESS || 
     action.type === userConstants.LOGIN_FAILURE ||
     action.type === userConstants.LOGOUT ||
     action.type === userConstants.UPDATE_USER_SUCCESS ||
     action.type === userConstants.UPDATE_USER_FAILURE 

     ){
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:

      return {
        ...state,
        loggingIn: false,
        user: action.user
      };
      
    case userConstants.LOGIN_SUCCESS:
     console.log("in login red success",action)
      return {
        ...state,
        globalmessage: action.payload.globalmessage,
        isLoggedIn: action.payload.isLoggedIn,
        role: action.payload.role,
        accessToken: action.payload.accessToken,
        currentUser :action.payload.currentUser
    };
    case userConstants.LOGIN_FAILURE:

      return {
        ...state,
        globalmessage: action.payload.globalmessage,
        isLoggedIn: false,
        role: '',
        accessToken: '',
        currentUser :{}
    };
    
    case userConstants.LOGOUT:
      return {};
    
    case userConstants.UPDATE_USER_REQUEST:
        return {
          ...state,
          loggingIn: true,
          user: action.user
        };
    case userConstants.UPDATE_USER_SUCCESS:
        return {
          ...state,
          currentUser:action.payload.updatedUser
        };
    case userConstants.UPDATE_USER_FAILURE:
      return {
        ...state,

      };
    
    default:
      return state
  }
}else{ return { ...state}}
}
function registration(state = initialState, action) {
  if(action.type === userConstants.REGISTER_REQUEST || 
    action.type === userConstants.REGISTER_SUCCESS || 
    action.type === userConstants.REGISTER_FAILURE 
    ){
switch (action.type) {
  case userConstants.REGISTER_REQUEST:
    console.log('user-----',action.user)
    return {
      ...state,
      user: action.user
    };
  case userConstants.REGISTER_SUCCESS:
    return {
      ...state,
      globalmessage: action.payload.globalmessage,
      isLoggedIn: action.payload.isLoggedIn,
      role: action.payload.role,
      accessToken: action.payload.accessToken,
      currentUser :action.payload.currentUser
  };
  case userConstants.REGISTER_FAILURE:
    return {
      ...state,
      globalmessage: action.payload.globalmessage,
      isLoggedIn: false,
      role: '',
      accessToken: '',
      currentUser :{}
  };
  default:
    return state
}
}else{ return { ...state}}
}

export {authentication,registration} 