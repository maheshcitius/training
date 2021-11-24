import { actionTypes } from '../action-types';
import { userService } from '../../../services';
import {toggleSnackbarOpen} from './snackbar.action'

export const authActions = {
   
    login,
    logout,
    registration,

};


function login({username, password}) {
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
                console.log("in user act")
                payload.globalmessage = `User with email id ${username} loggedin successfully`;
                payload.isLoggedIn = true;
                payload.role = response.data.user.role;
                payload.accessToken = response.data.accessToken;
                payload.currentUser = response.data.user;
                        console.log("a",payload)
                       
                        dispatch(success(payload));
                        dispatch(toggleSnackbarOpen({message:'Login Successful..!',type:'success'}));  
                        
                    }
                    else{
                        let msg = 'Please enter valid credentials'
                        dispatch(failure(msg));
                        dispatch(toggleSnackbarOpen({message:'Failed to login',type:'warning'}));  
                    }
                                  
                },
                error => {

                    payload.globalmessage = `${error.response.data}`;
                    payload.isLoggedIn = false;
                    payload.accessToken = '';
                    payload.role = '';
                    payload.currentUser  = {}
                    
                    dispatch(failure(payload));
                    dispatch(toggleSnackbarOpen({message:'Login Failed',type:'warning'}));
                }
            );
    };

    function request(user) { return { type: actionTypes.LOGIN_REQUEST, user } }
    function success(payload) { return { type: actionTypes.LOGIN_SUCCESS, payload } }
    function failure(payload) { return { type: actionTypes.LOGIN_FAILURE, payload } }
}
function registration(registerPayload) {
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
               
                        dispatch(toggleSnackbarOpen({message:'Registered Successful..!',type:'success'}));  
                    }
                             
                })

               .catch( error => {
                   
                    payload.globalmessage = `${error.response.data}`;
                    payload.isLoggedIn = false;
                    payload.accessToken = '';
                    payload.role = '';
                    payload.currentUser  = {}

                    dispatch(failure(payload));
                    dispatch(toggleSnackbarOpen({message:'Register Failed',type:'warning'}));
                }
               )
            
    };

    function request(user) { return { type: actionTypes.REGISTER_REQUEST, user } }
    function success(payload) { return { type: actionTypes.REGISTER_SUCCESS, payload } }
    function failure(payload) { return { type: actionTypes.REGISTER_FAILURE, payload } }
}

function logout() {
    userService.logout();
    return { type: actionTypes.LOGOUT };
}
