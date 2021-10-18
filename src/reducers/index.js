import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import FormDialogsReducer from "./FormDialogs-reducer";
import { authentication ,registration ,resetPWuserAction} from './auth.reducer';

const reducers = combineReducers({
    snack:snackbarReducer,
    authentication:authentication,   
    registration:registration,
    resetPWuserAction:resetPWuserAction,
    FormDialogsReducer:FormDialogsReducer,
})

export default reducers