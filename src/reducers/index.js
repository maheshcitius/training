import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import { authentication } from './auth.reducer';

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,   
    

})

export default reducers