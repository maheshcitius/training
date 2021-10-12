import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import { authentication } from './auth.reducer';
import {immunizationReducer} from './immunizations.reducer';



const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,
    immunization: immunizationReducer   

})

export default reducers