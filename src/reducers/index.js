import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import { authentication ,registration} from './auth.reducer';
import  medicalDataReducer  from './medicaldata.reducer'
import appointmentsReducer from "./appointments.reducer";
import {allUsersReducer} from './users.reducer'

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,   
    registration:registration,
    medicalData : medicalDataReducer,
    appointments : appointmentsReducer,
    allUsers : allUsersReducer
})

export default reducers