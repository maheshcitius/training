import { userConstants } from '../constants/index';
import { userService ,userInformation } from '../services/index';

export const allUsersAction = {

               getAllUsers,
    
}

function getAllUsers() {
    console.log("In Get All Users")
    let payload = {
        allUsers:'',
        globalmessage:''
    };
    return dispatch => {
       // dispatch(request());
     
       userInformation.getAll()
            .then(

                response =>{
                    payload.allUsers = response.data;
                    payload.globalmessage = 'Users Fetched successfully'

                    dispatch(success(payload))
                } 
               
            )
            .catch(error => {
                            payload.globalmessage = 'Failed to load users';
                            dispatch(failure(payload))
                            }          
                  )
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(payload) { return { type: userConstants.GETALL_SUCCESS, payload } }
    function failure(payload) { return { type: userConstants.GETALL_FAILURE, payload } }
}