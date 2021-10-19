import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import { authentication ,registration} from './auth.reducer';
import {immunizationReducer} from './immunizations.reducer';
import { orderReducer } from "./order.reducer";

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,   
    registration:registration,
    immunization: immunizationReducer,
    order: orderReducer
})

export default reducers