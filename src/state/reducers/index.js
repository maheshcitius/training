import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import snackbarReducer from "./snackbar-reducer";

const reducers = combineReducers({
    bank: bankReducer,
    snack:snackbarReducer
})

export default reducers