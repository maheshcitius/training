import { physiciansConstants } from '../constants/index';
import { physiciansService } from '../services/index';
import { snackbarActions } from './';



function getAllPhysicians() {
    console.log('before call service--');
    return dispatch => {
        dispatch(request());
        console.log('before call service');
        physiciansService.getAllPhysicians()
            .then(
                physicians => {
                    if(physicians){
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Physicians data loaded Successful..!',type:'success'}));
                        dispatch(success(physicians));
                    }        
                },
                error => {
                    dispatch(failure(error));
                dispatch(snackbarActions.toggleSnackbarOpen({message:'Physicians data Failed to load',type:'warning'}));
                }
            );
    };
    function request() { return { type: physiciansConstants.GETALL_PHYSICIANS_REQUEST } }
    function success(physicians) { return { type: physiciansConstants.GETALL_PHYSICIANS_SUCCESS, physicians } }
    function failure(error) { return { type: physiciansConstants.GETALL_PHYSICIANS_FAILURE, error } }
}

function postPhysicians(payload) {
    return dispatch => {
        dispatch(request(payload));
        physiciansService.postPhysicians(payload).then(
            physicians => { 
                    console.log('---indise************',physicians);
                    if(physicians){
                        console.log("Success login",physicians);
                       
                        dispatch(success(physicians));
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Posted Successful..!',type:'success'}));  
                    }    
                },
                error => {
                    console.log("in Physicians actions",error)
                    dispatch(failure(error));
                    dispatch(snackbarActions.toggleSnackbarOpen({message:'Post Failed',type:'warning'}));
                }
            );
    };

    function request() { return { type: physiciansConstants.POST_PHYSICIANS_REQUEST} }
    function success(physicians) { return { type: physiciansConstants.POST_PHYSICIANS_SUCCESS, physicians } }
    function failure(error) { return { type: physiciansConstants.POST_PHYSICIANS_FAILURE, error } }
}

function deletePhysicianById(id) {
    console.log('in action deletePhysicianById--');
    return dispatch => {
        dispatch(request());
        console.log('before call service');
        physiciansService.deletePhysicianById(id)
            .then(
                physicians => {
                    if(physicians){
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'Physicians data deleted Successfuly..!',type:'success'}));
                        dispatch(success(physicians));
                    }        
                },
                error => {
                    dispatch(failure(error));
                dispatch(snackbarActions.toggleSnackbarOpen({message:'Physicians data Failed to load',type:'warning'}));
                }
            );
    };
    function request() { return { type: physiciansConstants.DELETE_PHYSICIANS_REQUEST } }
    function success(physicians) { return { type: physiciansConstants.DELETE_PHYSICIANS_SUCCESS, physicians } }
    function failure(error) { return { type: physiciansConstants.DELETE_PHYSICIANS_FAILURE, error } }
}

function getPhysicianById(id) {
    console.log('in action getPhysicianById--',id);
    return dispatch => {
        dispatch(request());
        console.log('before call service');
        physiciansService.getPhysicianById(id)
            .then(
                physicians => {
                    if(physicians){
                        console.log('before sucess', physicians);
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'physician data loaded Successfuly..!',type:'success'}));
                        dispatch(success(physicians));
                    }        
                },
                error => {
                    dispatch(failure(error));
                dispatch(snackbarActions.toggleSnackbarOpen({message:'Demographics data Failed to load',type:'warning'}));
                }
            );
    };
    function request() { return { type: physiciansConstants.GET_PHYSICIANS_REQUEST } }
    function success(physicians) { 
        console.log('physicians',physicians)
        return { type: physiciansConstants.GET_PHYSICIANS_SUCCESS, physicians } }
    function failure(error) { return { type: physiciansConstants.GET_PHYSICIANS_FAILURE, error } }
}

function updatePhysicianById(id) {
    console.log('in action updatePhysicianById--');
    return dispatch => {
        dispatch(request());
        console.log('before call service');
        physiciansService.updatePhysicianById(id)
            .then(
                physicians => {
                    if(physicians){
                        dispatch(snackbarActions.toggleSnackbarOpen({message:'physician data updated Successfuly..!',type:'success'}));
                        dispatch(success(physicians));
                    }        
                },
                error => {
                    dispatch(failure(error));
                dispatch(snackbarActions.toggleSnackbarOpen({message:'physician data Failed to load',type:'warning'}));
                }
            );
    };
    function request() { return { type: physiciansConstants.UPDATE_PHYSICIANS_REQUEST } }
    function success(physicians) { return { type: physiciansConstants.UPDATE_PHYSICIANS_SUCCESS, physicians } }
    function failure(error) { return { type: physiciansConstants.UPDATE_PHYSICIANS_FAILURE, error } }
}
export const physiciansActions = {
    getAllPhysicians,
    postPhysicians,
    getPhysicianById,
    deletePhysicianById,
    updatePhysicianById
};
