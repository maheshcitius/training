import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";

const reducers = combineReducers({
    snack:snackbarReducer
})

export default reducers