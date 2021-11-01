import { combineReducers } from "redux";
import snackbarReducer from "./snackbar-reducer";
import FormDialogsReducer from "./FormDialogs-reducer";
import { authentication, registration } from "./auth.reducer";
import medicalDataReducer from "./medicaldata.reducer";
import appointmentsReducer from "./appointments.reducer";
import patientReducer from "./patient.reducer";
import { medicationnReducer } from "./medication.reducer";
import { allUsersReducer } from "./users.reducer";
import { immunizationReducer } from "./immunizations.reducer";
import { orderReducer } from "./order.reducer";

const reducers = combineReducers({
  snack: snackbarReducer,
  authentication: authentication,
  registration: registration,
  FormDialogsReducer: FormDialogsReducer,
  medicalData: medicalDataReducer,
  appointments: appointmentsReducer,
  patientReducer: patientReducer,
  medication: medicationnReducer,
  allUsers: allUsersReducer,
  immunization: immunizationReducer,
  order: orderReducer,
});

export default reducers;
