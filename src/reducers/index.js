import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import { authentication ,registration} from './auth.reducer';
import physiciansReducer from './physicians.reducer';
import {demographicsReducer} from './demographics.reducer';
import  medicalDataReducer  from './medicaldata.reducer'
import appointmentsReducer from "./appointments.reducer";
import {allUsersReducer} from './users.reducer'

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,   
    registration:registration,
    physicians:physiciansReducer,
    demographics:demographicsReducer,
    medicalData : medicalDataReducer,
    appointments : appointmentsReducer,
    allUsers : allUsersReducer
})

export default reducers