import { userConstants } from '../constants/index';
import { userService ,userInformation } from '../services/index';
import { snackbarActions } from './';

export const userActions = {
   
    userLogin,
    userLogout,
    userRegistration,
    updateUser,
    

};


function userLogin({username, password}) {
    var payload = {
        globalmessage: '',
        isLoggedIn: false,
        role: '',
        accessToken: '',
        currentUser:{}
    }
    return dispatch => {

        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                response => { 
                    if(response.data.user){

                localStorage.setItem('user',JSON.stringify(response.data));
                payload.globalmessage = `User with email id ${username} loggedin successfully`;
                payload.isLoggedIn = true;
                payload.role = response.data.user.role;
                payload.accessToken = response.data.accessToken;
                payload.currentUser = response.data.user;
                        console.log("a",payload)
                       
                        dispatch(success(payload));
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Login Successful..!',type:'success'}));  
                        
                    }
                    else{
                        let msg = 'Please enter valid credentials'
                        dispatch(failure(msg));
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Failed to login',type:'warning'}));  
                    }
                                  
                },
                error => {

                    payload.globalmessage = `${error.response.data}`;
                    payload.isLoggedIn = false;
                    payload.accessToken = '';
                    payload.role = '';
                    payload.currentUser  = {}
                    
                    dispatch(failure(payload));
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Login Failed',type:'warning'}));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(payload) { return { type: userConstants.LOGIN_SUCCESS, payload } }
    function failure(payload) { return { type: userConstants.LOGIN_FAILURE, payload } }
}
function userRegistration(registerPayload) {
    var payload = {
        globalmessage: '',
        isLoggedIn: false,
        role: '',
        accessToken: '',
        currentUser:{}
    }

    return dispatch => {
        dispatch(request(registerPayload));
        userService.register(registerPayload)
            .then(
                (response) => { 
                    
                    if(response.data.user){
                        localStorage.setItem('user',JSON.stringify(response.data))
                payload.globalmessage = `User Registered Successfully`;
                payload.isLoggedIn = true;
                payload.role = response.data.user.role;
                payload.accessToken = response.data.accessToken;
                payload.currentUser = response.data.user;

                        dispatch(success(payload));
               
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Registered Successful..!',type:'success'}));  
                    }
                             
                })

               .catch( error => {
                   
                    payload.globalmessage = `${error.response.data}`;
                    payload.isLoggedIn = false;
                    payload.accessToken = '';
                    payload.role = '';
                    payload.currentUser  = {}

                    dispatch(failure(payload));
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Register Failed',type:'warning'}));
                }
               )
            
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(payload) { return { type: userConstants.REGISTER_SUCCESS, payload } }
    function failure(payload) { return { type: userConstants.REGISTER_FAILURE, payload } }
}

function userLogout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function updateUser(id,updatePayload) {

    let payload = {
        message : '',
        updatedUser:{}
    }
    return dispatch => {
       // dispatch(request());

       userInformation.updateUser(id,updatePayload)
            .then(
                response => {
                    payload.message = 'User Updated'
                    payload.updatedUser = response.data
                    dispatch(success(payload))
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Updated Successfully',type:'success'}));
                }
            )
            .catch(error=>{
                payload.message = error.response.data
                dispatch(failure(payload))
                dispatch(snackbarActions.toggleSnackbarOpen({message:'Failed to update',type:'warning'}));
            })
    };

    function request() { return { type: userConstants.UPDATE_USER_REQUEST } }
    function success(payload) { return { type: userConstants.UPDATE_USER_SUCCESS, payload } }
    function failure(payload) { return { type: userConstants.UPDATE_USER_FAILURE, payload } }
}
