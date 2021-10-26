import { actionTypes } from '../actions/action-types'
import { initialState } from '../state'

let user = (localStorage.getItem('user') )? JSON.parse(localStorage.getItem('user') ) : '';
const init = user ? 

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


 function authentication(state = init, action) {

  if(action.type === actionTypes.LOGIN_REQUEST || 
     action.type === actionTypes.LOGIN_SUCCESS || 
     action.type === actionTypes.LOGIN_FAILURE ||
     action.type === actionTypes.LOGOUT ||
     action.type === actionTypes.UPDATE_USER_SUCCESS ||
     action.type === actionTypes.UPDATE_USER_FAILURE 

     ){
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:

      return {
        ...state,
        currentUser: action.user
      };
      
    case actionTypes.LOGIN_SUCCESS:
     console.log("in login red success",action)
      return {
        ...state,
        globalmessage: action.payload.globalmessage,
        isLoggedIn: action.payload.isLoggedIn,
        role: action.payload.role,
        accessToken: action.payload.accessToken,
        currentUser :action.payload.currentUser
    };
    case actionTypes.LOGIN_FAILURE:

      return {
        ...state,
        globalmessage: action.payload.globalmessage,
        isLoggedIn: false,
        role: '',
        accessToken: '',
        currentUser :{}
    };
    
    case actionTypes.LOGOUT:
      return {};
    
    case actionTypes.UPDATE_USER_REQUEST:
        return {
          ...state,
          loggingIn: true,
          user: action.user
        };
    case actionTypes.UPDATE_USER_SUCCESS:
        return {
          ...state,
          globalmessage: action.payload.message,
          currentUser:action.payload.updatedUser
        };
    case actionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        globalmessage: action.payload.message

      };
    
    default:
      return state
  }
}else{ return { ...state}}
}
function registration(state = initialState, action) {
  if(action.type === actionTypes.REGISTER_REQUEST || 
    action.type === actionTypes.REGISTER_SUCCESS || 
    action.type === actionTypes.REGISTER_FAILURE 
    ){
switch (action.type) {
  case actionTypes.REGISTER_REQUEST:
    return {
      ...state,
      currentUser: action.user
    };
  case actionTypes.REGISTER_SUCCESS:
    return {
      ...state,
      globalmessage: action.payload.globalmessage,
      isLoggedIn: action.payload.isLoggedIn,
      role: action.payload.role,
      accessToken: action.payload.accessToken,
      currentUser :action.payload.currentUser
  };
  case actionTypes.REGISTER_FAILURE:
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