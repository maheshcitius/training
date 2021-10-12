import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import { authentication ,registration ,resetPWuserAction} from './auth.reducer';

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,   
    registration:registration,
    resetPWuserAction:resetPWuserAction,
})

export default reducers