import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import physiciansReducer from './physicians.reducer';
import { authentication,registration } from './auth.reducer';
import FormDialogsReducer from "./FormDialogs-reducer";
import {demographicsReducer} from './demographics.reducer';
import  medicalDataReducer  from './medicaldata.reducer'
import appointmentsReducer from "./appointments.reducer";

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,   
    registration:registration,
    physicians:physiciansReducer,
    FormDialogsReducer:FormDialogsReducer,
    demographics:demographicsReducer,
    medicalData : medicalDataReducer,
    appointments : appointmentsReducer
})

export default reducers