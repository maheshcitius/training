import { actionTypes } from '../action-types';
import { demographicsService } from '../../../services';
import {toggleSnackbarOpen} from './snackbar.action'



function getDemographics() {
    return dispatch => {
        dispatch(request());

        demographicsService.getAllDemographics()
            .then(
                demographics => {
                    if(demographics){
                        dispatch(toggleSnackbarOpen({message:'Demographics data loaded Successful..!',type:'success'}));
                        dispatch(success(demographics));
                    }
                    
                },
                error => {
                    dispatch(failure(error));
                dispatch(toggleSnackbarOpen({message:'Demographics data Failed to load',type:'warning'}));
                } 
            );
    };

    function request() { return { type: actionTypes.GETALL_DEMOGRAPHICS_REQUEST } }
    function success(demographics) {

        console.log("in demo actions succ",demographics)
         return { type: actionTypes.GETALL_DEMOGRAPHICS_SUCCESS, demographics } 
        }
    function failure(error) { return { type: actionTypes.GETALL_DEMOGRAPHICS_FAILURE, error } }
}

function postDemographics(payload) {
    return dispatch => {
        dispatch(request(payload));
          demographicsService.postDemographics(payload).then(
                demographics => { 
                    console.log('************',demographics);
                    if(demographics){
                        console.log("Success login",demographics);
                       
                        dispatch(success(demographics));
                        dispatch(toggleSnackbarOpen({message:'Posted Successful..!',type:'success'}));  
                    }    
                },
                error => {
                    console.log("in demographics actions",error)
                    dispatch(failure(error));
                    dispatch(toggleSnackbarOpen({message:'Post Failed',type:'warning'}));
                }
            );
    };

    function request() { return { type: actionTypes.POST_DEMOGRAPHICS_REQUEST} }
    function success(demographics) { return { type: actionTypes.POST_DEMOGRAPHICS_SUCCESS, demographics } }
    function failure(error) { return { type: actionTypes.POST_DEMOGRAPHICS_FAILURE, error } }
}

export const demographicActions = {
    getDemographics,
    postDemographics
};
