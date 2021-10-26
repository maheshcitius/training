import { actionTypes } from '../actions/action-types';


const init =  
  {
  getAllUsersMessage: '',
  allUsers:[]
 }
 


 function usersReducer(state = init, action) {

  if(action.type === actionTypes.GETALL_SUCCESS || 
    action.type === actionTypes.GETALL_FAILURE 
    
    ){
    
  switch (action.type) {
    
    case actionTypes.GETALL_SUCCESS:
     
    console.log("in get all reducers reducer ",action.payload)
        return {
          ...state,
          allUsers:action.payload.allUsers,
         getAllUsersMessage :action.payload.globalmessage

      };
    case actionTypes.GETALL_FAILURE:
     
        return {
          ...state,
          allUsers:action.payload.allUsers,
         getAllUsersMessage :action.payload.globalmessage

    };
    default:
      return state
  }
}else{ return { ...state}}
 }
export {usersReducer} 