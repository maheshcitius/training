import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import { authentication ,registration} from './auth.reducer';
import physiciansReducer from './physicians.reducer';

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,   
    registration:registration,
    physicians:physiciansReducer
})

export default reducers