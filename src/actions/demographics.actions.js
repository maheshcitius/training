import { demographicsConstants } from '../constants/index';
import { demographicsService } from '../services/index';


function getAllDemographics() {
    return dispatch => {
        dispatch(request());

        demographicsService.getAll()
            .then(
                demographics => dispatch(success(demographics)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: demographicsConstants.GETALL_REQUEST } }
    function success(demographics) { return { type: demographicsConstants.GETALL_SUCCESS, demographics } }
    function failure(error) { return { type: demographicsConstants.GETALL_FAILURE, error } }
}


export const demographicActions = {
    getAllDemographics
};
