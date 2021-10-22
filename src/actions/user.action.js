import { userConstants } from '../constants/index';
import { userService ,userInformation } from '../services/index';
import { snackbarActions } from './';

export const userActions = {
    userLogin,
    userLogout,
    getAllUsers,
    userRegistration,
    updateUser

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

                localStorage.setItem('user',JSON.stringify(response.data))
                payload.globalmessage = `User with email id ${username} loggedin successfully`;
                payload.isLoggedIn = true;
                payload.role = response.data.user.role;
                payload.accessToken = response.data.accessToken;
                payload.currentUser = response.data.user;
                        
                       
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
                (user) => { 
                    console.log('************',user);
                    if(user){
                        console.log("Success in reg",user);
                        dispatch(success(user));
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Registered Successful..!',type:'success'}));  
                       
                    }
                    else{
                        dispatch(failure('User Already Existed'));
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Failed to Register',type:'warning'}));  
                    }
                                  
                },
                error => {
                   
                    payload.globalmessage = `${error.response.data}`;
                    payload.isLoggedIn = false;
                    payload.accessToken = '';
                    payload.role = '';
                    payload.currentUser  = {}

                    dispatch(failure(payload));

                    dispatch(failure(error.response.data));
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Register Failed',type:'warning'}));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(payload) { return { type: userConstants.REGISTER_SUCCESS, payload } }
    function failure(payload) { return { type: userConstants.REGISTER_FAILURE, payload } }
}

function userLogout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
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

function updateUser(id,payload) {
    return dispatch => {
       // dispatch(request());

       userInformation.updateUser(id,payload)
            .then(
                user => {

                    dispatch(success(user))
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Updated Successfully',type:'success'}));
                },
                error =>
                { 
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Opps Someting went wrong',type:'warning'}));

                    dispatch(failure(error))
                 }
            );
    };

    function request() { return { type: userConstants.UPDATE_USER_REQUEST } }
    function success(user) { return { type: userConstants.UPDATE_USER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.UPDATE_USER_FAILURE, error } }
}