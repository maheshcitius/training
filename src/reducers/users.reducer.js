import { userConstants } from '../constants';

const initialState =  
  {
  globalmessage: '',
  allUsers:[]
 }
 


 function allUsersReducer(state = initialState, action) {
    
  switch (action.type) {
    
    case userConstants.GETALL_SUCCESS:
     
    console.log("in get all reducers reducer ",action.payload)
        return {
          ...state,
         allUsers:action.payload.allUsers,
         globalmessage :action.payload.globalmessage

      };
    case userConstants.GETALL_FAILURE:
     
        return {
          ...state,
         allUsers:action.payload.allUsers,
         globalmessage :action.payload.globalmessage

    };
    default:
      return state
  }
}
export {allUsersReducer} 