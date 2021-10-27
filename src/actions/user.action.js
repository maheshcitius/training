import { userConstants } from '../constants/index';
import { userService ,userInformation, FormDilogueService } from '../services/index';
import { snackbarActions } from './';
import { FormDialogsAction } from './';
import { history } from '../helpers';

export const userActions = {
    userEmailVerify,
    setNewPassword,
    userLogin,
    userLogout,
    getAllUsers,
    userRegistration,
    updateUser,
    openFormDialouge1,

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

function userEmailVerify({verifyEmail}){
    // dispatch(request());
    return dispatch => {
                userService.emailVerification(verifyEmail)
                    .then(
                        userVerfied => { 
                            if(userVerfied.length>0){
                                console.log("userVerfied",userVerfied)
                                console.log("History",history)
                                history.push('/');
                                dispatch(success(userVerfied));
                                dispatch(snackbarActions.toggleSnackbarOpen({message:'Mail Verified Successfully..!',type:'success'}));  
                            }
                            else{
                                console.log("user not Verfied",userVerfied)
                                console.log("History",history)
                                dispatch(snackbarActions.toggleSnackbarOpen({message:'Varification Failed ',type:'warning'}));  
                            }
                                        
                        },
                        error => {
                            console.log("in user actions",error)
                            dispatch(failure(error));
                            dispatch(snackbarActions.toggleSnackbarOpen({message:'Varification Failed ',type:'warning'}));
                        }
                    );
                }

                    // function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.MAIL_VERIFICATION_SUCCESS, user } }
    function failure(error) { return { type: userConstants.MAIL_VERIFICATION_FAILURE, error } }

}

function setNewPassword(details){
    console.log("details",details);
    return dispatch => {
        userService.resetPassword(details)
                    .then(
                        (data) => { 
                            if(data){
                                console.log("Success");
                                dispatch(success(data));
                                dispatch(snackbarActions.toggleSnackbarOpen({message:'Password Reset Successful..!',type:'success'}));  
                            }
                            else{
                                dispatch(snackbarActions.toggleSnackbarOpen({message:'Failed to Reset the Password',type:'warning'}));  
                            }
                                        
                        },
                        error => {
                            console.log("Error")
                            dispatch(failure(error.response.data));
                            dispatch(snackbarActions.toggleSnackbarOpen({message:'Failed to Reset the Password',type:'warning'}));
                        }
                    );
    }

    function success(data) { return { type: userConstants.RESET_PASSWORD_SUCCESS, data } }
    function failure(error) { return { type: userConstants.RESET_PASSWORD_FAILURE, error } }

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

// ======================= To check dilogue on button click -----------------


function openFormDialouge1(payload){
    console.log("email------user-action",payload);
    return dispatch => {

        // dispatch(request());
        FormDilogueService.FormDilougeServiceCheck(payload)
        //  dispatch(snackbarActions.toggleSnackbarOpen({message:'Login Successful..!',type:'success'}));
        .then(
            user => { 
                if(user){
                    console.log("Success login",user);
                    dispatch(success(user));
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Login Successful..!',type:'success'}));  
                }
                else{
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Failed to login',type:'warning'}));  
                }
                              
            },
            error => {
                console.log("in user actions",error)
                dispatch(failure(error.response.data));
                dispatch(snackbarActions.toggleSnackbarOpen({message:'Login Failed',type:'warning'}));
            }
        );
    }
    function success(data) { return { type: userConstants.Dilouge_SUCCESS, data } }
    function failure(error) { return { type: userConstants.Dilouge_FAILURE, error } }
}


