import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import { authentication,registration } from './auth.reducer';
import {demographicsReducer} from './demographics.reducer';

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,  
    demographics:demographicsReducer,
    registration:registration
  
})

export default reducers