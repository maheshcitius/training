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
    getAll,
    userRegistration,
    updateUser,
    openFormDialouge1,

};


function userLogin({username, password}) {
    return dispatch => {

        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    if(user){
                        console.log("Success login",user)
                        
                       
                        dispatch(success(user));
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Login Successful..!',type:'success'}));  
                    }
                    else{
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Failed to login',type:'warning'}));  
                    }
                                  
                },
                error => {
                    console.log("in user actions",error)
                    dispatch(failure(error));
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Login Failed',type:'warning'}));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function userRegistration(payload) {
    return dispatch => {
        dispatch(request(payload));
        userService.register(payload)
            .then(
                (user,e) => { 
                    console.log('************',user);
                    if(user){
                        console.log("Success in reg",user);
                        dispatch(success(user));
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Registered Successful..!',type:'success'}));  
                    }
                    else{
                        
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Failed to Register',type:'warning'}));  
                    }
                                  
                },
                error => {
                   
                    console.log("in Register actions")
                    dispatch(failure(error.response.data));
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Register Failed',type:'warning'}));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function userLogout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
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

function setNewPassword({newPassword, oldPassword, userVerified,email}){
    console.log("userVerified",userVerified);
    return dispatch => {
        userService.resetPassword(newPassword,oldPassword,userVerified,email)
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
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Login Successful..!',type:'success'}));  
                }
                else{
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Failed to login',type:'warning'}));  
                }
                              
            },
            error => {
                console.log("in user actions",error)
            
                dispatch(snackbarActions.toggleSnackbarOpen({message:'Login Failed',type:'warning'}));
            }
        );
    }
}


