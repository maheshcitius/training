import { demographicsConstants } from '../constants';

export function  demographicsReducer(state = {}, action){
    switch (action.type) {
      case demographicsConstants.GETALL_DEMOGRAPHICS_REQUEST:
        return state;
      case demographicsConstants.GETALL_SUCCESS: 
        return {...state, posts: action.payload};
      default:
        return state;
    }
  } 