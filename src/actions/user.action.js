import { userConstants } from '../constants/index';
import { userService } from '../services/index';
import { snackbarActions } from './';
import { history } from '../helpers';


export const userActions = {
    userLogin,
    userLogout,
    getAll
};

function userLogin({username, password}) {
    return dispatch => {
        dispatch(request({ username }));

        
    
        userService.login(username, password)
            .then(
                user => { 
                    if(user){
                        console.log("Success login",user)
                        console.log("History",history)
                        history.push('/');
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