import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import physiciansReducer from './physicians.reducer';
import FormDialogsReducer from "./FormDialogs-reducer";
import {demographicsReducer} from './demographics.reducer';
import { authentication ,registration } from './auth.reducer';

import  medicalDataReducer  from './medicaldata.reducer'
import appointmentsReducer from "./appointments.reducer";
import patientReducer from "./patient.reducer"
import { medicationnReducer } from "./medication.reducer";

import {allUsersReducer} from './users.reducer'

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,   
    registration:registration,
    physicians:physiciansReducer,
    FormDialogsReducer:FormDialogsReducer,
    demographics:demographicsReducer,
    FormDialogsReducer:FormDialogsReducer,
    medicalData : medicalDataReducer,
    appointments : appointmentsReducer,
    patientReducer:patientReducer,
    medication : medicationnReducer,
    allUsers:allUsersReducer

})

export default reducers