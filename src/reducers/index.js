import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import { authentication ,registration} from './auth.reducer';

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,   
    registration:registration
})

export default reducers