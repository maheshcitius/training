import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import FormDialogsReducer from "./FormDialogs-reducer";
import { authentication ,registration ,resetPWuserAction} from './auth.reducer';
import appointmentsReducer from "./appointments.reducer";
import patientReducer from "./patient.reducer"
import {demographicsReducer} from './demographics.reducer';
import { medicationnReducer } from "./medication.reducer";
import  medicalDataReducer  from './medicaldata.reducer'
import {allUsersReducer} from './users.reducer'

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,   
    registration:registration,
    FormDialogsReducer:FormDialogsReducer,
    medicalData : medicalDataReducer,
    appointments : appointmentsReducer,
    patientReducer:patientReducer,
    medication : medicationnReducer,
    medicalData : medicalDataReducer,
    demographics:demographicsReducer,
    allUsers:allUsersReducer

})

export default reducers