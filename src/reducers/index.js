import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import { authentication } from './auth.reducer';
import {demographicsReducer} from './demographics.reducer';

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,  
    demographics:demographicsReducer 

})

export default reducers