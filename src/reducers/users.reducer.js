import { userConstants } from '../constants';

const initialState =  
  {
  allUsers:[]
 }
 


 function allUsersReducer(state = initialState, action) {

  if(action.type === userConstants.GETALL_SUCCESS || 
    action.type === userConstants.GETALL_FAILURE 
    
    ){
    
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
}else{ return { ...state}}
 }
export {allUsersReducer} 